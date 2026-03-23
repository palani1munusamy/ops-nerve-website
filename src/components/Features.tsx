import { Network, BarChart2, Zap, Search, Radio, Ticket, Bot, Bell, Map } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Automatic Service Discovery",
    description: "Connects to your existing observability stack and automatically maps every service, endpoint, and dependency — no manual configuration needed."
  },
  {
    icon: BarChart2,
    title: "Behavioural Baseline Intelligence",
    description: "Learns what normal looks like across every endpoint using 28 days of historical data — so it knows exactly when something is wrong."
  },
  {
    icon: Zap,
    title: "Real-Time Anomaly Detection",
    description: "Detects error rate spikes, latency surges, and traffic drops the moment they happen — using statistical and ML-based detectors running continuously."
  },
  {
    icon: Search,
    title: "AI Root Cause Analysis",
    description: "Correlates signals across the service graph and identifies the most probable root cause — with a confidence score, not just a guess."
  },
  {
    icon: Radio,
    title: "Blast Radius Mapping",
    description: "Instantly shows which services are impacted downstream so your team knows exactly what is affected and what to prioritise."
  },
  {
    icon: Ticket,
    title: "Automated Incident Ticketing",
    description: "Raises incident tickets in Jira and ServiceNow automatically — pre-filled with signals, impact assessment, root cause, and recommended actions."
  },
  {
    icon: Bot,
    title: "Intelligent Ticket Triage",
    description: "Reads open human-reported tickets, matches them to known services, and posts a full AI triage analysis — directly inside the ticket — without anyone asking."
  },
  {
    icon: Bell,
    title: "Multi-Channel Alerting",
    description: "Delivers structured incident alerts to Slack and Teams — with signals, impact, root cause, and the one action your team needs to take right now."
  },
  {
    icon: Map,
    title: "Topology Explorer",
    description: "An interactive, real-time service graph that highlights root cause nodes, blast radius, and dependency chains — so you can see the full picture at a glance."
  }
];

const colors = [
  { bg: "rgba(99,102,241,0.08)", border: "rgba(99,102,241,0.25)", icon: "#818cf8", title: "#e0e7ff", grad: "from-indigo-600/20 to-indigo-600/5" },
  { bg: "rgba(251,146,60,0.08)", border: "rgba(251,146,60,0.25)", icon: "#fb923c", title: "#fed7aa", grad: "from-orange-600/20 to-orange-600/5" },
  { bg: "rgba(6,182,212,0.08)", border: "rgba(6,182,212,0.25)", icon: "#06b6d4", title: "#cffafe", grad: "from-cyan-600/20 to-cyan-600/5" },
  { bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.25)", icon: "#a855f7", title: "#e9d5ff", grad: "from-purple-600/20 to-purple-600/5" },
  { bg: "rgba(34,197,94,0.08)", border: "rgba(34,197,94,0.25)", icon: "#22c55e", title: "#dcfce7", grad: "from-green-600/20 to-green-600/5" },
  { bg: "rgba(239,68,68,0.08)", border: "rgba(239,68,68,0.25)", icon: "#ef4444", title: "#fecaca", grad: "from-red-600/20 to-red-600/5" },
  { bg: "rgba(234,179,8,0.08)", border: "rgba(234,179,8,0.25)", icon: "#eab308", title: "#fef08a", grad: "from-yellow-600/20 to-yellow-600/5" },
  { bg: "rgba(20,184,166,0.08)", border: "rgba(20,184,166,0.25)", icon: "#14b8a6", title: "#99f6e4", grad: "from-teal-600/20 to-teal-600/5" },
  { bg: "rgba(244,114,182,0.08)", border: "rgba(244,114,182,0.25)", icon: "#f472b6", title: "#fbcfe8", grad: "from-pink-600/20 to-pink-600/5" },
];

export default function Features() {
  return (
    <section id="features" className="bg-gradient-to-b from-[#0d0f15] via-[#10131e] to-[#0d0f15] text-white py-6 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {features.map((feature, index) => {
            const color = colors[index % colors.length];
            return (
              <div
                key={index}
                className={`group p-4 rounded-xl backdrop-blur-xl border transition-all hover:border-opacity-100 hover:shadow-2xl duration-300 bg-gradient-to-br ${color.grad} cursor-pointer`}
                style={{
                  background: `linear-gradient(135deg, ${color.bg}, transparent)`,
                  borderColor: color.border,
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform shadow-lg backdrop-blur-sm"
                  style={{ background: `${color.icon}20`, boxShadow: `0 0 20px ${color.icon}40` }}
                >
                  <feature.icon size={20} style={{ color: color.icon }} />
                </div>
                <h3 className="text-sm font-semibold font-poppins mb-2" style={{ color: color.title }}>
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
