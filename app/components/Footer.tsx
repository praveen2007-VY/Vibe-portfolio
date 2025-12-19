import profileData from "../../src/data/profile.json";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a1f3a] bg-[#0a0e27]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-8 text-sm text-zinc-400 sm:flex-row sm:px-6 lg:px-8">
        <p className="font-medium">
          © {currentYear} {profileData.name}. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm">
          {profileData.company.name}
        </p>
      </div>
    </footer>
  );
}

