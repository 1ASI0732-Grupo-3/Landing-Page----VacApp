import { useTranslation } from "react-i18next";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-forest-green  text-center text-white py-5 font-mulish">
            <p>&copy; {currentYear} VacApp. {t('footer.title')}</p>
        </footer>
    )
}