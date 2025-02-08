import { Github, Linkedin, Mail } from "lucide-react";

function Intro() {
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-4xl font-medium text-highlight">Vaidehi Sudele</h1>
      <div className="font-medium">
        <p>Software Engineer</p>
        <p>CS graduate student @ UF</p>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <a
          className="text-accent"
          target="_blank"
          href="https://drive.google.com/file/d/14RcqAXLX-QwrTI65wwdwnrsqzdwO7Y9R/view?usp=sharing"
        >
          Resume
        </a>
        <p>|</p>
        <a
          className="text-accent"
          target="_blank"
          href="mailto:vsudele@ufl.edu"
        >
          <span className="sr-only">Email</span>
          <Mail className="h-6 w-6 text-accent" />
        </a>
        <p>|</p>
        <a href="https://github.com/vsudele15" target="_blank">
          <span className="sr-only">GitHub link</span>
          <Github className="h-6 w-6 text-accent" />
        </a>
        <p>|</p>
        <a href="https://www.linkedin.com/in/vaidehisudele/" target="_blank">
          <span className="sr-only">LinkedIn link</span>
          <Linkedin className="h-6 w-6 text-accent" />
        </a>
      </div>
    </div>
  );
}

export default Intro;
