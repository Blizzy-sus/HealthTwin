import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function LogMetrics() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (twinApi.logMetric('demo-user-001', 'bp_systolic', 125, '2026-06-10') === null) return;
    twinApi.logMetric('demo-user-001', 'bp_systolic', 125, '2026-06-10')
      .then(setData)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da]">
      {/* Exported from Stitch */}
      <div dangerouslySetInnerHTML={{ __html: `
{/*  SideNavBar  */}
<aside className="h-full w-64 fixed left-0 top-0 flex flex-col py-md px-sm bg-surface-container-low border-r border-outline-variant z-50">
<div className="mb-xl px-sm">
<div className="flex items-center gap-sm">
<div className="w-10 h-10 rounded-lg bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{}}>psychology</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
</div>
</div>
</div>
<nav className="flex-1 space-y-xs overflow-y-auto custom-scrollbar">
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-body-md font-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="text-body-md font-body-md">Twin Status</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">add_chart</span>
<span className="text-body-md font-body-md">Log Metrics</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">assessment</span>
<span className="text-body-md font-body-md">Reports</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">model_training</span>
<span className="text-body-md font-body-md">Simulator</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">family_restroom</span>
<span className="text-body-md font-body-md">Family Guardian</span>
</a>
</nav>
<div className="mt-auto space-y-xs border-t border-outline-variant pt-md">
<div className="px-sm py-xs mb-xs">
<div className="flex items-center justify-between">
<p className="text-label-caps font-label-caps text-on-surface-variant">API STATUS</p>
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
</div>
<p className="text-[10px] text-outline mt-1 font-mono">ID: demo-user-001</p>
</div>
<button className="w-full bg-primary text-on-primary py-sm px-md rounded-lg font-bold text-body-md hover:opacity-90 transition-all duration-150">
        Sync Data
      </button>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="text-body-md font-body-md">Settings</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="text-body-md font-body-md">Support</span>
</a>
</div>
</aside>
{/*  Main Content Canvas  */}
<main className="flex-1 ml-64 min-h-screen">
{/*  TopNavBar  */}
<header className="flex justify-between items-center h-16 px-lg sticky top-0 bg-background z-40">
<div className="flex-1 flex items-center">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-[20px]">search</span>
<input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-body-md text-on-surface placeholder:text-outline focus:ring-1 focus:ring-primary outline-none" placeholder="Search nutritional data..." type="text"/>
</div>
</div>
<div className="flex items-center gap-md">
<button className="relative p-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined">notifications</span>
<span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
</button>
<div className="flex items-center gap-sm">
<div className="text-right">
<p className="text-body-md font-bold text-on-surface">demo-user-001</p>
<p className="text-label-caps font-label-caps text-outline">Pro Tier</p>
</div>
<img alt="User profile picture" className="w-10 h-10 rounded-full border border-outline-variant object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-zJ4922LX0avaUDYjiHMMkD7ejUth2w0h8IDw8XHlEDvr6O1Ja4HvZjFCnB2NPIOYn-se3vsayYdGHYs6DLAeVSy34h0_EisuIWshSY1ix4MzsrwgIKmfU143If61Kth0LQOIJzJT_eizkDybXVMTj5VtTjzygGGL9vAvaAi_c73amWpzwHNqU3xF1jMbGqlbR4HIQHH4Bfn8oTdXBSjJr2dRJK8Dh2LCsd4zfVPI5orLkm23oDDrQOVwe0N1iMzXLhrhZ5aek74"/>
</div>
</div>
</header>
<section className="p-lg space-y-lg">
{/*  Header Section  */}
<div className="flex justify-between items-end">
<div>
<h2 className="text-headline-lg font-headline-lg text-primary">Nutritional & Metabolic Log</h2>
<p className="text-body-lg text-on-surface-variant">Analyze your biological reflection through caloric and nutrient density.</p>
</div>
<div className="flex gap-xs glass-pill p-1 rounded-lg">
<button className="px-md py-xs rounded-md bg-primary text-on-primary text-label-caps font-label-caps">DAILY</button>
<button className="px-md py-xs rounded-md text-on-surface-variant hover:bg-surface-container-highest transition-all text-label-caps font-label-caps">WEEKLY</button>
<button className="px-md py-xs rounded-md text-on-surface-variant hover:bg-surface-container-highest transition-all text-label-caps font-label-caps">MONTHLY</button>
</div>
</div>
{/*  Bento Grid for Metabolic Analytics  */}
<div className="grid grid-cols-12 gap-gutter">
{/*  Large Chart Area  */}
<div className="col-span-12 lg:col-span-8 bg-surface-container-low rounded-xl p-md border border-outline-variant relative overflow-hidden">
<div className="flex justify-between items-center mb-lg">
<div>
<h3 className="text-headline-sm font-bold text-on-surface">Glucose & Metabolic Velocity</h3>
<p className="text-body-md text-outline">Estimated real-time glucose variability based on logs</p>
</div>
<div className="text-right">
<span className="text-data-metric font-data-metric text-primary">104 mg/dL</span>
<span className="text-label-caps font-label-caps text-green-400 block">+2% Stable</span>
</div>
</div>
{/*  Mock Chart Visualization  */}
<div className="h-64 w-full flex items-end gap-1 px-sm">
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-1/2 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-2/3 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-3/4 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-primary rounded-t-sm h-1/2 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-4/5 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-3/4 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-1/2 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-2/3 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-primary rounded-t-sm h-5/6 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-1/3 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-1/2 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-2/3 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-3/4 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-primary rounded-t-sm h-4/5 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-full hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-3/4 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-2/3 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-3/4 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-primary rounded-t-sm h-1/2 hover:bg-primary transition-all duration-300"></div>
<div className="flex-1 bg-surface-container-highest rounded-t-sm h-4/5 hover:bg-primary transition-all duration-300"></div>
</div>
<div className="flex justify-between mt-sm text-label-caps font-label-caps text-outline px-sm">
<span>08:00 AM</span>
<span>12:00 PM</span>
<span>04:00 PM</span>
<span>08:00 PM</span>
</div>
</div>
{/*  Quick Stats Cards  */}
<div className="col-span-12 lg:col-span-4 grid grid-cols-2 gap-gutter">
<div className="col-span-1 bg-surface-container rounded-xl p-md flex flex-col justify-between border border-outline-variant">
<span className="material-symbols-outlined text-primary mb-2">water_drop</span>
<div>
<p className="text-label-caps font-label-caps text-outline">HYDRATION</p>
<h4 className="text-data-metric font-data-metric text-on-surface">2.4L / 3.0L</h4>
</div>
</div>
<div className="col-span-1 bg-surface-container rounded-xl p-md flex flex-col justify-between border border-outline-variant">
<span className="material-symbols-outlined text-secondary mb-2">local_fire_department</span>
<div>
<p className="text-label-caps font-label-caps text-outline">METABOLIC BURN</p>
<h4 className="text-data-metric font-data-metric text-on-surface">1,840 kcal</h4>
</div>
</div>
<div className="col-span-2 bg-primary-container rounded-xl p-md border border-outline-variant flex items-center gap-md">
<div className="w-12 h-12 rounded-full border-4 border-on-primary-container/30 border-t-on-primary-container animate-spin"></div>
<div>
<p className="text-body-md font-bold text-on-primary-container">AI Insight</p>
<p className="text-label-caps font-label-caps text-on-primary-container/80">Twin predicting energy dip in 45 mins. Consider 15g protein snack.</p>
</div>
</div>
</div>
{/*  Meal Plans Section  */}
<div className="col-span-12">
<div className="flex justify-between items-center mb-md">
<h3 className="text-headline-md font-headline-md text-on-surface">Recommended Meal Plans</h3>
<button className="text-primary text-body-md font-bold hover:underline">View All Nutrients</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-lg">
{/*  Meal Card 1  */}
<div className="group relative bg-surface-container rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-all duration-300">
<div className="h-56 w-full relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro photography shot of premium, gourmet sushi rolls artistically arranged on a dark, textured slate plate. The lighting is dramatic with deep shadows and soft highlights on the fresh fish, following a luxury dark-mode aesthetic with warm earthy undertones. The scene feels clean, sophisticated, and high-end, representing a healthy metabolic-friendly meal option for an AI health app." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqT2Z0Re87ln9tbvEIut5jlodZeYBbi8OwknSWhbVGv9PQYuiYzJ0IzPIeXgH0oU5W9NCsm_k_cLGg_zHbf7m3Pvqku5agp1zk33VZahu9hq5ISeaJ2j-_rTY2Bf16SsYAvWOLCPs2xxCqLDLRDTHgEETvha5O3aHxhBu6Fob1P9HjgTaWZg3DiwtQKPg3IADKJgTXKd8XElyrtfAvMdSfUBzDzw-7nbUu_NAyJSEgU6-7inkONL06sKH9o81wP9Ktt06_d1MDfFM"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-primary/20 backdrop-blur-md text-primary text-[10px] px-2 py-1 rounded-sm font-bold uppercase tracking-wider">Breakfast</span>
</div>
</div>
<div className="p-md">
<div className="flex justify-between items-start mb-sm">
<div>
<h4 className="text-body-lg font-bold text-on-surface">Gather Your Menu</h4>
<p className="text-body-md text-outline">Eat Tasty All Day</p>
</div>
<div className="text-right">
<p className="text-headline-sm font-bold text-primary">\$34</p>
<p className="text-label-caps font-label-caps text-outline">Day Plan</p>
</div>
</div>
<div className="flex items-center gap-sm mt-md pt-md border-t border-outline-variant/30">
<div className="flex-1 flex flex-col">
<span className="text-label-caps font-label-caps text-outline">CALORIES</span>
<span className="text-body-md font-bold">345 kcal</span>
</div>
<div className="flex-1 flex flex-col">
<span className="text-label-caps font-label-caps text-outline">PROTEIN</span>
<span className="text-body-md font-bold">24g</span>
</div>
<button className="bg-surface-container-highest px-md py-xs rounded-full text-label-caps font-label-caps text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">Order</button>
</div>
</div>
</div>
{/*  Meal Card 2  */}
<div className="group relative bg-surface-container rounded-xl overflow-hidden border border-outline-variant hover:border-primary transition-all duration-300">
<div className="h-56 w-full relative overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A vibrant, colorful Buddha bowl filled with fresh kale, roasted chickpeas, avocado slices, and quinoa, beautifully presented in a matte black ceramic bowl. The lighting is soft and natural, emphasizing the organic textures of the vegetables against a dark, moody background. The overall aesthetic is professional, minimalist, and focused on wholesome nutritional balance in a dark-themed sanctuary style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdelxw9_xaTdkjLoadv1hDCZu9-sF6hAREJnEDGf2fhJ92_gpHbVi5bjTbQwmJSNOqiw1vq2UsWt-nTsGNM5Un9mnZuhKeW6kfuYkkOl558fuTyVr8TQvI4c20Uc0fE-_OyPAg89vSRFwZOnn0rTOlal6Iaun9jtOFDXNNL70A7xCLdRNXRUpnENP5KsdYzfTKTHOL_s4M-CPtAMmfNDHIDIv3KvnjaMzo954sjwNwh4PbyZYLE5EMLDm5PK-6wi2mdH8cE_WoDBM"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
<div className="absolute bottom-4 left-4">
<span className="bg-secondary/20 backdrop-blur-md text-secondary text-[10px] px-2 py-1 rounded-sm font-bold uppercase tracking-wider">Metabolic Boost</span>
</div>
</div>
<div className="p-md">
<div className="flex justify-between items-start mb-sm">
<div>
<h4 className="text-body-lg font-bold text-on-surface">Kinetic Bowl</h4>
<p className="text-body-md text-outline">Optimized for Afternoon Burn</p>
</div>
<div className="text-right">
<p className="text-headline-sm font-bold text-primary">\$28</p>
<p className="text-label-caps font-label-caps text-outline">Individual</p>
</div>
</div>
<div className="flex items-center gap-sm mt-md pt-md border-t border-outline-variant/30">
<div className="flex-1 flex flex-col">
<span className="text-label-caps font-label-caps text-outline">CARBS</span>
<span className="text-body-md font-bold">42g</span>
</div>
<div className="flex-1 flex flex-col">
<span className="text-label-caps font-label-caps text-outline">FIBER</span>
<span className="text-body-md font-bold">12g</span>
</div>
<button className="bg-surface-container-highest px-md py-xs rounded-full text-label-caps font-label-caps text-on-surface-variant hover:bg-primary hover:text-on-primary transition-all">Order</button>
</div>
</div>
</div>
{/*  Meal Card 3 (Empty State / Promo)  */}
<div className="relative bg-surface-container-low rounded-xl p-lg border border-dashed border-outline-variant flex flex-col items-center justify-center text-center">
<div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center mb-md">
<span className="material-symbols-outlined text-primary text-4xl">restaurant_menu</span>
</div>
<h4 className="text-headline-sm font-bold text-on-surface mb-xs">Personalize Your Plan</h4>
<p className="text-body-md text-outline mb-lg">Don't have time or willing to cook? Let the Health Twin AI curate your week.</p>
<button className="w-full py-md rounded-xl bg-primary text-on-primary font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">Generate My Plan</button>
</div>
</div>
</div>
{/*  Detailed Logging Table  */}
<div className="col-span-12 bg-surface-container-low rounded-xl border border-outline-variant overflow-hidden">
<div className="p-md border-b border-outline-variant flex justify-between items-center">
<h3 className="text-headline-sm font-bold text-on-surface">Metric Log Breakdown</h3>
<div className="flex gap-xs">
<button className="p-2 glass-pill rounded-lg text-primary"><span className="material-symbols-outlined">filter_list</span></button>
<button className="p-2 glass-pill rounded-lg text-primary"><span className="material-symbols-outlined">download</span></button>
</div>
</div>
<table className="w-full text-left">
<thead>
<tr className="text-label-caps font-label-caps text-outline border-b border-outline-variant bg-surface-container/30">
<th className="p-md">TIME</th>
<th className="p-md">ACTIVITY / INGESTION</th>
<th className="p-md text-center">GLYCOGEN IMPACT</th>
<th className="p-md text-center">STATUS</th>
<th className="p-md text-right">MAGNITUDE</th>
</tr>
</thead>
<tbody className="text-body-md divide-y divide-outline-variant/30">
<tr className="hover:bg-surface-container-high transition-colors">
<td className="p-md text-on-surface-variant">08:15 AM</td>
<td className="p-md font-bold">Black Coffee + Oat Bar</td>
<td className="p-md text-center">
<div className="flex justify-center gap-1">
<span className="w-2 h-4 bg-primary rounded-full"></span>
<span className="w-2 h-4 bg-primary rounded-full"></span>
<span className="w-2 h-4 bg-outline-variant rounded-full"></span>
</div>
</td>
<td className="p-md text-center">
<span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold">STABLE</span>
</td>
<td className="p-md text-right font-data-metric text-on-surface">180 kcal</td>
</tr>
<tr className="hover:bg-surface-container-high transition-colors">
<td className="p-md text-on-surface-variant">10:30 AM</td>
<td className="p-md font-bold">High Intensity Interval Training</td>
<td className="p-md text-center">
<div className="flex justify-center gap-1">
<span className="w-2 h-4 bg-secondary rounded-full"></span>
<span className="w-2 h-4 bg-secondary rounded-full"></span>
<span className="w-2 h-4 bg-secondary rounded-full"></span>
</div>
</td>
<td className="p-md text-center">
<span className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold">DEPLETING</span>
</td>
<td className="p-md text-right font-data-metric text-on-surface">-450 kcal</td>
</tr>
<tr className="hover:bg-surface-container-high transition-colors">
<td className="p-md text-on-surface-variant">12:45 PM</td>
<td className="p-md font-bold">Grilled Salmon & Avocado Salad</td>
<td className="p-md text-center">
<div className="flex justify-center gap-1">
<span className="w-2 h-4 bg-primary rounded-full"></span>
<span className="w-2 h-4 bg-outline-variant rounded-full"></span>
<span className="w-2 h-4 bg-outline-variant rounded-full"></span>
</div>
</td>
<td className="p-md text-center">
<span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold">STABLE</span>
</td>
<td className="p-md text-right font-data-metric text-on-surface">620 kcal</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>
{/*  Floating Dock  */}
<div className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-pill px-6 py-3 rounded-full flex items-center gap-8 shadow-xl z-50">
<button className="group flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">home</span>
<span className="text-[10px] font-label-caps text-outline group-hover:text-primary">HOME</span>
</button>
<button className="group flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-primary" style={{}}>analytics</span>
<span className="text-[10px] font-label-caps text-primary">METRICS</span>
</button>
<div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center -mt-8 shadow-lg shadow-primary/20 border-4 border-background hover:scale-110 transition-transform cursor-pointer">
<span className="material-symbols-outlined text-on-primary">add</span>
</div>
<button className="group flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">restaurant</span>
<span className="text-[10px] font-label-caps text-outline group-hover:text-primary">FOOD</span>
</button>
<button className="group flex flex-col items-center gap-1">
<span className="material-symbols-outlined text-outline group-hover:text-primary transition-colors">person</span>
<span className="text-[10px] font-label-caps text-outline group-hover:text-primary">PROFILE</span>
</button>
</div>
</main>
<script>
    // Simple interactions for the dashboard
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') e.preventDefault();
        document.querySelectorAll('nav a').forEach(l => {
          l.classList.remove('text-primary', 'font-bold', 'border-r-2', 'border-primary', 'bg-surface-container-high');
          l.classList.add('text-on-surface-variant');
        });
        link.classList.add('text-primary', 'font-bold', 'border-r-2', 'border-primary', 'bg-surface-container-high');
        link.classList.remove('text-on-surface-variant');
      });
    });

    // Hover effect for bars
    const bars = document.querySelectorAll('.h-64 > div');
    bars.forEach(bar => {
      bar.addEventListener('mouseenter', () => {
        bar.style.filter = 'drop-shadow(0 0 10px rgba(246, 225, 205, 0.4))';
      });
      bar.addEventListener('mouseleave', () => {
        bar.style.filter = 'none';
      });
    });
  </script>
` }} />
    </div>
  );
}
