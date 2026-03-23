export default function CTA() {
  return (
    <section id="contact" className="relative bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-indigo-900/40 text-white py-24 px-4 border-t border-indigo-500/20 overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-2xl mx-auto text-center relative z-10">
        <h2 className="text-5xl font-bold font-poppins mb-4">Ready to resolve incidents faster?</h2>
        <p className="text-lg text-slate-300 mb-10">Join the waitlist and be among the first to experience AI-powered incident resolution.</p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-5 py-4 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent backdrop-blur-sm transition-all"
            required
          />
          <button
            type="submit"
            className="relative px-8 py-4 rounded-lg font-semibold overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:shadow-2xl group-hover:shadow-indigo-500/50 transition-all"></div>
            <span className="relative text-white">Get Early Access</span>
          </button>
        </form>
      </div>
    </section>
  );
}
