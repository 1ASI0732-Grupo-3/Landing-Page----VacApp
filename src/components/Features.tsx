import { CalendarCheck, ChartColumn, ClipboardList, ClipboardPlus, Package, Syringe } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconList = [ClipboardList, Syringe, CalendarCheck, ChartColumn, ClipboardPlus, Package]

export function Features() {
    const { t } = useTranslation()
    const featureList = t('features.list', { returnObjects: true }) as Array<{ title: string; description: string }>

    return (
        <div className="py-5 lg:py-20 md:w-8/10 mx-auto font-mulish md:text-lg lg:text-2xl xl:text-4xl" id="features">
            <h2 className="font-rokkitt text-7xl lg:text-8xl text-center font-semibold">{t('features.title')}</h2><br />
            <div className="grid grid-cols-2 lg:grid-cols-3 md:w-fit mx-5 md:mx-auto gap-x-5 md:gap-x-10">
                {featureList.map((feature, index) => (
                    <div key={index} className="flex justify-center mb-10">
                        <FeatureCard Icon={iconList[index]} title={feature.title} description={feature.description} />
                    </div>
                ))}
            </div>
        </div>
    )
}

function FeatureCard({ Icon, title, description }: { Icon: React.ElementType; title: string; description: string }) {
    return (
        <div className="md:w-80 flex flex-col justify-center items-center py-5 px-2 md:p-10 rounded-lg shadow-2xl">
            <div className="mb-4">
                <Icon className="w-10 md:w-20 h-auto" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-center">{title}</h3>
            <p className="text-sm md:text-lg text-center font-normal">{description}</p>
        </div>
    );
}