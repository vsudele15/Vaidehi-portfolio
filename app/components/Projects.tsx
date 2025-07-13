import Link from "next/link";

const PROJECTS = [
  {
    title: "Sentify",
    description:
      "Sentify is an AI-powered financial tracker that helps you monitor, analyze, and understand your spending habits with smart insights and real-time updates.",
    href: "https://github.com/vsudele15/Sentify" ,
  },
  {
    title: "Journal Web App",
    description: "Full-stack journaling app with React, Node.js, Express, and MongoDB, enabling users to securely log in and manage journal entries with CRUD functionality.",
    href: "https://github.com/vsudele15/Journal-app",
  },
  {
    title: "Fanta Animated Website - Frontend",
    description:
      "The Fanta Animated Website is a vibrant, visually rich frontend designed to represent the Fanta brand through playful animations. Built to captivate users, the site uses motion design and smooth transitions to create an immersive digital environment that reflects Fanta’s fun, energetic identity.",
    href: "https://wanta-fanta.vercel.app/",
  },
  {
    title: "Keithson Bakery Website - Frontend",
    description:
      "Frontend of a bakery website. Developed with React.js",
    href: "https://keithston-bakery.vercel.app/",
  },
];

function Projects() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Projects</h2>
      <div className="mt-8 flex flex-col gap-4">
        {PROJECTS.map((proj) => (
          <Link key={proj.title} href={proj.href || ""}>
            <div className="cursor-pointer bg-neutral-800 hover:bg-accent/10 p-4 rounded-xl select-none transition-colors duration-300 ease-out">
              <p className="text-highlight font-medium">{proj.title}</p>
              <p>{proj.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
