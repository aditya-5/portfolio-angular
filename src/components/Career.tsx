import "./styles/Career.css";

const careerData = [
  {
    role: "Software Developer",
    company: "Imago Software",
    year: "2024 - Present",
    desc: "Managed application deployments via Digital Ocean and AWS using Docker containers. Oversaw microservices-based Flask apps and enhanced Auth0 mechanisms.",
  },
  {
    role: "Hornet Representative",
    company: "University of Manchester",
    year: "2023 - 2024",
    desc: "Provided technical support and troubleshooting for residents' computers and network issues in university halls, fostering a supportive tech environment.",
  },
  {
    role: "Software Engineering Intern",
    company: "University of Manchester",
    year: "2023",
    desc: "Developed a cross-platform mobile app using Flutter to calculate the carbon footprint of recipes and provide statistics on cumulative emissions.",
  },
  {
    role: "RPA IT Placement Developer",
    company: "NHS, Manchester",
    year: "2022 - 2023",
    desc: "Developed bots using Automation Anywhere to replace transaction-based manual processes. Explored advanced Excel and macros for process efficiency.",
  }
];

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {careerData.map((job, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>{job.company}</h5>
                </div>
                <h3>{job.year}</h3>
              </div>
              <p>{job.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
