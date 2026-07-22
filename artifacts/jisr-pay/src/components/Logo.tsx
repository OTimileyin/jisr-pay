// The Jisr Pay mark — a bridge arc between two nodes. Shared by the nav bar
// and the favicon so the brand mark is defined in exactly one place.
export function LogoGlyph({ className }: { className?: string }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 18C4 18 6 8 12 8C18 8 20 18 20 18" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="4" cy="18" r="2" fill="#f59e0b" />
      <circle cx="20" cy="18" r="2" fill="#f59e0b" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className ?? ''}`}>
      <LogoGlyph />
      <span className="text-xl tracking-tight">
        <span className="font-extrabold text-primary">Jisr</span>
        <span className="font-medium text-foreground ms-1">Pay</span>
      </span>
    </div>
  );
}
