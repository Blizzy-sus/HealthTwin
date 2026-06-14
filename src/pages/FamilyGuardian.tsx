import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { getFamilyDashboard, type FamilyDashboard } from '../services/api';

export default function FamilyGuardianPage() {
  const [data, setData] = useState<FamilyDashboard | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getFamilyDashboard('demo-guardian-001')
      .then(setData)
      .catch((e: Error) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <TopBar title="Family Guardian" />

      <main className="ml-64 pt-16 flex-1 p-lg overflow-y-auto">
        <div className="max-w-5xl mx-auto space-y-lg">
          
          <div className="flex justify-between items-end border-b border-outline-variant pb-md">
            <div>
              <h2 className="text-headline-lg font-bold">Guardian Network</h2>
              <p className="text-on-surface-variant">Monitor health vitals of your dependents via their digital twins.</p>
            </div>
            <button className="flex items-center gap-xs text-primary font-bold hover:bg-primary/10 px-sm py-1 rounded transition-colors">
              <span className="material-symbols-outlined">person_add</span> Add Dependent
            </button>
          </div>

          {loading && <p>Loading family data...</p>}
          {error && <p className="text-error">{error}</p>}

          {data && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-md">
              {data.members.map((member, i) => {
                const isAlert = member.status === 'red' || member.status === 'yellow';
                
                return (
                  <div key={i} className={`p-lg rounded-2xl border-2 transition-colors ${
                    member.status === 'red' ? 'border-error bg-error-container/10' :
                    member.status === 'yellow' ? 'border-secondary bg-secondary-container/10' :
                    'border-outline-variant bg-surface-container'
                  }`}>
                    <div className="flex justify-between items-start mb-md">
                      <div className="w-12 h-12 rounded-full bg-surface-container-high border border-outline-variant flex items-center justify-center">
                        <span className="material-symbols-outlined text-2xl">face</span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                        member.status === 'red' ? 'bg-error text-on-error' :
                        member.status === 'yellow' ? 'bg-secondary text-on-secondary' :
                        'bg-primary/20 text-primary'
                      }`}>
                        {member.status === 'red' ? 'CRITICAL' : member.status === 'yellow' ? 'ATTENTION' : 'OPTIMAL'}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-xs">{member.name}</h3>
                    
                    <div className="mt-md pt-sm border-t border-outline-variant/30 flex items-start gap-sm">
                      <span className={`material-symbols-outlined mt-[2px] ${
                        member.status === 'red' ? 'text-error' :
                        member.status === 'yellow' ? 'text-secondary' :
                        'text-primary'
                      }`}>
                        {isAlert ? 'warning' : 'check_circle'}
                      </span>
                      <p className="text-sm opacity-90">{member.reason}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
