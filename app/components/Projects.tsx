import Link from "next/link";

const PROJECTS = [
  {
    title: "Journal Web App",
    description:
      "Full-stack journaling app with React, Node.js, Express, and MongoDB, enabling users to securely log in and manage journal entries with CRUD functionality.",
    href: "https://github.com/vsudele15/TO-DO-list-App",
  },
  {
    title: "Spotify Album Finder",
    description: "Web app that allows users to search for an artist by name and retrieve a list of their albums using the Spotify API.",
    href: "https://github.com/vsudele15/TO-DO-list-App",
  },
  {
    title: "Norman DB Incident Data Pipeline Optimization",
    description:
      "Involved enhancing a data pipeline with Python scripts to process and integrate daily incident summary PDFs, while optimizing performance through caching for geocoding and weather data.",
    href: "https://github.com/vsudele15/TO-DO-list-App",
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
