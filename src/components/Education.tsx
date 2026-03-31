import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

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
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth <= 1025) return;
    if (!sectionRef.current) return;

    // Wait one frame so DOM is fully painted and measurable
    requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const flexEl = section.querySelector(".edu-flex") as HTMLElement;
      if (!flexEl) return;

      // Sum up actual box widths (not scrollWidth which is inflated by 50000vw pseudo-elements)
      const boxes = flexEl.querySelectorAll(".edu-box");
      let totalWidth = 0;
      boxes.forEach((box) => {
        totalWidth += (box as HTMLElement).offsetWidth;
      });
      const translateX = Math.max(0, totalWidth - section.offsetWidth);
      
      if (translateX <= 0) return;

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${translateX}`,
          scrub: 1,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          id: "edu",
        },
      });

      timeline.to(flexEl, {
        x: -translateX,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getById("edu")?.kill(true);
    };
  }, []);

  return (
    <div className="work-section edu-section" id="education" ref={sectionRef}>
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
