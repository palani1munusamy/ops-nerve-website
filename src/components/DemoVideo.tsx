export default function DemoVideo() {
  return (
    <section id="demo" className="bg-gradient-to-b from-[#0d0f15] via-[#10131e] to-[#0d0f15] text-white py-24 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold font-poppins mb-4">See OpsNerve in Action</h2>
        <p className="text-lg text-slate-400 mb-12">Watch how OpsNerve transforms incident response from hours to seconds.</p>
        <div className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-indigo-600/20 rounded-2xl blur-2xl group-hover:blur-3xl transition-all"></div>
          <div className="relative rounded-2xl overflow-hidden border border-indigo-500/30 backdrop-blur-xl hover:border-indigo-500/50 transition-all shadow-2xl shadow-indigo-500/20">
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"></div>
            <video
              controls
              className="w-full h-auto bg-black"
              poster="/OpsNerve-icon.svg"
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
