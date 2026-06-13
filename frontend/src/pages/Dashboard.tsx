import React, { useEffect, useState } from 'react';
import { twinApi } from '../services/api';

export default function Dashboard() {
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
{/*  SideNavBar (Shared Component)  */}
<aside className="h-full w-64 fixed left-0 top-0 flex flex-col py-md px-sm bg-surface-container-low dark:bg-surface-container-low border-r border-outline-variant z-50">
<div className="flex items-center gap-sm mb-xl px-xs">
<div className="w-10 h-10 rounded-lg overflow-hidden bg-primary-container flex items-center justify-center">
<span className="material-symbols-outlined text-on-primary-container">psychology</span>
</div>
<div>
<h1 className="text-headline-md font-headline-md font-bold text-primary dark:text-primary">Health Twin</h1>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
</div>
</div>
<nav className="flex-1 space-y-xs">
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-primary dark:text-primary font-bold border-r-2 border-primary bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">dashboard</span>
<span className="text-body-md font-body-md">Dashboard</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
<span className="material-symbols-outlined">psychology</span>
<span className="text-body-md font-body-md">Twin Status</span>
</a>
<a className="flex items-center gap-sm px-sm py-xs rounded-lg text-on-surface-variant hover:bg-surface-container-high transition-colors duration-200" href="#">
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
<button className="w-full bg-tertiary-fixed text-on-tertiary font-bold py-sm px-md rounded-lg mb-md hover:opacity-90 transition-all duration-150">
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
{/*  TopNavBar (Shared Component)  */}
<header className="flex justify-between items-center h-16 px-lg fixed top-0 left-64 right-0 bg-background/80 backdrop-blur-md z-40">
<div className="flex items-center gap-md flex-1">
<div className="relative w-full max-w-md">
<span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
<input className="w-full bg-surface-container border-none rounded-full pl-xl pr-md py-xs text-on-surface focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Search insights..." type="text"/>
</div>
</div>
<div className="flex items-center gap-lg">
<div className="flex items-center gap-sm">
<button className="p-xs rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors">
<span className="material-symbols-outlined">notifications</span>
</button>
</div>
<div className="flex items-center gap-sm pl-md border-l border-outline-variant">
<div className="text-right hidden xl:block">
<p className="text-body-md font-body-md font-bold leading-tight">demo-user-001</p>
<p className="text-label-caps font-label-caps text-on-surface-variant opacity-60">PRO PLAN</p>
</div>
<img alt="User profile picture" className="w-10 h-10 rounded-full border border-outline-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU57GmAdHVBVGZcezCe07wc_lEyzF5x09nxzr6SDo2_PU3Qik3VLTcRMK0wo46bRvoO8xtSlfVsSO7lopB-l1iWGlZXY1keo_9wgFcxzvr57DyMP2P3gX4vvAw-FhpNl_6FaWmX1f2lEttU5O0Vbdgx-kqIg8s3iURzIlNIPaFWUvyXlIs6jyRXxq0HXZXRMa4HkrXVaQgh9BqjCfP8f56QHU-yb3gAWewm1N5R7OZaupzgXEC0ioLY2M1E-yHNX-PLV-Q2kfbwAU"/>
</div>
</div>
</header>
{/*  Main Content Area  */}
<main className="ml-64 pt-16 min-h-screen">
<div className="p-lg max-w-7xl mx-auto space-y-lg">
{/*  Header Section  */}
<section className="flex flex-col gap-xs mb-md">
<h2 className="text-headline-lg font-headline-lg text-on-surface">Today 8 May</h2>
<div className="flex items-center gap-sm">
<span className="text-headline-md font-headline-md text-primary">Good Activity</span>
<span className="px-sm py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-label-caps font-label-caps flex items-center gap-xs">
<span className="w-2 h-2 rounded-full bg-primary"></span>
                        AI OPTIMIZED
                    </span>
</div>
</section>
{/*  Bento Grid - Main Activity & High-level Metrics  */}
<div className="grid grid-cols-12 gap-gutter">
{/*  Large Activity Visualization (Matches reference visual style)  */}
<div className="col-span-12 lg:col-span-8 p-lg rounded-xl bg-surface-container-low border border-outline-variant relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="flex justify-between items-end mb-lg">
<div className="space-y-base">
<p className="text-label-caps font-label-caps text-on-surface-variant uppercase">Biometric Flux</p>
<h3 className="text-headline-md font-headline-md">Pulse & Circadian Alignment</h3>
</div>
<div className="flex gap-sm">
<div className="text-right">
<p className="text-label-caps font-label-caps text-on-surface-variant">Avg Today</p>
<p className="text-data-metric font-data-metric text-primary">92-121 <span className="text-sm opacity-60">BPM</span></p>
</div>
<div className="text-right border-l border-outline-variant pl-sm">
<p className="text-label-caps font-label-caps text-on-surface-variant">7-day Baseline</p>
<p className="text-data-metric font-data-metric text-on-surface">83-129 <span className="text-sm opacity-60">BPM</span></p>
</div>
</div>
</div>
{/*  Activity Graph Placeholder (Styled like the reference image bars)  */}
<div className="h-64 flex items-end justify-between gap-1 mt-md">
<script>
                            document.write(Array.from({length: 48}).map((_, i) => {
                                const h = Math.floor(Math.random() * 80) + 10;
                                const opacity = 0.3 + (h / 100) * 0.7;
                                return \`<div className="bar-chart-item flex-1 bg-primary rounded-full" style={{}}></div>\`;
                            }).join(''));
                        </script>
</div>
</div>
{/*  Secondary High-Impact Card (Appointment / Masked Image Style)  */}
<div className="col-span-12 lg:col-span-4 rounded-xl relative overflow-hidden group border border-outline-variant">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" data-alt="A high-end cinematic close-up of a professional healthcare specialist in a minimalist clinical setting. The lighting is soft and atmospheric, highlighting subtle golden and earth tones against a deep dark background. The image evokes a sense of advanced medical technology combined with human warmth and precision, following the health twin AI aesthetic of premium sanctuary and focused intelligence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-iqNkrDoDylmjXYxPx0fljcUmb6IsLTVL-z74d_MmfeJqOvx_BEQWfnJAZ4fVaFX2osnfltoWZ2i_xRdJBDgUshGfjUDbKaYb7B0D3ksJUrFr76A-Z-fcIkEm9cLKAZWt75_G4XQQOZ09RTO_srmT15ngnvzQ6Lr0Zbw99rHYahghi0oBF934r4nq7-kEKbnb-FHc9kgJlbj0o1yIH5YhAsd9pk1O-MVzBitGEBGPZ8ReYHz0aRe3YzFcx_94x8B1Oy0ESZdbjHg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface-dim via-surface-dim/40 to-transparent"></div>
<div className="absolute inset-0 flex flex-col justify-end p-lg">
<div className="glass-panel p-md rounded-lg space-y-sm">
<p className="text-body-md font-body-md font-semibold">Sign Up For An<br/>Appointment With A Doctor</p>
<div className="flex justify-between items-center">
<div>
<p className="text-data-metric font-data-metric text-primary">2,456 <span className="text-xs uppercase text-on-surface-variant font-label-caps">Doctors</span></p>
</div>
<button className="w-10 h-10 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center hover:bg-primary transition-colors hover:text-on-primary">
<span className="material-symbols-outlined text-[20px]">chevron_right</span>
</button>
</div>
</div>
<a className="mt-md text-primary font-bold flex items-center gap-xs text-sm" href="#">
                            All Doctors <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
</a>
</div>
</div>
{/*  Health Metrics Row  */}
<div className="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
{/*  Slept Card  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-md">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">bedtime</span>
<span className="text-label-caps font-label-caps text-on-surface-variant">SLEPT</span>
</div>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">info</span>
</div>
<div className="mb-sm">
<h4 className="text-data-metric font-data-metric"><span className="text-3xl font-bold">8</span> h <span className="text-3xl font-bold">32</span> min</h4>
<p className="text-sm text-secondary-fixed-dim">+12% vs last night</p>
</div>
{/*  Sparkline placeholder  */}
<div className="h-12 flex items-end gap-[2px]">
<div className="flex-1 bg-outline-variant h-1/2 rounded-t-sm"></div>
<div className="flex-1 bg-outline-variant h-2/3 rounded-t-sm"></div>
<div className="flex-1 bg-outline-variant h-1/3 rounded-t-sm"></div>
<div className="flex-1 bg-primary h-5/6 rounded-t-sm"></div>
<div className="flex-1 bg-primary-container h-full rounded-t-sm"></div>
</div>
</div>
{/*  Movement Card  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-md">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">footprint</span>
<span className="text-label-caps font-label-caps text-on-surface-variant">MOVEMENT</span>
</div>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">trending_up</span>
</div>
<div className="mb-sm">
<h4 className="text-data-metric font-data-metric"><span className="text-3xl font-bold">2,498</span> <span className="text-sm uppercase opacity-60">Step</span></h4>
<p className="text-sm text-secondary-fixed-dim">Daily goal: 10,000</p>
</div>
<div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden">
<div className="h-full bg-primary w-[25%]"></div>
</div>
</div>
{/*  Metabolism/Meal Card (Reference 3 style)  */}
<div className="p-md rounded-xl bg-surface-container-low border border-outline-variant relative overflow-hidden group">
<div className="flex items-center gap-xs mb-md relative z-10">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">restaurant</span>
<span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Plan</span>
</div>
<div className="flex gap-sm items-center relative z-10">
<div className="w-20 h-20 rounded-lg overflow-hidden bg-surface-dim border border-outline-variant">
<img className="w-full h-full object-cover" data-alt="A gourmet bento box containing fresh salmon sushi, colorful vegetables, and microgreens, presented on a dark textured ceramic plate. The image is captured from a high-angle perspective with dramatic soft lighting that highlights the textures and vibrant natural colors of the food. The background is a deep earthy brown, maintaining the sophisticated dark-themed aesthetic of the Health Twin dashboard." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZX6t2VGvBkgJ3IbK7WSgYVLOWocMK4qBNJbYDlfZjEq3rqM63W0BOAuSkvUqQXcN_R9rImuGcpbTFRY2FN5M-SePyauOEEgRC1tFyRDZDex5PU2ly6uRqJxetgSgE78El4h-tMT87PVcFuQ-yPjOhuHNGvrRZmoLlrvvFIxzP2FadRxFcJSN7RaUpaxJOm1hg9BPmqb1-PKCiR8o2GeefUhyzdar_TcsGQfwqhb1vcAk7RF_czkcRnae6Zhv3dPH-8ceKGeJys7s"/>
</div>
<div>
<p className="text-body-md font-bold leading-tight">Gather Your Menu</p>
<p className="text-label-caps font-label-caps text-secondary opacity-80">Eat Tasty All Day</p>
<p className="text-body-md font-bold text-primary mt-xs">\$34 <span className="text-xs font-normal opacity-60">Day</span></p>
</div>
</div>
<div className="mt-md pt-sm border-t border-outline-variant/30 flex justify-between items-center relative z-10">
<p className="text-sm text-on-surface-variant">Breakfast: 345 kcal</p>
<span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
</div>
</div>
{/*  Heart Rate Card  */}
<div className="p-md rounded-xl bg-surface-container border border-outline-variant hover:bg-surface-container-high transition-colors cursor-pointer group">
<div className="flex justify-between items-start mb-md">
<div className="flex items-center gap-xs">
<span className="material-symbols-outlined text-on-surface-variant text-[20px]">favorite</span>
<span className="text-label-caps font-label-caps text-on-surface-variant uppercase">Recovery</span>
</div>
<span className="material-symbols-outlined text-primary opacity-0 group-hover:opacity-100 transition-opacity">ecg_heart</span>
</div>
<div className="mb-sm">
<h4 className="text-data-metric font-data-metric"><span className="text-3xl font-bold">64</span> <span className="text-sm uppercase opacity-60">Resting BPM</span></h4>
<p className="text-sm text-secondary-fixed-dim">Optimal Zone</p>
</div>
<div className="h-10 flex items-center justify-center">
<svg className="w-full h-full text-primary/30" viewbox="0 0 100 20">
<path d="M0 10 Q 5 10, 10 0 T 20 10 T 30 15 T 40 5 T 50 10 T 60 2 T 70 18 T 80 10 T 90 10 T 100 10" fill="none" stroke="currentColor" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
</svg>
</div>
</div>
</div>
{/*  AI Insights Panel  */}
<div className="col-span-12 grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<div className="lg:col-span-2 p-lg rounded-xl glass-panel relative overflow-hidden">
<div className="flex justify-between items-center mb-md">
<h3 className="text-headline-md font-headline-md flex items-center gap-sm">
<span className="material-symbols-outlined text-primary">auto_awesome</span>
                                Twin Insights
                            </h3>
<div className="flex gap-xs">
<span className="px-xs py-1 rounded bg-surface-container-highest text-label-caps font-label-caps text-on-surface-variant">CRITICAL</span>
<span className="px-xs py-1 rounded bg-primary/20 text-label-caps font-label-caps text-primary border border-primary/20">NEW</span>
</div>
</div>
<div className="space-y-md">
<div className="p-md rounded-lg bg-surface-container-lowest/50 border-l-4 border-primary">
<p className="text-body-md font-bold mb-xs">Sleep Quality Anomaly Detected</p>
<p className="text-body-md text-on-surface-variant opacity-80">Your deep sleep duration was 15% lower than your average. Consider adjusting your evening wind-down routine to include 10 minutes of meditation.</p>
<div className="mt-md flex gap-sm">
<button className="text-sm font-bold text-primary flex items-center gap-xs">Apply Advice <span className="material-symbols-outlined text-sm">check_circle</span></button>
<button className="text-sm font-bold text-on-surface-variant opacity-60">Dismiss</button>
</div>
</div>
<div className="p-md rounded-lg bg-surface-container-lowest/50 border-l-4 border-outline-variant">
<p className="text-body-md font-bold mb-xs">Vitamin D Forecast</p>
<p className="text-body-md text-on-surface-variant opacity-80">UV levels today are optimal for natural Vitamin D synthesis. A 15-minute walk at 11:30 AM is recommended for your metabolic profile.</p>
</div>
</div>
</div>
<div className="rounded-xl bg-surface-container border border-outline-variant p-lg flex flex-col justify-center items-center text-center space-y-md">
<div className="w-32 h-32 relative">
<div className="absolute inset-0 rounded-full border-4 border-surface-container-highest"></div>
<div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{}}></div>
<div className="absolute inset-0 flex flex-col items-center justify-center">
<p className="text-data-metric font-data-metric text-primary">88%</p>
<p className="text-[10px] uppercase font-label-caps opacity-60">Sync State</p>
</div>
</div>
<div>
<h4 className="text-headline-sm font-headline-sm">Twin Fidelity</h4>
<p className="text-body-md text-on-surface-variant px-md">Your digital reflection is nearly perfect. Sync 24 more metrics for High Fidelity status.</p>
</div>
<button className="w-full outline outline-1 outline-primary text-primary font-bold py-sm px-md rounded-lg hover:bg-primary/10 transition-colors">
                            Refine Reflection
                        </button>
</div>
</div>
</div>
</div>
</main>
{/*  Floating Navigation Dock (For Desktop/Mobile Experience)  */}
<div className="fixed bottom-lg left-1/2 -translate-x-1/2 z-50 pointer-events-none">
<div className="pointer-events-auto bg-surface-dim/80 backdrop-blur-xl px-lg py-sm rounded-full flex items-center gap-xl border border-outline-variant shadow-2xl">
<button className="flex flex-col items-center gap-xs text-primary transition-all scale-110">
<span className="material-symbols-outlined" style={{}}>home</span>
<span className="text-[10px] font-label-caps font-bold">HOME</span>
</button>
<button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">analytics</span>
<span className="text-[10px] font-label-caps font-bold">ANALYZE</span>
</button>
<button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-all">
<span className="material-symbols-outlined">favorite</span>
<span className="text-[10px] font-label-caps font-bold">HEALTH</span>
</button>
<div className="w-px h-6 bg-outline-variant mx-xs"></div>
<button className="flex flex-col items-center gap-xs text-on-surface-variant hover:text-primary transition-all">
<img className="w-6 h-6 rounded-full border border-primary/40 grayscale opacity-70" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFNwq2hEK_7ClFG-8pjEmsniJDJwi_WcUmOvRTpY3Q10M4UxKCAulJy0lBbW99YWlzb5vjHqpzi5uQtYnzUcoJZCWg-dpe3ACVnOm-a8NjSPNJ6jk5Qhz_8iIHiwIMnynzQVVyldeV_-ObFrE5HzRcACjrcX4w9GEn3Lwb1NCCoSIS2Ejv7ksQ-C0B0Y5PWzzAOVYKzlaYFzkUHhGhKbA1sjV5hTVy4UaZeLS4eNl2sYIF2DDq_TlKqbKFa_FwKhScz9SydkZ9nJ0"/>
<span className="text-[10px] font-label-caps font-bold">ME</span>
</button>
</div>
</div>
{/*  Micro-interaction Scripts  */}
<script>
        // Animate chart bars on load
        window.addEventListener('DOMContentLoaded', () => {
            const bars = document.querySelectorAll('.bar-chart-item');
            bars.forEach((bar, index) => {
                const originalHeight = bar.style.height;
                bar.style.height = '0%';
                setTimeout(() => {
                    bar.style.height = originalHeight;
                }, index * 10);
            });
        });

        // Hover effect for bars
        document.querySelectorAll('.bar-chart-item').forEach(bar => {
            bar.addEventListener('mouseover', () => {
                bar.style.backgroundColor = '#f6e1cd';
                bar.style.opacity = '1';
                bar.style.transform = 'scaleY(1.05)';
            });
            bar.addEventListener('mouseout', () => {
                bar.style.backgroundColor = '';
                bar.style.opacity = '';
                bar.style.transform = '';
            });
        });
    </script>
` }} />
    </div>
  );
}
