export default function SolutionOverview() {
  return (
    <section id="how-it-works" className="bg-gradient-to-b from-[#0d0f15] via-[#10131e] to-[#0d0f15] text-white py-16 px-4 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-4 text-white">How It Works</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">From raw signals to resolved incidents — fully automated.</p>
        </div>

        <div className="bg-gradient-to-br from-[#12141c] via-[#0d0f15] to-[#10131e] border border-indigo-500/10 rounded-2xl p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-start">

            {/* Column 1: Data Sources */}
            <div className="w-full md:w-44 md:flex-shrink-0">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                <span className="text-xs font-bold tracking-wider text-blue-400 uppercase">Data Sources</span>
              </div>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4 mb-3">
                <div className="text-sm font-bold text-blue-300 mb-3">Signal Types</div>
                {["Logs", "Infrastructure", "Deployments", "Incidents", "Runbooks"].map(s => (
                  <div key={s} className="bg-blue-500/5 border border-blue-500/10 rounded px-3 py-1.5 mb-1.5 text-xs text-blue-300/80">{s}</div>
                ))}
              </div>
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-4">
                <div className="text-sm font-bold text-blue-300 mb-3">Supported Platforms</div>
                <p className="text-xs text-blue-300/70 leading-6">
                  CloudWatch · Azure Monitor · GCP Ops · Datadog · Splunk · Dynatrace · New Relic · ELK · ServiceNow · Jira · PagerDuty · Confluence · SharePoint
                </p>
                <div className="mt-3 text-xs font-bold text-blue-400 tracking-wide">20+ integrations</div>
              </div>
            </div>

            {/* Arrow desktop */}
            <div className="hidden md:flex self-center items-center justify-center text-slate-600 text-2xl flex-shrink-0 pt-8">›</div>
            {/* Arrow mobile */}
            <div className="md:hidden text-center text-slate-600 text-2xl">↓</div>

            {/* Column 2: Core Intelligence Engine */}
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Core Intelligence Engine</span>
              </div>
              <div className="flex flex-col gap-2">

                <div className="relative rounded-xl p-4 bg-indigo-500/10 border border-indigo-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-indigo-400"></div>
                  <div className="text-base font-bold text-indigo-200 mb-1">Discovery Engine</div>
                  <div className="text-xs text-indigo-300/70 mb-2">Maps your system and learns what&apos;s normal</div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-indigo-500/15 text-indigo-400">Topology &amp; Telemetry Intelligence</span>
                </div>

                <div className="text-center text-slate-600 text-sm">↓</div>

                <div className="relative rounded-xl p-4 bg-orange-500/10 border border-orange-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-600 to-orange-400"></div>
                  <div className="text-base font-bold text-orange-200 mb-1">Anomaly Engine</div>
                  <div className="text-xs text-orange-300/70 mb-2">Detects issues the moment behaviour deviates</div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-orange-500/15 text-orange-400">Anomaly Detection</span>
                </div>

                <div className="text-center text-slate-600 text-sm">↓</div>

                <div className="relative rounded-xl p-4 bg-purple-500/10 border border-purple-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-purple-400"></div>
                  <div className="text-base font-bold text-purple-200 mb-1">Causal AI Engine</div>
                  <div className="text-xs text-purple-300/70 mb-2">Finds root cause instantly with confidence</div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-purple-500/15 text-purple-400">Root Cause Intelligence</span>
                </div>

                <div className="text-center text-slate-600 text-sm">↓</div>

                <div className="relative rounded-xl p-4 bg-green-500/10 border border-green-500/20 overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-green-600 to-green-400"></div>
                  <div className="text-base font-bold text-green-200 mb-1">Action Engine</div>
                  <div className="text-xs text-green-300/70 mb-2">Turns insights into alerts, tickets, and actions</div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-green-500/15 text-green-400">Alert &amp; Response</span>
                </div>

              </div>
            </div>

            {/* Arrow desktop */}
            <div className="hidden md:flex self-center items-center justify-center text-slate-600 text-2xl flex-shrink-0 pt-8">›</div>
            {/* Arrow mobile */}
            <div className="md:hidden text-center text-slate-600 text-2xl">↓</div>

            {/* Column 3: Outputs */}
            <div className="w-full md:w-52 md:flex-shrink-0">

              {/* Topology Explorer */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-indigo-500"></div>
                  <span className="text-xs font-bold tracking-wider text-indigo-400 uppercase">Topology Explorer</span>
                </div>
                <div className="bg-indigo-500/5 border border-indigo-500/15 rounded-xl p-4">
                  {["Service Topology View", "Anomaly & Blast Radius", "Dependency Navigation", "Service Filtering"].map(item => (
                    <div key={item} className="bg-indigo-500/6 border border-indigo-500/12 rounded px-3 py-1.5 mb-1.5 text-xs text-indigo-300">{item}</div>
                  ))}
                </div>
              </div>

              {/* Actions & Notifications */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-xs font-bold tracking-wider text-green-400 uppercase">Actions &amp; Notifications</span>
                </div>
                <div className="bg-green-500/5 border border-green-500/12 rounded-xl p-4 mb-3">
                  <div className="text-sm font-bold text-green-300 mb-3">Channels</div>
                  <div className="text-xs text-green-300/70 leading-6">
                    {["Slack", "Teams", "Jira", "ServiceNow", "Others"].map(ch => (
                      <div key={ch}>{ch}</div>
                    ))}
                  </div>
                </div>
                <div className="bg-green-500/5 border border-green-500/12 rounded-xl p-4">
                  <div className="text-sm font-bold text-green-300 mb-3">Delivers</div>
                  <div className="text-xs text-green-300/70 leading-6">
                    {["Issue Summary", "Root Cause + Confidence", "Impact Assessment", "Recommended Actions"].map(d => (
                      <div key={d}>{d}</div>
                    ))}
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
