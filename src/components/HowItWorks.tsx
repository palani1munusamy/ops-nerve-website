const steps = [
  {
    step: "01",
    title: "Connect",
    description: "Integrate OpsNerve with your monitoring tools and infrastructure."
  },
  {
    step: "02",
    title: "Learn",
    description: "AI analyzes historical data to learn normal system behavior patterns."
  },
  {
    step: "03",
    title: "Detect",
    description: "Real-time anomaly detection alerts you to potential issues."
  },
  {
    step: "04",
    title: "Resolve",
    description: "Automated root cause analysis and remediation recommendations."
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#0d0f15] via-[#12141c] to-[#0d0f15] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-poppins mb-4">How It Works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">A four-step process to transform your operations</p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center w-full md:w-1/4 group">
              <div className="bg-gradient-to-br from-indigo-600/80 to-purple-600/80 text-white w-16 h-16 rounded-full flex items-center justify-center font-bold mb-4 shadow-lg shadow-indigo-500/40 group-hover:shadow-2xl group-hover:scale-110 transition-all backdrop-blur-sm">
                {step.step}
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-2 group-hover:text-indigo-300 transition-colors">{step.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[calc(25%-2px)] top-20 w-[calc(50%-16px)] h-1 bg-gradient-to-r from-indigo-500/50 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
