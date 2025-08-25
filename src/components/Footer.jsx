import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <section className="border-t border-slate-200 bg-indigo-300 rounded-2xl max-w-[630px] lg:max-w-[1440px] md:max-w-3xl mx-auto">
      <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-evenly gap-6 md:flex-row md:items-center">
          <div className="flex flex-col max-w-xs">
            <Logo />
            <div className="flex flex-col space-y-3 my-2">
              <p className="flex items-center gap-6 text-slate-600 text-wrap">
                A firm that is concentrated on equipping African youths with the
                knowledge and skills needed to excel in the tech space.
              </p>

              {/* <!-- Socials --> */}
              <div className="flex items-center gap-3 w-45">
                <a
                  href="#"
                  aria-label="Twitter"
                  className="h-9 w-9 grid place-items-center rounded-xl  hover:bg-slate-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19.633 7.997c.013.18.013.36.013.54 0 5.499-4.186 11.84-11.84 11.84-2.354 0-4.541-.69-6.384-1.885.33.038.648.051.992.051a8.39 8.39 0 005.2-1.792 4.195 4.195 0 01-3.914-2.907c.256.038.512.064.781.064.371 0 .742-.051 1.088-.141a4.188 4.188 0 01-3.356-4.114v-.051c.548.307 1.18.5 1.852.526a4.183 4.183 0 01-1.868-3.488c0-.768.205-1.472.564-2.086a11.9 11.9 0 008.64 4.381 4.73 4.73 0 01-.103-.96 4.19 4.19 0 014.19-4.19c1.205 0 2.293.5 3.058 1.293a8.25 8.25 0 002.66-1.013 4.2 4.2 0 01-1.84 2.306 8.381 8.381 0 002.404-.64 9.024 9.024 0 01-2.096 2.172z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-9 w-9 grid place-items-center rounded-xl  hover:bg-slate-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8.5 8h3.84v2.18h.06c.54-1.02 1.86-2.1 3.83-2.1 4.1 0 4.86 2.7 4.86 6.2V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.37 0-2.73 1.85-2.73 3.76V24h-4V8z" />
                  </svg>
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  className="h-9 w-9 grid place-items-center rounded-xl  hover:bg-slate-50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.2c3.2 0 3.584.012 4.85.07 1.17.055 1.97.24 2.43.4a4.9 4.9 0 011.77 1.15 4.9 4.9 0 011.15 1.77c.16.46.345 1.26.4 2.43.058 1.266.07 1.65.07 4.85s-.012 3.584-.07 4.85c-.055 1.17-.24 1.97-.4 2.43a4.9 4.9 0 01-1.15 1.77 4.9 4.9 0 01-1.77 1.15c-.46.16-1.26.345-2.43.4-1.266.058-1.65.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.055-1.97-.24-2.43-.4a4.9 4.9 0 01-1.77-1.15 4.9 4.9 0 01-1.15-1.77c-.16-.46-.345-1.26-.4-2.43C2.212 15.584 2.2 15.2 2.2 12s.012-3.584.07-4.85c.055-1.17.24-1.97.4-2.43a4.9 4.9 0 011.15-1.77 4.9 4.9 0 011.77-1.15c.46-.16 1.26-.345 2.43-.4C8.416 2.212 8.8 2.2 12 2.2zM12 5.6a6.4 6.4 0 100 12.8A6.4 6.4 0 0012 5.6zm7.84-1.28a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </a>
              </div>

              <p className="flex items-center gap-6 text-slate-600 text-wrap">
                &copy; 2025 React Learn. All rights reserved
              </p>
            </div>
          </div>

          {/* Contact Company */}
          <nav className="flex flex-col text-start gap-1 text-sm text-slate-600">
            <h2 className="font-bold text-xl"> Company</h2>
            <a href="#about" className="hover:text-indigo-700">
              About
            </a>
            <a href="#" className="hover:text-indigo-700">
              Privacy Policy
            </a>
            <a href="#contact" className="hover:text-indigo-700">
              Contact
            </a>
          </nav>

          {/* Contact Support */}
          <nav className="flex flex-col text-start gap-1 text-sm text-slate-600">
            <h2 className="font-bold text-xl"> Support</h2>
            <a href="#" className="hover:text-indigo-700">
              info@react.learn
            </a>
            <a href="#" className="hover:text-indigo-700">
              +234 801 234 5678
            </a>
            <a href="#" className="hover:text-indigo-700">
              +234 808 765 4321
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Footer;
