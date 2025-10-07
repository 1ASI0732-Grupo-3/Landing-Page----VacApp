import { useTranslation } from "react-i18next";
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, Leaf, Shield, Users } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="bg-gradient-to-b from-forest-green to-forest-green/90 text-white">
            {/* Main Footer Content */}
            <div className="max-w-6xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    {/* VacApp Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="text-3xl font-bold font-rokkitt">
                                <span className="text-lime-neon">Vac</span>
                                <span>App</span>
                            </div>
                            <Leaf className="text-lime-neon" size={24} />
                        </div>
                        
                        <p className="text-lg font-mulish leading-relaxed max-w-md">
                            {t('footer.description')}
                        </p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                                <Shield size={16} className="text-lime-neon" />
                                <span>SaaS Confiable</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                                <Users size={16} className="text-lime-neon" />
                                <span>Gestión Integral</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                                <Leaf size={16} className="text-lime-neon" />
                                <span>Sostenible</span>
                            </div>
                        </div>
                    </div>

                    {/* Enlaces Rápidos */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold font-rokkitt text-lime-neon">
                            {t('footer.links.title')}
                        </h3>
                        <ul className="space-y-3 font-mulish">
                            <li>
                                <a href="#aboutus" className="hover:text-lime-neon transition-colors duration-300 flex items-center gap-2">
                                    {t('footer.links.about')}
                                </a>
                            </li>
                            <li>
                                <a href="#features" className="hover:text-lime-neon transition-colors duration-300">
                                    {t('footer.links.features')}
                                </a>
                            </li>
                            <li>
                                <a href="#prices" className="hover:text-lime-neon transition-colors duration-300">
                                    {t('footer.links.pricing')}
                                </a>
                            </li>
                            <li>
                                <a href="#app" className="hover:text-lime-neon transition-colors duration-300">
                                    {t('footer.links.download')}
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold font-rokkitt text-lime-neon">
                            {t('footer.contact.title')}
                        </h3>
                        <div className="space-y-3 font-mulish">
                            <div className="flex items-center gap-3">
                                <Mail size={16} className="text-lime-neon flex-shrink-0" />
                                <a href="mailto:contacto@vacapp.com" className="hover:text-lime-neon transition-colors">
                                    contacto@vacapp.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={16} className="text-lime-neon flex-shrink-0" />
                                <a href="tel:+51987654321" className="hover:text-lime-neon transition-colors">
                                    +51 987 654 321
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin size={16} className="text-lime-neon flex-shrink-0 mt-1" />
                                <span className="text-sm">
                                    Lima, Perú<br />
                                    Enfocados en ganadería peruana
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Separator */}
                <div className="border-t border-white/20 my-8"></div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        <span className="text-sm font-mulish text-white/70">Síguenos:</span>
                        <div className="flex gap-3">
                            <a 
                                href="https://github.com/vacapp" 
                                className="p-2 bg-white/10 rounded-full hover:bg-lime-neon hover:text-forest-green transition-all duration-300 transform hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Github size={18} />
                            </a>
                            <a 
                                href="https://linkedin.com/company/vacapp" 
                                className="p-2 bg-white/10 rounded-full hover:bg-lime-neon hover:text-forest-green transition-all duration-300 transform hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={18} />
                            </a>
                            <a 
                                href="https://twitter.com/vacapp" 
                                className="p-2 bg-white/10 rounded-full hover:bg-lime-neon hover:text-forest-green transition-all duration-300 transform hover:scale-110"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap items-center gap-6 text-sm font-mulish text-white/70">
                        <a href="/privacy" className="hover:text-lime-neon transition-colors">
                            {t('footer.legal.privacy')}
                        </a>
                        <a href="/terms" className="hover:text-lime-neon transition-colors">
                            {t('footer.legal.terms')}
                        </a>
                        <a href="/support" className="hover:text-lime-neon transition-colors">
                            {t('footer.legal.support')}
                        </a>
                    </div>

                    {/* Copyright */}
                    <div className="text-sm font-mulish text-white/70">
                        {t('footer.copyright')} {currentYear}
                    </div>
                </div>
            </div>

            {/* Tech Badge */}
            <div className="bg-forest-green/50 py-3 border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 text-center">
                    <p className="text-xs font-mulish text-white/60">
                        🌿 Conectamos tradición ganadera con soluciones tecnológicas • 
                        Desarrollado con React + Flutter • 
                        Cloud ☁️ + Móvil 📱
                    </p>
                </div>
            </div>
        </footer>
    )
}