/* eslint-disable @next/next/no-img-element */

import Logo from "./Logo";

const EDUCATION = [
  {
    image: "https://d2vwxessb8tj4z.cloudfront.net/images/uf_logo.jpg",
    uni: "University of Florida",
    loc: "Gainesville, Florida, USA",
    deg: "Master of Science, Computer Science",
    from: "Aug 2023",
    to: "Present",
    gpa: "3.66/4",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/en/a/ae/Devi_Ahilya_Vishwavidyalaya_Logo.png",
    uni: "Devi Ahilya University",
    loc: "Indore, MP, India",
    deg: "Bachelor of Computer Application",
    from: "Aug 2019",
    to: "May 2023",
    gpa: "8.57/10",
  },
];

function Education() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Education</h2>
      <div className="mt-8 flex flex-col gap-6">
        {EDUCATION.map((ed) => (
          <div key={ed.deg} className="flex gap-4 md:gap-6">
            <Logo src={ed.image} alt={`${ed.uni} logo`} />
            <div>
              <p className="text-highlight font-medium">{ed.uni}</p>
              <p>{ed.loc}</p>
              <p>{ed.deg}</p>
              <p>
                {ed.from} -{" "}
                <span className={ed.to === "Present" ? "text-accent" : ""}>
                  {ed.to}
                </span>
              </p>
              <p>GPA - {ed.gpa}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
