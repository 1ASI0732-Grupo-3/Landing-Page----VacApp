import mockup from "../assets/mobile_app.webp"
import { useTranslation } from "react-i18next";
import { Smartphone, Download, Star, Users, Shield, Zap, Apple, Play } from "lucide-react";

export function MobileApp() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-white to-light-gray overflow-hidden" id="app">
            {/* anchor alias for smooth scroll */}
            <div id="mobile-app" className="sr-only" />
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Smartphone className="text-lime-neon" size={32} />
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rokkitt text-forest-green">
                            {t('mobileApp.title')}
                        </h2>
                    </div>
                    <p className="text-lg md:text-xl text-forest-green/70 font-mulish max-w-3xl mx-auto">
                        {t('mobileApp.description')}
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    
                    {/* Left Side - App Info */}
                    <div className="space-y-8">
                        
                        {/* App Features */}
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Download className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.offline.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.offline.desc')}
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Zap className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.fast.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.fast.desc')}
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Shield className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.secure.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.secure.desc')}
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Users className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">{t('mobileApp.cards.multiuser.title')}</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    {t('mobileApp.cards.multiuser.desc')}
                                </p>
                            </div>
                        </div>

                        {/* Download Stats */}
                        <div className="bg-forest-green/5 rounded-2xl p-6 border border-forest-green/10">
                            <div className="grid grid-cols-3 gap-6 text-center">
                                <div>
                                    <div className="flex items-center justify-center gap-1 mb-1">
                                        <Star className="text-lime-neon" size={16} />
                                        <span className="text-2xl font-bold text-forest-green">4.8</span>
                                    </div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.rating')}</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">10K+</div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.downloads')}</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">500+</div>
                                    <p className="text-sm text-forest-green/70">{t('mobileApp.stats.farms')}</p>
                                </div>
                            </div>
                        </div>

                        {/* Download Buttons with icons */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-black text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green transition-all duration-300 transform hover:scale-105"
                                    aria-label="Download on the App Store"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Apple className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-80">{t('mobileApp.store.appStoreTop')}</div>
                                        <div className="font-semibold">{t('mobileApp.store.appStoreName')}</div>
                                    </div>
                                </a>
                                
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-black text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green transition-all duration-300 transform hover:scale-105"
                                    aria-label="Get it on Google Play"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                                        <Play className="text-white" size={20} />
                                    </div>
                                    <div>
                                        <div className="text-xs opacity-80">{t('mobileApp.store.playTop')}</div>
                                        <div className="font-semibold">{t('mobileApp.store.playName')}</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="text-center">
                                <p className="text-sm text-forest-green/60">
                                    {t('mobileApp.compatibility')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Phone Mockup */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            {/* Decorative elements */}
                            <div className="absolute -top-8 -right-8 w-32 h-32 bg-lime-neon/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-forest-green/20 rounded-full blur-2xl"></div>
                            
                            {/* Phone mockup */}
                            <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                                <img
                                    src={mockup}
                                    alt="VacApp Mobile"
                                    className="w-full max-w-sm mx-auto object-contain drop-shadow-2xl"
                                />
                                
                                {/* Floating badges */}
                                <div className="absolute -left-4 top-1/4 bg-lime-neon text-forest-green px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
                                    ✨ {t('mobileApp.badges.new')}
                                </div>
                                <div className="absolute -right-4 top-2/3 bg-forest-green text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                                    🚀 {t('mobileApp.badges.free')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}