import { Trans, useTranslation } from 'react-i18next';
import hero from '../assets/hero.webp';
import { ArrowRight } from 'lucide-react';

export function Hero() {
    const { t } = useTranslation();
    return (
        <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
            {/* Background Image */}
            <div className="absolute inset-0">
                <img 
                    src={hero} 
                    className='h-full w-full object-cover object-center' 
                    alt="VacApp Hero"
                />
                <div className="absolute inset-0 bg-black/40" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <div className='space-y-8 animate-fade-in'>
                    <h1 className='text-4xl md:text-6xl lg:text-7xl font-bold font-rokkitt text-white leading-tight'>
                        <Trans i18nKey="hero.title" components={{ br: <br /> }} />
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 font-mulish max-w-2xl mx-auto">
                        {t('aboutus.subtitle')}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button 
                            className='group bg-lime-neon text-forest-green font-semibold px-8 py-4 font-mulish rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:scale-105 flex items-center gap-2 justify-center text-lg' 
                            onClick={handleScroll("app")}
                        >
                            {t('hero.button')}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>
                        <button 
                            className='group border-2 border-white text-white font-semibold px-8 py-4 font-mulish rounded-full cursor-pointer transition-all duration-300 hover:bg-white hover:text-forest-green flex items-center gap-2 justify-center text-lg' 
                            onClick={handleScroll("aboutus")}
                        >
                            {t('navbar.about')}
                        </button>
                    </div>
                </div>
            </div>
            
            {/* Gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent" />
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