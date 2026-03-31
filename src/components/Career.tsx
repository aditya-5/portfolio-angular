import "./styles/Career.css";

const careerData = [
  {
    role: "Software Graduate Engineer",
    company: "Jaguar Land Rover",
    year: "Sept 2024 - Present",
    desc: [
      "Built and shipped the CIARA Configuration Toolset (CCT) — a Next.js / TanStack Router platform with AWS IoT Jobs integration, enabling zero-touch software deployment to 2,000+ HiL test rigs.",
      "Designed a real-time telemetry pipeline (edge → AWS Lambda → OpenSearch → Grafana) to capture rig utilisation data.",
      "Resolved a critical production bug in analytics software underpinning the Jaguar Type 00 launch programme.",
      "Owned the CIARA Gateway — the centralised auth and routing layer built on AWS Cognito, OAuth 2.0, and Traefik."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Imago Software",
    year: "Jun 2024 - Aug 2024",
    desc: [
      "Delivered a cross-platform Flutter app for real-time metric visualisation from connected handheld devices.",
      "Built Flask API endpoints and optimised Docker-based AWS deployments, reducing infrastructure costs."
    ]
  },
  {
    role: "Software Engineering Intern",
    company: "University of Manchester",
    year: "Jul 2022 & Jul 2023",
    desc: [
      "Trained an ML fact-verification model on 20 GB of scraped data, deployed as a React app.",
      "Built a Flutter ML recipe app presented at a data science conference."
    ]
  },
  {
    role: "Robotic Process Automation Engineer",
    company: "National Health Service (NHS)",
    year: "Aug 2022 - Jul 2023",
    desc: [
      "Built an Automation Anywhere bot processing up to 180,000 NHS referral letters per month, bridging two isolated clinical systems and eliminating a manual backlog."
    ]
  },
  {
    role: "Full-Stack Developer (Part-time)",
    company: "Ocean82",
    year: "Jun 2021 - Jul 2022",
    desc: [
      "Architected a MERN stack stock-trading simulation platform with AWS infrastructure (Route53, load balancing) supporting live trading sessions.",
      "Scaled a judging platform for the World Communication Awards 2021 to 5× capacity by replacing singleton DB connections with connection pooling."
    ]
  },
  {
    role: "BSc Computer Science with Industrial Experience",
    company: "University of Manchester",
    year: "Sept 2020 - Jul 2024",
    desc: [
      "Awarded the Netcraft Prize for being among the top 10 students with the highest Year 1 overall mark.",
      "Relevant Coursework: Agile Software Pipelines, Cognitive Robotics, Natural Language Processing, Machine Learning, Distributed Systems."
    ]
  },
  {
    role: "Technology Spring Insight Intern",
    company: "The Hut Group",
    year: "Apr 2021",
    desc: [
      "Gained deep insight into THG's engineering culture and worked on a group coding challenge."
    ]
  },
  {
    role: "Technology Insight Intern",
    company: "Optiver",
    year: "Apr 2021",
    desc: [
      "Explored algorithmic trading and built a simulated Python Algo-Trade bot in a team (ranked #4 out of 23 teams)."
    ]
  },
  {
    role: "French Language Programme (Level 1)",
    company: "Indian Institute of Technology, Kanpur",
    year: "Aug 2019 - May 2020",
    desc: [
      "Completed Level 1 French language certification program."
    ]
  },
  {
    role: "Campus Ambassador",
    company: "Alkymia Tech",
    year: "Aug 2019 - Oct 2019",
    desc: [
      "Conducted market research and user onboarding campaigns for the PopShot web app. Awarded the Star Performer title."
    ]
  },
  {
    role: "CBSE High School Diploma",
    company: "Delhi Public School, Kanpur",
    year: "Apr 2007 - May 2019",
    desc: [
      "Core subjects: Physics, Mathematics, Chemistry, Web Technology."
    ]
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
              <div className="career-desc-list">
                {job.desc.map((d, i) => (
                  <p key={i}>• {d}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
