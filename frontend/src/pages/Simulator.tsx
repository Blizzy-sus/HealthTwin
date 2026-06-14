import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { getForecast, type ForecastResponse } from '../services/api';

export default function SimulatorPage() {
  const [walkMins, setWalkMins] = useState(30);
  const [weightLoss, setWeightLoss] = useState(0);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ForecastResponse | null>(null);
  const [error, setError] = useState('');

  const handleSimulate = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await getForecast('demo-user-001', {
        walk_minutes: walkMins,
        weight_loss_kg: weightLoss
      });
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <TopBar title="Future Me Simulator" />

      <main className="ml-64 pt-16 flex-1 p-lg overflow-y-auto">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-lg">
          
          {/* Controls */}
          <div className="lg:col-span-4 space-y-md">
            <div className="glass-panel p-lg rounded-2xl">
              <h2 className="text-headline-sm font-bold mb-md">Lifestyle Inputs</h2>
              
              <div className="space-y-lg">
                <div>
                  <div className="flex justify-between mb-xs">
                    <label className="text-label-caps font-bold text-outline">Daily Walk (Minutes)</label>
                    <span className="font-mono text-primary">{walkMins}m</span>
                  </div>
                  <input 
                    type="range" min="0" max="120" step="10" 
                    value={walkMins} onChange={e => setWalkMins(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <div>
                  <div className="flex justify-between mb-xs">
                    <label className="text-label-caps font-bold text-outline">Weight Loss Goal (kg)</label>
                    <span className="font-mono text-primary">{weightLoss}kg</span>
                  </div>
                  <input 
                    type="range" min="0" max="20" step="1" 
                    value={weightLoss} onChange={e => setWeightLoss(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                </div>

                <button 
                  onClick={handleSimulate}
                  disabled={loading}
                  className="w-full bg-primary text-on-primary font-bold py-sm rounded-lg hover:opacity-90 disabled:opacity-50"
                >
                  {loading ? 'Running AI Model...' : 'Simulate 5-Year Future'}
                </button>
                {error && <p className="text-error text-sm">{error}</p>}
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-8">
            {result ? (
              <div className="space-y-lg animate-in fade-in zoom-in-95">
                <div className="grid md:grid-cols-2 gap-md">
                   
                   {/* Scenario A: Baseline */}
                   <div className="p-lg rounded-2xl bg-surface-container border border-outline-variant">
                     <h3 className="text-lg font-bold mb-sm text-outline">{result.scenario_a.label}</h3>
                     <div className="mb-md">
                       <span className="text-[48px] font-light leading-none">{result.scenario_a.health_age_estimate}</span>
                       <span className="text-sm text-outline ml-xs uppercase">Est. Health Age</span>
                     </div>
                     <p className="text-sm opacity-80 mb-md h-16">{result.scenario_a.description}</p>
                     
                     <div className="space-y-sm">
                       <p className="text-label-caps text-outline">5-YEAR RISKS</p>
                       {Object.entries(result.scenario_a.projected_risks).map(([k, v]) => (
                         <div key={k} className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-xs">
                           <span className="capitalize">{k.replace('_', ' ')}</span>
                           <span className={v > 50 ? 'text-error' : 'text-primary'}>{v}%</span>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Scenario B: Interventions */}
                   <div className="p-lg rounded-2xl bg-surface-container-low border-2 border-primary/50 relative overflow-hidden">
                     <div className="absolute top-0 right-0 bg-primary text-on-primary text-xs font-bold px-sm py-1 rounded-bl-lg">OPTIMIZED</div>
                     <h3 className="text-lg font-bold mb-sm text-primary">{result.scenario_b.label}</h3>
                     <div className="mb-md text-primary">
                       <span className="text-[48px] font-light leading-none">{result.scenario_b.health_age_estimate}</span>
                       <span className="text-sm ml-xs uppercase">Est. Health Age</span>
                     </div>
                     <p className="text-sm opacity-90 mb-md h-16">{result.scenario_b.description}</p>
                     
                     <div className="space-y-sm">
                       <p className="text-label-caps text-outline">5-YEAR RISKS</p>
                       {Object.entries(result.scenario_b.projected_risks).map(([k, v]) => {
                         const baseV = result.scenario_a.projected_risks[k];
                         const improved = v < baseV;
                         return (
                           <div key={k} className="flex justify-between items-center text-sm border-b border-outline-variant/30 pb-xs">
                             <span className="capitalize">{k.replace('_', ' ')}</span>
                             <span className={improved ? 'text-green-400 font-bold' : 'text-primary'}>
                               {v}% {improved && `(↓${baseV - v}%)`}
                             </span>
                           </div>
                         );
                       })}
                     </div>
                   </div>

                </div>
                
                <p className="text-xs text-outline italic text-center px-lg">{result.disclaimer}</p>
              </div>
            ) : (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center border-2 border-dashed border-outline-variant rounded-2xl text-on-surface-variant/50">
                 <span className="material-symbols-outlined text-[64px] mb-sm">all_inclusive</span>
                 <p className="font-bold text-lg">Adjust sliders and run simulation to forecast future health trajectories.</p>
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}
