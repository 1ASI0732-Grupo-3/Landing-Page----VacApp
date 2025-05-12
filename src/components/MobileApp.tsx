import mockup from "../assets/mobile_app.webp"
import apple from "../assets/appstore.webp"
import google from "../assets/googleplay.webp"
import { useTranslation } from "react-i18next";

export function MobileApp() {
    const { t } = useTranslation();

    return (
        <div className=" py-5 md:py-10 lg:py-0 xl:py-20 md:w-8/10 mx-auto font-mulish md:text-lg lg:text-2xl xl:text-4xl " id="app">
            <div className="hidden md:flex flex-row justify-center items-center">
                <img
                    src={mockup}
                    alt="Mobile App"
                    className="w-1/2 xl:w-1/3 object-contain drop-shadow-xl rounded-md"
                />

                <div className="w-1/2 flex flex-col gap-6 max-w-xl">
                    <h2 className="text-6xl xl:text-8xl font-rokkitt font-bold">
                        {t('getapp.title')}
                    </h2>
                    <p className="text-xl">
                        {t('getapp.description')}
                    </p>
                    <div className="flex justify-evenly mt-4">
                        <img className="w-1/3" src={apple} alt="App Store" />
                        <img className="w-1/3" src={google} alt="Google Play" />
                    </div>
                </div>
            </div>
            <div className="flex md:hidden mx-10 flex-col justify-center items-center gap-5">
                <h2 className="text-5xl font-rokkitt font-bold">
                    {t('getapp.title')}
                </h2>
                <p className="text-lg">
                    {t('getapp.description')}
                </p>

                <img
                    src={mockup}
                    alt="Mobile App"
                    className="w-full max-w-md object-contain drop-shadow-xl rounded-md"
                />
                <div className="flex justify-evenly mt-4 gap-5">
                    <img className="w-45/100" src={apple} alt="App Store" />
                    <img className="w-45/100" src={google} alt="Google Play" />
                </div>
            </div>
        </div>
    );
}