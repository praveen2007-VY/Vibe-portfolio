"use client";

import profileData from "../../src/data/profile.json";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0a0e27] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          Skills
        </h2>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {profileData.skills.map((skill, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-[#252b4a] p-6 text-center transition-all duration-300 hover:scale-110 hover:bg-[#3b82f6] hover:shadow-2xl hover:shadow-[#3b82f6]/50"
            >
              {/* Pulse animation on hover */}
              <div className="absolute inset-0 rounded-xl bg-[#3b82f6] opacity-0 transition-opacity duration-300 group-hover:opacity-20 group-hover:animate-pulse" />
              
              <div className="relative z-10">
                <p className="text-sm font-bold text-white transition-colors group-hover:text-white sm:text-base">
                  {skill}
                </p>
              </div>
              
              {/* Accent dot */}
              <div className="absolute bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#3b82f6] opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
