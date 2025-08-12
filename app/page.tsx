import Image from "next/image";
import { socialLinks } from "./lib/config";
import "./globals.css";
import PlasmaWave from "./components/PlasmaWave";
import RetroGrid from "./components/RetroGrid"; 
import Header from "./components/Header"; 
import { Navbar } from "./components/nav";
import BestWorks from "./components/BestWork";
import RockCard from "./components/RockCard";

export default function Page() {
  return (
    <>
     
     
      <section> 
        <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer">
          {/* <div className="group w-fit mx-auto sm:float-right sm:ml-6 sm:mb-6 lg:mt-4 mb-10 transition-transform duration-300 hover:scale-105">
            <Image
              src="/photos/10.jpg"
              alt="Profile photo"
              className="rounded-full bg-gray-100 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-300"
              width={160}
              height={160}
              unoptimized
              priority
            />
          </div> */}
        </a>
       <div className= "">
        <h2 className="mb-6 text-xl font-medium">About</h2>
        <div className="prose prose-neutral dark:prose-invert">
                <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed">
          I develop interactive web applications using <strong>React</strong>, <strong>Next.js</strong>, and <strong>Tailwind CSS</strong>, while creating powerful mobile apps with <strong>React Native</strong>.
        </p>

  
        </div>
        <BestWorks />
        <Navbar />
        </div>
      </section>

<a
  href="https://maniac-ten.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  title="Go to Maniac App"
  className="bug-wave text-3xl mr-2 fixed right-0 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-3 rounded-full shadow-lg transition duration-300 hover:bg-pink-600 hover:scale-110"
>
  🐞
</a>



    </>
  );
}
