import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { getTwinStatus, type TwinStatus } from '../services/api';

export default function Dashboard() {
  const [data, setData] = useState<TwinStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getTwinStatus('demo-user-001')
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long' });

  return (
    <div className="min-h-screen bg-background text-on-background">
      <Sidebar />
      <TopBar title="Dashboard" />

      <main className="ml-64 pt-16 min-h-screen">
        <div className="p-lg max-w-7xl mx-auto space-y-lg">

          {/* Header */}
          <section className="flex flex-col gap-xs mb-md">
            <h2 className="text-headline-lg font-headline-lg text-on-surface">Today {today}</h2>
            <div className="flex items-center gap-sm">
              <span className="text-headline-md font-headline-md text-primary">
                {loading ? 'Loading…' : error ? 'Error' : data?.deviation_summary?.includes('Attention') ? 'Attention Needed' : 'Good Activity'}
              </span>
              <span className="px-sm py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-caps font-label-caps flex items-center gap-xs">
                <span className="w-2 h-2 rounded-full bg-primary" />
                AI OPTIMIZED
              </span>
            </div>
          </section>

          {loading && (
            <div className="flex items-center justify-center h-64">
              <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </div>
          )}

          {error && (
            <div className="p-md rounded-xl border border-error/40 bg-error-container/20 text-error">
              <p className="font-bold mb-xs flex items-center gap-sm">
                <span className="material-symbols-outlined">error</span> Backend unreachable
              </p>
              <p className="text-sm opacity-80">{error}</p>
              <p className="text-sm mt-sm opacity-60">Make sure <code className="bg-surface-container px-xs rounded">uvicorn main:app --reload</code> is running on port 8000.</p>
            </div>
          )}

          {data && (
            <>
              {/* Trend Alerts */}
              {data.trend_alerts.length > 0 && (
                <div className="p-lg rounded-xl glass-panel">
                  <h3 className="text-headline-md font-headline-md flex items-center gap-sm mb-md">
                    <span className="material-symbols-outlined text-primary">auto_awesome</span>
                    Twin Insights
                    <span className="ml-auto px-xs py-1 rounded bg-primary/20 text-label-caps font-label-caps text-primary border border-primary/20">
                      {data.trend_alerts.length} ALERT{data.trend_alerts.length > 1 ? 'S' : ''}
                    </span>
                  </h3>
                  <div className="space-y-md">
                    {data.trend_alerts.map((alert, i) => (
                      <div key={i} className="p-md rounded-lg bg-surface-container-lowest/50 border-l-4 border-primary">
                        <p className="text-body-md font-bold mb-xs capitalize">
                          {alert.metric_name.replace('_', ' ')} — {alert.direction}
                          <span className="ml-sm text-sm font-normal text-on-surface-variant">({alert.consecutive_days} days, +{alert.deviation_pct.toFixed(1)}%)</span>
                        </p>
                        <p className="text-body-md text-on-surface-variant opacity-80">{alert.message}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Baselines Grid */}
              <div>
                <h3 className="text-headline-md font-headline-md mb-md">Health Baselines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                  {data.baselines.map((b) => {
                    const diff = b.latest - b.average;
                    const pct = ((diff / b.average) * 100).toFixed(1);
                    const rising = diff > 0;
                    return (
                      <div key={b.metric_name} className="p-md rounded-xl bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer group">
                        <div className="flex justify-between items-start mb-md">
                          <span className="text-label-caps font-label-caps text-on-surface-variant uppercase">
                            {b.metric_name.replace(/_/g, ' ')}
                          </span>
                          <span className={`material-symbols-outlined text-sm ${rising ? 'text-error' : 'text-primary'}`}>
                            {rising ? 'trending_up' : 'trending_down'}
                          </span>
                        </div>
                        <div className="mb-sm">
                          <h4 className="text-data-metric font-data-metric">
                            <span className="text-3xl font-bold">{b.latest}</span>
                            <span className="text-sm ml-xs opacity-60">latest</span>
                          </h4>
                          <p className="text-sm text-secondary-fixed-dim">
                            Avg: {b.average.toFixed(1)} &nbsp;·&nbsp;
                            <span className={rising ? 'text-error' : 'text-primary'}>{rising ? '+' : ''}{pct}%</span>
                          </p>
                        </div>
                        {/* Mini sparkline */}
                        <div className="h-1.5 w-full bg-surface-container-highest rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full ${rising ? 'bg-error/70' : 'bg-primary'}`}
                            style={{ width: `${Math.min(100, (b.latest / (b.average * 1.5)) * 100)}%` }}
                          />
                        </div>
                        <p className="text-[10px] text-outline mt-xs">{b.data_points} data points</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Summary */}
              <div className="p-md rounded-xl bg-surface-container border border-outline-variant">
                <p className="text-label-caps font-label-caps text-outline mb-xs">DEVIATION SUMMARY</p>
                <p className="text-body-lg">{data.deviation_summary}</p>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
