
import Link from "next/link";
import ContactForm from "app/components/contactFrorm";


export const metadata = {
  title: "Experience",
  description: "Aarushi's Job & Internship Timeline",
};

const experiences = [
  {
    company: "Xebia",
    role: "Intern Trainee",
    duration: "May 2025 – July 2025",
    description:
      "Working on Mern Applications also with major marketplace project guided my mentors. Built visual editors and gained hands-on experience with Microsoft Azure (AZ-204).",
  },
  {
    company: "EatOnTime",
    role: "Application Developer Intern",
    duration: "Oct 2024 – Jan 2025",
   description:"Worked on a food delivery app as part of a startup project. Collaborated with the team to build main features and helped shape the app's design and functionality.",
  },
];

const certificates = [
  {
    title: "Developer Solutions for Microsoft Azure(AZ-204)",
    year: 2025,
    link: "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/W24BWLZN?sharingId=5832313FE374D7BA",
  },
  {
    title: "Microsoft Azure Administrator",
    year: 2025,
    link: "https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/8ZBG46GW?sharingId=5832313FE374D7BA",
  },
  {
    title: "Developer AI solutions for Microsoft Azure",
    year: 2025,
    link:"https://learn.microsoft.com/api/achievements/share/en-us/AarushiDaksh-3115/NVJXYCZF?sharingId=5832313FE374D7BA",
  },
 {
  title: "ICPCT-2025 IEEE Certificate of Presentation – A Multi-Criteria Decision-Making Approach for E-Commerce: An Evolutionary Study on Spring Boot Implementation",
  year: 2025,
},
{
  title: "Google Cloud Arcade Facilitator",
  year: 2025,
}
];




export default function BlogPosts() {
  return (
    <section className="max-w-3xl px-4 sm:px-8  mx-auto">
       <div className="mb-10 text-center">
    <a
      href="https://medium.com/@aarushi312004"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
    >
      {/* Medium Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1043.63 592.71"
        className="w-5 h-5 fill-current"
      >
        <path d="M588.67 296.59a296.59 296.59 0 1 1-593.18 0 296.59 296.59 0 0 1 593.18 0ZM812.5 296.59a105.07 105.07 0 1 1-210.14 0 105.07 105.07 0 0 1 210.14 0Zm231.13 0a52.54 52.54 0 1 1-105.08 0 52.54 52.54 0 0 1 105.08 0Z" />
      </svg>
      Visit My Medium Profile
    </a>
  </div>
      <h1 className="mb-8 text-2xl font-medium">Work Experience</h1>

      <ul className="space-y-8">
        {experiences.map((exp, index) => (
          <li key={index} className="border-l-2 border-neutral-300 pl-4">
            <h2 className="text-lg font-semibold text-black dark:text-white">
              {exp.role} @ {exp.company}
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {exp.duration}
            </p>
            <p className="text-sm mt-1 text-neutral-700 dark:text-neutral-300">
              {exp.description}
            </p>
          </li>
        ))}
      </ul>

      <h2 className=" mt-8 mb-6 text-2xl  text-black dark:text-white">Certificates and Learnings</h2>
      <ul className="space-y-4">
        {certificates.map((cert, index) => (
          <li key={index} className="text-sm text-neutral-800 dark:text-neutral-200">
            <span className="font-medium">• {cert.title}</span>
            {cert.year && <span className="ml-2 text-neutral-500">({cert.year})</span>}
            {cert.link && (
              <Link
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 underline dark:text-blue-400"
              >
                View
              </Link>
            )}
          </li>
        ))}
      </ul>

       <ContactForm />
    
      <div className="mt-10 flex justify-center gap-4">
        <a
          href="" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium px-4 py-2 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          📄 View My Resume
        </a>
        <a
          href="https://leetcode.com/u/aarushidaksh05/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium px-4 py-2 border border-black dark:border-white rounded hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
        >
          🧠 LeetCode Profile
        </a>
      </div>


    </section>
  );
}
