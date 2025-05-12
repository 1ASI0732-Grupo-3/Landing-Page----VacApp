import { Trans, useTranslation } from 'react-i18next';
import hero from '../assets/hero.webp';

export function Hero() {
    const { t } = useTranslation();
    return (
        <div className='relative h-80 md:h-fit lg:h-200 font-rokkitt text-light-gray'>
            <img src={hero} className='h-full w-full object-cover object-center' />
            <div className="absolute bottom-0 left-0 w-full h-25 bg-gradient-to-b from-trasparent to-light-gray pointer-events-none" />
            <div className="absolute inset-0 mx-auto my-10 md:mx-0 md:my-0 md:top-1/4 lg:top-60 md:left-20 flex w-fit h-fit ">
                <div className='flex flex-col gap-5 md:gap-10'>
                    <div className='bg-forest-green/70 px-10 py-5 rounded-sm'>
                        <h1 className='text-3xl text-center md:text-left md:text-5xl lg:text-6xl xl:text-8xl'>
                            <Trans i18nKey="hero.title" components={{ br: <br /> }} />
                        </h1>
                    </div>
                    <button className='bg-light-gray text-forest-green font-semibold w-fit px-5 py-2 font-mulish rounded-sm cursor-pointer mx-auto md:mx-0 md:text-2xl' onClick={handleScroll("app")}>
                        {t('hero.button')}
                    </button>
                </div>
            </div>
        </div>
    )
}

const handleScroll = (id: string) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};