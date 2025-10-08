import { useTranslation } from 'react-i18next';
import { ArrowRight, Smartphone, Globe, CheckCircle } from 'lucide-react';

export function CallToAction() {
    const { t } = useTranslation();
    const benefits = t('callToAction.benefits', { returnObjects: true }) as string[];
    const trustBadges = t('callToAction.trust.badges', { returnObjects: true }) as string[];

    const scrollToMobile = () => {
        const el = document.getElementById('app') || document.getElementById('mobile-app');
        if (el) {
            window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
        }
    };

    return (
        <section className="py-20 bg-gradient-to-br from-forest-green to-forest-green/90 text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-lime-neon/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl"></div>
            
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="text-center space-y-8">
                    
                    {/* Main CTA */}
                    <div className="space-y-6">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-rokkitt">
                            {t('callToAction.title')}
                        </h2>
                        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-mulish">
                            {t('callToAction.subtitle')}
                        </p>
                    </div>

                    {/* Benefits Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 py-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl p-4">
                                <CheckCircle className="text-lime-neon flex-shrink-0" size={20} />
                                <span className="text-white/90 font-mulish">{benefit}</span>
                            </div>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <button
                            onClick={() => {
                                window.location.href = 'https://vacappfrontend.netlify.app/auth/register';
                            }}
                            className="group bg-lime-neon text-forest-green px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
                        >
                            <Globe size={24} />
                            {t('callToAction.buttons.web')}
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                        </button>

                        <button
                            onClick={scrollToMobile}
                            className="group border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-forest-green transition-all duration-300 flex items-center gap-3"
                        >
                            <Smartphone size={24} />
                            {t('callToAction.buttons.mobile')}
                        </button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-12 border-t border-white/20">
                        <p className="text-white/70 mb-6">{t('callToAction.trust.title')}</p>
                        <div className="flex flex-wrap justify-center items-center gap-8 text-white/50">
                            {trustBadges.map((badge, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-8 h-8 bg-lime-neon/20 rounded-full flex items-center justify-center">
                                        <CheckCircle size={16} className="text-lime-neon" />
                                    </div>
                                    <span>{badge}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}