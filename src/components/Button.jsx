import { Link } from "react-router-dom";

const Button = ({ border, borderColor, bgColor, textColor, text }) => {
  return (
    <div>
      <Link
        className={`hidden md:block group ${border} ${borderColor} ${bgColor} text-${textColor} px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-black text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105`}
      >
        <span className="flex items-center justify-center gap-2">
          {text}
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
            className="lucide lucide-chevron-right w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
          >
            <path d="m9 18 6-6-6-6"></path>
          </svg>
        </span>
      </Link>
    </div>
  );
};

export default Button;
