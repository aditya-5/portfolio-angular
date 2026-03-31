import "./styles/Career.css";

const careerData = [
  {
    role: "Software Graduate Engineer",
    company: "Jaguar Land Rover",
    year: "September 2024 – Present",
    desc: "Built the CIARA Configuration Toolset for zero-touch test rig deployment using AWS and Next.js. Engineered telemetry pipelines and maintained core APIs."
  },
  {
    role: "Software Developer Intern",
    company: "Imago Software",
    year: "June 2024 – August 2024",
    desc: "Developed a cross-platform Flutter app for real-time metric visualisation and optimised Python API deployments on AWS."
  },
  {
    role: "Software Engineering Intern",
    company: "University of Manchester",
    year: "July 2022 & July 2023",
    desc: "Trained and deployed ML fact-verification models and mobile applications."
  },
  {
    role: "Robotic Process Automation Engineer",
    company: "National Health Service (NHS)",
    year: "August 2022 – July 2023",
    desc: "Architected an RPA bot using Automation Anywhere to process 180,000+ referral letters out of a manual backlog."
  },
  {
    role: "Full-Stack Developer (Part-time)",
    company: "Ocean82",
    year: "June 2021 – July 2022",
    desc: "Architected a MERN stack stock-trading simulation and scaled a live event judging platform to 5x capacity."
  },
  {
    role: "Technology Spring Insight Intern",
    company: "The Hut Group",
    year: "Apr 2021",
    desc: "Gained deep insight into THG's engineering culture and worked on a group coding challenge."
  },
  {
    role: "Technology Insight Intern",
    company: "Optiver",
    year: "Apr 2021",
    desc: "Explored algorithmic trading and built a simulated Python Algo-Trade bot in a team (ranked #4 out of 23 teams)."
  },
  {
    role: "Campus Ambassador",
    company: "Alkymia Tech",
    year: "Aug 2019 - Oct 2019",
    desc: "Conducted market research and user onboarding campaigns for the PopShot web app. Awarded the Star Performer title."
  }

];

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
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
