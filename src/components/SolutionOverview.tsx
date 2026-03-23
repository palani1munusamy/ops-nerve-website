export default function SolutionOverview() {
  const diagramHTML = `
    <div class="container" style="width:725px;background:linear-gradient(145deg,#12141c,#0d0f15,#10131e);border:1px solid rgba(99,102,241,.12);border-radius:16px;padding:28px 32px 24px;box-shadow:0 0 60px rgba(99,102,241,.05);margin:0 auto;">
      <div class="hdr" style="text-align:center;margin-bottom:18px">
        <div style="display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:6px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="52" height="52">
            <defs>
              <radialGradient id="bg" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#1e1f35"/><stop offset="100%" stop-color="#0d0f15"/>
              </radialGradient>
              <radialGradient id="core" cx="40%" cy="35%" r="65%">
                <stop offset="0%" stop-color="#a78bfa"/><stop offset="100%" stop-color="#6366f1"/>
              </radialGradient>
              <linearGradient id="ring" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#818cf8"/><stop offset="100%" stop-color="#a855f7"/>
              </linearGradient>
              <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
              <filter id="softglow" x="-60%" y="-60%" width="220%" height="220%">
                <feGaussianBlur stdDeviation="3.5" result="blur"/>
                <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#bg)"/>
            <circle cx="50" cy="50" r="47" fill="none" stroke="url(#ring)" stroke-width="1.2" opacity="0.5"/>
            <line x1="50" y1="50" x2="50" y2="20" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="50" cy="20" r="3.5" fill="#818cf8" opacity="0.85" filter="url(#glow)"/>
            <line x1="50" y1="50" x2="73" y2="30" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="73" cy="30" r="3" fill="#a78bfa" opacity="0.8" filter="url(#glow)"/>
            <line x1="50" y1="50" x2="76" y2="65" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="76" cy="65" r="2.5" fill="#818cf8" opacity="0.7" filter="url(#glow)"/>
            <line x1="50" y1="50" x2="50" y2="80" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="50" cy="80" r="3" fill="#a855f7" opacity="0.75" filter="url(#glow)"/>
            <line x1="50" y1="50" x2="24" y2="65" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="24" cy="65" r="2.5" fill="#818cf8" opacity="0.7" filter="url(#glow)"/>
            <line x1="50" y1="50" x2="27" y2="30" stroke="#6366f1" stroke-width="1" opacity="0.5"/>
            <circle cx="27" cy="30" r="3" fill="#a78bfa" opacity="0.8" filter="url(#glow)"/>
            <line x1="50" y1="20" x2="73" y2="30" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <line x1="73" y1="30" x2="76" y2="65" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <line x1="76" y1="65" x2="50" y2="80" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <line x1="50" y1="80" x2="24" y2="65" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <line x1="24" y1="65" x2="27" y2="30" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <line x1="27" y1="30" x2="50" y2="20" stroke="#818cf8" stroke-width="0.6" opacity="0.25"/>
            <circle cx="50" cy="50" r="14" fill="none" stroke="#6366f1" stroke-width="0.8" opacity="0.35"/>
            <circle cx="50" cy="50" r="10" fill="url(#core)" filter="url(#softglow)"/>
            <circle cx="47" cy="47" r="3.5" fill="white" opacity="0.15"/>
          </svg>
          <h1 style="font-size:26px;font-weight:800;background:linear-gradient(135deg,#818cf8,#a78bfa,#c084fc);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin:0">OpsNerve Solution Overview</h1>
        </div>
        <div style="font-size:13px;color:#94a3b8;margin-top:3px">AI Powered Tool-Agnostic Ops — Monitoring, Triaging, and Root Cause Intelligence</div>
        <div style="margin-top:10px;font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:1.4px;color:#818cf8">Detect issues in minutes &nbsp;·&nbsp; Identify root cause instantly &nbsp;·&nbsp; Act with confidence</div>
      </div>

      <div style="display:flex;gap:12px;align-items:stretch">
        <!-- Data Sources -->
        <div style="width:145px;flex-shrink:0;display:flex;flex-direction:column">
          <div style="border:1px solid rgba(100,116,139,.08);border-radius:12px;padding:12px;background:rgba(14,16,24,.5);height:100%">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px">
              <div style="width:6px;height:6px;border-radius:50%;background:#3b82f6"></div>
              <div style="font-size:10px;font-weight:700;letter-spacing:.4px;color:#3b82f6">Data Sources</div>
            </div>
            <div style="background:rgba(59,130,246,.06);border:1px solid rgba(59,130,246,.16);border-radius:8px;padding:10px 12px;margin-bottom:8px">
              <div style="font-size:15px;font-weight:700;color:#93c5fd;margin-bottom:6px">Signal Types</div>
              <div style="background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#7db8f0">Logs</div>
              <div style="background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#7db8f0">Infrastructure</div>
              <div style="background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#7db8f0">Deployments</div>
              <div style="background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#7db8f0">Incidents</div>
              <div style="background:rgba(59,130,246,.05);border:1px solid rgba(59,130,246,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#7db8f0">Runbooks</div>
            </div>
            <div style="background:rgba(59,130,246,.06);border:1px solid rgba(59,130,246,.16);border-radius:8px;padding:10px 12px;margin-bottom:8px">
              <div style="font-size:15px;font-weight:700;color:#93c5fd;margin-bottom:6px">Supported Platforms</div>
              <div style="font-size:11px;color:#7db8f0;line-height:2">
                CloudWatch <span style="opacity:.35">·</span> Azure Monitor <span style="opacity:.35">·</span> GCP Ops <span style="opacity:.35">·</span> Datadog <span style="opacity:.35">·</span> Splunk <span style="opacity:.35">·</span> Dynatrace <span style="opacity:.35">·</span> New Relic <span style="opacity:.35">·</span> ELK <span style="opacity:.35">·</span> ServiceNow <span style="opacity:.35">·</span> Jira <span style="opacity:.35">·</span> PagerDuty <span style="opacity:.35">·</span> Confluence <span style="opacity:.35">·</span> SharePoint
              </div>
              <div style="margin-top:8px;font-size:10px;font-weight:700;color:#3b82f6;letter-spacing:.5px">20+ integrations</div>
            </div>
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:center;width:18px;flex-shrink:0;color:#334155;font-size:18px;opacity:.5">›</div>

        <!-- Core Intelligence -->
        <div style="flex:1;max-width:320px;display:flex;flex-direction:column">
          <div style="border:1px solid rgba(100,116,139,.08);border-radius:12px;padding:12px;background:rgba(14,16,24,.5);height:100%">
            <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px">
              <div style="width:6px;height:6px;border-radius:50%;background:#6366f1"></div>
              <div style="font-size:10px;font-weight:700;letter-spacing:.4px;color:#6366f1">Core Intelligence Engine</div>
            </div>

            <div style="background:linear-gradient(135deg,rgba(99,102,241,.1),rgba(129,140,248,.04));border:1px solid rgba(99,102,241,.22);border-radius:12px;padding:14px 16px;position:relative;overflow:hidden;margin-bottom:10px">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;border-radius:12px 12px 0 0;background:linear-gradient(90deg,#6366f1,#818cf8)"></div>
              <div style="font-size:17px;font-weight:700;margin-bottom:4px;color:#c7d2fe">Discovery Engine</div>
              <div style="font-size:11px;font-weight:400;line-height:1.5;opacity:.7;color:#a5b4fc">Maps your system and learns what's normal</div>
              <div style="display:inline-block;font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:3px 6px;border-radius:3px;margin-top:6px;background:rgba(99,102,241,.15);color:#818cf8">Topology &amp; Telemetry Intelligence</div>
            </div>

            <div style="text-align:center;font-size:10px;color:#475569;margin:5px 0">↓</div>

            <div style="background:linear-gradient(135deg,rgba(251,146,60,.1),rgba(249,115,22,.04));border:1px solid rgba(251,146,60,.22);border-radius:12px;padding:14px 16px;position:relative;overflow:hidden;margin-bottom:10px">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;border-radius:12px 12px 0 0;background:linear-gradient(90deg,#f97316,#fb923c)"></div>
              <div style="font-size:17px;font-weight:700;margin-bottom:4px;color:#fed7aa">Anomaly Engine</div>
              <div style="font-size:11px;font-weight:400;line-height:1.5;opacity:.7;color:#fdba74">Detects issues the moment behavior deviates</div>
              <div style="display:inline-block;font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:3px 6px;border-radius:3px;margin-top:6px;background:rgba(251,146,60,.15);color:#fb923c">Anomaly Detection</div>
            </div>

            <div style="text-align:center;font-size:10px;color:#475569;margin:5px 0">↓</div>

            <div style="background:linear-gradient(135deg,rgba(168,85,247,.1),rgba(147,51,234,.04));border:1px solid rgba(168,85,247,.22);border-radius:12px;padding:14px 16px;position:relative;overflow:hidden;margin-bottom:10px">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;border-radius:12px 12px 0 0;background:linear-gradient(90deg,#9333ea,#a855f7)"></div>
              <div style="font-size:17px;font-weight:700;margin-bottom:4px;color:#ddd6fe">Causal AI Engine</div>
              <div style="font-size:11px;font-weight:400;line-height:1.5;opacity:.7;color:#c4b5fd">Finds root cause instantly with confidence</div>
              <div style="display:inline-block;font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:3px 6px;border-radius:3px;margin-top:6px;background:rgba(168,85,247,.15);color:#a855f7">Root Cause Intelligence</div>
            </div>

            <div style="text-align:center;font-size:10px;color:#475569;margin:5px 0">↓</div>

            <div style="background:linear-gradient(135deg,rgba(34,197,94,.1),rgba(16,185,129,.04));border:1px solid rgba(34,197,94,.22);border-radius:12px;padding:14px 16px;position:relative;overflow:hidden;margin-bottom:10px">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;border-radius:12px 12px 0 0;background:linear-gradient(90deg,#10b981,#22c55e)"></div>
              <div style="font-size:17px;font-weight:700;margin-bottom:4px;color:#bbf7d0">Action Engine</div>
              <div style="font-size:11px;font-weight:400;line-height:1.5;opacity:.7;color:#86efac">Turns insights into alerts, tickets, and actions</div>
              <div style="display:inline-block;font-size:8.5px;font-weight:700;text-transform:uppercase;letter-spacing:.8px;padding:3px 6px;border-radius:3px;margin-top:6px;background:rgba(34,197,94,.15);color:#22c55e">Alert &amp; Response</div>
            </div>
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:center;width:18px;flex-shrink:0;color:#334155;font-size:18px;opacity:.5">›</div>

        <!-- Outputs -->
        <div style="width:210px;flex-shrink:0">
          <div style="border:1px solid rgba(100,116,139,.08);border-radius:12px;padding:12px;background:rgba(14,16,24,.5);height:100%;display:flex;flex-direction:column;gap:14px">
            <div>
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px">
                <div style="width:6px;height:6px;border-radius:50%;background:#6366f1"></div>
                <div style="font-size:10px;font-weight:700;letter-spacing:.4px;color:#6366f1">Topology Explorer</div>
              </div>
              <div style="background:rgba(99,102,241,.05);border:1px solid rgba(99,102,241,.18);border-radius:8px;padding:10px 12px;margin-bottom:8px">
                <div style="display:flex;flex-direction:column;gap:4px">
                  <div style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.15);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#818cf8">Service Topology View</div>
                  <div style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.15);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#818cf8">Anomaly &amp; Blast Radius</div>
                  <div style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.15);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#818cf8">Dependency Navigation</div>
                  <div style="background:rgba(99,102,241,.06);border:1px solid rgba(99,102,241,.15);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#818cf8">Service Filtering</div>
                </div>
              </div>
            </div>

            <div>
              <div style="display:flex;align-items:center;gap:5px;margin-bottom:8px">
                <div style="width:6px;height:6px;border-radius:50%;background:#22c55e"></div>
                <div style="font-size:10px;font-weight:700;letter-spacing:.4px;color:#22c55e">Actions &amp; Notifications</div>
              </div>
              <div style="background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.14);border-radius:8px;padding:10px 12px;margin-bottom:8px">
                <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:6px">Channels</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Slack</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Teams</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Jira</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">ServiceNow</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7;opacity:.55;border-style:dashed">Others</div>
              </div>
              <div style="background:rgba(34,197,94,.05);border:1px solid rgba(34,197,94,.14);border-radius:8px;padding:10px 12px;margin-top:8px">
                <div style="font-size:11px;font-weight:700;color:#86efac;margin-bottom:6px">Delivers</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Issue Summary</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Root Cause + Confidence</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Impact Assessment</div>
                <div style="background:rgba(34,197,94,.06);border:1px solid rgba(34,197,94,.1);border-radius:5px;padding:4px 10px;margin-bottom:4px;font-size:11px;color:#6ee7b7">Recommended Actions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  return (
    <section className="bg-slate-800 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
<div dangerouslySetInnerHTML={{ __html: diagramHTML }} />
      </div>
    </section>
  );
}
