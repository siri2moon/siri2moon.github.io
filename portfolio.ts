import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: "Binh Nguyen",
  title: "Hi all, I'm Binh - Fullstack & AI Engineer",
  descriptions: [
    "Dynamic and results-driven Full-Stack Developer with over 10 years of experience" +
      "designing and deploying robust web applications, complemented by specialized expertise in" +
      "AI-driven solutions and Web3 technologies.\n" +
      "",
    "Proficient in leveraging AWS and Google Cloud to architect scalable, cloud-native" +
      "infrastructure, with a proven track record of delivering high-performance systems. Skilled in" +
      "modern frameworks and DevOps practices, I excel in building end-to-end solutions that" +
      "prioritize innovation, security, and user experience.\n" +
      "",
    "A collaborative and approachable team player, I am passionate about embracing cutting-" +
      "edge technologies and continuously enhancing my technical expertise to drive business" +
      "success in fast-paced, tech-forward environments.",
  ],

  resumeLink:
    "https://drive.google.com/file/d/1atNz1zNLi6hR_qzu178BblmL4fzm8see/view?usp=sharing",
};

export const openSource = {
  githubUserName: 'siri2moon',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://cv.siri2moon.com',
  linkedin: 'https://www.linkedin.com/in/siri2moon/',
  github: 'https://github.com/siri2moon',
  instagram: 'https://www.instagram.com/siri2moon',
  facebook: 'https://www.facebook.com/siri2moon',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "AI (Artificial Intelligence)",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Multi-agent AI orchestration with LangGraph"),
        emoji(
          "⚡ Multi-Provider LLM Support: OpenAI, Anthropic, Google (Gemini), AWS Bedrock"
        ),
        emoji("⚡ Advanced RAG System: OpenSearch vector database"),
        emoji("⚡ Real-time web search integration (DuckDuckGo)"),
        emoji("⚡ Enterprise document analysis and summarization"),
        emoji("⚡ Streaming chat completions with multiple AI providers"),
      ],
      softwareSkills: [
        {
          skillName: "OpenAI",
          fontAwesomeClassName: "logos:openai-icon",
        },
        {
          skillName: "Anthropic",
          fontAwesomeClassName: "logos:anthropic",
        },
        {
          skillName: "Google Gemini",
          fontAwesomeClassName: "logos:google-gemini",
        },
        {
          skillName: "AWS Bedrock",
          fontAwesomeClassName: "logos:aws",
        },
        {
          skillName: "OpenSearch",
          fontAwesomeClassName: "logos:opensearch",
        },
        {
          skillName: "LangGraph",
          fontAwesomeClassName: "logos:python",
        },
        {
          skillName: "DuckDuckGo",
          fontAwesomeClassName: "logos:duckduckgo",
        },
      ],
    },
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"
        ),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Monorepo management with Turborepo"),
        emoji(
          "⚡ Modern React development with hooks and functional components"
        ),
      ],
      softwareSkills: [
        {
          skillName: "HTML-5",
          fontAwesomeClassName: "vscode-icons:file-type-html",
        },
        {
          skillName: "CSS-3",
          fontAwesomeClassName: "vscode-icons:file-type-css",
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassName: "logos:javascript",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassName: "logos:typescript-icon",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassName: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          fontAwesomeClassName: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "Turborepo",
          fontAwesomeClassName: "logos:turborepo",
        },
        {
          skillName: "Redux",
          fontAwesomeClassName: "logos:redux",
        },
        {
          skillName: "NPM",
          fontAwesomeClassName: "logos:npm-icon",
        },
        {
          skillName: "Yarn",
          fontAwesomeClassName: "logos:yarn",
        },
      ],
    },
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ SOLID principles and design patterns implementation"),
        emoji("⚡ Building RESTful APIs with NestJS framework"),
        emoji("⚡ High-performance APIs with Python FastAPI framework"),
        emoji("⚡ Enterprise applications with PHP Laravel framework"),
        emoji("⚡ Microservices architecture and API design"),
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassName: "logos:nodejs-icon",
        },
        {
          skillName: "NestJs",
          fontAwesomeClassName: "logos:nestjs",
        },
        {
          skillName: "Python",
          fontAwesomeClassName: "logos:python",
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassName: "logos:fastapi",
        },
        {
          skillName: "PHP",
          fontAwesomeClassName: "logos:php",
        },
        {
          skillName: "Laravel",
          fontAwesomeClassName: "logos:laravel",
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassName: "logos:postgresql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassName: "logos:mongodb",
        },
        {
          skillName: "Redis",
          fontAwesomeClassName: "logos:redis",
        },
      ],
    },
    {
      title: "Web3 Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Utilizing Node.js and React.js to interact with blockchain smart contracts"
        ),
        emoji("⚡ Enhancing dApp functionality and user experience"),
        emoji(
          "⚡ Building decentralized applications with modern web technologies"
        ),
      ],
      softwareSkills: [
        {
          skillName: "NodeJS",
          fontAwesomeClassName: "logos:nodejs-icon",
        },
        {
          skillName: "Reactjs",
          fontAwesomeClassName: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Solidity",
          fontAwesomeClassName: "logos:solidity",
        },
        {
          skillName: "Web3js",
          fontAwesomeClassName: "logos:web3js",
        },
        {
          skillName: "Ethereum",
          fontAwesomeClassName: "logos:ethereum",
        },
        {
          skillName: "Metamask",
          fontAwesomeClassName: "logos:metamask-icon",
        },
      ],
    },
    {
      title: "Cloud & CI/CD",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Comprehensive AWS services: EC2, S3, Lambda, CloudFront, CloudWatch, ECS, CodeBuild, OpenSearch, Bedrock"
        ),
        emoji("⚡ Google Cloud Platform deployment and management"),
        emoji("⚡ Infrastructure as Code with Terraform"),
        emoji("⚡ Automated CI/CD pipelines with Autobuild and GitHub Actions"),
        emoji("⚡ Container orchestration and microservices deployment"),
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassName: "logos:aws",
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassName: "logos:google-cloud",
        },
        {
          skillName: "Terraform",
          fontAwesomeClassName: "logos:terraform",
        },
        {
          skillName: "Docker",
          fontAwesomeClassName: "logos:docker-icon",
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassName: "logos:kubernetes",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassName: "logos:github-actions",
        },
        {
          skillName: "Autobuild",
          fontAwesomeClassName: "logos:github",
        },
        {
          skillName: "Nginx",
          fontAwesomeClassName: "logos:nginx",
        },
        {
          skillName: "Sentry",
          fontAwesomeClassName: "logos:sentry-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'AI & Machine Learning', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend Development',
    progressPercentage: '90',
  },
  {
    Stack: 'Cloud & DevOps',
    progressPercentage: '88',
  },
  {
    Stack: 'Frontend Development',
    progressPercentage: '85',
  },
  {
    Stack: 'Web3 & Blockchain',
    progressPercentage: '75',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName:
      "University of Technology and Education - The University of Danang",
    subHeader: "Bachelor of Information Technology",
    duration: "September 2011 - April 2015",
    desc: "I graduated in bachelor of Information Technology",
    grade: "Grade A",
    descBullets: ["PHP", "NodeJS", "Python", "Javascript"],
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Fullstack & AI Engineer",
    company: "Uranus Software - Da Nang",
    companyLogo: "/img/exp/uranus.jpg",
    date: "Apr, 2024 – Present",
    desc: "Leading development of enterprise-grade AI services and Web3 gaming platforms, driving innovation in cloud-native solutions and decentralized applications.",
    descBullets: [
      "Architected enterprise-grade AI services platform using Python, FastAPI, and LangChain, integrating multi-provider LLM support (OpenAI, Anthropic, Google Gemini, AWS Bedrock) and advanced RAG architecture with OpenSearch for scalable, cloud-native solutions.",
      "Developed scalable Web3 gaming platform for Redbrick ecosystem, leveraging Node.js, NestJS, React.js, and AWS to deliver decentralized in-game functionalities, Telegram mini-apps, and Redbrick Studio platform, enhancing user engagement.",
      "Mentored junior developers, fostering technical growth in modern frameworks, AI, and Web3 technologies, while ensuring alignment with business objectives and industry best practices.",
    ],
  },
  {
    role: "Team Manager and Scrum master",
    company: "NEOLAB Vietnam",
    companyLogo: "/img/exp/neolab.png",
    date: "Aug 2016 – Apr, 2024",
    desc: "Collaborated with senior developers to enhance project management expertise, driving efficient delivery of complex web applications.",
    descBullets: [
      "Led web development projects as Scrum Master, managing cross-functional teams of 15–20" +
        "members to deliver scalable, high-quality solutions.",
      "Partnered with Product Owners to gather requirements, design user-centric websites, and" +
        "establish clear project timelines, ensuring alignment with business goals.",
      "Mentored and trained junior developers, fostering technical growth and promoting best practices in full-stack.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "FPT Software Danang",
    companyLogo: "/img/exp/fpt.png",
    date: "Mar, 2016 - Aug, 2016",
    desc: "",
    descBullets: [
      "Partnered with Japanese clients to define project scopes and conceptualize innovative software" +
        "solutions, fostering cross-cultural collaboration and technical precision.",
      "Managed project schedules effectively, ensuring on-time delivery of content and maintaining high" +
        "standards of quality, contributing to client trust and project success.",
    ],
  },
  {
    role: "Teacher",
    company: "VinaEnter",
    companyLogo: "/img/exp/vinaenter.png",
    date: "Jun 2015 - Mar, 2016",
    desc: "",
    descBullets: [
      "Taught PHP and Java web development training courses.",
      "Helped IT students prepare for graduation by providing solid programming foundation knowledge to equip them for entering the workforce at various companies."
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Please take a look at my CV',
    desc: '',
    link: greetings.resumeLink,
  }
];

export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Binh Nguyen',
  description:
    'Fullstack & AI Engineer',
  author: 'Binh Nguyen',
  image: 'https://avatars.githubusercontent.com/u/18733630?v1',
  url: 'https://cv.siri2moon.com',
  keywords: [
    'Fullstack',
    'AI Engineer',
    'Binh',
    'Binh Nguyen',
    'siri2moon',
    'siri2moon.com',
    'Binh IT Da Nang',
    'Portfolio',
    'Binh Nguyen Portfolio ',
    'Binh Portfolio',
    'Fullstack & AI Engineer',
    'Fullstack',
    'AI Engineer',
  ],
};
