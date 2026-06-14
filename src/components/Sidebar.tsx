import { NavLink } from 'react-router-dom';

const navItems = [
  { to: '/',          icon: 'dashboard',       label: 'Dashboard' },
  { to: '/status',    icon: 'psychology',      label: 'Twin Status' },
  { to: '/metrics',   icon: 'add_chart',       label: 'Log Metrics' },
  { to: '/reports',   icon: 'assessment',      label: 'Reports' },
  { to: '/simulator', icon: 'model_training',  label: 'Simulator' },
  { to: '/family',    icon: 'family_restroom', label: 'Family Guardian' },
];

export default function Sidebar() {
  return (
    <aside className="h-full w-64 fixed left-0 top-0 flex flex-col py-md px-sm bg-surface-container-low border-r border-outline-variant z-50">
      {/* Logo */}
      <div className="flex items-center gap-sm mb-xl px-xs">
        <div className="w-10 h-10 rounded-lg overflow-hidden bg-primary-container flex items-center justify-center">
          <span className="material-symbols-outlined text-on-primary-container">psychology</span>
        </div>
        <div>
          <h1 className="text-headline-md font-headline-md font-bold text-primary">Health Twin</h1>
          <p className="text-label-caps font-label-caps text-on-surface-variant opacity-70">AI Digital Reflection</p>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-xs">
        {navItems.map(({ to, icon, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-sm px-sm py-xs rounded-lg transition-colors duration-200 ${
                isActive
                  ? 'text-primary font-bold border-r-2 border-primary bg-surface-container-high'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`
            }
          >
            <span className="material-symbols-outlined">{icon}</span>
            <span className="text-body-md font-body-md">{label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto space-y-xs border-t border-outline-variant pt-md">
        <div className="px-xs mb-xs">
          <div className="flex items-center justify-between">
            <p className="text-label-caps font-label-caps text-on-surface-variant">API STATUS</p>
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          </div>
          <p className="text-[10px] text-outline mt-1 font-mono">demo-user-001</p>
        </div>
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
  );
}
