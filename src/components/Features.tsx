import { Map, Brain, AlertTriangle, Search, Zap } from "lucide-react";

const features = [
  {
    icon: Map,
    title: "System Mapping",
    description: "Automatically map your entire system architecture and dependencies for comprehensive monitoring."
  },
  {
    icon: Brain,
    title: "Baseline Learning",
    description: "AI learns normal system behavior patterns to establish accurate baselines for anomaly detection."
  },
  {
    icon: AlertTriangle,
    title: "Anomaly Detection",
    description: "Real-time detection of deviations from normal patterns with high accuracy and low false positives."
  },
  {
    icon: Search,
    title: "Root Cause Analysis",
    description: "Intelligent analysis to pinpoint the exact root cause of incidents within seconds."
  },
  {
    icon: Zap,
    title: "Action Engine",
    description: "Automated remediation actions to resolve issues before they impact users."
  }
];

const colors = [
  { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.25)", icon: "#818cf8", title: "#e0e7ff", grad: "from-indigo-600/20 to-indigo-600/5" },
  { bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.25)", icon: "#fb923c", title: "#fed7aa", grad: "from-orange-600/20 to-orange-600/5" },
  { bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.25)", icon: "#06b6d4", title: "#cffafe", grad: "from-cyan-600/20 to-cyan-600/5" },
  { bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.25)", icon: "#a855f7", title: "#e9d5ff", grad: "from-purple-600/20 to-purple-600/5" },
  { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.25)", icon: "#22c55e", title: "#dcfce7", grad: "from-green-600/20 to-green-600/5" }
];

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-[#0d0f15] via-[#10131e] to-[#0d0f15] text-white py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold font-poppins mb-4">Core Capabilities</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Everything you need to transform incident response</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group p-8 rounded-xl backdrop-blur-xl border transition-all hover:border-opacity-100 hover:shadow-2xl duration-300 bg-gradient-to-br ${color.grad} cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, ${color.bg}, transparent)`,
                  borderColor: color.border,
                }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm"
                  style={{ background: `${color.icon}20`, boxShadow: `0 0 20px ${color.icon}40` }}
                >
                  <feature.icon size={28} style={{ color: color.icon }} />
                </div>
                <h3 className="text-lg font-semibold font-poppins mb-3" style={{ color: color.title }}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
