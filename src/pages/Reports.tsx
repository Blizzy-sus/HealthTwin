import { useState, useRef } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import { uploadReport, type ReportTranslation } from '../services/api';

export default function ReportsPage() {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<ReportTranslation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const data = await uploadReport(file);
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
      <TopBar title="Medical Reports" />

      <main className="ml-64 pt-16 flex-1 p-lg">
        <div className="max-w-4xl mx-auto space-y-lg">
          
          <section className="glass-panel p-xl rounded-2xl text-center border-dashed border-2 border-outline-variant hover:border-primary/50 transition-colors">
             <span className="material-symbols-outlined text-[48px] text-primary mb-md">upload_file</span>
             <h2 className="text-headline-md font-bold mb-xs">Upload Lab Report</h2>
             <p className="text-on-surface-variant mb-lg">AI will extract metrics and translate medical jargon to plain English.</p>
             
             <input 
               type="file" 
               accept="image/*,application/pdf"
               className="hidden" 
               ref={fileInput}
               onChange={e => setFile(e.target.files?.[0] || null)}
             />
             
             <div className="flex flex-col items-center gap-md">
               <button 
                 onClick={() => fileInput.current?.click()}
                 className="bg-surface-container border border-outline text-on-surface font-bold py-sm px-xl rounded-lg hover:bg-surface-container-high transition-colors"
               >
                 {file ? file.name : 'Select PDF or Image'}
               </button>
               
               {file && (
                 <button 
                   onClick={handleUpload}
                   disabled={loading}
                   className="bg-primary text-on-primary font-bold py-sm px-xl rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50"
                 >
                   {loading ? 'Analyzing...' : 'Translate & Sync to Twin'}
                 </button>
               )}
             </div>
             
             {error && <p className="text-error mt-md">{error}</p>}
          </section>

          {result && (
            <section className="space-y-lg animate-in fade-in slide-in-from-bottom-4">
               <div className="p-lg bg-surface-container rounded-xl border border-outline-variant">
                 <h3 className="text-headline-sm font-bold text-primary mb-sm">AI Summary</h3>
                 <p className="text-body-lg leading-relaxed">{result.summary}</p>
               </div>

               <div>
                 <h3 className="text-headline-sm font-bold mb-md">Extracted Biomarkers</h3>
                 <div className="grid gap-sm">
                   {result.values.map((v, i) => (
                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between p-md bg-surface-container-low border border-outline-variant rounded-lg gap-md">
                        <div className="flex-1">
                          <p className="font-bold text-lg">{v.name}</p>
                          <p className="text-sm text-on-surface-variant mt-xs">{v.plain_english}</p>
                        </div>
                        <div className="flex items-center gap-md">
                          <span className="text-xl font-mono">{v.value}</span>
                          <span className={`px-sm py-1 rounded text-xs font-bold uppercase tracking-wider ${
                            v.status === 'normal' ? 'bg-primary/20 text-primary' :
                            v.status === 'above_range' ? 'bg-error/20 text-error' :
                            'bg-secondary/20 text-secondary'
                          }`}>
                            {v.status.replace('_', ' ')}
                          </span>
                        </div>
                     </div>
                   ))}
                 </div>
               </div>
            </section>
          )}

        </div>
      </main>
    </div>
  );
}
