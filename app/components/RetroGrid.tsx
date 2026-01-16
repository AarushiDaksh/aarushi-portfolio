// components/RetroGrid.tsx
export default function RetroGrid({
  size = 48,             // px per cell
  line = 1,              // px line thickness
  strength = "subtle",   // "subtle" | "medium" | "bold"
  z = 0,                 // layer order
}: {
  size?: number;
  line?: number;
  strength?: "subtle" | "medium" | "bold";
  z?: number;
}) {
  const alpha =
    strength === "bold" ? 0.16 : strength === "medium" ? 0.10 : 0.06;

  // Pass grid vars to CSS; themes will set --grid-rgba/--grid-alpha defaults
  const vars = {
    // sizing
    ["--grid-size" as any]: `${size}px`,
    ["--grid-line" as any]: `${line}px`,
    // base alpha from prop; theme can override by redefining --grid-alpha
    ["--grid-alpha" as any]: alpha,
  } as React.CSSProperties;

  const layer: React.CSSProperties = {
    backgroundImage:
      `linear-gradient(to right, rgba(var(--grid-rgba, 0,0,0), var(--grid-alpha)) var(--grid-line), transparent var(--grid-line)),` +
      `linear-gradient(to bottom, rgba(var(--grid-rgba, 0,0,0), var(--grid-alpha)) var(--grid-line), transparent var(--grid-line))`,
    backgroundSize: `var(--grid-size) var(--grid-size)`,
    backgroundPosition: "0 0",
  };

  return (
    <div
      className="retro-grid fixed inset-0 pointer-events-none"
      style={{ zIndex: z, ...vars }}
      aria-hidden
    >
         {/* soft glow blobs */}
      <div className="pointer-events-none absolute inset-0 ">
        <div className="absolute left-1/2 top-[-140px] h-[420px] w-[420px] -translate-x-1/2 rounded-full blur-3xl opacity-25 bg-[#c5d725]" />
        <div className="absolute left-[18%] top-[35%] h-[360px] w-[360px] rounded-full blur-3xl opacity-15 bg-pink-500" />
        <div className="absolute right-[12%] top-[30%] h-[360px] w-[360px] rounded-full blur-3xl opacity-10 bg-sky-400" />
      </div>
      <div className="absolute inset-0" style={layer} />
    </div>
  );
}
