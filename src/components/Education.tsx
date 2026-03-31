import "./styles/Work.css"; // Reuse Work CSS classes but with our own wrapper class logic or just copy Work.css contents to Edu.css
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const educationData = [
  { 
    school: "University of Manchester, UK", 
    year: "July 2024", 
    desc: "BSc. (Hons) Computer Science with Industrial Experience | First Class, 75%" 
  },
  { 
    school: "Delhi Public School, Kanpur, India", 
    year: "May 2019", 
    desc: "A-Level Equivalent (AISSCE): 96.5% | GCSE Equivalent (AISSE): 10/10 CGPA" 
  },
  { 
    school: "Indian Institute of Technology, Kanpur", 
    year: "May 2020", 
    desc: "French Language Programme | Level 1 Certification" 
  }
];

const Education = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1025) return;
    let translateX: number = 0;

  function setTranslateX() {
    const boxes = document.getElementsByClassName("edu-box");
    const flex = document.querySelector(".edu-flex") as HTMLElement;
    if (boxes.length > 0 && flex) {
      const viewportWidth = window.innerWidth;
      const totalBoxWidth = Array.from(boxes).reduce(
        (acc, b) => acc + b.getBoundingClientRect().width,
        0
      );
      const flexLeft = flex.getBoundingClientRect().left;
      translateX = Math.max(0, totalBoxWidth + flexLeft - viewportWidth + 80);
    }
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".edu-section",
      start: "top top",
      end: `+=${translateX}`,
      scrub: 1,
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
                    <h4 style={{textAlign: "right"}}>{project.school}</h4>
                    <p style={{textAlign: "right", marginTop: "5px"}}>{project.year}</p>
                  </div>
                </div>
                <h4 style={{marginTop: "20px"}}>{project.desc.split('|')[0]}</h4>
                {project.desc.split('|')[1] && <p style={{marginTop: "10px", fontSize: "16px"}}>{project.desc.split('|')[1]}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
