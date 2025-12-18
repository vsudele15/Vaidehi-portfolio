import DetailsToggle from "./DetailsToggle";
import Logo from "./Logo";

const WORK_EXPERIENCES = [
  {
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQFlwJXeYdf8ig/company-logo_200_200/company-logo_200_200/0/1738259720900/uf_ic3_logo?e=2147483647&v=beta&t=SYZ2rR4vSyiTQF0ffK4lTMC46F4VHZ5N6kw5p1cwG2o",
    company: "SMILE Lab (UF)",
    role: "Data Science and Web Designer",
    loc: "Gainesville, USA",
    from: "Nov 2025",
    to: "Present",
    details: [
      "Designed and implemented intuitive data visualizations for NIH-funded research datasets using a React + TypeScript frontend, transforming complex research data into clear, accessible interfaces to support understanding by new and interdisciplinary researchers.",
      "Collaborated within the SMILE Lab and UCF using GitHub-based workflows to develop and refine a scalable web application, improving usability, visual clarity, and documentation to ensure research findings are easily interpretable by incoming team members.",
    ],
  },
  {
    image: "https://brandcenter.p01.wp.it.ufl.edu/wp-content/uploads/sites/57/2024/05/NEW-IMAGES_UF-Logo_University-Logo-768x789-1-292x300.png",
    company: "Virtual Learning Lab (UF)",
    role: "Web Developer",
    loc: "Gainesville, USA",
    from: "Aug 2025",
    to: "Present",
    details: [
      "Designed and implemented a full-stack educational web platform (Storiza) using React + TypeScript, Firebase, and a Python backend on Google Cloud, enabling teachers to generate, manage, and test AI-assisted literacy content in a controlled, non-production environment.",
      "Built modular AI content-generation pipelines (story and maze generation) with prompt engineering, linguistic heuristics, and lesson-pattern normalization, integrating LLMs while enforcing grade-level, phonics, and sound-focus constraints.",
      "Led end-to-end developer infrastructure and tooling, including versioned APIs (v1/v2), ephemeral audio recording flows, CI-ready cloud deployments, and IAM-aware sandbox environments, supporting experimentation without risking production stability.",
    ],
  },
  {
    image: "https://lh3.googleusercontent.com/p/AF1QipP88w1YFirpQyzpUFDP_cTRW5LgxEySzwwFKOmW=s1360-w1360-h1020-rw",
    company: "Sports Excitement LLC",
    role: "Software Engineer Intern (Fullstack)",
    loc: "New york, USA",
    from: "Dec 2024",
    to: "Jul 2025",
    details: [
      "Developed a platform using React and Node.js for 1,000+ student-athletes to connect with their dream colleges.",
      "Designed a coding-intensive, documentation-light Scrum-based Agile methodology to efficiently streamline project delivery.",
      "Consistently exceeded sprint goals with a remarkable 95% on-time delivery rate, significantly boosting productivity by 15%.",
    ],
  },
];

function WorkExperience() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Work Experience</h2>
      <div className="mt-8 flex flex-col gap-6">
        {WORK_EXPERIENCES.map((xp) => (
          <div key={`${xp.company}-${xp.role}-${xp.from}`} className="flex gap-4 md:gap-6">
            <Logo src={xp.image} alt={`${xp.company} logo`} />
            <div>
              <p className="text-highlight font-medium">{xp.company}</p>
              <p>{xp.role}</p>
              <p>{xp.loc}</p>
              <p>
                {xp.from} - {xp.to}
              </p>
              <DetailsToggle>
                <ul className="mt-2 flex flex-col gap-2 list-disc ml-4">
                  {xp.details.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </DetailsToggle>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
