const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-4 mb-8 md:mb-12">
      <div className="h-1 w-16 bg-linear-to-r from-transparent to-orange-600 rounded-full overflow-hidden"></div>
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
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
            className="lucide lucide-trophy w-6 h-6 text-orange-600"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
          <h2 className="text-[17px] md:text-3xl font-black text-gray-900 dark:text-white tracking-tight">
            {text1}
          </h2>
        </div>
        <p className="text-orange-600 font-bold tracking-wider text-sm">
          {text2}
        </p>
      </div>
      <div className="h-1 w-16 bg-linear-to-l from-transparent to-orange-600 rounded-full overflow-hidden"></div>
    </div>
  );
};

export default Title;
