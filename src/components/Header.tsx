"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#demo", label: "Demo" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-gradient-to-b from-[#0d0f15]/95 via-[#12141c]/95 to-transparent text-white py-5 px-4 sticky top-0 z-50 border-b border-indigo-500/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <Image src="/OpsNerve-icon.svg" alt="OpsNerve logo" width={40} height={40} />
          <div className="text-2xl font-bold font-poppins bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
            OpsNerve
          </div>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden md:block relative px-6 py-2 rounded-lg font-semibold overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all"></div>
            <span className="relative text-white text-sm">Get Started</span>
          </a>
          <button
            className="md:hidden text-slate-300 hover:text-white transition-colors p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-indigo-500/10 pt-4">
          <nav className="flex flex-col gap-4 px-2">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-indigo-300 transition-colors font-medium py-1"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="relative px-6 py-3 rounded-lg font-semibold overflow-hidden group text-center mt-2"
              onClick={() => setMobileOpen(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
              <span className="relative text-white text-sm">Get Started</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
