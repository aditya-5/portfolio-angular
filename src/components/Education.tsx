import "./styles/Work.css"; // Reuse Work CSS classes but with our own wrapper class logic or just copy Work.css contents to Edu.css
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const educationData = [
  { name: "First Class Honours", category: "BSc Computer Science with Industrial Experience", tools: "Agile, NLP, ML, Distributed Systems", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624882818/tap_vim4pi.gif", school: "University of Manchester" },
  { name: "French Language Programme", category: "Level 1 Certification", tools: "French", image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/1024px-Flag_of_France.svg.png", school: "Indian Institute of Technology, Kanpur" },
  { name: "AISSCE & AISSE", category: "High School Diploma", tools: "Physics, Math, Chem, Web Tech", image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/CBSE_Logo.png", school: "Delhi Public School, Kanpur" },
];

const Education = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("edu-box");
    if (box.length > 0) {
      const rectLeft = document.querySelector(".edu-container")!.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".edu-section",
      start: "top top",
      end: `+=${translateX}`, // Scrub distance proportionally
      scrub: 1, // Smooth dragging effect
      pin: true,
      id: "edu",
    },
  });

  timeline.to(".edu-flex", {
    x: -translateX,
    ease: "none",
  });

  return () => {
    timeline.kill();
    ScrollTrigger.getById("edu")?.kill();
  };
}, []);
  return (
    <div className="work-section edu-section" id="education">
      <div className="work-container edu-container section-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="work-flex edu-flex">
          {educationData.map((project, index) => (
            <div className="work-box edu-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.school}</p>
                  </div>
                </div>
                <h4>{project.category}</h4>
                <p>{project.tools}</p>
              </div>
              <div className="work-image">
                <div className="work-image-in">
                  <img src={project.image} alt={project.name} style={{ maxHeight: "200px" }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
