import mockup from "../assets/mobile_app.webp"
import apple from "../assets/appstore.webp"
import google from "../assets/googleplay.webp"
import { useTranslation } from "react-i18next";
import { Smartphone, Download, Star, Users, Shield, Zap } from "lucide-react";

export function MobileApp() {
    const { t } = useTranslation();

    return (
        <section className="py-20 bg-gradient-to-b from-white to-light-gray overflow-hidden" id="app">
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
                                    <h3 className="font-semibold text-forest-green">Acceso Offline</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    Trabaja sin conexión y sincroniza cuando tengas internet
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Zap className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">Rápido & Eficiente</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    Interfaz optimizada para uso diario en el campo
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Shield className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">Datos Seguros</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    Respaldo automático en la nube de toda tu información
                                </p>
                            </div>

                            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-forest-green/10 hover:border-lime-neon/50 transition-all duration-300 hover:transform hover:scale-105">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 bg-lime-neon/20 rounded-lg">
                                        <Users className="text-lime-neon" size={20} />
                                    </div>
                                    <h3 className="font-semibold text-forest-green">Multi-usuario</h3>
                                </div>
                                <p className="text-sm text-forest-green/70">
                                    Comparte acceso con tu equipo de trabajo
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
                                    <p className="text-sm text-forest-green/70">Rating</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">10K+</div>
                                    <p className="text-sm text-forest-green/70">Descargas</p>
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-forest-green mb-1">500+</div>
                                    <p className="text-sm text-forest-green/70">Granjas</p>
                                </div>
                            </div>
                        </div>

                        {/* Download Buttons */}
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-black text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green transition-all duration-300 transform hover:scale-105"
                                >
                                    <img src={apple} alt="App Store" className="w-8 h-8" />
                                    <div>
                                        <div className="text-xs opacity-80">Descargar en</div>
                                        <div className="font-semibold">App Store</div>
                                    </div>
                                </a>
                                
                                <a 
                                    href="#" 
                                    className="group flex-1 bg-black text-white rounded-2xl p-4 flex items-center gap-4 hover:bg-forest-green transition-all duration-300 transform hover:scale-105"
                                >
                                    <img src={google} alt="Google Play" className="w-8 h-8" />
                                    <div>
                                        <div className="text-xs opacity-80">Disponible en</div>
                                        <div className="font-semibold">Google Play</div>
                                    </div>
                                </a>
                            </div>
                            
                            <div className="text-center">
                                <p className="text-sm text-forest-green/60">
                                    📱 Compatible con iOS 13+ y Android 7+ • 🌐 Sincronización automática con la web
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
                                    ✨ Nuevo
                                </div>
                                <div className="absolute -right-4 top-2/3 bg-forest-green text-white px-3 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
                                    🚀 Gratis
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}