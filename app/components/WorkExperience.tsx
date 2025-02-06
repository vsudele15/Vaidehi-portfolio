import DetailsToggle from "./DetailsToggle";
import Logo from "./Logo";

const WORK_EXPERIENCES = [
  {
    image: "https://media.licdn.com/dms/image/v2/D4E0BAQElTw2wjAwp2w/company-logo_200_200/company-logo_200_200/0/1738302519137?e=1746662400&v=beta&t=AbO7Cafi2OR9np8R_-0JB_YjydUjyHOcST2Kx8nqFSA",
    company: "Sports Excitement LLC",
    role: "Software Engineer Intern (Fullstack)",
    loc: "New york, USA",
    from: "Dec 2024",
    to: "Present",
    details: [
      "Developed a platform using React and Node.js for 1,000+ student-athletesto connect with their dream colleges.",
      "Designed a coding-intensive, documentation-light Scrum-based Agile methodology to efficiently streamline project delivery.",
      "Consistently exceeded sprint goals with a remarkable 95% on-time delivery rate, significantly boosting productivity by 15%.",
    ],
  },
  {
    image: "https://media.glassdoor.com/sqll/2143300/the-sparks-foundation-squarelogo-1556515236044.png",
    company: "The Sparks Foundation",
    role: "Software development Engineer Intern",
    loc: "Indore, MP, India",
    from: "Jul 2019",
    to: "Mar 2022",
    details: [
      "Initiated a successful NGO donation website using HTML,CSS and JavaScript, driving a 25% increase in online contributions, making a substantial impact.",
      "Skillfully Integrated the Razorpay API, cutting payment processing time by 40% and elevating transaction success by 15%.",
      "Implemented email notification system, achieving a 90% open rate and 80% click-through rate, enhancing donor engagement",
    ],
  },
];

function WorkExperience() {
  return (
    <div>
      <h2 className="text-2xl text-highlight">Work Experience</h2>
      <div className="mt-8 flex flex-col gap-6">
        {WORK_EXPERIENCES.map((xp) => (
          <div key={xp.company} className="flex gap-4 md:gap-6">
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
