export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "StuGig - currently working on",
    year: 2025,
    description:
      "Freelance Market Place for students, where they find freelance gigs, post projects, and get AI-matched to the perfect opportunity in their campus economy.",
    url: "https://stu-gig.vercel.app/",
    image: "/photos/StuGig.png",
  },
  {
    title: "Skill-Swap",
    year: 2025,
    description:
      "Peer to Peer skill exchange platform where users can exchange skills with other users.",
    url: "https://skill-swap-fawn.vercel.app/",
    image: "/photos/skillSwap.png",
  },
  {
    title: "LinkPilot",
    year: 2025,
    description:
      "LinkedIn-like platform for students to connect and find job opportunities - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/LinkPilot.git",
    image: "/photos/LinkPilot.jpeg",
  },
  {
    title: "Flare",
    year: 2025,
    description: "Dating App - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/LinkPilot.git",
    image: "/photos/Flare.jpeg",
  },
  {
    title: "Voqit-Ai",
    year: 2025,
    description:
      "AI-ChatBot designed to interact with real-time users using Clerk Authentication.",
    url: "https://voqit-ai.vercel.app/",
    image: "/photos/Voqit-Ai.png",
  },
  {
    title: "CURD-App",
    year: 2025,
    description:
      "Express CRUD Application using MVC structure with Docker support.",
    url: "https://github.com/AarushiDaksh/express-curd-app.git",
    image: "/photos/Docker.jpeg",
  },
  {
    title: "Voqit-ecom",
    year: 2025,
    description:
      "A responsive and modern e-commerce web app built with Next.js 14, TailwindCSS, and Clerk authentication. Includes product listing, cart, and protected routes.",
    url: "https://superb-squirrel-63.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fe-com-nextjs-voqit.vercel.app%2F",
    image: "/photos/ecom.png",
  },
  {
    title: "3Js-Portfolio",
    year: 2025,
    description:
      "Excited to learn more in Three.js, so I started by building my own personal 3D portfolio room.",
    url: "https://3-js-portfolio-aarushi-dakshs-projects.vercel.app/",
    image: "/photos/3Js.png",
  },
];
// export projects array