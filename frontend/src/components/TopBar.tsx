interface Props {
  title?: string;
}

export default function TopBar({ title }: Props) {
  return (
    <header className="flex justify-between items-center h-16 px-lg fixed top-0 left-64 right-0 bg-background/80 backdrop-blur-md z-40 border-b border-outline-variant/30">
      <div className="flex items-center gap-md flex-1">
        <div className="relative w-full max-w-md">
          <span className="material-symbols-outlined absolute left-sm top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none">search</span>
          <input
            className="w-full bg-surface-container border-none rounded-full pl-xl pr-md py-xs text-on-surface focus:ring-1 focus:ring-primary outline-none transition-all"
            placeholder="Search insights..."
            type="text"
          />
        </div>
        {title && <h2 className="text-headline-md font-headline-md text-on-surface ml-md hidden xl:block">{title}</h2>}
      </div>
      <div className="flex items-center gap-lg">
        <button className="p-xs rounded-full hover:bg-surface-container-high text-on-surface-variant transition-colors">
          <span className="material-symbols-outlined">notifications</span>
        </button>
        <div className="flex items-center gap-sm pl-md border-l border-outline-variant">
          <div className="text-right hidden xl:block">
            <p className="text-body-md font-body-md font-bold leading-tight">Ramesh Kumar</p>
            <p className="text-label-caps font-label-caps text-on-surface-variant opacity-60">demo-user-001</p>
          </div>
          <div className="w-10 h-10 rounded-full border border-outline-variant bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}
