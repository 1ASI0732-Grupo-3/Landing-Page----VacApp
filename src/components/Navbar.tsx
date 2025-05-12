import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import type { i18n } from 'i18next';
import { useState } from 'react';
import { useTranslation } from "react-i18next";

export function Navbar() {
    const { t, i18n } = useTranslation();

    return (
        <nav className="bg-forest-green flex justify-between md:justify-between font-rokkitt text-light-gray items-center py-2 px-5 md:px-5" >
            <div className="text-2xl md:text-4xl lg:text-5xl font-bold select-none">
                <span className="text-pale-lime">Vac</span>
                <span>App</span>
            </div>
            <div className='flex items-center gap-5'>
                <ul className="hidden md:flex gap-8 font-mulish font-bold md:text-sm lg:text-lg">
                    <li className="cursor-pointer" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                </ul>
                <div className='flex items-center gap-4'>
                    <LanguageIcon className="cursor-pointer" onClick={() => handleChangeLanguage(i18n)} />
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
            <MenuIcon onClick={() => setOpen(true)} />
            <Drawer
                open={open}
                onClose={() => setOpen(false)}
                anchor="right"
                slotProps={{
                    paper: {
                        sx: {
                            backgroundColor: 'transparent',
                            backdropFilter: 'blur(10px)'
                        }
                    }
                }}
            >
                <ul className="md:hidden flex flex-col gap-5 font-mulish font-bold px-5 mt-5 bg-re text-white">
                    <li className="cursor-pointer" onClick={handleScroll("aboutus")}>{t('navbar.about')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("features")}>{t('navbar.features')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("prices")}>{t('navbar.prices')}</li>
                    <li className="cursor-pointer" onClick={handleScroll("app")}>{t('navbar.getapp')}</li>
                </ul>
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

const handleChangeLanguage = (i18: i18n) => {
    const currentLanguage = i18.language;

    if (currentLanguage === 'en') {
        i18.changeLanguage('es');
    } else {
        i18.changeLanguage('en');
    }
}