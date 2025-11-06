export default function StatsBand() {
  const items = [
    { k: "10+", v: "Years Experience" },
    { k: "64+", v: "Completed Project" },
    { k: "151+", v: "Happy Client" },
  ];
  return (
    <section id="about" className="bg-neutral-900 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-14 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="text-3xl font-bold">I’M AARUSHI</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-neutral-300">
            UI/UX designer and full-stack developer focused on clean design systems,
            micro-interactions, and performance. I blend product thinking with code to
            ship polished web & mobile apps.
          </p>
        </div>
        <ul className="grid grid-cols-3 gap-4 md:col-span-5">
          {items.map((it) => (
            <li key={it.v} className="rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-2xl font-extrabold">{it.k}</div>
              <div className="text-xs text-neutral-300">{it.v}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
