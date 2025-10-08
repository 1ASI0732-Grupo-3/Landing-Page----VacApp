import { useTranslation } from 'react-i18next';

interface Props {
  onAcceptAll: () => void;
  onReject: () => void;
  onViewTerms: () => void;
}

export function CookieConsent({ onAcceptAll, onReject, onViewTerms }: Props) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4">
      <div className="max-w-5xl mx-auto bg-white/95 backdrop-blur border border-forest-green/20 shadow-xl rounded-2xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-1">
          <h4 className="font-rokkitt text-xl text-forest-green mb-1">{t('consent.title', { defaultValue: 'Tu privacidad nos importa' })}</h4>
          <p className="text-sm text-forest-green/80 font-mulish">
            {t('consent.message', { defaultValue: 'Usamos cookies para mejorar tu experiencia, analizar el uso del sitio y mostrar contenido relevante. Al continuar navegando aceptas nuestra política. Puedes revisar los Términos y Condiciones.' })}
          </p>
        </div>
        <div className="flex gap-2">
          <button onClick={onViewTerms} className="px-4 py-2 rounded-lg border border-forest-green/30 text-forest-green hover:bg-forest-green/5 text-sm">
            {t('consent.viewTerms', { defaultValue: 'Ver Términos' })}
          </button>
          <button onClick={onReject} className="px-4 py-2 rounded-lg border border-forest-green/30 text-forest-green hover:bg-forest-green/5 text-sm">
            {t('consent.reject', { defaultValue: 'Rechazar' })}
          </button>
          <button onClick={onAcceptAll} className="px-4 py-2 rounded-lg bg-forest-green text-white hover:bg-lime-neon hover:text-forest-green text-sm font-semibold">
            {t('consent.acceptAll', { defaultValue: 'Aceptar todo' })}
          </button>
        </div>
      </div>
    </div>
  );
}
