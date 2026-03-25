import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-b from-[#0d0f15]/95 via-[#12141c]/95 to-transparent text-white py-5 px-4 sticky top-0 z-50 border-b border-indigo-500/10 backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group cursor-pointer">
          <Image
            src="/OpsNerve-icon.svg"
            alt="OpsNerve logo"
            width={40}
            height={40}
          />
          <div className="text-2xl font-bold font-poppins bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent group-hover:from-indigo-200 group-hover:to-purple-200 transition-all">
            OpsNerve
          </div>
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="#demo" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">Intro</Link>
          <Link href="#features" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">Features</Link>
          <Link href="#how-it-works" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">How It Works</Link>
          <Link href="#contact" className="text-slate-300 hover:text-indigo-300 transition-colors font-medium">Contact</Link>
        </nav>
        <Link href="#contact" className="relative px-6 py-2 rounded-lg font-semibold overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:shadow-lg group-hover:shadow-indigo-500/50 transition-all"></div>
          <span className="relative text-white text-sm">Get Started</span>
        </Link>
      </div>
    </header>
  );
}
