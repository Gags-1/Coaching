import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
     <nav className="bg-transparent border-b border-primary backdrop-filter backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-paleOrange">Coaching</span>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a
                href="#"
                className="text-gray-100 hover:bg-paleGreen hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </a>
              <div className="relative">
                <button
                  type="button"
                  className="text-gray-100 hover:bg-paleGreen hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                  onClick={toggleDropdown}
                >
                  Subject
                </button>
                <div
                  className={`${
                    isDropdownOpen ? 'block' : 'hidden'
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none`}
                >
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-100 hover:bg-paleGreen hover:text-gray-900"
                      role="menuitem"
                    >
                      Science
                    </a>
                    <div className="border-b border-[#000]"></div>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-100 hover:bg-paleGreen hover:text-gray-900"
                      role="menuitem"
                    >
                      Math
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="text-white hover:bg-gray-700 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden p-3`} id="mobile-menu">
        <div className="bg-primary px-2 pt-2 rounded-md pb-3 space-y-1 sm:px-3">
          <a
            href="#"
            className="text-white hover:bg-paleGreen hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Home
          </a>
          <div className="border-b border-[#000]"></div>
          <div className="relative">
            <button
              type="button"
              className="text-white hover:bg-paleGreen hover:text-white w-full text-left px-3 py-2 rounded-md text-base font-medium focus:outline-none"
              onClick={toggleDropdown}
            >
              Subject
            </button>
            <div
              className={`${
                isDropdownOpen ? 'block' : 'hidden'
              } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-primary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none`}
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-paleGreen hover:text-gray-900"
                  role="menuitem"
                >
                  Science
                </a>
                <div className="border-b border-[#000]"></div>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-100 hover:bg-paleGreen hover:text-gray-900"
                  role="menuitem"
                >
                  Math
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
