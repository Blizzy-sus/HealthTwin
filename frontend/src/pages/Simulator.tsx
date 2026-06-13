import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function Simulator() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (twinApi.getForecast('demo-user-001', {'walk_minutes': 30}) === null) return;
    twinApi.getForecast('demo-user-001', {'walk_minutes': 30})
      .then(setData)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da]">
      {/* Exported from Stitch */}
      <div dangerouslySetInnerHTML={{ __html: `
{/*  SideNavBar  */}
<aside className="h-full w-64 fixed left-0 top-0 flex flex-col bg-surface-container-low border-r border-outline-variant py-md px-sm z-50">
<div className="mb-xl px-xs">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{}}>psychology</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant">AI Digital Reflection</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-xs">
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
<span className="font-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="psychology">psychology</span>
<span className="font-body-md">Twin Status</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="add_chart">add_chart</span>
<span className="font-body-md">Log Metrics</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="assessment">assessment</span>
<span className="font-body-md">Reports</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-all duration-150" href="#">
<span className="material-symbols-outlined" data-icon="model_training">model_training</span>
<span className="font-body-md">Simulator</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined" data-icon="family_restroom">family_restroom</span>
<span className="font-body-md">Family Guardian</span>
</a>
</nav>
<div className="mt-auto pt-md border-t border-outline-variant space-y-xs">
<button className="w-full bg-primary text-on-primary py-sm rounded-lg font-bold mb-md hover:opacity-90 transition-all">
        Sync Data
      </button>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="settings">settings</span>
<span className="font-body-md">Settings</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined" data-icon="help_outline">help_outline</span>
<span className="font-body-md">Support</span>
</a>
</div>
</aside>
{/*  Main Content Wrapper  */}
<main className="ml-64 min-h-screen relative">
{/*  TopNavBar  */}
<header className="flex justify-between items-center h-16 px-lg sticky top-0 bg-background/80 backdrop-blur-md z-40">
<div className="flex items-center flex-1">
<div className="relative w-96">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-xs pl-xl pr-md text-body-md focus:ring-1 focus:ring-primary outline-none" placeholder="Simulate scenario..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined" data-icon="notifications">notifications</span>
</button>
<div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden border border-outline-variant">
<img alt="User profile picture" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDgERyPzTmqoMBJlGzlyOkOR7ZGzm7QpLimG2IRoqrRs9sPs9miI-9jaPrl_eZD1NXbM-M8LYk6l4FJcnxYO3mTQgo6CmCV6ZZxf6sEEJ9KhztHrJRIkqBs0d5nw1qPTk2Npd1nxZXNCWpceElS_ZEUXC5JR_7mHFEoAhtmi_OkZpVcKD5fL6kGtAI0S1bIMSPPB0uNGoxXu4LCqj5v_yNGbouPrHj6ofs-Sr2j9mwkJjbdCC-YAL_pKiy1PKf_hoF-KD6J2tI3yfM"/>
</div>
</div>
</header>
{/*  Simulation Canvas  */}
<div className="p-lg grid grid-cols-12 gap-lg">
{/*  Prediction Main View  */}
<div className="col-span-8 flex flex-col gap-lg">
<div className="flex items-end justify-between">
<div>
<h2 className="text-headline-lg font-headline-lg text-on-surface">Predictive Simulation</h2>
<p className="text-body-lg text-on-surface-variant">Projecting biological impact based on 10-year trajectory.</p>
</div>
<div className="flex gap-xs">
<span className="px-sm py-xs rounded-sm bg-primary/10 text-primary border border-primary/20 text-label-caps">AI INSIGHT ACTIVE</span>
<span className="px-sm py-xs rounded-sm bg-surface-container-highest text-on-surface-variant border border-outline-variant text-label-caps">STABLE BASELINE</span>
</div>
</div>
{/*  Twin Visualization Area  */}
<div className="relative aspect-video glass-panel rounded-xl overflow-hidden flex items-center justify-center">

{/*  Twin Overlay UI  */}
<div className="absolute inset-0 p-lg flex flex-col justify-between pointer-events-none">
<div className="flex justify-between items-start">
<div className="glass-panel p-md rounded-lg pointer-events-auto">
<p className="text-label-caps text-primary mb-base">BIOLOGICAL AGE</p>
<p className="text-headline-md font-bold text-on-surface">32.4 <span className="text-body-md font-normal text-on-surface-variant">/ 45.0 yrs</span></p>
</div>
<div className="glass-panel p-md rounded-lg pointer-events-auto">
<p className="text-label-caps text-primary mb-base">VITALITY SCORE</p>
<div className="flex items-center gap-sm">
<p className="text-headline-md font-bold text-on-surface">88%</p>
<span className="material-symbols-outlined text-primary" style={{}}>trending_up</span>
</div>
</div>
</div>
<div className="flex justify-center">
<div className="glass-panel px-xl py-sm rounded-full pointer-events-auto flex gap-lg items-center">
<div className="flex items-center gap-xs">
<div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
<span className="text-label-caps text-on-surface">REAL-TIME TWIN RENDER</span>
</div>
<div className="h-4 w-px bg-outline-variant"></div>
<button className="text-label-caps text-primary hover:underline">RE-CALIBRATE MODELS</button>
</div>
</div>
</div>
</div>
{/*  Impact Impact Cards Bento  */}
<div className="grid grid-cols-3 gap-md">
<div className="bg-surface-container p-md rounded-lg border border-outline-variant">
<div className="flex justify-between items-center mb-sm">
<span className="material-symbols-outlined text-secondary" data-icon="restaurant">restaurant</span>
<span className="text-label-caps text-primary">+4.2%</span>
</div>
<p className="text-label-caps text-on-surface-variant">METABOLIC IMPACT</p>
<p className="text-data-metric font-data-metric text-on-surface mt-base">High Efficiency</p>
</div>
<div className="bg-surface-container p-md rounded-lg border border-outline-variant">
<div className="flex justify-between items-center mb-sm">
<span className="material-symbols-outlined text-secondary" data-icon="bolt">bolt</span>
<span className="text-label-caps text-error">-1.5%</span>
</div>
<p className="text-label-caps text-on-surface-variant">COGNITIVE RESERVE</p>
<p className="text-data-metric font-data-metric text-on-surface mt-base">Slight Decline</p>
</div>
<div className="bg-surface-container p-md rounded-lg border border-outline-variant">
<div className="flex justify-between items-center mb-sm">
<span className="material-symbols-outlined text-secondary" data-icon="favorite">favorite</span>
<span className="text-label-caps text-primary">+12.0%</span>
</div>
<p className="text-label-caps text-on-surface-variant">CARDIO LONGEVITY</p>
<p className="text-data-metric font-data-metric text-on-surface mt-base">Exceptional</p>
</div>
</div>
</div>
{/*  Life Factor Side Panel  */}
<div className="col-span-4 flex flex-col gap-md">
<div className="glass-panel p-lg rounded-xl h-full flex flex-col">
<div className="mb-lg">
<h3 className="text-headline-sm font-headline-sm text-on-surface mb-xs">Simulation Controls</h3>
<p className="text-body-md text-on-surface-variant">Adjust life factors to see future impact.</p>
</div>
<div className="space-y-lg flex-1">
{/*  Factor: Nutrition  */}
<div className="space-y-sm">
<div className="flex justify-between items-end">
<label className="text-label-caps text-primary">NUTRITION QUALITY</label>
<span className="text-body-md font-bold" id="nutrition-val">85%</span>
</div>
<input className="w-full slider-track slider-thumb" max="100" min="0" oninput="document.getElementById('nutrition-val').innerText = this.value + '%'" type="range" value="85"/>
<div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest">
<span>Processed</span>
<span>Whole Food</span>
</div>
</div>
{/*  Factor: Stress  */}
<div className="space-y-sm">
<div className="flex justify-between items-end">
<label className="text-label-caps text-primary">STRESS EXPOSURE</label>
<span className="text-body-md font-bold" id="stress-val">30%</span>
</div>
<input className="w-full slider-track slider-thumb" max="100" min="0" oninput="document.getElementById('stress-val').innerText = this.value + '%'" type="range" value="30"/>
<div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest">
<span>Zen</span>
<span>Chronic</span>
</div>
</div>
{/*  Factor: Exercise  */}
<div className="space-y-sm">
<div className="flex justify-between items-end">
<label className="text-label-caps text-primary">EXERCISE INTENSITY</label>
<span className="text-body-md font-bold" id="exercise-val">65%</span>
</div>
<input className="w-full slider-track slider-thumb" max="100" min="0" oninput="document.getElementById('exercise-val').innerText = this.value + '%'" type="range" value="65"/>
<div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest">
<span>Sedentary</span>
<span>Athlete</span>
</div>
</div>
{/*  Factor: Environmental  */}
<div className="space-y-sm">
<div className="flex justify-between items-end">
<label className="text-label-caps text-primary">ENVIRONMENTAL TOXINS</label>
<span className="text-body-md font-bold" id="env-val">12%</span>
</div>
<input className="w-full slider-track slider-thumb" max="100" min="0" oninput="document.getElementById('env-val').innerText = this.value + '%'" type="range" value="12"/>
<div className="flex justify-between text-[10px] text-on-surface-variant uppercase tracking-widest">
<span>Pristine</span>
<span>Urban Polluted</span>
</div>
</div>
</div>
<div className="mt-xl space-y-md">
<div className="p-md rounded-lg bg-surface-container-highest border border-outline-variant">
<p className="text-label-caps text-primary mb-xs">PROJECTED OUTCOME</p>
<p className="text-body-md text-on-surface italic">"Maintaining current 85% Nutrition with 30% Stress projects a +3.4 year increase in healthy lifespan."</p>
</div>
<button className="w-full py-md border border-primary text-primary rounded-lg font-bold hover:bg-primary/5 transition-colors">
              Save Simulation Scenario
            </button>
<button className="w-full py-md bg-[#E8E2D9] text-[#2B2622] rounded-lg font-bold hover:opacity-90 transition-opacity">
              Apply to Health Plan
            </button>
</div>
</div>
</div>
</div>
{/*  AI Insight Floating Dock  */}
<div className="fixed bottom-lg left-1/2 -translate-x-1/2 ml-32 pointer-events-none">
<div className="glass-panel px-lg py-sm rounded-full flex gap-md pointer-events-auto shadow-xl">
<button className="p-xs text-primary bg-primary/10 rounded-full hover:bg-primary/20 transition-colors">
<span className="material-symbols-outlined" data-icon="auto_awesome">auto_awesome</span>
</button>
<div className="flex flex-col justify-center">
<p className="text-[10px] font-bold text-primary tracking-widest uppercase">AI Suggestion</p>
<p className="text-body-md text-on-surface">Decrease Stress to 20% to unlock "Peak Performance" state.</p>
</div>
<button className="px-md py-xs bg-primary text-on-primary rounded-full text-label-caps font-bold self-center">ACCEPT</button>
</div>
</div>
</main>
<script>
    // Micro-interaction for sliders
    document.querySelectorAll('input[type=range]').forEach(slider => {
      slider.addEventListener('mousedown', () => {
        slider.classList.add('opacity-80');
      });
      slider.addEventListener('mouseup', () => {
        slider.classList.remove('opacity-80');
      });
    });

    // Subtle atmospheric light effect tracking mouse
    const main = document.querySelector('main');
    main.addEventListener('mousemove', (e) => {
      const x = e.clientX - main.getBoundingClientRect().left;
      const y = e.clientY - main.getBoundingClientRect().top;
      main.style.background = \`radial-gradient(600px circle at \${x}px \${y}px, rgba(246, 225, 205, 0.03), transparent)\`;
    });
  </script>
` }} />
    </div>
  );
}
