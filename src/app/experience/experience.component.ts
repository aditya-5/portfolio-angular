import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceType: boolean[] = [false, true, false];

  extraCurricularItems = [
    {
      iconClass: 'fa-user-graduate',
      time: 'September 2020 - Present',
      title: 'Student Representative - University of Manchester (Year 1, 2 and 3 - Computer Science)',
      description: 'Represented the views of my fellow mates in the UG Forums, worked closely with the Undergraduate Staff Committee, regularly collected feedback from students through a variety of channels such as Google Sites, Discord, etc.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624876043/logo_manc_qktqa8.png',
      imgClass: 'size-img'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'May 2021 - Present',
      title: 'Social Media Manager - 9byIWC from IWC Schauffhausen',
      description: 'Produced by students and engineered (officially verified) by IWC Schaffhausen, it is an industry-first project between the watch brand and university students. As part of this role, I am working on the team website and producing watch-related content fused with passion points.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878303/iwc_d48xjs.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'September 2021 - June 2022',
      title: 'Peer-assisted Study Sessions (PASS) Leader - University of Manchester (Year 2 Computer Science)',
      description: 'The role calls for me supporting a small group of year one students to develop a self-directed learning approach to their studies. This involves a meeting at regular intervals to discuss their concerns and future plans.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624876043/logo_manc_qktqa8.png',
      imgClass: 'size-img'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'September 2021 - May 2022',
      title: 'Technical and Outreach Teams - Google Student Developer Club',
      description: 'As part of the club, my role is a blended mix of technical and outreach duties. These involve working on the React front-end design for GDSC\'s annual Hackathon website, managing social media channels such as Instagram, Facebook, and LinkedIn, developing creative and engaging social media strategies and maintaining the Discord Server.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1642077855/gdsc_s1rkqz.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'June 2021 - May 2022',
      title: 'IT Executive - Enactus Manchester',
      description: 'As part of this role, I am working on the society website and managing the day-to-day IT activities for the society.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624877531/enactus_gdk61e.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'June 2021 - May 2022',
      title: 'Media Secretary - Dogs Unleashed Society',
      description: 'The role calls for me to produce creatives for the different types of volunteering activities and events. It also involves managing Public Relations and operational work.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878103/dogs_gwutlh.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'May 2021 - September 2021',
      title: 'Provisional Committee Member - Gaming Society',
      description: 'Being on the provisional committee, I am working with the existing committee to plan the future events and raise funds for the society.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878352/gaming_hnvmzm.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'April 2021 - May 2022',
      title: 'Public Relations Officer - Manchester Hindu Society',
      description: 'The role calls for me to maintain the online presence of the society. This includes creating graphics, maintaining the social media handles, developing the website, etc.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878417/hindu_ruda76.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'May 2021 - May 2022',
      title: 'Graphics Officer - Crakchester Society',
      description: 'The role calls for me to coordinate with the committee members to produce graphics and layouts for the different social media handles. Additionally, it involves me developing the society website using WebFlow.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878477/crackchester_qwutln.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'September 2017',
      title: 'Head Photographer - Panorama 2k17',
      description: 'Panorama is a national-level event comprising a variety of academic and non-academic sub-events. It is an annual event organized by The Superhouse Group with a budget of £25,000+. As part of the role, I led the Photographers\' Team. Additionally, I captured and compiled the pre/post-event media requirements.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624878741/pano_rpihch.jpg',
      imgClass: 'size-img-square'
    }
  ];

   workItems = [
    {
      iconClass: 'fa-briefcase',
      time: 'August 2022 - Present',
      title: 'RPA IT Placement Developer - MFT National Health Service (NHS), Manchester, UK',
      description: 'Building automation solutions, updating Intranet site, supporting development of small databases, data analysis, etc. within the finance department.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1681503949/MFT_ihnryx.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'August 2022 - Present',
      title: 'Brand Ambassador - RMP Enterprise, London, UK',
      description: 'Representing and enhancing outreach via digital promotions and in-person activities for Lidl, NHS, Vodafone, Skiddle, PoliceNow, As-One, Unilever, Ocado, AlphaSights, CMS-Law, RateMyPlacement, Enterprise and Clyde & Co.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1681503809/1556610306328_tm1pez.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'July 2022 - August 2022',
      title: 'Software Engineering Intern - The University of Manchester, Manchester, UK',
      description: 'Built a fact verification system mimicking the work of fact verification journalists by adapting an existing ML model for production environments in the form of a Web API and a SPA (Single Page Application). Additionally, fine tuned the model through information retrieval and selection from a huge corpus of data using Elastic Search and BeautifulSoup Library.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624876043/logo_manc_qktqa8.png',
      imgClass: 'size-img'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'June 2021 - July 2022',
      title: 'Software Developer - Ocean82, UK',
      description: 'As part of the summer internship, I enhanced and deployed a Judging Tool for use by the judges in the World Communication Awards held in London on 27th October 2021 and assisted the judges in solving technical difficulties. My part-time role as a software developer includes implementing a novel idea into a web-based game planned for launch in the B2B and consumer market and maintaining and improving the AWS Server Infrastructure.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1681504094/Ocean82_xlnpja.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'October 2021 - Present',
      title: 'Web Developer - ProjectUp, Delhi, India',
      description: 'The role involves developing and enhancing two WordPress websites (ProjectUp.in and IJPSL.in), researching the best SEO strategy for the websites, and managing Domain and Email hosting for the team.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1642077163/Project-uP-original-logo-_3-150x150_vrorkq.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'July 2021',
      title: 'Technology Insight Intern - Discover',
      description: '-',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624880131/discover_gh6sgm.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'May 2021',
      title: 'Insight Intern - BlackRock, London, England',
      description: 'Gained a deep understanding of the investing world, specifically, the Exchange Traded Funds (ETFs). Additionally, I also got introduced to the Aladdin platform by Blackrock.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624879544/blackrock_g8gnyb.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'April 2021',
      title: 'Technology Spring Insight Intern - The Hut Group, Manchester, England',
      description: 'Learnt how technology is involved in every sector, gained a deep insight into the culture and work environment at THG, worked on a group coding challenge, networked with experienced professionals and mentors.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624879968/thg_xzognb.jpg',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'April 2021',
      title: 'Technology Insight Intern - Optiver, Amsterdam, Netherlands',
      description: 'Explored the world of algorithmic trading, Gained interesting knowledge and facts about intraday-trading, worked on a simulated Python Algo-Trade in a team (ranked #4/ 23 teams), networked with experienced software engineers and market traders.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624879544/optiver_hhpk1g.png',
      imgClass: 'size-img-extra'
    },
    {
      iconClass: 'fa-user-graduate',
      time: 'August 2019 - October 2019',
      title: 'Campus Ambassador - Alkymia Tech, France',
      description: 'The role called for me to conduct market research. I was supposed to run campaigns to onboard users onto the smart browser app PopShot, which has now evolved into WebChat. Supplementally, I had to report structured feedback and methods for improving digital reach every week. I was able to bag the Star Performer title at the end of the internship.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624883244/popshot_xcgnxz.png',
      imgClass: 'size-img-square'
    }
  ];

  volunteerItems = [
    {
      iconClass: 'fa-briefcase',
      time: 'October 2021 - June 2022',
      title: 'Peer Buddy Scheme Mentor - The University of Manchester, Manchester, UK',
      description: 'The role calls for me to act as a friendly ear to 3 students/week, listen to their concerns and signpost them to the right services, should they need them.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624876043/logo_manc_qktqa8.png',
      imgClass: 'size-img'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'June 2021 - Present',
      title: 'Web Developer - Tech First Impact, Manchester, England',
      description: 'Working in a team to develop websites for not-for-profit organizations such as GirlGuidesRwanda, Healthy Me Healthy Communities, etc.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624895825/tfi_kiuoqt.png',
      imgClass: 'size-img-square'
    },
    {
      iconClass: 'fa-briefcase',
      time: 'May 2019 - July 2019',
      title: 'Student Volunteer - Zomato Feeding India Company, India',
      description: 'During my tenure, I worked on a project which aimed at forming a network of restaurants, hotels and catering services for the distribution of surplus food to the poor. Additionally, it involved weekly and monthly distribution drives.',
      imgUrl: 'https://res.cloudinary.com/dbsuehmlk/image/upload/v1624895884/zomato_ujgvgj.jpg',
      imgClass: 'size-img-square'
    }
  ];


  constructor() { }

  ngOnInit(): void {
  }

  changeExpType(n : number){
    for(let i=0;i<this.experienceType.length;i++){
      this.experienceType[i] = !this.experienceType;
    }

    this.experienceType[n] = true
  }

}
