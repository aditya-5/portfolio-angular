import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const projects = [
  { name: "9byIWC", category: "Wordpress", tools: "Wordpress", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624760918/37_kvmhqn.png" },
  { name: "Visitt.Us", category: "App", tools: "HTML, CSS, nodeJS, mongoDB", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624748676/31_fntnpx.png" },
  { name: "MazeSolver", category: "Java", tools: "Java, JavaFX", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624793650/43_p05vfl.png" },
  { name: "Foodents", category: "Web App", tools: "HTML, CSS, PHP, jQuery", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624747774/25_lpwhtv.png" },
  { name: "Command Line Chess", category: "Java", tools: "Java", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624792795/40_ojwzcd.png" },
  { name: "StreetSpots", category: "Web App", tools: "PHP, HTML, CSS", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624734285/1_jsyepf.png" }
];

const Work = () => {
  useGSAP(() => {
    if (window.innerWidth <= 1025) return;
    let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("project-box");
    // Ensure boxes exist before measuring
    if (box.length > 0) {
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding = parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Correct scrub distance based on total box width
      scrub: 1, // Smooth dragging effect
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projects.map((project, index) => (
            <div className="work-box project-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{project.name}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
