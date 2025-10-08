export type ConsentData = {
  cookiesAccepted: boolean;
  termsAccepted: boolean;
  updatedAt: string; // ISO string
  status?: 'accepted' | 'partial' | 'rejected';
};

const STORAGE_KEY = 'vacapp_consent';
const COOKIE_KEY = 'vacapp_consent';

function parse(json: string | null): ConsentData | null {
  if (!json) return null;
  try {
    const obj = JSON.parse(json) as ConsentData;
    return normalizeStatus(obj);
  } catch {
    return null;
  }
}

function normalizeStatus(obj: ConsentData): ConsentData {
  const accepted = !!obj.cookiesAccepted && !!obj.termsAccepted;
  const partial = (!!obj.cookiesAccepted || !!obj.termsAccepted) && !accepted;
  const status: ConsentData['status'] = accepted ? 'accepted' : partial ? 'partial' : 'rejected';
  return { ...obj, status };
}

function readCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()\[\]\\\/\+^])/g, '\\$1') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name: string, value: string, days = 365) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
}

export function getConsent(): ConsentData | null {
  // Prefer localStorage
  const ls = parse(localStorage.getItem(STORAGE_KEY));
  if (ls) return ls;
  // Fallback cookie
  const ck = parse(readCookie(COOKIE_KEY));
  return ck;
}

export function setConsent(update: Partial<ConsentData>): ConsentData {
  const current = getConsent() ?? { cookiesAccepted: false, termsAccepted: false, updatedAt: new Date().toISOString() };
  const next: ConsentData = normalizeStatus({
    ...current,
    ...update,
    updatedAt: new Date().toISOString(),
  });
  const json = JSON.stringify(next);
  localStorage.setItem(STORAGE_KEY, json);
  writeCookie(COOKIE_KEY, json);
  return next;
}

export function clearConsent() {
  localStorage.removeItem(STORAGE_KEY);
  writeCookie(COOKIE_KEY, '', -1);
}

export function isAccepted(data: ConsentData | null): boolean {
  return !!data && data.cookiesAccepted && data.termsAccepted;
}

export function isRejected(data: ConsentData | null): boolean {
  return !!data && data.status === 'rejected' && !isAccepted(data);
}
