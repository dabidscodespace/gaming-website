const GameForm = ({ selectedVar }) => {
  return (
    <div>
      {/* Title */}
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t-2 border-gray-600"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="bg-gray-800 px-4 text-sm font-black text-orange-400 uppercase tracking-wider">
            ENTER YOUR INFORMATION
          </span>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4 mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label
              htmlFor="name"
              className="flex items-center gap-2 text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide"
            >
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
                className="lucide lucide-user w-4 h-4 text-orange-600 dark:text-orange-400"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
              FULL NAME
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border-2 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:bg-gray-600 transition-all placeholder:text-gray-400 group-hover:border-orange-500 border-gray-600 focus:border-orange-400"
              placeholder="Enter your full name"
            />
          </div>
          <div className="group">
            <label
              htmlFor="email"
              className="flex items-center gap-2 text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide"
            >
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
                className="lucide lucide-mail w-4 h-4 text-orange-600 dark:text-orange-400"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
              EMAIL ADDRESS
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border-2 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:bg-gray-600 transition-all placeholder:text-gray-400 group-hover:border-orange-500 border-gray-600 focus:border-orange-400"
              placeholder="your@gmail.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label
              htmlFor="phone"
              className="flex items-center gap-2 text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide"
            >
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
                className="lucide lucide-phone w-4 h-4 text-orange-600 dark:text-orange-400"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              Mobile / Whatsapp Number
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border-2 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:bg-gray-600 transition-all placeholder:text-gray-400 group-hover:border-orange-500 border-gray-600 focus:border-orange-400"
              placeholder="01XXX-XXXXXX"
            />
          </div>
          <div className="group">
            <label
              htmlFor="userid"
              className="flex items-center gap-2 text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide"
            >
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
                className="lucide lucide-gamepad2 lucide-gamepad-2 w-4 h-4 text-orange-600 dark:text-orange-400"
              >
                <line x1="6" x2="10" y1="11" y2="11"></line>
                <line x1="8" x2="8" y1="9" y2="13"></line>
                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
              </svg>
              USER ID
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border-2 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:bg-gray-600 transition-all placeholder:text-gray-400 group-hover:border-orange-500 border-gray-600 focus:border-orange-400"
              placeholder="Enter your User ID"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="group">
            <label
              htmlFor="zoneid"
              className="flex items-center gap-2 text-sm font-black text-gray-900 dark:text-white mb-3 uppercase tracking-wide"
            >
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
                className="lucide lucide-gamepad2 lucide-gamepad-2 w-4 h-4 text-orange-600 dark:text-orange-400"
              >
                <line x1="6" x2="10" y1="11" y2="11"></line>
                <line x1="8" x2="8" y1="9" y2="13"></line>
                <line x1="15" x2="15.01" y1="12" y2="12"></line>
                <line x1="18" x2="18.01" y1="10" y2="10"></line>
                <path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path>
              </svg>
              ZONE ID
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray-700 border-2 rounded-xl px-4 py-3 text-white font-bold focus:outline-none focus:bg-gray-600 transition-all placeholder:text-gray-400 group-hover:border-orange-500 border-gray-600 focus:border-orange-400"
              placeholder="Enter your Zone ID"
            />
          </div>
        </div>

        <div className="space-y-4">
          {selectedVar ? (
            <div className="bg-linear-to-r from-orange-100 to-yellow-100 dark:from-orange-900/30 dark:to-yellow-900/30 border-2 border-orange-300 dark:border-orange-700 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wide">
                  Total price
                </span>
                <span className="text-2xl font-black text-orange-600 dark:text-orange-400">
                  ৳{selectedVar.price}
                </span>
              </div>
            </div>
          ) : (
            ""
          )}
          <button className="w-full bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-black text-lg uppercase tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 overflow-hidden group cursor-pointer">
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
              className="lucide lucide-shopping-cart w-6 h-6"
            >
              <circle cx="8" cy="21" r="1"></circle>
              <circle cx="19" cy="21" r="1"></circle>
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
            </svg>
            <span>Proceed to Payment</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default GameForm;
