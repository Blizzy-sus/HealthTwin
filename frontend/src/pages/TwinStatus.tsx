import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function TwinStatus() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (twinApi.getTwinStatus('demo-user-001') === null) return;
    twinApi.getTwinStatus('demo-user-001')
      .then(setData)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da]">
      {/* Exported from Stitch */}
      <div dangerouslySetInnerHTML={{ __html: `
{/*  SideNavBar (Authority: JSON)  */}
<aside className="h-full w-64 fixed left-0 top-0 flex flex-col h-screen py-md px-sm bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant z-50">
<div className="mb-lg px-xs">
<div className="flex items-center gap-xs">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary text-[20px]">psychology</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary leading-tight">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-base overflow-y-auto">
{/*  Navigation Items Mapping  */}
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
{/*  Active Navigation Style Execution  */}
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-all duration-150" href="#">
<span className="material-symbols-outlined" style={{}}>psychology</span>
<span className="font-body-md text-body-md">Twin Status</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">add_chart</span>
<span className="font-body-md text-body-md">Log Metrics</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">model_training</span>
<span className="font-body-md text-body-md">Simulator</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm rounded-lg text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-high dark:hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">family_restroom</span>
<span className="font-body-md text-body-md">Family Guardian</span>
</a>
</nav>
<div className="mt-auto pt-lg border-t border-outline-variant/30 px-xs space-y-base">
<button className="w-full bg-tertiary-fixed text-on-tertiary py-sm rounded-lg font-bold text-label-caps mb-md hover:brightness-95 transition-all">
                Sync Data
            </button>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
<a className="flex items-center gap-sm px-sm py-sm text-on-surface-variant hover:text-primary transition-colors" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-body-md text-body-md">Support</span>
</a>
</div>
</aside>
{/*  TopNavBar (Authority: JSON)  */}
<header className="fixed top-0 right-0 h-16 w-[calc(100%-16rem)] flex justify-between items-center px-lg bg-background dark:bg-background z-40">
<div className="flex items-center gap-lg">
<div className="relative flex items-center bg-surface-container rounded-full px-sm py-xs w-96 border border-outline-variant/30 focus-within:ring-1 focus-within:ring-primary">
<span className="material-symbols-outlined text-outline">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-full placeholder:text-outline/60" placeholder="Search Health Insights..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="relative p-xs hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="flex items-center gap-sm pl-sm border-l border-outline-variant/30">
<div className="text-right">
<p className="text-label-caps font-label-caps text-on-surface">Alex Mercer</p>
<p className="text-[10px] text-outline uppercase tracking-widest">Active Mirroring</p>
</div>
<img alt="User profile picture" className="w-10 h-10 rounded-full border border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQGuRv_riXaocR7cQdp4vGtMVYSYbQg5XNtme7zWYUShOiwF-6RT6I45N-GjcpiEzHujfv-QNjj7g3IrwiCFmpyN4jRNUFwBtay1SaYLqXI33mCYW6A4PbiCWeDDJN0mDRV38-amgKTRdmhjbO_ijvvs3MqKbm08ReJjhrCDGypTLPKyaMp_hPz-houxiJB0cM7woGGIijvHuURXL6VSLmzcchgMMWRUzvpV1Wbjy9DiE8uYAUOIgWmh5RNvaI7C-YWrOK-EA0vus"/>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="ml-64 pt-16 h-screen overflow-hidden flex">
{/*  Left: Bio-Sync Status Panel  */}
<section className="w-80 h-full border-r border-outline-variant/20 p-md overflow-y-auto space-y-md">
<div className="flex items-center justify-between">
<h3 className="text-label-caps font-label-caps text-outline">Bio-Sync Streams</h3>
<span className="flex items-center gap-xs text-[10px] text-primary/80 uppercase font-bold bio-sync-pulse">
<span className="w-1.5 h-1.5 bg-primary rounded-full"></span> Live
                </span>
</div>
{/*  Health Metric Card (Style Guidance)  */}
<div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-xs">
<span className="text-label-caps font-label-caps text-outline">Heart Rate</span>
<span className="material-symbols-outlined text-primary text-sm">favorite</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-md font-headline-md font-data-metric text-on-surface">72</span>
<span className="text-label-caps font-label-caps text-outline">BPM</span>
</div>
<div className="h-8 mt-xs flex items-end gap-[2px]">
<div className="flex-1 bg-primary/20 h-3 rounded-full"></div>
<div className="flex-1 bg-primary/40 h-5 rounded-full"></div>
<div className="flex-1 bg-primary/60 h-6 rounded-full"></div>
<div className="flex-1 bg-primary h-8 rounded-full"></div>
<div className="flex-1 bg-primary/40 h-4 rounded-full"></div>
<div className="flex-1 bg-primary/20 h-2 rounded-full"></div>
</div>
</div>
<div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-xs">
<span className="text-label-caps font-label-caps text-outline">Metabolic Rate</span>
<span className="material-symbols-outlined text-secondary text-sm">local_fire_department</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-md font-headline-md font-data-metric text-on-surface">1,842</span>
<span className="text-label-caps font-label-caps text-outline">KCAL/D</span>
</div>
<p className="text-[11px] text-secondary mt-xs flex items-center gap-xs">
<span className="material-symbols-outlined text-sm">trending_up</span> 4% above baseline
                </p>
</div>
<div className="p-md rounded-xl bg-surface-container-low border border-outline-variant">
<div className="flex justify-between items-start mb-xs">
<span className="text-label-caps font-label-caps text-outline">Oxygen Saturation</span>
<span className="material-symbols-outlined text-on-tertiary-container text-sm">air</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="text-headline-md font-headline-md font-data-metric text-on-surface">99</span>
<span className="text-label-caps font-label-caps text-outline">% SPO2</span>
</div>
</div>
<div className="mt-lg">
<h3 className="text-label-caps font-label-caps text-outline mb-md">System Log (Bio-Sync)</h3>
<div className="space-y-sm text-[12px] font-mono opacity-80">
<div className="flex items-start gap-sm">
<span className="text-primary shrink-0">[10:42:01]</span>
<span>Neural latency stabilized at 12ms. Digital Twin mirroring successful.</span>
</div>
<div className="flex items-start gap-sm">
<span className="text-secondary shrink-0">[10:41:55]</span>
<span>Glucose spike detected. Correlating with recent meal input...</span>
</div>
<div className="flex items-start gap-sm">
<span className="text-primary shrink-0">[10:41:40]</span>
<span>Full somatic scan complete. No critical anomalies found.</span>
</div>
</div>
</div>
</section>
{/*  Center: Immersive 3D/Visualization Area  */}
<section className="flex-1 relative bg-surface-dim overflow-hidden">
{/*  Animated Shader Background  */}

{/*  Centered Twin Representation  */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="relative w-[500px] h-[700px]">
<img alt="High-fidelity 3D human model representation" className="w-full h-full object-contain mix-blend-screen opacity-90" data-alt="A sophisticated digital 3D model of a human male figure, depicted in a translucent, ethereal material that glows with internal biological structures. The aesthetic is futuristic and clinical, set against a dark background with golden light accents flowing through neural and vascular paths. The scene is illuminated by soft, volumetric lighting that highlights the digital twin's fluid, AI-driven form, creating an atmosphere of advanced health technology and human precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAt3toE286pG6nHjsirRwo1fUkGZYTlSn2WQtSDITLm8NFTq7shpMYNcVtiIvnUkoUT9qX9HHKcMVqZ7NydJC5jBBVQ-z9RuDzO_85AfD1jBYtwjrQ_XII7EDtIv3sjkVwOutT0Ira-Hg9f00ZPXGiZOrtU8a0nXXkOnJRLAa6X5x4zHto4BbpKLgRTwTO3jhaZiVIhw6_NU1CRGjbyB0I0GdKgsM4E4-M02WE8gxby9-wpbtHFroxQy2IvbaMIU24vferQY4q9Nvw"/>
{/*  Real-time Data Overlays (Pins)  */}
<div className="absolute top-[20%] left-[60%] glass-panel rounded-lg p-xs px-sm flex items-center gap-xs glow-active">
<span className="w-1.5 h-1.5 bg-primary rounded-full bio-sync-pulse"></span>
<span className="text-label-caps font-label-caps">Brain: 14Hz (Alpha)</span>
</div>
<div className="absolute top-[45%] left-[35%] glass-panel rounded-lg p-xs px-sm flex items-center gap-xs">
<span className="w-1.5 h-1.5 bg-error rounded-full"></span>
<span className="text-label-caps font-label-caps">Heart: Steady</span>
</div>
<div className="absolute bottom-[30%] left-[55%] glass-panel rounded-lg p-xs px-sm flex items-center gap-xs">
<span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>
<span className="text-label-caps font-label-caps">Glucose: 104 mg/dL</span>
</div>
</div>
</div>
{/*  Bottom Floating AI Insight Panel  */}
<div className="absolute bottom-md left-1/2 -translate-x-1/2 w-[600px] glass-panel p-md rounded-xl flex items-center gap-md">
<div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-on-primary-container">auto_awesome</span>
</div>
<div className="flex-1">
<div className="flex items-center gap-xs mb-1">
<span className="text-label-caps font-label-caps text-primary">AI Insight</span>
<div className="px-xs py-[2px] bg-primary/10 rounded-sm border border-primary/20 text-[10px] text-primary uppercase font-bold tracking-tighter">Recommendation</div>
</div>
<p className="text-body-md text-on-surface leading-tight">Your cortisol levels are trending up. The Twin suggests a 5-minute breathing exercise to maintain peak metabolic efficiency.</p>
</div>
<button className="bg-primary text-on-primary px-md py-sm rounded-lg font-bold text-label-caps hover:scale-105 transition-transform shrink-0">
                    START SESSION
                </button>
</div>
</section>
{/*  Right: Detail/Interaction Sidebar  */}
<section className="w-96 h-full bg-surface-container-low border-l border-outline-variant/20 p-md overflow-y-auto space-y-lg">
<div>
<h3 className="text-label-caps font-label-caps text-outline mb-md">Quick Actions</h3>
<div className="grid grid-cols-2 gap-sm">
<button className="p-md rounded-xl bg-surface-container-high border border-outline-variant/50 flex flex-col items-center gap-xs hover:border-primary/50 transition-all">
<span className="material-symbols-outlined text-primary">stethoscope</span>
<span className="text-label-caps font-label-caps">Tele-Link</span>
</button>
<button className="p-md rounded-xl bg-surface-container-high border border-outline-variant/50 flex flex-col items-center gap-xs hover:border-primary/50 transition-all">
<span className="material-symbols-outlined text-secondary">medication</span>
<span className="text-label-caps font-label-caps">Prescriptions</span>
</button>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-md">
<h3 className="text-label-caps font-label-caps text-outline">Upcoming Events</h3>
<button className="text-primary text-[11px] font-bold">VIEW CALENDAR</button>
</div>
<div className="space-y-sm">
<div className="p-sm rounded-lg bg-surface-container flex items-center gap-md">
<div className="text-center shrink-0 w-10">
<p className="text-label-caps font-label-caps text-on-surface">14</p>
<p className="text-[10px] text-outline">MAY</p>
</div>
<div className="flex-1 border-l border-outline-variant/30 pl-md">
<p className="text-body-md font-bold text-on-surface">Annual Biometric Scan</p>
<p className="text-[11px] text-outline">Digital Health Center • 09:00 AM</p>
</div>
</div>
<div className="p-sm rounded-lg bg-surface-container flex items-center gap-md opacity-60">
<div className="text-center shrink-0 w-10">
<p className="text-label-caps font-label-caps text-on-surface">18</p>
<p className="text-[10px] text-outline">MAY</p>
</div>
<div className="flex-1 border-l border-outline-variant/30 pl-md">
<p className="text-body-md font-bold text-on-surface">Nutritional Analysis</p>
<p className="text-[11px] text-outline">AI Virtual Consultation • 02:30 PM</p>
</div>
</div>
</div>
</div>
<div className="p-md rounded-xl bg-gradient-to-br from-surface-container-highest to-surface-container-low border border-primary/20">
<h4 className="text-body-md font-bold text-primary mb-xs">Twin Integrity: 98.4%</h4>
<p className="text-[12px] text-on-surface-variant mb-md">Your digital reflection is highly synchronized with your physical state. 12 sensors currently active.</p>
<div className="w-full bg-surface-container rounded-full h-1 overflow-hidden">
<div className="bg-primary h-full w-[98%] rounded-full shadow-[0_0_8px_rgba(246,225,205,0.4)]"></div>
</div>
</div>
</section>
</main>
{/*  Contextual FAB Suppression: Hide FAB on Desktop Status Page as per mandates  */}
<script>
        // Micro-interactions and real-time feel simulation
        const metrics = document.querySelectorAll('.font-data-metric');
        
        setInterval(() => {
            metrics.forEach(metric => {
                const currentVal = parseFloat(metric.innerText.replace(/,/g, ''));
                const change = (Math.random() - 0.5) * 2;
                const newVal = currentVal + change;
                
                if (metric.innerText.includes(',')) {
                    metric.innerText = Math.round(newVal).toLocaleString();
                } else {
                    metric.innerText = Math.round(newVal);
                }
            });
        }, 3000);

        // Sidebar Hover Effects logic already handled by Tailwind
    </script>
` }} />
    </div>
  );
}
