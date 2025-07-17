import Image from "next/image";
import Link from "next/link";

export default function DevWorld() {
  return (
    <section className="min-h-screen bg-[#2e2e2e] text-white font-mono p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">🟩 Dev World</h1>
        <Link href="/" className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
          Exit World ✖
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-[#3C9A5F] border-4 border-[#8B5E3C] p-4 rounded-md shadow-md">
          <h2 className="text-xl font-bold">💡 Let's Build Together</h2>
          <p className="text-sm mt-2">Don't let your ideas rest. Let’s make them real!</p>
        </div>

        <div className="bg-[#A9A9A9] border-4 border-black p-4 rounded-md text-center">
          <Image src="/mockup.png" width={200} height={100} alt="Preview" className="mx-auto rounded" />
          <p className="mt-2 text-sm">Project Showcase</p>
        </div>

        <div className="bg-[#F28C28] border-4 border-[#3C9A5F] p-4 rounded-md">
          <h2 className="text-lg font-semibold">👩‍💻 About Me</h2>
          <p className="text-sm mt-2">
            Full Stack Engineer with a flair for UI/UX, 3D visuals, and AI bots. 💬
          </p>
        </div>

        <div className="bg-[#6EC1E4] border-4 border-[#2b2b2b] p-4 rounded-md">
          <h2 className="text-lg font-semibold mb-2">📊 Stats</h2>
          <ul className="text-sm list-disc list-inside">
            <li>Clients: 12+</li>
            <li>Projects: 20+</li>
            <li>Hackathons: 5+</li>
            <li>XP: 2+ yrs</li>
          </ul>
        </div>

        <div className="bg-[#8B5E3C] border-4 border-[#3C9A5F] p-4 rounded-md">
          <h2 className="font-bold text-lg">🛠️ Tools</h2>
          <div className="flex gap-3 mt-3 flex-wrap">
            <span className="bg-white text-black text-sm px-2 py-1 rounded">Next.js</span>
            <span className="bg-white text-black text-sm px-2 py-1 rounded">MongoDB</span>
            <span className="bg-white text-black text-sm px-2 py-1 rounded">Three.js</span>
            <span className="bg-white text-black text-sm px-2 py-1 rounded">Node.js</span>
          </div>
        </div>

        <div className="bg-[#2b2b2b] border-4 border-[#6EC1E4] p-4 rounded-md text-center">
          <p className="text-lg font-bold">🌙 Theme Toggle</p>
          <button className="mt-3 bg-gray-800 px-4 py-2 rounded-md">Dark</button>
        </div>
      </div>
    </section>
  );
}
