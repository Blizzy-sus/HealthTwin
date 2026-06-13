import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function FamilyGuardian() {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    if (twinApi.getFamilyDashboard('demo-guardian-001') === null) return;
    twinApi.getFamilyDashboard('demo-guardian-001')
      .then(setData)
      .catch((e: any) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);


  return (
    <div className="min-h-screen bg-[#17130f] text-[#ebe1da]">
      {/* Exported from Stitch */}
      <div dangerouslySetInnerHTML={{ __html: `
{/*  Side Navigation Bar  */}
<nav className="h-full w-64 fixed left-0 top-0 bg-surface-container-low border-r border-outline-variant flex flex-col py-md px-sm z-50">
<div className="flex flex-col items-center mb-xl">
<div className="w-12 h-12 rounded-full overflow-hidden bg-primary-container mb-sm flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container" style={{}}>psychology</span>
</div>
<h1 className="text-headline-md font-headline-md font-bold text-primary">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
</div>
<div className="flex-1 space-y-xs overflow-y-auto">
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">dashboard</span>
<span className="font-label-caps text-label-caps">Dashboard</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">psychology</span>
<span className="font-label-caps text-label-caps">Twin Status</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">add_chart</span>
<span className="font-label-caps text-label-caps">Log Metrics</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">assessment</span>
<span className="font-label-caps text-label-caps">Reports</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200 group" href="#">
<span className="material-symbols-outlined group-hover:text-primary transition-colors">model_training</span>
<span className="font-label-caps text-label-caps">Simulator</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-all duration-150" href="#">
<span className="material-symbols-outlined" style={{}}>family_restroom</span>
<span className="font-label-caps text-label-caps">Family Guardian</span>
</a>
</div>
<div className="mt-auto space-y-xs pt-lg border-t border-outline-variant">
<button className="w-full bg-primary text-on-primary py-sm rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all mb-lg">
                Sync Data
            </button>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">settings</span>
<span className="font-label-caps text-label-caps">Settings</span>
</a>
<a className="flex items-center gap-sm p-sm rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors" href="#">
<span className="material-symbols-outlined">help_outline</span>
<span className="font-label-caps text-label-caps">Support</span>
</a>
</div>
</nav>
{/*  Top Navigation Bar  */}
<header className="flex justify-between items-center h-16 px-lg w-[calc(100%-16rem)] ml-64 sticky top-0 bg-background z-40">
<div className="flex items-center bg-surface-container-low rounded-full px-md py-xs w-96 border border-outline-variant">
<span className="material-symbols-outlined text-on-surface-variant mr-sm">search</span>
<input className="bg-transparent border-none focus:ring-0 text-body-md w-full placeholder-on-surface-variant" placeholder="Search family metrics..." type="text"/>
</div>
<div className="flex items-center gap-lg">
<div className="relative cursor-pointer hover:text-primary transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">notifications</span>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-error rounded-full"></span>
</div>
<div className="flex items-center gap-sm group cursor-pointer">
<div className="text-right">
<p className="text-label-caps font-label-caps leading-none">Primary Guardian</p>
<p className="text-[10px] text-on-surface-variant">Health Twin AI</p>
</div>
<img alt="User profile picture" className="w-10 h-10 rounded-full border border-primary transition-transform group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDccDB1x4MrMd7kjjNzLJtxT0FbCCOzPcaDUcZGk6596g0ZmnGWKNZN1lo4buhnr-AF78kH_SlmjjMrz9E74gFJoOcvcoyl4fOsZ61ddb-7OjrGa6Vtz_3zm0sVcKfkF4ra71-h2pGOrJAXKTxUw-zhE8-Gg4Ecd7UYOeOPuPRkMBC6Sfn9Ua0hpqq5Upq-xg2LH9JJ4T6Kindkq5MXYVPuNG_AH3uEkd4885Kf2l-b8aJvY_0sAb5NR1hWAknxd5Fseu-JdA1vu9I"/>
</div>
</div>
</header>
{/*  Main Content Canvas  */}
<main className="ml-64 w-[calc(100%-16rem)] h-[calc(100vh-64px)] overflow-y-auto p-lg">
<div className="flex justify-between items-end mb-lg">
<div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Family Command Center</h2>
<p className="text-body-lg text-on-surface-variant">Real-time health monitoring for 4 active mirrors.</p>
</div>
<button className="flex items-center gap-xs bg-tertiary-fixed text-on-tertiary px-lg py-sm rounded-full font-label-caps text-label-caps hover:opacity-90 transition-all active-glow">
<span className="material-symbols-outlined text-[18px]">person_add</span>
                Add Family Member
            </button>
</div>
{/*  Bento Grid for Family Members  */}
<div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-lg">
{/*  Card 1: Elena (Mom) - High Priority  */}
<div className="tonal-card p-md rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-md items-center">
<div className="w-16 h-16 rounded-xl overflow-hidden relative border-2 border-primary">
<img className="w-full h-full object-cover" data-alt="A portrait of a healthy adult woman with calm features, set against a warm, cinematic background with soft amber lighting and earthy tones consistent with a premium health monitoring application UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3Qzeth9vrS0ZYPeehN8ID9EFQwWah64KpOCoB9yXQL_7r1aiQPc-XUN0Sp5nfvTnKu1fRTWRIyfA_gPaQxsgCLaTZpOkUXPVNOMgPtrjxnKfj3w6i5h0u6a1GsnuhQcPUOQKqmrCoTkfrmmeJc9Bcw3SH1jQneCfHG6owOoHI6K7NT_FCHmDe9JqQZjF0mcjOKlMjR0tkSBvowiy3E475bEJ37fuAkNz8ted3Sz6hk1txu0DC_70YESUFebqYu6PhCVI8TT030XI"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight text-on-surface">Elena</h3>
<span className="bg-error/10 text-error px-sm py-0.5 rounded-sm text-label-caps font-label-caps border border-error/20 inline-block mt-1">High Heart Rate Alert</span>
</div>
</div>
<button className="p-xs rounded-full hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
<div className="grid grid-cols-2 gap-sm mb-md">
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Vitality Index</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-primary">94%</span>
<span className="text-[10px] text-primary pb-1">+2.4%</span>
</div>
</div>
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Avg Pulse</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-error">118</span>
<span className="text-[10px] text-on-surface-variant pb-1">BPM</span>
</div>
</div>
</div>
<div className="h-24 w-full bg-surface-container-lowest/30 rounded-lg p-sm mb-sm relative">
{/*  Placeholder for Sparkline  */}
<div className="absolute inset-x-2 bottom-2 h-16 flex items-end gap-1">
<div className="bg-primary/20 w-full h-12 rounded-t-xs"></div>
<div className="bg-primary/20 w-full h-16 rounded-t-xs"></div>
<div className="bg-error/40 w-full h-20 rounded-t-xs"></div>
<div className="bg-error/60 w-full h-22 rounded-t-xs"></div>
<div className="bg-error/40 w-full h-18 rounded-t-xs"></div>
<div className="bg-primary/20 w-full h-14 rounded-t-xs"></div>
<div className="bg-primary/20 w-full h-11 rounded-t-xs"></div>
</div>
</div>
<div className="flex gap-sm">
<button className="flex-1 glass-pill py-xs text-label-caps font-label-caps text-primary hover:bg-primary/20 transition-all">Deep Dive</button>
<button className="flex-1 border border-outline-variant py-xs text-label-caps font-label-caps rounded-full hover:bg-surface-container-highest transition-all">Send Note</button>
</div>
</div>
{/*  Card 2: Leo (Dad)  */}
<div className="tonal-card p-md rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-md items-center">
<div className="w-16 h-16 rounded-xl overflow-hidden relative border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A portrait of a mature man with a friendly expression, captured in soft, natural window light with a background of deep earthy browns and warm wood textures, fitting a high-end minimalist healthcare dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOvJ6hu8XohcfC5UWWcdPLJZjAFUgCXtCsaOSdIqJOYfMt8RY5YtRy-WfsBYQba5IUt14WAdRFqhV2fMXVRHtabEC3QdYjerDSwmpGId_qXlHgC1DykAw2jLuda3uYkA-UNzCFYKNSFov-G7ycDEN6YDLiHRhuITZqochMHTUvdsmLfBnelRS8kQDm3HBw_AiGp80f-wyhTNgKKPf4tA1W-KyB2l7BJ2Ka-j5HvYA2tKijsBAAg3jF_odjh2oRMgZWNaVMCAzPgn8"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight text-on-surface">Leo</h3>
<span className="bg-primary/10 text-primary px-sm py-0.5 rounded-sm text-label-caps font-label-caps border border-primary/20 inline-block mt-1">Status: Stable</span>
</div>
</div>
<button className="p-xs rounded-full hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
<div className="grid grid-cols-2 gap-sm mb-md">
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Recovery</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-secondary">82%</span>
</div>
</div>
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Sleep Quality</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-primary">Good</span>
</div>
</div>
</div>
<div className="h-24 w-full bg-surface-container-lowest/30 rounded-lg p-sm mb-sm relative">
<div className="absolute inset-x-2 bottom-2 h-16 flex items-end gap-1">
<div className="bg-secondary/20 w-full h-10 rounded-t-xs"></div>
<div className="bg-secondary/20 w-full h-12 rounded-t-xs"></div>
<div className="bg-secondary/20 w-full h-15 rounded-t-xs"></div>
<div className="bg-secondary/20 w-full h-14 rounded-t-xs"></div>
<div className="bg-secondary/20 w-full h-16 rounded-t-xs"></div>
<div className="bg-secondary/20 w-full h-18 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-20 rounded-t-xs"></div>
</div>
</div>
<div className="flex gap-sm">
<button className="flex-1 glass-pill py-xs text-label-caps font-label-caps text-primary hover:bg-primary/20 transition-all">Deep Dive</button>
<button className="flex-1 border border-outline-variant py-xs text-label-caps font-label-caps rounded-full hover:bg-surface-container-highest transition-all">Send Note</button>
</div>
</div>
{/*  Card 3: Maya (Daughter)  */}
<div className="tonal-card p-md rounded-xl relative overflow-hidden group">
<div className="flex justify-between items-start mb-md">
<div className="flex gap-md items-center">
<div className="w-16 h-16 rounded-xl overflow-hidden relative border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A youthful portrait of a young girl with a cheerful smile, lit by soft diffused light against a sophisticated dark taupe and cream background, maintaining the cohesive biological precision and human warmth aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCreRMc4qUFDkbJjGrI-q3RkYXQFI6mOx4KQHvH4cCPedIv2KqtmJ-Wp08d9q8NI4gwhwufFuHl6B2BV44cjlBAX_4za6Kt5etVfIi9euqLFW-nutYe_krQNCfhmgwu9YQnCotqIVYTyp5F7Jj73hFDNnfa8ynB16IprkFQSi5XPCt4fD4GAuNd0Kn9rWQRL_mejaf8neLcXH3JkDTk4s0HlN0jo50jrjEQq0qWl09X_W-xIFLDHwVsNQsQkc-q21NzmqyU04xlDvk"/>
</div>
<div>
<h3 className="font-headline-md text-headline-md leading-tight text-on-surface">Maya</h3>
<span className="bg-primary/10 text-primary px-sm py-0.5 rounded-sm text-label-caps font-label-caps border border-primary/20 inline-block mt-1">Focus Mode Active</span>
</div>
</div>
<button className="p-xs rounded-full hover:bg-surface-container-highest transition-colors">
<span className="material-symbols-outlined text-on-surface-variant">more_vert</span>
</button>
</div>
<div className="grid grid-cols-2 gap-sm mb-md">
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Cognitive Load</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-primary">Optimal</span>
</div>
</div>
<div className="bg-surface-container-low p-sm rounded-lg">
<p className="text-label-caps text-on-surface-variant mb-1 uppercase tracking-widest">Active Time</p>
<div className="flex items-end gap-xs">
<span className="font-data-metric text-data-metric text-secondary">3h 40m</span>
</div>
</div>
</div>
<div className="h-24 w-full bg-surface-container-lowest/30 rounded-lg p-sm mb-sm relative">
<div className="absolute inset-x-2 bottom-2 h-16 flex items-end gap-1">
<div className="bg-secondary/40 w-full h-22 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-20 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-18 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-16 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-15 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-16 rounded-t-xs"></div>
<div className="bg-secondary/40 w-full h-17 rounded-t-xs"></div>
</div>
</div>
<div className="flex gap-sm">
<button className="flex-1 glass-pill py-xs text-label-caps font-label-caps text-primary hover:bg-primary/20 transition-all">Deep Dive</button>
<button className="flex-1 border border-outline-variant py-xs text-label-caps font-label-caps rounded-full hover:bg-surface-container-highest transition-all">Send Note</button>
</div>
</div>
{/*  Card 4: Historical Context / Activity Log  */}
<div className="tonal-card p-md rounded-xl col-span-1 xl:col-span-2 2xl:col-span-3">
<div className="flex justify-between items-center mb-md">
<h3 className="font-headline-md text-headline-md text-on-surface">Family Activity Log</h3>
<div className="flex gap-xs bg-surface-container-low p-1 rounded-full border border-outline-variant">
<button className="px-md py-1 bg-primary text-on-primary rounded-full text-label-caps font-label-caps transition-all">Today</button>
<button className="px-md py-1 text-on-surface-variant hover:text-primary rounded-full text-label-caps font-label-caps transition-all">Week</button>
<button className="px-md py-1 text-on-surface-variant hover:text-primary rounded-full text-label-caps font-label-caps transition-all">Month</button>
</div>
</div>
<div className="space-y-sm">
<div className="flex items-center justify-between p-sm border-b border-outline-variant/30 hover:bg-surface-container-high/50 rounded transition-colors group cursor-pointer">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-error" style={{}}>warning</span>
<div>
<p className="text-body-md text-on-surface font-semibold">Heart Rate Spike Detected</p>
<p className="text-label-caps text-on-surface-variant">Elena • 10:42 AM • Immediate action recommended</p>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="bg-error/20 text-error px-sm py-xs rounded text-[10px] font-bold">CRITICAL</span>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
</div>
<div className="flex items-center justify-between p-sm border-b border-outline-variant/30 hover:bg-surface-container-high/50 rounded transition-colors group cursor-pointer">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-primary">bedtime</span>
<div>
<p className="text-body-md text-on-surface font-semibold">Sleep Cycle Completed</p>
<p className="text-label-caps text-on-surface-variant">Leo • 07:15 AM • 7h 45m (Score: 88)</p>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="bg-surface-container-highest text-on-surface-variant px-sm py-xs rounded text-[10px] font-bold">INFO</span>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
</div>
<div className="flex items-center justify-between p-sm border-b border-outline-variant/30 hover:bg-surface-container-high/50 rounded transition-colors group cursor-pointer">
<div className="flex items-center gap-md">
<span className="material-symbols-outlined text-secondary">fitness_center</span>
<div>
<p className="text-body-md text-on-surface font-semibold">Activity Milestone</p>
<p className="text-label-caps text-on-surface-variant">Maya • Yesterday • 10,000 Step Goal Reached</p>
</div>
</div>
<div className="flex items-center gap-sm">
<span className="bg-surface-container-highest text-on-surface-variant px-sm py-xs rounded text-[10px] font-bold">GOAL</span>
<span className="material-symbols-outlined text-on-surface-variant opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
</div>
</div>
</div>
</div>
</div>
{/*  Floating AI Insights Panel (Glassmorphic)  */}
<div className="fixed bottom-lg right-lg w-80 glass-pill p-md rounded-xl active-glow z-50">
<div className="flex items-center gap-sm mb-sm">
<div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
<h4 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">AI Guardian Insight</h4>
</div>
<p className="text-body-md text-on-surface mb-md">"Sync patterns show a correlation between Maya's focus scores and Dad's recovery metrics. Consider a shared family meditation tonight."</p>
<div className="flex flex-wrap gap-xs">
<span className="px-sm py-1 bg-primary/10 rounded-sm text-[10px] text-primary border border-primary/20 font-bold uppercase">Activity suggestion</span>
<span className="px-sm py-1 bg-secondary/10 rounded-sm text-[10px] text-secondary border border-secondary/20 font-bold uppercase">Wellness</span>
</div>
</div>
</main>
<script>
        // Simple animation logic for metric trends
        document.querySelectorAll('.tonal-card').forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.classList.add('active-glow');
                card.style.transform = 'translateY(-4px)';
                card.style.transition = 'all 0.3s ease';
            });
            card.addEventListener('mouseleave', () => {
                card.classList.remove('active-glow');
                card.style.transform = 'translateY(0)';
            });
        });
    </script>
` }} />
    </div>
  );
}
