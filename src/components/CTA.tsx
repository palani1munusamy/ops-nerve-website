export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 text-white py-24 px-4 border-t border-indigo-500/20 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold font-poppins mb-12">Ready to run a smarter, faster, AI-powered ops team?</h2>
        <div className="flex flex-col items-center gap-6 justify-center">
          <form
            action="https://formsubmit.co/contact@opsnerve.ai"
            method="POST"
            className="flex flex-col gap-4 max-w-md w-full"
          >
            <input type="hidden" name="_subject" value="OpsNerve Demo Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm transition-all"
              required
            />
            <button
              type="submit"
              className="relative px-8 py-4 rounded-lg font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:shadow-2xl group-hover:shadow-indigo-500/50 transition-all"></div>
              <span className="relative text-white">Talk to an Expert</span>
            </button>
          </form>
          <a
            href="https://www.linkedin.com/in/palani-munusamy/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-[#0A66C2]/50 bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 hover:border-[#0A66C2] transition-all text-white font-semibold whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
