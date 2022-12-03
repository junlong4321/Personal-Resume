import DescriptionIcon from "@material-ui/icons/Description";
import EmailIcon from "@material-ui/icons/Email";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";
import GetAppIcon from "@material-ui/icons/GetApp";
import GitHubIcon from "@material-ui/icons/GitHub";
import LanguageIcon from "@material-ui/icons/Language";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SlideshowIcon from "@material-ui/icons/Slideshow";
import React from "react";
import IMAGES from "../assets/images/images.js";
import profilePic from "../assets/images/profilePic/profilePic.png";

const resumeData = {
  name: "Wong Jun Long",
  title: `NUS Computing (Computer Science)
  Year 4`,
  specialization: `Specialization:
  Networking & Distributed Systems`,
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

  about: `I am a Year 4 Computer Science student (Academic Year 2022/2023) studying in the National University of Singapore (NUS) under the DSTA Merit Scholarship, specializing in Networking & Distributed Systems.
  
  I enjoy developing front-end web applications with ReactJS and spend most of my development time working on the front-end. Apart from that, I have some experience working with RESTful API and SQL for back-end databases. Please refer to my portfolio for the various works I have done.
  
  For work opportunities, please do contact me over Telegram using the blue "Contact Me Here" button located at the top right hand corner of the site.
  `,

  awards: [
    {
      title: `NUS Orbital 2020: Project “The Free Market” – Judge’s Choice Award
      Difficulty: Artemis (Extreme – Highest Difficulty)`,
      description: `NUS Orbital is an independent software engineering project taken by year 1 NUS SoC students in teams of two

      The Judge's Choice award is given to the three top teams who have not only completed a solid application with an extensive set of core features and extensions, but also demonstrated great effort in following good software engineering practices and principles. Apart from that, these teams produced high-quality documentation and conducted extensive system and user testing`,
    },
    {
      title: "NUS LifeHack Healthcare AI Datathon 2020 – 1st Runner Up",
      description: `Challenge -
      (Supervised Learning - Image Classification) - Construct a prediction model for predicting eye diseases using the following dataset - https://www.kaggle.com/jr2ngb/cataractdataset
      
      Approach -
      1. Image Preprocessing: Segmented Retinal Blood Vessels Based Feature Extraction by extracting Mean, Standard Deviation, Kurtosis, Energy, and Entropy of image + Binarize images using adaptive gaussian thresholding
      2. Model ensembling with Random Forests, Gradient Boosting, and Support Vector Machine learning algorithms
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
      3. Training pre trained Imagenet models, and using model ensemble (DenseNets, ResNets, EfficientNets) to come up with weighted averages for predictions
      4. Accuracy attained - 95.7% on 11 classes of poses, 85.5% when curveball of an additional 4 classes (15 classes of poses in total) were thrown`,
    },
  ],

  experiences: [
    {
      title: `Defence Science and Technology Agency (DSTA)
      Programme Centre 12 - Enterprise IT
      Software Engineering Intern (Back-end)`,
      date: `09 May 2022 – 29 July 2022 (3 Months)`,
      description: `Roles and Responsibilities:
      1. Database remodelling and enhancement with Qlik Sense`,
    },
    {
      title: `NUS Faculty of Arts and Social Sciences
      Department of Psychology
      Student Researcher (Front-end)`,
      date: `07 June 2021 – 31 August 2021 (3 Months)`,
      description: `Roles and Responsibilities:
      1. Greenfield multi-step survey form creation using ReactJS (Agenda - Collection of free associations to Singapore English words from site visitors)
      2. Wireframing of site design
      3. GUI and Regression Testing for front-end interface`,
    },
    {
      title: `Defence Science and Technology Agency (DSTA)
      Programme Centre 12 - Enterprise IT
      Software Engineering Intern (Front-end)`,
      date: `10 May 2021 – 30 July 2021 (3 Months)`,
      description: `Roles and Responsibilities:
      1. Front-end Development with ReactJS`,
    },
    {
      title: `NUS Engineering
      Industrial Systems Engineering and Management
      Quality Assurance Intern`,
      date: `01 December 2020 – 31 January 2021 (2 Months)`,
      description: `Roles and Responsibilities:
      1. API unit test planning, writing, and automation for NUSmart Dining mobile application with Postman API Dev Tool`,
    },
    {
      title: `NUS Business School
      Department of Strategy and Policy
      Research Assistant`,
      date: `01 December 2019 – 13 January 2020 (2 Months)`,
      description: `Roles and Responsibilities:
      1. Data retrieval with Web of Science / Web of Knowledge API using Python`,
    },
    {
      title: `Oddle
      Quality Assurance Engineer Intern`,
      date: `07 January 2019 - 31 May 2019 (5 Months)`,
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
      date: `Aug 2019 - Aug 2023`,
      description: `Bachelor of Computing, Computer Science (Honours)
      Specialization in Networking & Distributed Systems
      DSTA Merit Scholarship
      
      Specialization Modules:
      CS2102 (Database Systems)
      CS3103 (Computer Network Practices)
      CS3219 (Software Engineering Principles and Patterns)
      CS4222 (Wireless Networking) <TBC>
      CS4225 (Big Data Systems for Data Science)
      CS4226 (Internet Architecture)
      
      Unrestricted Electives:
      ACC1701X (Accounting for Decision Makers)
      FIN2704X (Finance)
      FIN3701B (Corporate Finance)
      FIN3702A (Investment Analysis and Portfolio Management,
      FIN3720 (Financial Statement Analysis)`,
    },
  ],

  skills: [
    {
      title: "FRONT-END",
      description: ["ReactJS"],
    },
    {
      title: "BACK-END",
      description: ["Django (REST Framework)", "PostgreSQL"],
    },
    {
      title: "QUALITY ASSURANCE",
      description: ["Katalon Studios", "Postman", "TestProject"],
    },
    {
      title: "LANGUAGES",
      description: ["Typescript", "Java", "Python"],
    },
    {
      title: "SOURCE CONTROL",
      description: ["Sourcetree Git", "GitHub"],
    },
    {
      title: "CI / CD",
      description: ["Github Actions", "Jenkins"],
    },
    {
      title: "PROJECT MGT",
      description: ["Github Projects", "Jira", "Trello"],
    },
  ],

  portfolioTags: ["ReactJS", "Quality Assurance", "Django", "Java"],

  // First image in array of images is used as the card image before user clicks
  // into card
  projects: [
    {
      tag: ["Django", "Quality Assurance"],
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

      This project was built using ReactJS (Front-end) and Django REST Framework (Back-end), for NUS Orbital. Level of Difficulty attempted was Artemis (Extreme). The project was awarded the Judge's Choice Award for NUS Orbital 2020.

      Roles and Responsibilities:
      - In charge of Back-end, QA, and Deployments for project
      - Built Back-end RESTful API service using Python's Django REST Framework
      - Planned and executed smoke, regression, and API Test Cases for Quality Assurance
      - Implemented test automation Using TestProject's testing software for smoke and regression testing, and Postman for API testing
      - Introduced continuous integration using Jenkins to facilitate code deployments, and results publishing on Slack for diagnosis of bugs
      - Deployed front-end ReactJS application using Heroku, back-end Django application using PythonAnywhere, and Jenkins using Google Cloud VM instance
      
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
          link: "https://docs.google.com/document/d/1wFkyn4SZh9oDJtUM8PjQoil9PXARbTNlkCVFNHGsxWw/edit?usp=sharing/",
          icon: <DescriptionIcon />,
        },
        {
          link: "https://credentials.nus.edu.sg/0062649d-d440-48c5-ae11-e30b20d3bf79",
          icon: <EmojiEventsIcon />,
        },
        {
          link: "https://credentials.nus.edu.sg/0bbc1d11-405f-4637-8180-9e7a295abf28",
          icon: <EmojiEventsIcon />,
        },
      ],
    },
    {
      tag: ["Java"],
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
        {
          link: "https://github.com/junlong4321/ip/releases/download/A-Release/duke.jar/",
          icon: <GetAppIcon />,
        },
      ],
    },
    {
      tag: ["Java"],
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
        {
          link: "https://github.com/AY2021S1-CS2103T-T10-4/tp/releases/download/v.1.4.1/tutorspet.jar/",
          icon: <GetAppIcon />,
        },
      ],
    },
    {
      tag: ["Quality Assurance"],
      images: [
        IMAGES.spa1,
        IMAGES.spa2,
        IMAGES.spa3,
        IMAGES.spa4,
        IMAGES.spa5,
        IMAGES.spa6,
      ],
      title: "Static Program Analyzer",
      caption: "NUS Year 3 CS3203 Software Engineering Project",
      description: `A Static Program Analyzer (SPA) was built for this software engineering module. A SPA is a program that analyzes and provide useful insights into source codes. For example, a SPA is able to detect the number of variables used/modified in the source code. In this module, the SPA built analyzes code written in a fictional programming language called SIMPLE.

      I was in charge of Quality Assurance in my team. In particular, I designed system, load, and stress test plans and wrote test cases to validate the correctness of the SPA built by my team.
      
      Please refer to Sections 5.3 - 5.6 of the first document icon from the left for the test designs I created for testing. The name of the document is SPA Report.
      
      In addition, I have attached all system, load, and stress test cases that I have written for the module in the second and third document icons.
      
      Repository link is omitted because the CS3203 organization on GitHub is private.`,
      links: [
        {
          link: "https://docs.google.com/document/d/1XYI5KdK03m7J-BqfsbHaePc-UAGPapQJ/edit?usp=sharing&ouid=110170651096407551597&rtpof=true&sd=true",
          icon: <DescriptionIcon />,
        },
        {
          link: "https://docs.google.com/document/d/1H99cCeFMaCKvBbT4pKl-TrWNeDrv-KUjJgJDtiiu590/edit?usp=sharing",
          icon: <DescriptionIcon />,
        },
        {
          link: "https://docs.google.com/document/d/1t_Zai50CD6vFtD8FE9SRzTpldHk39s2iO5TsNHm6FNA/edit?usp=sharing",
          icon: <DescriptionIcon />,
        },
      ],
    },
    {
      tag: ["ReactJS"],
      images: [
        IMAGES.codeCollab1,
        IMAGES.codeCollab2,
        IMAGES.codeCollab3,
        IMAGES.codeCollab4,
        IMAGES.codeCollab5,
        IMAGES.codeCollab6,
        IMAGES.codeCollab7,
        IMAGES.codeCollab8,
        IMAGES.codeCollab9,
        IMAGES.codeCollab10,
        IMAGES.codeCollab11,
        IMAGES.codeCollab12,
        IMAGES.codeCollab13,
        IMAGES.codeCollab14,
      ],
      title: "CodeCollab",
      caption:
        "NUS Year 4 CS3219 Software Engineering Principles and Patterns, Team Project Component - CodeCollab",
      description: `CodeCollab was developed in the module CS3219 Software Engineering Principles and Patterns in AY2022/2023 Semester 1 to fulfill module project requirements. My team comprised of 4 NUS Computer Science students.

      I worked on the project as a Designer and Front-end Developer. The technical and non-technical sections showcase my contributions to the project.

      Technical
        • Designed wireframes by following an iterative prototyping process of assessing problem, designing by generating ideas, building prototype using subset of ideas generated, and assessing result using user testing until a viable product has been achieved.
        • Adopted UI/UX best practices which caters to human visual perception, long/short-term memory and gulf bridging to deliver an intuitive interface to end-users.
        • Implemented wireframe designs for all front-end pages in code using React components.
        • Wrote a Python script to scrape questions from LeetCode back-end.
        • Integrated backend statistics API into the front-end dashboard.
        • Implemented end-to-end test cases to validate that users can change their display name and password and that the statistics API renders valid dashboard statistics.

        Non-Technical
        • Reviewed PR for group members.
        • Worked on the Introduction, Project Development Process, Statistics Component, and Enhancement Suggestion portions of the report.
        • Assisted the team in the selection of a suitable slide deck for presentation.
        
        Project Background
        • Students applying for jobs in the computing industry often face challenging technical interviews. During these interviews, students are expected to solve algorithmic problems and implement solutions in code. However, many students may not be well-equipped to handle the rigor of these interviews. Some pain points experienced may include being unable to solve the given problem or an inability to communicate thought processes to the interviewer. Moreover, repetitive practice of algorithmic problems can be taxing and mundane.
        
        Purpose
        • To address the above pain points, the team has created a collaborative interview preparation platform called CodeCollab to improve the technical proficiency and communication skills of users. 
        
        CodeCollab
        • In CodeCollab, users can select their choice of programming language and match with peers to practice interview questions together using a shared code editor. Users will be able to chat with one another and view each other in real-time over video streaming. This will allow users to practice their communication skills and hone their ability to communicate technical concepts to other parties. Users will also be able to run their code submissions and verify the correctness of their code using CodeCollab’s submission feature.
        
        To encourage users to set goals for themselves and track their progress towards their goals, CodeCollab has integrated a dashboard which provides insights into the user’s activity on the website. Users will be able to track the number of questions attempted for each difficulty level, time taken for each attempt of the past month, topics and the number of questions related to the topic attempted, previous peer collaborators, and number of code submissions per day of the past year.        
        `,
      links: [
        {
          link: "https://drive.google.com/file/d/1qdSngFwmB4mxERc8O3-5Fu4IqNQPKLkC/view?usp=sharing",
          icon: <DescriptionIcon />,
        },
        {
          link: "https://docs.google.com/presentation/d/17hQ0dPQENkTkH4jJ2FQcfetdns1XvcAomvIklYzUwN0/edit?usp=sharing",
          icon: <SlideshowIcon />,
        },
      ],
    },
    {
      tag: ["ReactJS"],
      images: [IMAGES.swow1, IMAGES.swow2, IMAGES.swow3, IMAGES.swow4],
      title: "A Small World of Singlish Words",
      caption:
        "Multi-step survey form intended for the collection of free associations to Singapore English Words",
      description: `This front-end survey form was built for an NUS professor with the intention of collecting word associations to study the structure of the Singapore mental lexicon.

      I was in charge of developing the front-end with ReactJS over the duration of three months between June and August 2021.`,
    },
    {
      tag: ["ReactJS"],
      images: [
        IMAGES.personalResume1,
        IMAGES.personalResume2,
        IMAGES.personalResume3,
      ],
      title: "Personal Resume",
      caption: "A personal resume that I built using ReactJS",
      description: `This resume was built using ReactJS Material-UI Framework.`,
      links: [
        { link: "https://github.com/junlong4321/Resume", icon: <GitHubIcon /> },
        {
          link: "https://junlong4321.github.io/Resume/",
          icon: <LanguageIcon />,
        },
      ],
    },
  ],
};

export default resumeData;
