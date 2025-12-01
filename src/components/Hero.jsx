import Button from "./Button";
import Slider from "./Slider";
import TextSlider from "./TextSlider";

const Hero = () => {
  return (
    <div className="mt-12">
      <section className="w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-hidden border-b-4 border-orange-600 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 pb-4 sm:py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 items-center">
            {/* LEFT */}
            <div className="text-center md:text-left space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="hidden md:block">
                <div className="inline-flex mb-4 items-center gap-2 bg-linear-to-r from-orange-600 to-orange-700 text-white px-4 sm:px-6 py-2 rounded-full border-2 border-orange-700 shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-zap w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 animate-pulse"
                  >
                    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                  </svg>
                  <span className="text-xs sm:text-sm font-black tracking-wider">
                    INSTANT DELIVERY
                  </span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  <span className="block bg-linear-to-r from-orange-600 via-orange-500 to-orange-700 bg-clip-text text-transparent">
                    GAMERZ PRIME
                  </span>
                  <span className="block text-2xl sm:text-3xl md:text-3xl lg:text-4xl mb-3 mt-2 text-gray-900 dark:text-white">
                    YOUR ULTIMATE GAMINGHUB
                  </span>
                </h1>
                <p className="text-base sm:text-lg md:text-xl font-semibold text-gray-600 dark:text-gray-300 leading-relaxed px-4 md:px-0">
                  Get instant game top-ups, premium gaming gear, and
                  accessories. Best prices, lightning-fast delivery, and
                  unbeatable quality!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center md:justify-start px-4 md:px-0">
                <Button
                  text={"GAMING GADGETS"}
                  textColor={"white"}
                  bgColor={
                    "bg-linear-to-r from-orange-600 via-orange-500 to-orange-600"
                  }
                  border={"border-2"}
                  borderColor={"border-transparent"}
                />
                <Button
                  text={"GAME COIN TOP-UP"}
                  textColor={"orange-600"}
                  bgColor={"bg-gray-800"}
                  border={"border-2"}
                  borderColor={"border-orange-600"}
                />
              </div>
              <div className="">
                <div className="sm:hidden relative flex overflow-hidden">
                  <TextSlider />
                </div>
                <div className="hidden sm:flex sm:gap-4 sm:justify-center md:justify-start sm:pt-6">
                  <div className="flex items-center gap-2 bg-orange-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star w-4 h-4 text-orange-600"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Fast Delivery
                    </span>
                  </div>
                  <div className="flex gap-2 items-center bg-orange-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-600 min-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-trophy w-4 h-4 text-orange-600"
                    >
                      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                      <path d="M4 22h16"></path>
                      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                    </svg>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Best Prices
                    </span>
                  </div>
                  <div className="flex gap-2 items-center bg-orange-50 dark:bg-gray-800 px-4 py-2 rounded-lg border border-orange-200 dark:border-orange-600 min-w-max">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star w-4 h-4 text-orange-600"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                    <span className="text-sm font-bold text-gray-700 dark:text-gray-300">
                      Top Quality
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {/* Right side */}
            <div className="order-1 md:order-2 border-4 border-orange-600 rounded-4xl cursor-pointer">
              <Slider />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
