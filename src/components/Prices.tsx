import { useTranslation } from "react-i18next";

export function Prices() {
  const { t } = useTranslation()
  const plans = t('prices.plans', { returnObjects: true }) as Array<Plan>

  return (
    <div className="py-5 lg:py-20 md:w-8/10 mx-auto font-mulish md:text-lg lg:text-2xl xl:text-4xl" id="prices">
      <h2 className="font-rokkitt text-7xl lg:text-8xl text-center font-semibold">
        {t('prices.title')}
      </h2>
      <br />
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-5 md:gap-10 lg:gap-20">
        {plans.map((plan, index) => <PriceCard key={index} plan={plan} />)}
      </div>
    </div>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <div className="w-80 md:w-120 md:aspect-square p-5 md:p-10 rounded-lg shadow-lg bg-white text-center font-mulish flex flex-col gap-2 md:gap-5">
      <h3 className="text-2xl md:text-4xl font-bold mb-2">{plan.name}</h3>
      <p className="text-4xl xl:text-6xl font-bold text-forest-green mb-4">{plan.price}</p>
      <ul className="text-left space-y-2 text-xl">
        {plan.features.map((feature, i) => (
          <li key={i} className="text-gray-600">• {feature}</li>
        ))}
      </ul>
    </div>
  );
}

type Plan = {
  name: string;
  price: string;
  features: string[];
  description: string;
};