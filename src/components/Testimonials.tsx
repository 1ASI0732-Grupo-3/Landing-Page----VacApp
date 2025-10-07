import { useTranslation } from 'react-i18next';
import { Star, Quote } from 'lucide-react';
import farmer1 from '../assets/farmer1.webp';
import farmer2 from '../assets/farmer2.webp';
import farmer3 from '../assets/farmer3.webp';

export function Testimonials() {
    const { t } = useTranslation();
    const testimonialUsers = t('testimonials.users', { returnObjects: true }) as Array<{
        name: string;
        role: string;
        text: string;
    }>;
    
    const testimonials = [
        { ...testimonialUsers[0], image: farmer1, rating: 5 },
        { ...testimonialUsers[1], image: farmer2, rating: 5 },
        { ...testimonialUsers[2], image: farmer3, rating: 5 }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-light-gray to-white">
            <div className="max-w-7xl mx-auto px-4">
                
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="font-rokkitt text-4xl md:text-5xl lg:text-6xl font-bold text-forest-green">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-lg md:text-xl text-forest-green/70 font-mulish max-w-3xl mx-auto">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="bg-forest-green rounded-3xl p-8 md:p-12 text-white">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">500+</div>
                            <div className="text-white/80">Granjas Activas</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">4.8★</div>
                            <div className="text-white/80">Rating Promedio</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">50K+</div>
                            <div className="text-white/80">Animales Registrados</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-lime-neon mb-2">99.9%</div>
                            <div className="text-white/80">Uptime</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ testimonial }: { testimonial: any }) {
    return (
        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-forest-green/10 hover:border-lime-neon/50">
            
            {/* Quote Icon */}
            <div className="flex justify-between items-start mb-6">
                <Quote className="text-lime-neon" size={32} />
                <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="text-lime-neon fill-current" size={16} />
                    ))}
                </div>
            </div>

            {/* Testimonial Text */}
            <p className="text-forest-green/80 font-mulish mb-6 leading-relaxed">
                "{testimonial.text}"
            </p>

            {/* User Info */}
            <div className="flex items-center gap-4">
                <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-lime-neon/30"
                />
                <div>
                    <h4 className="font-bold text-forest-green font-rokkitt">
                        {testimonial.name}
                    </h4>
                    <p className="text-forest-green/60 text-sm">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    );
}