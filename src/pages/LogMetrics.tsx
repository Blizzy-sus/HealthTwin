import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { logMetric } from '../services/api';

export default function LogMetricsPage() {
  const [metricName, setMetricName] = useState('heart_rate');
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      await logMetric({
        user_id: 'demo-user-001',
        metric_name: metricName,
        value: Number(value),
        recorded_date: new Date().toISOString().split('T')[0]
      });
      setStatus({ type: 'success', msg: `Successfully logged ${metricName} = ${value}` });
      setValue('');
    } catch (err: any) {
      setStatus({ type: 'error', msg: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <TopBar title="Log Metrics" />

      <main className="ml-64 pt-16 flex-1 p-lg">
        <div className="max-w-2xl mx-auto space-y-lg">
          <div className="text-center mb-xl">
            <h2 className="text-headline-lg font-bold">Manual Data Sync</h2>
            <p className="text-on-surface-variant mt-sm">Input real-world metrics to refine your digital twin's accuracy.</p>
          </div>

          <form onSubmit={handleSubmit} className="glass-panel p-xl rounded-2xl space-y-lg">
            {status && (
              <div className={`p-md rounded-lg ${status.type === 'success' ? 'bg-primary/20 text-primary border border-primary/30' : 'bg-error-container/20 text-error border border-error/30'}`}>
                {status.msg}
              </div>
            )}

            <div>
              <label className="block text-label-caps font-bold text-outline mb-sm">SELECT BIOMARKER</label>
              <select 
                value={metricName} 
                onChange={e => setMetricName(e.target.value)}
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-md text-body-lg focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="heart_rate">Heart Rate (BPM)</option>
                <option value="steps">Steps</option>
                <option value="sleep_hours">Sleep (Hours)</option>
                <option value="bp_systolic">Blood Pressure (Systolic)</option>
                <option value="bp_diastolic">Blood Pressure (Diastolic)</option>
              </select>
            </div>

            <div>
              <label className="block text-label-caps font-bold text-outline mb-sm">RECORDED VALUE</label>
              <input 
                type="number" 
                step="any"
                required
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder="e.g. 75"
                className="w-full bg-surface-container border border-outline-variant rounded-lg p-md text-body-lg focus:ring-2 focus:ring-primary outline-none"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-primary text-on-primary font-bold py-md rounded-lg text-lg hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? 'Syncing...' : 'Inject Data to Twin'}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
