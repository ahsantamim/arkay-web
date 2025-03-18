import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <section className="py-10 bg-gray-950 sm:pt-16 lg:pt-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
            {/* Logo */}
            <div className="flex items-center">
              <div className="relative w-32 h-16">
                <Image
                  src="/logo.jpg" // Path to the logo in the public folder
                  alt="Arkay Logo"
                  layout="fill" // Makes the image fill the container
                  objectFit="contain" // Ensures the image scales correctly
                />
              </div>
              <span className="text-xl font-semibold text-gray-50 ml-4">
                Digitalize your business with Led Screen
              </span>
            </div>
            <p className="text-base leading-relaxed text-white mt-7">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
            </p>

            <ul className="flex items-center space-x-3 mt-9">
              {/* Social Media Icons */}
              <li>
                <a
                  href="#"
                  title=""
                  className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
                  </svg>
                </a>
              </li>

              {/* Other Social Media Icons (same pattern) */}
              {/* Add more icons as needed */}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              Company
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Career
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              Help
            </p>

            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Customer Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Delivery Details
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  title=""
                  className="flex text-base text-white transition-all duration-200 hover:text-blue-600 focus:text-blue-600"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
            <p className="text-sm font-semibold tracking-widest text-white uppercase">
              Subscribe to newsletter
            </p>

            <form action="#" method="POST" className="mt-6">
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email"
                  className="block w-full p-4 text-white placeholder-gray-400 transition-all duration-200 bg-gray-900 border border-gray-700 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-blue-600 rounded-md hover:bg-blue-700 focus:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="mt-16 mb-10 border-gray-700" />

        <p className="text-sm text-center text-gray-400">
          © Copyright 2021, All Rights Reserved by Ahsanul Karim
        </p>
      </div>
    </section>
  );
};

export default Footer;
