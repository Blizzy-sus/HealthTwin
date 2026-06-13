import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function Reports() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (null === null) return;
    null
      .then(setData)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da]">
      {/* Exported from Stitch */}
      <div dangerouslySetInnerHTML={{ __html: `
{/*  Side Navigation Bar  */}
<aside className="h-full w-64 fixed left-0 top-0 flex flex-col h-screen py-md px-sm bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant z-50">
<div className="mb-lg px-xs">
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
</div>
<nav className="flex-grow space-y-xs overflow-y-auto custom-scrollbar">
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="font-body-md text-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="font-body-md text-body-md">Twin Status</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">add_chart</span>
<span className="font-body-md text-body-md">Log Metrics</span>
</a>
{/*  Active Tab: Reports  */}
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-primary dark:text-primary font-bold border-r-2 border-primary opacity-90 transition-all duration-150" href="#">
<span className="material-symbols-outlined" style={{}}>assessment</span>
<span className="font-body-md text-body-md">Reports</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">model_training</span>
<span className="font-body-md text-body-md">Simulator</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">family_restroom</span>
<span className="font-body-md text-body-md">Family Guardian</span>
</a>
</nav>
<div className="mt-auto space-y-xs">
<button className="w-full bg-tertiary text-on-tertiary py-xs rounded-lg font-bold mb-md hover:opacity-90 transition-opacity">
                Sync Data
            </button>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-body-md text-body-md">Settings</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg hover:bg-surface-container-high transition-colors duration-200 text-on-surface-variant dark:text-on-surface-variant" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-body-md text-body-md">Support</span>
</a>
</div>
</aside>
{/*  Top Navigation Bar  */}
<header className="docked full-width top-0 sticky ml-64 flex justify-between items-center h-16 px-lg w-[calc(100%-16rem)] bg-background dark:bg-background z-40">
<div className="flex items-center gap-md">
<div className="relative group">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary">search</span>
<input className="bg-surface-container-low border-none rounded-full pl-xl pr-md py-xs text-body-md focus:ring-1 focus:ring-primary outline-none w-64 transition-all duration-300" placeholder="Search insights..." type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<button className="relative text-on-surface-variant hover:text-primary transition-colors duration-200">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border-2 border-background"></span>
</button>
<div className="flex items-center gap-sm">
<img alt="User profile picture" className="w-8 h-8 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHda9zKy_sL2Rene_7yq4wTNzzBjF0Hv4crnJ2yLp8QGP1WqalbaUMDKcRZBgd7RJWRJeia4iIae3HqF8OZGvhKKbPouHRfcgkuhwp-jXpYCdp-Dh5HWQNBjek4MpE21EMO2DMPdFsJF4PU8V9saYT7lyaFwiXYB3zwzkX0MeRq5P_oBCF15isnuM_Lvjj5rQXceGHJINpco_VNUjRlFquPWp5T15kUBcFNlN_Svd1qmOedc4nK4kLoHyaGH0Mm-FrKN1JOM6e_VY"/>
<span className="font-body-md text-on-surface font-semibold">Alex Rivera</span>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="ml-64 p-lg min-h-screen">
{/*  Dashboard Header & Controls  */}
<div className="flex flex-col md:flex-row md:items-end justify-between gap-md mb-xl">
<div>
<h2 className="font-headline-lg text-headline-lg text-primary mb-xs">Health Insights Report</h2>
<p className="font-body-lg text-body-lg text-on-surface-variant">Comprehensive analysis of your digital twin's physiological trends.</p>
</div>
{/*  Segmented Control for Timeframe  */}
<div className="bg-surface-container-low p-xs rounded-full flex gap-xs card-inner-border">
<button className="px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Daily</button>
<button className="px-md py-xs rounded-full font-label-caps text-label-caps text-primary bg-surface-container-highest transition-all">Weekly</button>
<button className="px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Monthly</button>
<button className="px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors">Yearly</button>
</div>
</div>
{/*  Bento Grid Layout  */}
<div className="grid grid-cols-12 gap-gutter">
{/*  Vitality Trend (Hero Card)  */}
<section className="col-span-12 lg:col-span-8 bg-surface-container flex flex-col p-md rounded-xl card-inner-border h-[400px]">
<div className="flex justify-between items-start mb-md">
<div>
<span className="font-label-caps text-label-caps text-primary flex items-center gap-xs">
<span className="material-symbols-outlined text-[14px]">bolt</span> OVERALL VITALITY
                        </span>
<h3 className="font-headline-md text-headline-md mt-xs">Biometric Coherence</h3>
</div>
<div className="text-right">
<span className="font-data-metric text-data-metric text-primary">84%</span>
<p className="text-label-caps text-secondary-fixed-dim">+3.2% vs last week</p>
</div>
</div>
{/*  Data Visualization Placeholder  */}
<div className="flex-grow flex items-end gap-xs py-md relative overflow-hidden group">
<div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
<div className="w-[150%] h-32 bg-primary/20 blur-[100px] animate-pulse"></div>
</div>
{/*  Chart Bars  */}
<div className="flex-grow flex items-end justify-between h-48 gap-xs">
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
<div className="bg-surface-container-highest w-full rounded-t-sm group-hover:bg-primary transition-all duration-500" style={{}}></div>
</div>
</div>
<div className="flex justify-between mt-sm text-label-caps text-on-surface-variant">
<span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
</div>
</section>
{/*  Sleep Analysis Card  */}
<section className="col-span-12 md:col-span-6 lg:col-span-4 bg-surface-container p-md rounded-xl card-inner-border flex flex-col justify-between">
<div>
<div className="flex justify-between items-center mb-sm">
<span className="font-label-caps text-label-caps text-secondary uppercase">Sleep Recovery</span>
<span className="material-symbols-outlined text-secondary">bedtime</span>
</div>
<div className="flex items-baseline gap-xs">
<span className="font-data-metric text-[36px] text-on-surface">7h 42m</span>
</div>
<p className="text-body-md text-on-surface-variant mt-xs">Deep sleep phase increased by 12%.</p>
</div>
<div className="mt-lg">
<div className="h-16 flex items-center gap-base">
<div className="bg-primary/20 h-8 flex-grow rounded-sm relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-primary w-1/3"></div>
</div>
<div className="bg-secondary/20 h-8 flex-grow rounded-sm relative overflow-hidden">
<div className="absolute inset-y-0 left-0 bg-secondary w-2/3"></div>
</div>
<div className="bg-surface-container-highest h-8 flex-grow rounded-sm"></div>
</div>
<div className="flex justify-between mt-xs text-label-caps text-on-surface-variant">
<span>DEEP</span><span>REM</span><span>LIGHT</span>
</div>
</div>
</section>
{/*  Stress Scatter Plot (Interactive Glass)  */}
<section className="col-span-12 md:col-span-6 lg:col-span-4 glass-effect p-md rounded-xl flex flex-col h-[350px]">
<div className="flex justify-between items-center mb-md">
<h4 className="font-headline-md text-headline-md text-primary">Stress Heatmap</h4>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">more_vert</span>
</button>
</div>
<div className="flex-grow relative border-l border-b border-outline-variant m-base">
{/*  Scatter points simulated  */}
<div className="absolute top-1/4 left-1/4 w-3 h-3 bg-error rounded-full blur-[2px] shadow-[0_0_8px_rgba(255,180,171,0.5)]"></div>
<div className="absolute top-1/2 left-1/3 w-2 h-2 bg-secondary rounded-full"></div>
<div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-primary/60 rounded-full blur-[1px]"></div>
<div className="absolute top-1/3 right-1/2 w-2 h-2 bg-secondary/80 rounded-full"></div>
<div className="absolute bottom-1/3 left-2/3 w-3 h-3 bg-primary rounded-full"></div>
{/*  Axis Labels  */}
<div className="absolute -left-lg top-1/2 -rotate-90 font-label-caps text-label-caps text-on-surface-variant">INTENSITY</div>
<div className="absolute -bottom-lg left-1/2 -translate-x-1/2 font-label-caps text-label-caps text-on-surface-variant">TIME OF DAY</div>
</div>
<div className="mt-md flex items-center gap-sm">
<div className="bg-primary/20 text-primary px-sm py-xs rounded font-label-caps text-label-caps">OPTIMAL ZONE</div>
<p className="text-body-md text-on-surface-variant text-[12px]">3 hours in peak stress</p>
</div>
</section>
{/*  Nutrition & Metabolism  */}
<section className="col-span-12 md:col-span-12 lg:col-span-8 bg-surface-container p-md rounded-xl card-inner-border">
<div className="flex flex-col md:flex-row gap-lg">
<div className="md:w-1/3">
<h4 className="font-headline-md text-headline-md mb-sm">Metabolic Load</h4>
<div className="space-y-md">
<div>
<div className="flex justify-between mb-xs">
<span className="text-label-caps text-on-surface-variant">GLUCOSE STABILITY</span>
<span className="text-label-caps text-primary">Stable</span>
</div>
<div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-4/5"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-xs">
<span className="text-label-caps text-on-surface-variant">PROTEIN SYNTHESIS</span>
<span className="text-label-caps text-secondary">High</span>
</div>
<div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-secondary w-3/4"></div>
</div>
</div>
<div>
<div className="flex justify-between mb-xs">
<span className="text-label-caps text-on-surface-variant">HYDRATION LEVEL</span>
<span className="text-label-caps text-on-surface">Moderate</span>
</div>
<div className="h-1 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-on-surface w-1/2"></div>
</div>
</div>
</div>
</div>
<div className="md:w-2/3 bg-surface-container-low rounded-lg p-md flex items-center justify-center relative overflow-hidden">
{/*  AI Insight Component  */}
<div className="z-10 text-center">
<img className="w-full max-w-[280px] h-40 object-cover rounded-xl mb-md shadow-lg border border-outline-variant" data-alt="A gourmet bento box featuring perfectly arranged healthy food items including sashimi, brown rice, and steamed vegetables, set against a dark, warm, sophisticated background that matches a premium health app aesthetic with soft golden lighting and rich textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgdopcXKeH6IF3Mud7GjyKi2nGxcfzkFXZAldGSLgle82j3Q3VZWsCkuTQ0KFEkEAtC164gIsERtzr_Wa4k7V6o0Bq-q_bauaihTRuXHBAm-uxiwT_nuVIR_IfeSl7Iu3fM7ZU1dHLexrJRvaZHp99fIjC7lcjiuoqGoX6pAV1RuwXFbblPCEsxpfwSfTKVH3vPwiWaI7cLwrOh56KxwvxKNpb_OYZYo7miJlKHzWXGX8gVBKCrruQZD8yDMWziV7RMuZOClvF2wM"/>
<p className="font-body-md text-on-surface max-w-sm mx-auto">"Switching to the recommended Mediterranean meal plan has reduced metabolic spikes by 24% over 7 days."</p>
<button className="mt-md px-lg py-xs rounded-full border border-primary text-primary font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all">Order Custom Plan</button>
</div>
{/*  Decorative background elements  */}
<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
</div>
</div>
</section>
{/*  Heart Rate Variability Details  */}
<section className="col-span-12 md:col-span-6 bg-surface-container p-md rounded-xl card-inner-border">
<div className="flex justify-between items-center mb-md">
<span className="font-label-caps text-label-caps text-on-surface-variant">HEART RATE VARIABILITY (HRV)</span>
<span className="bg-secondary-container text-on-secondary-container px-sm py-[2px] rounded-full text-label-caps">RECOVERY ALERT</span>
</div>
<div className="flex items-center gap-lg">
<div>
<span className="font-data-metric text-[48px] text-on-surface">64</span>
<span className="text-on-surface-variant ml-xs">ms</span>
</div>
<div className="flex-grow">
<p className="text-body-md text-on-surface-variant italic">"Your HRV is slightly lower than your 7-day baseline (72ms). Consider a low-intensity recovery session today."</p>
</div>
</div>
</section>
{/*  Activity Pulse  */}
<section className="col-span-12 md:col-span-6 bg-surface-container p-md rounded-xl card-inner-border">
<div className="flex justify-between items-center mb-md">
<span className="font-label-caps text-label-caps text-on-surface-variant">ACTIVE MOVEMENT</span>
<span className="text-primary material-symbols-outlined">stairs</span>
</div>
<div className="grid grid-cols-2 gap-md">
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-xs">STEPS</p>
<p className="font-data-metric text-data-metric">12,458</p>
</div>
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-xs">CALORIES</p>
<p className="font-data-metric text-data-metric">2,840</p>
</div>
</div>
</section>
</div>
</main>
{/*  Floating Navigation Dock (Mobile Fallback / Quick Access)  */}
<div className="md:hidden fixed bottom-container-margin left-1/2 -translate-x-1/2 z-50">
<div className="glass-effect rounded-full px-lg py-sm flex items-center gap-xl shadow-2xl">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">home</span>
</button>
<button className="text-primary">
<span className="material-symbols-outlined" style={{}}>assessment</span>
</button>
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">favorite</span>
</button>
</div>
</div>
{/*  Micro-interaction Script  */}
<script>
        document.querySelectorAll('.bg-surface-container-highest').forEach(bar => {
            bar.addEventListener('mouseover', function() {
                this.classList.add('scale-y-110');
            });
            bar.addEventListener('mouseout', function() {
                this.classList.remove('scale-y-110');
            });
        });
    </script>
` }} />
    </div>
  );
}
