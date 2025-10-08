import { useTranslation } from 'react-i18next';

interface Props {
  onAccept: () => void;
  onViewTerms: () => void;
}

export function BlockedOverlay({ onAccept, onViewTerms }: Props) {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 z-[1000] bg-black/70 backdrop-blur-sm flex items-center justify-center p-6">
      <div className="bg-white max-w-md w-full rounded-2xl p-6 text-center border border-forest-green/20 shadow-2xl">
        <h3 className="font-rokkitt text-2xl text-forest-green mb-3">
          {t('consent.requiredTitle', { defaultValue: 'Acción requerida' })}
        </h3>
        <p className="text-forest-green/80 font-mulish mb-6">
          {t('consent.requiredNotice', { defaultValue: 'Para ver el contenido necesitas aceptar el uso de cookies y los Términos y Condiciones.' })}
        </p>
        <div className="flex gap-3 justify-center">
          <button onClick={onViewTerms} className="px-4 py-2 rounded-lg border border-forest-green/30 text-forest-green hover:bg-forest-green/5 text-sm">
            {t('consent.viewTerms', { defaultValue: 'Ver Términos' })}
          </button>
          <button onClick={onAccept} className="px-4 py-2 rounded-lg bg-forest-green text-white hover:bg-lime-neon hover:text-forest-green text-sm font-semibold">
            {t('consent.acceptAll', { defaultValue: 'Aceptar todo' })}
          </button>
        </div>
      </div>
    </div>
  );
}
