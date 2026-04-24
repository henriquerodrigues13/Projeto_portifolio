export default function Header() {
  return (
    <header className="pointer-events-none absolute left-0 right-0 top-0 z-20 px-6 pt-8 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="pointer-events-auto glass-panel rounded-full px-4 py-2 text-xs font-medium text-muted-foreground">
          <span className="text-foreground/90">Henrique</span>
          <span className="mx-2 text-border">/</span>
          <span>Portfólio</span>
        </div>
        <div className="hidden text-xs text-muted-foreground md:block">
          UI systems · motion · performance
        </div>
      </div>
    </header>
  );
}

