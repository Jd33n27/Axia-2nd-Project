import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <section
      id="about"
      className="bg-BrightPurple py-16 container px-2 mx-auto rounded-2xl mt-10 shadow-sm border border-slate-200 md:py-24"
    >
      {/* <!-- container --> */}
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              About React Learn
            </h2>
            <p className="text-slate-600">
              We believe education should feel focused and humane. Our platform
              strips away clutter so you can concentrate on the next right
              step—one course, one assignment, one milestone at a time.
            </p>
            <p className="text-slate-600">
              Designed for speed and clarity, React Learn brings modern SaaS
              craft to EdTech: smart defaults, predictable patterns, and
              components you can trust.
            </p>
          </div>

          {/* <!-- About Card --> */}
          <Card>
            <dl className="grid grid-cols-2 gap-6">
              {/* <!-- Students supported --> */}
              <div>
                <dt className="text-sm text-slate-500">Students supported</dt>
                <dd className="text-xl font-semibold">10k+</dd>
              </div>
              {/* <!-- Productivity --> */}
              <div>
                <dt className="text-sm text-slate-500">
                  Avg. productivity lift
                </dt>
                <dd className="text-xl font-semibold">+27%</dd>
              </div>
              {/* <!-- Uptime --> */}
              <div>
                <dt className="text-sm text-slate-500">Uptime</dt>
                <dd className="text-xl font-semibold">99.9%</dd>
              </div>
              {/* <!-- integrations --> */}
              <div>
                <dt className="text-sm text-slate-500">Integrations</dt>
                <dd className="text-xl font-semibold">20+</dd>
              </div>
            </dl>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
