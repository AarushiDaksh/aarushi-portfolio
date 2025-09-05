// components/RetroGrid.tsx
export default function RetroGrid({
  size = 48,                            // px per cell
  line = 1,                             // px line thickness
  strength = "subtle",                  // "subtle" | "medium" | "bold"
  z = 0,                                // layer order
}: {
  size?: number;
  line?: number;
  strength?: "subtle" | "medium" | "bold";
  z?: number;
}) {
  const alpha =
    strength === "bold" ? 0.16 : strength === "medium" ? 0.10 : 0.06;

  const dark = `rgba(255,255,255,${alpha})`;
  const light = `rgba(0,0,0,${alpha})`;

  const layer = (color: string): React.CSSProperties => ({
    backgroundImage:
      `linear-gradient(to right, ${color} ${line}px, transparent ${line}px),` +
      `linear-gradient(to bottom, ${color} ${line}px, transparent ${line}px)`,
    backgroundSize: `${size}px ${size}px`,
    backgroundPosition: "0 0",
  });

  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: z }} aria-hidden>
      {/* Dark mode */}
      <div className="absolute inset-0 hidden dark:block" style={layer(dark)} />
      {/* Light mode */}
      <div className="absolute inset-0 dark:hidden" style={layer(light)} />
    </div>
  );
}
