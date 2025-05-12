import { useTranslation } from 'react-i18next';
import farmer from '../assets/farmer3.webp';

export function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="py-5 lg:py-20 md:w-8/10 mx-auto font-mulish md:text-lg lg:text-2xl xl:text-4xl" id='aboutus'>
            <h2 className="font-rokkitt text-7xl lg:text-8xl text-center font-semibold">{t('aboutus.title')}</h2><br />
            <div className='flex flex-col md:flex-row w-full items-center gap-10 md:gap-5 lg:gap-20 xl:px-20'>
                <p className='px-5 md:px-0 md:w-1/2 lg:w-6/10'>{t('aboutus.description')}</p>
                <img src={farmer} className='w-8/10 md:w-1/2 lg:w-4/10 aspect-video object-cover object-center rounded-md drop-shadow-xl' />
            </div><br />
            <h3 className="text-lg md:text-lg lg:text-2xl xl:text-4xl italic text-center font-light">{t('aboutus.subtitle')}</h3>
        </div>
    )
}