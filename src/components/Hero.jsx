import React from "react";
import heroImg from "../assets/images/hero-img-purple.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden container px-2 mx-auto rounded-2xl mt-3">
      {/* <!-- Background --> */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-600 to-teal-100"></div>

      {/* <!-- Hero Content --> */}
      <div className="grid px-6 py-16 mx-auto max-with-7xl md:py-24 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Learn faster with a
            <span className="text-indigo-600"> clear path</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-pro">
            React Learn helps you track courses, deadlines, and assignment with
            a calm, distraction-free dashboard. Built for students, creators,
            and teams.
          </p>

          {/* <!-- CTA Buttons --> */}
          <div className="flex flex-wrap gap-3 items-center">
            {/* <!-- Sign Up Button 2 --> */}
            <Link
              to="/signup"
              className="bg-purple inline-flex items-center justify-center rounded-xl px-4 py-3 text-white text-xl font-medium hover:bg-indigo-800"
            >
              Get Started
            </Link>

            {/* <!-- Features --> */}
            <a
              href="#features"
              className="inline-flex items-center justify-center border border-slate-300 rounded-xl px-4 py-3 text-xl font-medium hover:bg-slate-50"
            >
              See Features
            </a>
          </div>

          {/* <!-- Graphical addition --> */}
          <div className="flex flex-wrap gap-6 items-center text-slate-600 text-sm">
            <div className="flex items-center gap-2">
              <span className="inline-block bg-teal-500 size-2.5 rounded-full"></span>
              Progress tracking
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block bg-purple-500 size-2.5 rounded-full"></span>
              Smart reminders
            </div>
          </div>
        </div>

        {/* <!-- Banner --> */}
        <div className="relative">
          <div className="aspect-[4/3] grid place-items-center">
            <img
              src={heroImg}
              alt="Hero img"
              loading="lazy"
              className="w-full bg-contain border border-slate-200 shadow-sm rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
