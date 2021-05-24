import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import React from "react";
import IMAGES from "../assets/images/images.js";
import profilePic from "../assets/images/profilePic/profilePic.png";

const resumeData = {
  name: "Wong Jun Long",
  title: "NUS Computing (Computer Science) Year 3",
  specialization: "Specialization - Networking and Distributed Systems",
  profilePic: profilePic,

  // Button descriptions
  cv: "Download CV",
  contact: "Contact Me Here",

  // Button urls
  telegramURL: "https://t.me/junlong1/",

  socials: {
    Mail: {
      link: "mailto:wongjunlong@u.nus.edu",
      text: "wongjunlong@u.nus.edu",
      icon: <EmailIcon />,
    },
    Linkedin: {
      link: "https://www.linkedin.com/in/wongjunlong/",
      text: "wongjunlong",
      icon: <LinkedInIcon />,
    },
    Github: {
      link: "https://github.com/junlong4321/",
      text: "junlong4321",
      icon: <GitHubIcon />,
    },
  },

  about: `I am a Year 3 Computer Science student studying in the National University of Singapore (NUS) under the DSTA Merit Scholarship, with a specialization in Networking and Distributed Systems. I chose this focus area as Networking was the most interesting domain of study I was exposed to while studying in NUS.
  
  For professional work, my current area of interest lies in the Quality Assurance (QA) domain of Software Engineering. Specifically, I am interested in learning more about test automation techniques. Till date, I have a reasonable amount of exposure to QA, conducting GUI regression and API test automations for some of my internships. I foresee myself working as a professional QA Test Engineer in the future. Nonetheless, I am open to exploring other roles in Software Engineering for my own personal development and enrichment.
  
  Apart from that, I have some experience working with ReactJS for frontend UI and Django RESTful API for backend databases. Please refer to my portfolio for the various works I have done with these technologies. Please note that my portfolio works are my personal projects. I am involved in external projects as well. However, I do not post projects that I have done for my clients, or which I have received salary renumerations or monetary awards from (e.g Internships, Competitions). There are prohibitory clauses in contracts I have signed which restricts me from doing so.
  
  My personal life philosophy is to always give new things a try if an opportunity arises. If there is an interesting project that I can work on, please do contact me over Telegram using the blue "Contact Me Here" button located at the top right hand corner of the site.
  `,

  awards: [
    {
      title: `NUS Orbital 2020: Project “The Free Market” – Judge’s Choice Award
      Difficulty: Artemis (Extreme – Highest Difficulty)`,
      description: `NUS Orbital is an independent software engineering project taken by year 1 NUS SoC students in teams of two.

      The Judge's Choice award is given to the three top teams who have not only completed a solid application with an extensive set of core features and extensions, but also demonstrated great effort in following good software engineering practices and principles. Apart from that, these teams produced high-quality documentation and conducted extensive system and user testing.`,
    },
    {
      title: "NUS LifeHack Healthcare AI Datathon 2020 – 1st Runner Up",
      description: `Challenge -
      (Supervised Learning - Image Classification) - Construct a prediction model for predicting eye diseases using the following dataset - https://www.kaggle.com/jr2ngb/cataractdataset
      
      Approach -
      1. Image Preprocessing: Segmented Retinal Blood Vessels Based Feature Extraction by extracting Mean, Standard Deviation, Kurtosis, Energy, and Entropy of image + Binarize images using adaptive gaussian thresholding.
      2. Model ensembling with Random Forests, Gradient Boosting, and Support Vector Machine learning algorithms.
      3. Classification method utilised- One Vs All Image Binary Classification
      4. Accuracy of model ensembling attained - 96.4%`,
    },
    {
      title:
        "DSTA BrainHack 2019 – Champion (Artificial Intelligence – Uni / Poly Category)",
      description: `Challenge - (Supervised Learning - Classification) To create a model capable of predicting human pose classification given an image
      
      Approach -
      1. Bing API for Data Collection
      2. Deep Lab Image Segmentation API with pre-trained Xception Model, as well as Pluralistic Inpainting for dataset expansion
      3. Training pre trained Imagenet models, and using model ensemble (DenseNets, ResNets, EfficientNets) to come up with weighted averages for predictions`,
    },
  ],

  experiences: [
    {
      title: `Defence Science and Technology Agency (DSTA)
      Enterprise IT
      Software Engineering Intern`,
      date: "10 May 2021 – 30 July 2021 (3 Months)",
      description: "<Classified>",
    },
    {
      title: `NUS Engineering
      Industrial Systems Engineering and Management
      Quality Assurance Intern`,
      date: "01 December 2020 – 31 January 2021 (2 Months)",
      description: `Roles and Responsibilities:
      1. API unit test planning, writing, and automation for NUSmart Dining mobile application with Postman API Dev Tool`,
    },
    {
      title: `NUS Business School
      Department of Strategy and Policy
      Research Assistant`,
      date: "01 December 2019 – 13 January 2020 (2 Months)",
      description: `Roles and Responsibilities:
      1. Data retrieval with Web of Science / Web of Knowledge API using Python`,
    },
    {
      title: `Oddle
      Quality Assurance Engineer Intern`,
      date: "07 January 2019 - 31 May 2019 (5 Months)",
      description: `Roles and Responsibilities :
      1. Creation of detailed, well-structured test cases for Oddle Shop Manual testing of products and recording bugs or performance issues
      2. Development of automated regression testing scripts with Katalon Studio
      3. Replicating, reporting, and ensuring proper closure of defects found during testing
      4. Liasing with tech internal teams in the diagnosis of bugs`,
    },
  ],

  education: [
    {
      title: `National University of Singapore
      School of Computing (SoC)`,
      date: "Aug 2019 - Aug 2023",
      description: `Bachelor of Computing, Computer Science (Honours)
      Specialization in Networking and Distributed Systems`,
    },
  ],

  skills: [
    {
      title: "FRONTEND",
      description: ["ReactJS"],
    },
    {
      title: "BACKEND",
      description: ["Django (REST Framework)"],
    },
    {
      title: "QUALITY ASSURANCE",
      description: [
        "Katalon Studios",
        "Postman API Test Automation",
        "TestProject",
      ],
    },
    {
      title: "LANGUAGES",
      description: ["Javascript", "Java", "Python"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Sourcetree Git", "GitHub"],
    },
    {
      title: "CI / CD",
      description: ["Jenkins"],
    },
    {
      title: "PROJECT MGT",
      description: ["Jira", "Confluence", "Trello"],
    },
  ],

  // First image in array of images is used as the card image before user clicks
  // into card
  projects: [
    {
      tag: "ReactJS",
      images: [
        IMAGES.personalResume1,
        IMAGES.personalResume2,
        IMAGES.personalResume3,
      ],
      title: "Personal Resume",
      caption: "A personal resume that I built using ReactJS",
      description: `This resume was built by referencing to Samal Fazal's "React JS Resume" and Portfolio with Material UI playlist on Youtube.
      I subsequently finetuned the resume to my personal liking.`,
      links: [
        {
          link: "https://www.youtube.com/playlist?list=PLISG6SSQ9nqyuuTjr2cDApJlY9-K3jrn1",
          icon: <YouTubeIcon />,
        },
        { link: "https://github.com/junlong4321/Resume", icon: <GitHubIcon /> },
        {
          link: "https://junlong4321.github.io/Resume/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Django",
      images: [
        IMAGES.theFreeMarket1,
        IMAGES.theFreeMarket2,
        IMAGES.theFreeMarket3,
        IMAGES.theFreeMarket4,
        IMAGES.theFreeMarket5,
        IMAGES.theFreeMarket6,
        IMAGES.theFreeMarket7,
      ],
      title: "The Free Market",
      caption:
        "NUS Year 1 CP2106 Independent Software Development Project (Orbital)",
      description: `
      NUS Orbital is an independent software engineering project taken by year 1 NUS SoC students in teams of two.

      This project was built using ReactJS (Frontend) and Django REST Framework (Backend), for NUS Orbital. Level of Difficulty attempted was Artemis (Extreme). The project was awarded the Judge's Choice Award for NUS Orbital 2020. Please refer to GitHub for URL link to the Google documentation of the project.

      Roles and Responsibilities:
      - In charge of Backend, QA, and Deployments for project
      - Built Backend RESTful API service using Python's Django REST Framework
      - Planned and executed smoke, regression, and API Test Cases for Quality Assurance
      - Implemented test automation Using TestProject's testing software for smoke and regression testing, and Postman for API testing
      - Introduced continuous integration using Jenkins to facilitate code deployments, and results publishing on Slack for diagnosis of bugs
      - Deployed frontend ReactJS application using Heroku, backend Django application using PythonAnywhere, and Jenkins using Google Cloud VM instance
      
      Motivation :
      As of today, there is a lack of free financial analysis platforms over the internet. To gain access to expert financial analysis data, you have to pay for it over websites like Simply Wall Street and MorningStar, or consult expert financial advisors. Financial analysis data is not easily accessible and is not readily available for public consumption for the typical retail investor.
            
      Aim :
      Our goal for our Orbital project is to promote information sharing between retail investors. It is our wish that more financial analysis information is available for public consumption for free so that retail investors are able to make a more informed decision when investing. Therefore, we propose a free open-source web application where retail investors can come together, upload, and share their financial analysis for other retail investors to benefit from.`,
      links: [
        {
          link: "https://www.youtube.com/watch?v=NPXw0UQTv_s&feature=youtu.be",
          icon: <YouTubeIcon />,
        },
        {
          link: "https://github.com/junlong4321/Orbital2020",
          icon: <GitHubIcon />,
        },
        {
          link: "https://thefreemarket-production.herokuapp.com/",
          icon: <LanguageIcon />,
        },
      ],
    },
    {
      tag: "Java",
      images: [
        IMAGES.kimJongDuke1,
        IMAGES.kimJongDuke2,
        IMAGES.kimJongDuke3,
        IMAGES.kimJongDuke4,
        IMAGES.kimJongDuke5,
        IMAGES.kimJongDuke6,
        IMAGES.kimJongDuke7,
        IMAGES.kimJongDuke8,
      ],
      title: "Kim Jong Duke",
      caption:
        "NUS Year 2 CS2103T Software Engineering, Individual Project Component - Duke Personal Assistant Chatbot (Kim Jong Duke)",
      description: `Kim Jong Duke is a personal assistant chatbot which helps you to keep track of your daily tasks. It is an individual project with 1.9 kLoC.

      Have you ever wanted the Supreme Leader of North Korea to be your personal secretary? Now you can with your very own Kim Jong Duke personal assistant chatbot! In the chatbot, you will play the role of Donald Trump and have your BFF Kim Jong Duke manage your tasks for you! :D
      
      This project was made using Java, JavaFX, TestFX, and Gradle, and was part of the individual assessment component for CS2103T (Software Engineering).`,
      links: [
        { link: "https://github.com/junlong4321/ip", icon: <GitHubIcon /> },
      ],
    },
    {
      tag: "Java",
      images: [
        IMAGES.tutorsPet1,
        IMAGES.tutorsPet2,
        IMAGES.tutorsPet3,
        IMAGES.tutorsPet4,
        IMAGES.tutorsPet5,
        IMAGES.tutorsPet6,
        IMAGES.tutorsPet7,
        IMAGES.tutorsPet8,
        IMAGES.tutorsPet9,
      ],
      title: "Tutor's Pet",
      caption:
        "NUS Year 2 CS2103T Software Engineering, Team Project Component - Address Book Level 3 (Tutor's Pet)",
      description: `Tutor's Pet is a student management application for teaching assistants in NUS Computing. It is a one stop solution to keep track of your classes, students, and their progress.

      Tutor's Pet was developed in the module CS2103T Software Engineering in AY2020/2021 Semester 1 as part of the coursework requirements for all NUS Computer Science undergraduates. My team comprised of 5 NUS Computer Science students. We developed Tutor's Pet from an existing Java application called Address Book (Level 3) over a period of six weeks.
      
      Java, JavaFX, TestFX, and Gradle Continuous Integration were utilised for this project.
      
      Major Enhancement I Implemented:
      
      Introduced Student Universally Unique Identifier (UUID) into Student model.
      In Tutor’s Pet, every Student is assigned a randomly generated UUID to ensure referential integrity of Student data across different models. Time was spent on UUID integration and fixing broken test cases.
      
      Introduced ModuleClass to Storage.
      Introduced the Java classes JsonAdaptedUuid and JsonAdaptedModuleClass into Storage so that we could allocate Students to the respective tutorial classes that they were enrolled in. Time was spent integrating the two Java classes into Storage and writing test cases for these 2 classes.
      
      Introduced Add Lesson and Delete AttendanceRecord commands.
      These commands were required so that we could add lessons to tutorial classes and delete attendance records of students. It involved the creation of many new Java classes, and also a lot of test cases had to be written to thoroughly test these two commands.
      
      Cascade Deletion of Students.
      Fixed a major bug where a Student's data could still be found in Lessons and AttendanceRecords even after the Student had been deleted from the application. There was a need to refactor a large part of the deletion code.
`,
      links: [
        { link: "https://github.com/junlong4321/tp", icon: <GitHubIcon /> },
        {
          link: "https://ay2021s1-cs2103t-t10-4.github.io/tp/",
          icon: <LanguageIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
