import { Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0f15] via-[#0a0c11] to-[#000000] text-white py-16 px-4 border-t border-indigo-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">&copy; 2026 OpsNerve.ai. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-indigo-300 transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-slate-500 hover:text-indigo-300 transition-colors text-sm">Terms of Service</Link>
            <a href="https://www.linkedin.com/in/palani-munusamy/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
