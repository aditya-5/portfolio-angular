import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const projects = [
  { name: "WhatsApp CRM & Broadcast Dashboard", category: "Web App", tools: "React, FastAPI, PostgreSQL, Meta Graph API, WebSockets", image: "", desc: "Real-time CRM dashboard integrating the WhatsApp Cloud API for two-way customer conversations and bulk broadcast campaigns. Utilizes a high-performance FastAPI async backend with a WebSocket layer for instant bi-directional event updates." },
  { name: "Octave Platform", category: "Web App", tools: "React, Bloomberg API, TypeScript", image: "", desc: "Frontend components for a fintech equity research tool, integrating live Bloomberg Terminal data and ESG sentiment visualizations for ethical investment teams." },
  { name: "Asaaye.com", category: "E-Commerce", tools: "React, Shopify, AWS (EC2, S3, CloudFront, Aurora)", image: "", desc: "Designed and deployed a luxury fashion e-commerce platform migrating from Shopify to React, featuring auto-scaling, low-latency global asset delivery, and mobile-responsive design." },
  { name: "BERT-CRF NER Model", category: "Machine Learning", tools: "Python, PyTorch, HuggingFace", image: "", desc: "Implemented and evaluated a BERT-CRF model for Named Entity Recognition across three domains, outperforming standard baselines on general and financial NER with a fully reproducible codebase." },
  { name: "9byIWC", category: "Wordpress", tools: "Wordpress", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624760918/37_kvmhqn.png", desc: "A premium Wordpress website tailored for business consultancy services." },
  { name: "Visitt.Us", category: "App", tools: "HTML, CSS, nodeJS, mongoDB", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624748676/31_fntnpx.png", desc: "Secure visitor management system natively handling dynamic sign-ins." },
  { name: "MazeSolver", category: "Java", tools: "Java, JavaFX", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624793650/43_p05vfl.png", desc: "A JavaFX application parsing and visually resolving 2D mazes via BFS algorithms." },
  { name: "Foodents", category: "Web App", tools: "HTML, CSS, PHP, jQuery", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624747774/25_lpwhtv.png", desc: "A student-centric recipe sharing and management platform built in PHP." },
  { name: "Command Line Chess", category: "Java", tools: "Java", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624792795/40_ojwzcd.png", desc: "A terminal-based modular chess engine built in Java using custom OOP implementations." },
  { name: "StreetSpots", category: "Web App", tools: "PHP, HTML, CSS", image: "https://res.cloudinary.com/dbsuehmlk/image/upload/v1624734285/1_jsyepf.png", desc: "A crowdsourced platform to log and map interesting spots to visit locally." }
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (window.innerWidth <= 1025) return;
    if (!sectionRef.current) return;

    // Wait one frame so DOM is fully painted and measurable
    requestAnimationFrame(() => {
      const section = sectionRef.current;
      if (!section) return;

      const flexEl = section.querySelector(".work-flex") as HTMLElement;
      if (!flexEl) return;

      // scrollWidth = total content width including overflow
      // clientWidth = visible width
      const translateX = flexEl.scrollWidth - flexEl.clientWidth;
      
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
          id: "work",
        },
      });

      timeline.to(flexEl, {
        x: -translateX,
        ease: "none",
      });
    });

    return () => {
      ScrollTrigger.getById("work")?.kill(true);
    };
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
         <h2>
          My <span>Projects</span>
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
                <h4 style={{fontSize: "20px", fontWeight: 400, color: "#fff"}}>{project.desc}</h4>
                <div style={{marginTop: "20px"}}>
                  <h4 style={{fontSize: "15px", color: "#ccc"}}>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>
              </div>
              {project.image && <WorkImage image={project.image} alt={project.name} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
