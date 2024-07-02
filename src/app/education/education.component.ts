import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(10%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(10%)'}))
      ])
    ])
  ]
})


export class EducationComponent implements OnInit {

  informalItems = [
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-warning',
      toggleIndex: 16,
      title: 'Machine Learning using Python',
      place: 'Udemy',
      instructors: 'Kirill Eremenko & Hadelin de Ponteves',
      body: 'Learning data-preprocessing (encoding categorical data, missing data, etc.), regression models (linear, polynomial, SVR, decision tree, decision forest), classification models, Reinforcement Learning, NLP and Deep Learning, etc.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-warning',
      toggleIndex: 15,
      title: 'Create the Best Discord Bot with Node.js',
      place: 'Udemy',
      instructors: 'Adam Jr.',
      body: 'Learning to create a simple discord bot along with a dashboard of its own.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-warning',
      toggleIndex: 14,
      title: 'AWS Certified Solutions Architect Associate Guide',
      place: 'Udemy',
      instructors: 'Stephane Maarek',
      body: `I am learning the fundamentals of Amazon Web Services as part of this course.
             This includes IAM, EC2, Load Balancing, Auto Scaling, EBS, EFS, Route 53, RDS,
             ElastiCache, S3 and CloudFront. Additionally, I am also gaining knowledge about
             AWS Integration, AWS Serverless, AWS Networking, etc.`,
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-success',
      toggleIndex: 13,
      title: 'Angular: The Complete Guide',
      place: 'Academind',
      instructors: 'Max Schwarzmüller',
      body: 'The course taught me to create reactive, single-page web applications using Google\'s Angular Framework (successor of AngularJS)',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-info',
      toggleIndex: 12,
      title: 'Photography Masterclass',
      place: 'Video School Online',
      instructors: 'Phil Ebiner and William Carnahan',
      body: 'This course introduced me to the recondite workings of a camera. It also covered the various types of lighting scenarios and photography composition rules.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-primary',
      toggleIndex: 11,
      title: 'Web Development Bootcamp',
      place: 'Udemy',
      instructors: 'Colt Steele',
      body: `This course covered the ins and outs of the HTML, CSS and modern JavaScript. It taught to me create fully functional websites using nodeJS, mongoDB, CSS and HTML.
             In terms of frameworks and libraries, I learnt jQuery and BootStrap. Additionally, I learnt to deal with APIs using Ajax requests.`,
    },
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-warning',
      toggleIndex: 10,
      title: 'Adobe Photoshop CC',
      place: 'Video School Online',
      instructors: 'Phil Ebiner',
      body: 'The course taught me the essential tools of Adobe Photoshop CC. Subsequently, I gained the skills to design beautiful graphics and photos in Photoshop.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-danger',
      toggleIndex: 9,
      title: 'After Effects CC Masterclass',
      place: 'Video School Online',
      instructors: 'Phil Ebiner',
      body: 'The course taught me the essential tools of Adobe AE and subsequently, how to improve videos with professional motion graphics and visual effects.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-success',
      toggleIndex: 8,
      title: 'Adobe Premiere Pro CS6',
      place: 'Video School Online',
      instructors: 'Phil Ebiner',
      body: 'The course taught me the fundamentals of video editing. During the course, I edited a few documentaries to gain real world experience.',
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-info',
      toggleIndex: 7,
      title: 'Learn Ethical Hacking From Scratch',
      place: 'ZSecurity',
      instructors: 'Zaid Sabih',
      body: `The course covered a lot of areas under ethical hacking. These included hacking WiFi & wired networks, exploiting websites using their vulnerabilities (XSS and SQL injections),
             phishing, MITM attacks, creating payloads, android hacking, linux basics, spoofing techniques, keeping systems malware free, etc. Additionally, I learnt the basics of more than 30 hacking tools as part of this course.`,
    },
    {
      wrapperClass: 'timeline-wrapper timeline-wrapper-primary',
      toggleIndex: 6,
      title: 'Learn Social Engineering From Scratch',
      place: 'ZSecurity',
      instructors: 'Zaid Sabih',
      body: `As part of this course, I learnt how to exploit systems by targeting people using them instead of the systems themselves. I learnt how to maintain persistence access to android, OSX, Linux and Windows systems.
             I also gained skills to extract saved as well as to-be-entered passwords out of a system by using remote keyloggers.`,
    },
    {
      wrapperClass: 'timeline-wrapper timeline-inverted timeline-wrapper-warning',
      toggleIndex: 5,
      title: 'Python for Everybody Specialization',
      place: 'Coursera',
      instructors: 'University of Michigan',
      body: `The Python Specialization was a combination of the five sub-courses listed below:<br>
      <ul>
        <li><b>Capstone: Retrieving, Processing, and Visualizing Data with Python</b>n<br>
            The course involved building a series of web applications to retrieve, process and visualise data using python. This involved building a simple version of the Google's Pagerank Algorithm, a Search crawler, etc.
        </li>
        <li><b>Using Databases with Python</b><br>
            This course introduced me to the basics of SQL and database design for storing data as part of a multi-step data gathering, analysis, and processing effort.
        </li>
        <li><b>Using Python to access Web Data</b><br>
            This course involved scraping, parsing, and reading web data as well as access data using web APIs. Primarily, it used HTML, XML, and JSON data formats.
        </li>
        <li><b>Python Data Structures</b><br>
            This course introduced me to the core data structures in Python. Primarily, it focussed on built-in data structures such as lists, dictionaries, and tuples to perform increasingly complex data analysis.
        </li>
        <li><b>Python for Everybody</b><br>
            This course introduced me to the basics of Python. It focussed mostly on Procedural Programming.
        </li>
      </ul>`,
    }
  ];
  


  MANC:boolean= false;
  DPS:boolean= false;
  IIT:boolean= false;
  informalBool: boolean= false;
  formalBool: boolean= true;
  informalList: boolean[] = new Array();

  uomYears: boolean[] = new Array();

  constructor() {
      for(let i=0;i<=this.informalList.length-1;i++){
    this.informalList[i] = false;
    }

    for(let i=0; i<= this.uomYears.length-1;i++){
      this.uomYears[i] = false;
    }

    this.uomYears[0] = true;

}

  ngOnInit(): void {
  }

  // switch(){
  //   this.switchBool = !this.switchBool;
  // }

  switchToFormal(){
    this.informalBool = false;
    this.formalBool = true;
  }

  switchToInformal(){
    this.informalBool = true;
    this.formalBool = false;
  }

  toggleManc(){
    if(this.MANC){
      this.MANC = false;
    }
    else{
      this.MANC = true;
    }

  }

  toggleIIT(){
    if(this.IIT){
      this.IIT = false;
    }
    else{
      this.IIT = true;
    }
  }

  toggleDPS(){
    if(this.DPS){
      this.DPS = false;
    }
    else{
      this.DPS = true;
    }
  }


  toggleInformal(x:Number){
    console.log(x);
    this.informalList[+x] = !this.informalList[+x];
  }

  toggleuomYears(x:Number){
    for(let i=0;i<=this.uomYears.length-1;i++){
      this.uomYears[i] = false;
    }
    this.uomYears[+x] = !this.uomYears[+x]
  }


}
