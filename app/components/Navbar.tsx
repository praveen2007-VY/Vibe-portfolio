"use client";

import { useState, useEffect } from "react";
import profileData from "../../src/data/profile.json";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Calculate scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 border-b border-[#1a1f3a] transition-all ${
        isScrolled ? "bg-[#0a0e27] shadow-lg" : "bg-[#0a0e27]"
      }`}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 h-0.5 bg-[#3b82f6] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        {/* Logo/Brand */}
        <a
          href="#hero"
          className="text-lg font-bold tracking-tight text-white transition-transform hover:scale-105 sm:text-xl"
          onClick={closeMobileMenu}
        >
          {profileData.name.split(" ")[0]}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-all ${
                  isActive
                    ? "text-[#3b82f6] scale-110"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            className="rounded-lg bg-[#3b82f6] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#2563eb] hover:scale-105 hover:shadow-lg hover:shadow-[#3b82f6]/50"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#1a1f3a] bg-[#0a0e27] transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-[#252b4a] text-[#3b82f6]"
                    : "text-zinc-400 hover:bg-[#1a1f3a] hover:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="mt-2 rounded-lg bg-[#3b82f6] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#2563eb]"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
