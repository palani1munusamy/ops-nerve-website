export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#0d0f15] via-[#12141c] to-[#0d0f15] text-white py-40 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 backdrop-blur-sm">
          <span className="text-sm font-semibold text-indigo-300">AI-Powered Operations Intelligence</span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold font-poppins mb-8 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 bg-clip-text text-transparent leading-tight">
          From Alert to Root Cause in Seconds
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          AI-powered anomaly detection and root cause intelligence for engineering and platform teams.<br />Detect faster. Diagnose instantly. Act with confidence.
        </p>
        <div className="flex flex-col items-center gap-4 max-w-md mx-auto">
          <form
            action="https://formsubmit.co/contact@opsnerve.ai"
            method="POST"
            className="flex flex-col gap-4 w-full"
          >
            <input type="hidden" name="_subject" value="OpsNerve Demo Request" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="Work email"
              className="w-full px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm transition-all"
              required
            />
            <button
              type="submit"
              className="relative w-full px-8 py-4 rounded-lg font-semibold overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:shadow-2xl group-hover:shadow-indigo-500/50 transition-all"></div>
              <span className="relative text-white">Talk to an Expert</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
