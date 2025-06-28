import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="./photos/10.jpg"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-4 text-2xl font-semibold">Hey👋🏼! I'm Aarushi</h1>
      <h2 className="mb-6 text-xl font-medium">A Full Stack Developer</h2>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a passionate Developer with a strong foundation in building responsive, user-friendly web applications. My tech stack includes React, Next.js, Node.js, MongoDB, and more.
        </p>
        <p>
          As a fresher, I bring hands-on experience from internships, personal projects, and hackathons. I'm confident in my ability to adapt, learn quickly, and contribute meaningfully to real-world solutions.
        </p>
        <p>
          I enjoy transforming ideas into code, optimizing user experiences, and solving problems through elegant, scalable solutions. Whether it's building frontend interfaces or working on backend APIs, I strive for clean and maintainable code.
        </p>
        <p>
          I’m always open to collaborating on exciting tech projects, contributing to teams, and learning from industry professionals.
        </p>
        <p>
          Let’s connect and create something impactful together🩵!
        </p>
      </div>
    </section>
  );
}
