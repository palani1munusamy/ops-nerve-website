import { Github, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0f15] via-[#0a0c11] to-[#000000] text-white py-16 px-4 border-t border-indigo-500/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-xl font-bold font-poppins bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent mb-2">OpsNerve</div>
            <p className="text-slate-400 text-sm">AI-powered anomaly detection for DevOps teams.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-300">Product</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#features" className="hover:text-indigo-300 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-indigo-300 transition-colors">How It Works</a></li>
              <li><a href="#demo" className="hover:text-indigo-300 transition-colors">Demo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-300">Company</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-300 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-300">Support</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-indigo-300 transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-slate-700/50 pt-8 gap-4">
          <p className="text-slate-500 text-sm">&copy; 2024 OpsNerve.ai. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-slate-400 hover:text-indigo-300 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
