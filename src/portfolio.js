// Portfolio content transcribed from Divya's supplied resume.
// Add verified contact links below before enabling GitHub profile integration.
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: false
};

const greeting = {
  username: "Divya",
  title: "Hi, I'm Divya",
  subTitle:
    "Java Full Stack Developer with 3+ years of experience designing, developing, and maintaining scalable web applications. I build with Java, Spring Boot, Angular, and SQL, with experience in AWS deployment, microservices, and CI/CD.",
  resumeLink: "./resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "",
  linkedin: "https://www.linkedin.com/in/divya-reddy-s/",
  gmail: "divyasheelam.d@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I do",
  subTitle: "JAVA FULL STACK DEVELOPMENT · MICROSERVICES · CLOUD",
  skills: [
    "Build scalable Java, Spring Boot, and Spring MVC services with REST APIs, GraphQL, and secure authentication.",
    "Create reusable Angular and TypeScript interfaces backed by PostgreSQL, MySQL, Oracle, MongoDB, and Redis.",
    "Design event-driven workflows with Apache Kafka and deploy applications using AWS EC2, S3, RDS, and CloudWatch.",
    "Automate delivery with Docker, Jenkins, Maven, Git, and Linux; validate behavior with JUnit, Mockito, Pytest, Postman, Bruno, Swagger/OpenAPI, and integration testing."
  ],
  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Spring Boot",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Python / Flask",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node-js"
    },
    {
      skillName: "SQL / NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Kafka",
      fontAwesomeClassname: "fas fa-network-wired"
    },
    {
      skillName: "CI/CD",
      fontAwesomeClassname: "fas fa-code-branch"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Cincinnati",
      subHeader: "MS in Information Technology",
      duration: "August 2023 – December 2024",
      desc: "Cincinnati, Ohio · GPA: 3.97/4.0",
      descBullets: []
    },
    {
      schoolName: "Anurag Group of Institutions",
      subHeader: "B.Tech in Electrical & Electronics Engineering",
      duration: "August 2018 – July 2022",
      desc: "Hyderabad, India · GPA: 8.20/10",
      descBullets: []
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer",
      company: "Dataflake | Freddie Mac",
      date: "March 2025 – Present",
      desc: "McLean, VA, United States",
      descBullets: [
        "Develop Java and Spring Boot microservices and RESTful APIs, reducing API response times by 25% through code refactoring and query optimization.",
        "Build secure HTTP APIs with OAuth authorization to protect backend resources.",
        "Create reusable Angular and TypeScript components, improving rendering efficiency and lowering page load time by 20%.",
        "Deploy and support applications on AWS EC2, S3, and CloudWatch.",
        "Automate builds and deployments with Jenkins, Maven, and Git, reducing deployment time by 30%.",
        "Create unit and integration tests with JUnit and Mockito, achieving 90% line coverage for maintained modules."
      ]
    },
    {
      role: "Associate Software Engineer",
      company: "Accenture",
      date: "October 2022 – July 2023",
      desc: "Hyderabad, India",
      descBullets: [
        "Engineered Java/Spring Boot microservices and REST APIs for high-volume enterprise workflows, using Apache Kafka to decouple downstream services.",
        "Designed asynchronous Kafka producer/consumer pipelines with retry and failure handling for reliable business-event processing.",
        "Optimized Oracle SQL and Spring Data/JPA access patterns and introduced Redis caching, improving API response times by 30%.",
        "Containerized services with Docker and automated build, test, and deployment workflows with Jenkins CI/CD; used metrics and centralized logging for production troubleshooting."
      ]
    },
    {
      role: "Software Engineer",
      company: "Cognizant",
      date: "January 2022 – August 2022",
      desc: "India",
      descBullets: [
        "Developed a full-stack enterprise application using Java, Spring Boot, Angular, and MySQL, building REST APIs and reusable components for 10+ workflows.",
        "Secured backend services with Spring Security and JWT, role-based authorization, request validation, centralized exception handling, and transactional database operations.",
        "Containerized and deployed application components with Docker and AWS EC2, S3, and RDS, integrating JUnit/Mockito testing into CI/CD workflows."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Academic Projects",
  subtitle: "BACKEND SYSTEMS, FULL STACK APPLICATIONS, AND RELIABLE DELIVERY",
  display: true,
  projects: [
    {
      projectName: "Event-Driven Order Processing Service",
      projectDesc:
        "September 2024 – December 2024 · Java, Spring Boot, Apache Kafka, PostgreSQL, Docker. Decoupled order intake from asynchronous processing and exposed status through REST APIs. Implemented idempotent consumers, retries, and dead-letter queues; validated recovery scenarios with integration tests.",
      footerLink: []
    },
    {
      projectName: "Expense Tracker",
      projectDesc:
        "March 2024 – April 2024 · JavaScript, Node.js, TypeScript, Spring Boot, Angular, MySQL, AWS. Built expense categorization, budget tracking, monthly summaries, and CSV imports with validation and duplicate detection. Developed GraphQL APIs with JWT authentication and user-level authorization, then deployed the containerized application on AWS.",
      footerLink: []
    },
    {
      projectName: "Secure Social Networking Web Application",
      projectDesc:
        "January 2022 – April 2022 · Python, Flask, MySQL, JavaScript, Bootstrap, PHP. Built registration, authentication, profiles, posts, and comments with session-based authentication and secure database access. Created responsive interfaces and led a team of four using Agile practices and GitHub version control.",
      footerLink: []
    }
  ]
};

const achievementSection = {
  title: "Achievements and Certifications",
  subtitle: "",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download Divya's resume",
  display: true
};

const contactInfo = {
  title: "Let's connect",
  subtitle: "Java, Spring Boot, Angular, and cloud application development.",
  location: "McLean, VA",
  number: "+1 (513) 372-1186",
  email_address: "divyasheelam.d@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = false;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
