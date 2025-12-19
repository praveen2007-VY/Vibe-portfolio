import profileData from "../../src/data/profile.json";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#1a1f3a] py-24 sm:py-32"
    >
      {/* Two-tone background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#1a1f3a] to-[#1a1f3a]" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-16 text-center text-4xl font-black tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl">
          About
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Bio Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-[#252b4a] p-8 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-[#3b82f6]/20">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-[#3b82f6]/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  About Me
                </h3>
              </div>
              <p className="leading-relaxed text-zinc-300 sm:text-lg">
                {profileData.bio}
              </p>
            </div>
          </div>

          {/* Company Card */}
          <div className="group relative overflow-hidden rounded-2xl bg-[#252b4a] p-8 shadow-2xl transition-all hover:scale-[1.02] hover:shadow-[#3b82f6]/20">
            <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-[#3b82f6]/10" />
            <div className="relative z-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#3b82f6]">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Company
                </h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#3b82f6]">
                    Company Name
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {profileData.company.name}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#3b82f6]">
                    Platform
                  </p>
                  <p className="mt-1 text-lg font-semibold text-white">
                    {profileData.company.platform}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#3b82f6]">
                    Slogan
                  </p>
                  <p className="mt-1 text-lg text-zinc-300">
                    {profileData.company.slogan}
                  </p>
                </div>
                {profileData.contact.website && (
                  <div className="pt-4">
                    <a
                      href={profileData.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#3b82f6] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#2563eb] hover:scale-105"
                    >
                      Visit Website
                      <svg
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
