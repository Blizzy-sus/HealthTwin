import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { getTwinStatus, type TwinStatus } from '../services/api';

export default function TwinStatusPage() {
  const [data, setData] = useState<TwinStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTwinStatus('demo-user-001')
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <TopBar />

      {/* Main Content Canvas */}
      <main className="ml-64 pt-16 h-screen overflow-hidden flex w-full">
        
        {/* Left: Bio-Sync Status Panel */}
        <section className="w-80 h-full border-r border-outline-variant/20 p-md overflow-y-auto space-y-md shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-label-caps font-label-caps text-outline">Bio-Sync Streams</h3>
            <span className="flex items-center gap-xs text-[10px] text-primary/80 uppercase font-bold">
              <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></span> Live
            </span>
          </div>

          {loading && <p className="text-sm opacity-70">Syncing telemetry...</p>}
          {error && <p className="text-sm text-error">{error}</p>}

          {data && data.baselines.map(b => {
             // Map metric names to icons/colors for visual flair
             let icon = 'monitor_heart';
             let iconColor = 'text-primary';
             let unit = '';
             if (b.metric_name === 'heart_rate') { icon = 'favorite'; unit = 'BPM'; }
             if (b.metric_name === 'steps') { icon = 'footprint'; iconColor = 'text-secondary'; unit = 'STEPS'; }
             if (b.metric_name === 'sleep_hours') { icon = 'bedtime'; iconColor = 'text-on-tertiary-container'; unit = 'HOURS'; }
             if (b.metric_name === 'bp_systolic') { icon = 'bloodtype'; unit = 'mmHg'; }

             return (
              <div key={b.metric_name} className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
                <div className="flex justify-between items-start mb-xs">
                  <span className="text-label-caps font-label-caps text-outline uppercase">{b.metric_name.replace('_', ' ')}</span>
                  <span className={`material-symbols-outlined text-sm ${iconColor}`}>{icon}</span>
                </div>
                <div className="flex items-baseline gap-xs">
                  <span className="text-headline-md font-headline-md font-data-metric text-on-surface">{b.latest}</span>
                  <span className="text-label-caps font-label-caps text-outline">{unit}</span>
                </div>
                <p className="text-[11px] text-secondary mt-xs flex items-center gap-xs">
                  <span className="material-symbols-outlined text-sm">timeline</span>
                  Avg: {b.average.toFixed(1)}
                </p>
              </div>
             )
          })}

          <div className="mt-lg">
            <h3 className="text-label-caps font-label-caps text-outline mb-md">System Log (Bio-Sync)</h3>
            <div className="space-y-sm text-[12px] font-mono opacity-80">
              <div className="flex items-start gap-sm">
                <span className="text-primary shrink-0">[Live]</span>
                <span>Neural latency stabilized.</span>
              </div>
              {data?.trend_alerts.map((alert, i) => (
                 <div key={i} className="flex items-start gap-sm">
                   <span className="text-secondary shrink-0">[Alert]</span>
                   <span>{alert.message}</span>
                 </div>
              ))}
            </div>
          </div>
        </section>

        {/* Center: Immersive 3D/Visualization Area Placeholder */}
        <section className="flex-1 relative bg-surface-dim overflow-hidden flex flex-col items-center justify-center p-xl">
           <div className="relative w-full max-w-md aspect-square rounded-full border-2 border-outline-variant/30 flex items-center justify-center">
              <div className="absolute inset-4 rounded-full border border-primary/20 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-8 rounded-full border border-secondary/20 animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="text-center z-10 p-md glass-panel rounded-2xl max-w-sm">
                 <span className="material-symbols-outlined text-[64px] text-primary mb-md">accessibility_new</span>
                 <h2 className="text-headline-md font-bold mb-sm">Twin Fidelity Active</h2>
                 <p className="text-sm opacity-80">
                   {data?.deviation_summary || "Waiting for data..."}
                 </p>
              </div>
           </div>
        </section>

      </main>
    </div>
  );
}
