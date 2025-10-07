import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';
import { LogIn, UserPlus } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';

export function Navbar() {
    const { t } = useTranslation();

    return (
        <nav className="bg-white/80 backdrop-blur-sm border-b border-forest-green/10 flex justify-between md:justify-between font-rokkitt text-forest-green items-center py-3 px-5 md:px-8 sticky top-0 z-50" >
            <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold select-none hover:scale-105 transition-transform duration-300">
                <span className="text-lime-neon">Vac</span>
                <span>App</span>
            </Link>
            <div className='flex items-center gap-6'>
                <ul className="hidden md:flex gap-8 font-mulish font-medium md:text-sm lg:text-base">
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                    <li className="cursor-pointer hover:text-lime-neon transition-colors duration-300" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                </ul>
                
                {/* Auth Buttons - Desktop */}
                <div className="hidden md:flex items-center gap-3">
                    <a 
                        href="https://tu-app-web.com/login"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-forest-green hover:text-lime-neon transition-all duration-300 rounded-lg hover:bg-lime-neon/10"
                    >
                        <LogIn size={16} />
                        {t('auth.login.title')}
                    </a>
                    <a 
                        href="https://tu-app-web.com/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-forest-green hover:bg-lime-neon hover:text-forest-green transition-all duration-300 rounded-lg transform hover:scale-105"
                    >
                        <UserPlus size={16} />
                        {t('auth.register.title')}
                    </a>
                </div>

                <div className='flex items-center gap-4'>
                    <LanguageSelector />
                    <Sidebar />
                </div>
            </div>
        </nav >
    )
}

function Sidebar() {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <MenuIcon 
                onClick={() => setOpen(true)} 
                className="cursor-pointer text-forest-green hover:text-lime-neon transition-colors" 
            />
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            backdropFilter: 'blur(10px)',
                            width: '280px'
                        }
                    }
                }}
            >
                <div className="p-6 space-y-6">
                    {/* Mobile Menu Items */}
                    <ul className="flex flex-col gap-4 font-mulish font-medium text-forest-green">
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                        <li className="cursor-pointer hover:text-lime-neon transition-colors py-2" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                    </ul>
                    
                    {/* Mobile Auth Buttons */}
                    <div className="flex flex-col gap-3 pt-4 border-t border-forest-green/20">
                        <a 
                            href="https://tu-app-web.com/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-forest-green hover:text-lime-neon transition-all duration-300 rounded-lg hover:bg-lime-neon/10"
                            onClick={() => setOpen(false)}
                        >
                            <LogIn size={18} />
                            {t('auth.login.title')}
                        </a>
                        <a 
                            href="https://tu-app-web.com/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-white bg-forest-green hover:bg-lime-neon hover:text-forest-green transition-all duration-300 rounded-lg"
                            onClick={() => setOpen(false)}
                        >
                            <UserPlus size={18} />
                            {t('auth.register.title')}
                        </a>
                        
                        {/* Language Selector for Mobile */}
                        <div className="pt-4 border-t border-forest-green/20">
                            <LanguageSelector />
                        </div>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

const handleScroll = (id: string) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
    }
};