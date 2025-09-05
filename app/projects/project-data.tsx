export interface Project {
  tags: any;
  repo: Url;
  repo: any;
  title: string;
  year?: number;
  description: string;
  url: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: "SkillSlack – Developers Collaboration Platform",
    year: 2025,
    description:
      "Real-time Slack-style workspace for developers featuring channel-based chat, GitHub PR sync, voice rooms, and an AI chatbot. Built with Clerk auth, Socket.IO, GitHub API, and LiveKit.",
    image: "/photos/slack.png",
    url: "https://skill-slack.vercel.app",
  },
  {
    title: "StuGig – Marketplace for Students",
    year: 2025,
    description:
      "A freelance gig platform built for students. Includes role-based dashboards, Stripe payments, SkillSwap matching, real-time chat, and admin tools.",
    image: "/photos/StuGig.png",
    url: "https://stu-gig.vercel.app",
  },
  {
    title: "Maniac – AI Productivity Agent",
    year: 2025,
    description:
      "AI agent to manage tasks, notes, and reminders with a retro-style animated timer and motivational feedback. Supports session logs, alerts, and smooth UX.",
    image: "/photos/maniac.png",
    url: "https://maniac-ten.vercel.app",
  },
  {
    title: "LinkPilot",
    year: 2025,
    description:
      "LinkedIn automation bot for students to connect and find job opportunities - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/LinkPilot.git",
    image: "/photos/LinkPilot.jpeg",
  },
  {
    title: "Flare",
    year: 2025,
    description: "Dating App - Backend Application with Express and MongoDB.",
    url: "https://github.com/AarushiDaksh/DatingApp.git",
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
  {
  title: "Album",
  year: 2025,
  description:
    "",
  url: "",
  image: "/photos/music.jpeg",
},


];
