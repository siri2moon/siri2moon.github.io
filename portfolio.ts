import emoji from "react-easy-emoji";
import {
  CertificationType,
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Binh Nguyen",
  title: "Hi all, I'm Binh - Senior Full-Stack & AI Engineer",
  descriptions: [
    "Software engineer with 10+ years of experience, currently the technical lead of an " +
      "enterprise AI platform serving corporate customers in Korea and Vietnam.",
    "I deliver products end to end — the AI services, the backend APIs, the web application, " +
      "and the cloud infrastructure underneath them. My focus for the past two years has been " +
      "applied AI: intelligent search across a company's private documents, AI assistants that " +
      "answer with verifiable sources, and the data pipelines that keep them fast at scale.",
    "Paired with deep AWS and Kubernetes expertise, this lets me deliver systems that are " +
      "intelligent, secure, and economical to run in production.",
  ],

  resumeLink: "/resumes/binhnx-resume-2026-08.pdf",
};

export const openSource = {
  githubUserName: "siri2moon",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: "https://cv.siri2moon.com",
  linkedin: "https://www.linkedin.com/in/siri2moon/",
  github: "https://github.com/siri2moon",
  instagram: "https://www.instagram.com/siri2moon",
  facebook: "https://www.facebook.com/siri2moon",
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle:
    "SENIOR FULL-STACK & AI ENGINEER — FROM AI SERVICES TO CLOUD INFRASTRUCTURE",
  data: [
    {
      title: "AI & Machine Learning",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Retrieval-Augmented Generation (RAG) and LLM application architecture"
        ),
        emoji("⚡ AI agents & tool calling with LangChain / LangGraph"),
        emoji(
          "⚡ Hybrid search: vector embeddings, keyword search, re-ranking and page-level citations"
        ),
        emoji(
          "⚡ Multi-provider LLMs: OpenAI, Anthropic Claude, Google Gemini, AWS Bedrock"
        ),
        emoji("⚡ Document AI & OCR, prompt engineering"),
        emoji("⚡ AI usage & cost tracking per customer and per model"),
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
          skillName: "LangChain / LangGraph",
          fontAwesomeClassName: "logos:python",
        },
      ],
    },
    {
      title: "Backend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ High-performance APIs with Python FastAPI"),
        emoji("⚡ Node.js services with NestJS and Express in TypeScript"),
        emoji("⚡ REST APIs, Server-Sent Events (SSE) and WebSocket streaming"),
        emoji("⚡ Message queues & event-driven architecture"),
        emoji("⚡ Microservices, SOLID principles and design patterns"),
        emoji("⚡ Enterprise applications with PHP Laravel"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassName: "logos:python",
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassName: "logos:fastapi",
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassName: "logos:nodejs-icon",
        },
        {
          skillName: "NestJs",
          fontAwesomeClassName: "logos:nestjs",
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassName: "logos:typescript-icon",
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
          skillName: "MySQL",
          fontAwesomeClassName: "logos:mysql",
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassName: "logos:mongodb",
        },
        {
          skillName: "Redis",
          fontAwesomeClassName: "logos:redis",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassName: "logos:firebase",
        },
      ],
    },
    {
      title: "Frontend Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building web applications with Next.js and React"),
        emoji("⚡ Streaming AI answers live to the browser"),
        emoji("⚡ Monorepo management with Turborepo"),
        emoji("⚡ Type-safe UI development with TypeScript"),
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
      ],
    },
    {
      title: "Cloud & CI/CD",
      lottieAnimationFile: "/lottie/skills/cloudinfra.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ AWS Certified Developer – Associate"),
        emoji(
          "⚡ AWS: EKS, ECS, EC2, Lambda, S3, CloudFront, Aurora RDS, ElastiCache, SQS, KMS, CloudWatch, IAM"
        ),
        emoji(
          "⚡ Infrastructure as code with Terraform, reusable across environments"
        ),
        emoji(
          "⚡ Kubernetes & Docker with auto-scaling that follows real demand"
        ),
        emoji("⚡ CI/CD with GitHub Actions, Jenkins and CircleCI"),
        emoji("⚡ Monitoring & alerting, backup and disaster recovery"),
        emoji("⚡ Cloud cost management — around 20% savings delivered"),
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
          skillName: "Kubernetes",
          fontAwesomeClassName: "logos:kubernetes",
        },
        {
          skillName: "Docker",
          fontAwesomeClassName: "logos:docker-icon",
        },
        {
          skillName: "Github Actions",
          fontAwesomeClassName: "logos:github-actions",
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassName: "logos:jenkins",
        },
        {
          skillName: "CircleCI",
          fontAwesomeClassName: "logos:circleci",
        },
      ],
    },
    {
      title: "Web3 Development",
      lottieAnimationFile: "/lottie/skills/ethereum.json", // Path of Lottie Animation JSON File
      skills: [
        emoji(
          "⚡ Web stores and game platforms with blockchain in-game assets"
        ),
        emoji("⚡ NFT staking and transparent on-chain prize distribution"),
        emoji("⚡ Telegram mini-apps for wider distribution and engagement"),
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
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "AI & LLM Applications", //Insert stack or technology you have experience in
    progressPercentage: "88", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend Development",
    progressPercentage: "92",
  },
  {
    Stack: "Cloud Infrastructure & DevOps",
    progressPercentage: "90",
  },
  {
    Stack: "Technical Leadership",
    progressPercentage: "88",
  },
  {
    Stack: "Frontend Development",
    progressPercentage: "82",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName:
      "University of Technology and Education - The University of Danang",
    subHeader: "Bachelor of Information Technology",
    duration: "2011 - 2015",
    desc: "I graduated in bachelor of Information Technology",
    grade: "Grade A",
    descBullets: ["PHP", "NodeJS", "Python", "Javascript"],
  },
];

export const certifications: CertificationType[] = [
  {
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    issued: "Sep 10, 2026",
    expires: "Sep 10, 2029",
    validationNumber: "b8683cf1f1034db7851f288e6591ecc5",
    verifyLink: "https://aws.amazon.com/verification",
    certificateLink: "/certificates/aws-certificate-dva-binhnx.pdf",
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Senior Full-Stack & AI Engineer",
    company: "Uranus Software - Da Nang",
    companyLogo: "/img/exp/uranus.jpg",
    date: "Apr, 2024 – Present",
    desc: "Technical lead of an enterprise AI platform that lets organizations search and work with their internal documents through AI assistants. Accountable for the AI services, backend, web application and cloud infrastructure — from architecture through production operations and cost.",
    descBullets: [
      "Architected the AI document search: documents are automatically read, understood and indexed so employees ask questions in natural language and receive answers cited to the exact page of the source file.",
      "Designed an AI assistant platform where non-technical users configure their own assistants — instructions, tools, AI model and permitted documents — with answers streamed live to the browser.",
      "Enabled assistants to produce PDF, Word, Excel, PowerPoint and chart deliverables, generated in a secure isolated environment and validated before reaching the user.",
      "Architected the document processing pipeline for scale — parallel stages, auto-scaling workers and exactly-once processing — validated at thousands of documents with a 100% success rate.",
      "Delivered trustworthy answer quality with hybrid keyword-and-meaning search, re-ranking, Korean/English language tuning and page-level citations.",
      "Unified multiple AI providers behind a single gateway with automatic failover, response caching and usage logging, plus per-customer AI usage and cost reporting.",
      "Designed the enterprise security model: employees retrieve only documents they are authorized to access, permission changes apply instantly, credentials are encrypted and access is audited.",
      "Own the complete AWS infrastructure as code (Terraform) and led two zero-downtime migrations of the full production platform, including the move to Kubernetes.",
      "Drove a cloud cost-efficiency program delivering around 20% savings through consolidation, scheduled automation and storage lifecycle policies.",
      "Authored architecture and operations documentation; mentor engineers across backend, AI and infrastructure.",
    ],
  },
  {
    role: "Team Manager & Scrum Master",
    company: "Neolab Vietnam - Da Nang",
    companyLogo: "/img/exp/neolab.png",
    date: "Aug, 2016 – Apr, 2024",
    desc: "Led cross-functional teams of 15 to 20 engineers delivering web and mobile platforms for Japanese enterprise clients.",
    descBullets: [
      "Owned backend architecture as Server Leader and ran agile delivery as Scrum Master.",
      "Partnered with Product Owners on requirements, scope and timelines.",
      "Led backend and delivery for telehealth, job-matching, vehicle valuation and banquet booking platforms.",
      "Mentored junior developers into independent full-stack engineers.",
    ],
  },
  {
    role: "Junior Software Engineer",
    company: "FPT Software - Da Nang",
    companyLogo: "/img/exp/fpt.png",
    date: "Mar, 2016 - Aug, 2016",
    desc: "",
    descBullets: [
      "Partnered with Japanese clients to define project scope and shape technical solutions.",
      "Managed delivery schedules and quality standards.",
    ],
  },
  {
    role: "Instructor",
    company: "VinaEnter Academy - Da Nang",
    companyLogo: "/img/exp/vinaenter.png",
    date: "Jun, 2015 - Mar, 2016",
    desc: "",
    descBullets: [
      "Taught PHP and Java web development, preparing IT students for their first engineering roles.",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    name: "Enterprise AI Platform",
    desc: "Enterprise AI platform for corporate customers in Korea and Vietnam: intelligent search across private documents, configurable AI assistants that answer with page-level citations, document-generating agents, Slack and Google Drive integrations, and a multi-provider AI gateway. Python, FastAPI, LangChain / LangGraph, NestJS, Next.js, PostgreSQL, Redis, vector databases, AWS, Kubernetes, Terraform.",
  },
  {
    name: "Web3 Gaming & Web Store Platform",
    desc: "Scalable web store and game platform integrating blockchain for decentralized in-game assets and transactions, alongside Telegram mini-apps that widened distribution and user engagement. Node.js, NestJS, React.js, Web3, AWS.",
  },
  {
    name: "NFT Staking & Lottery Platform",
    desc: "User-facing lottery application with NFT staking, using blockchain for transparent prize distribution and asset management. Node.js, React.js, Web3, smart contracts.",
  },
  {
    name: "Telehealth Consultation Platform",
    desc: "Real-time online doctor consultations for Next Innovation Operation Inc. Led backend development and the delivery process, designing a cloud-native backend serving iOS, Android and web clients. Node.js, Express.js, AWS, PostgreSQL, WebSocket, Docker, CI/CD.",
  },
  {
    name: "Wakumo - Job-Matching Platform",
    desc: "Part-time employment marketplace. Led server-side design and implementation, engineered for high-volume traffic and fast application processing. Python, FastAPI, React.js, Google Cloud, MongoDB, GitHub Actions.",
  },
  {
    name: "DMM Auto - Vehicle Valuation & Sales Platform",
    desc: "Directed backend development, delivering valuation algorithms and secure transaction modules that streamlined the sales workflow end to end. Node.js, NestJS, AWS, MySQL, Jenkins, Terraform.",
  },
  {
    name: "Wedding & Banquet Booking Platform",
    desc: "Reservation system with integrated scheduling for venues, vendors and customers. Node.js, Express.js, MongoDB, AWS, Docker, CircleCI.",
  },
];

export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Binh Nguyen - Senior Full-Stack & AI Engineer",
  description:
    "Hi all, I'm Binh - Senior Full-Stack & AI Engineer with 10+ years of experience, technical lead of an enterprise AI platform. I deliver AI services, backend APIs, web applications and AWS / Kubernetes infrastructure end to end.",
  author: "Binh Nguyen",
  image: "https://avatars.githubusercontent.com/u/18733630?v1",
  url: "https://cv.siri2moon.com",
  keywords: [
    "Fullstack",
    "AI Engineer",
    "Binh",
    "Binh Nguyen",
    "siri2moon",
    "siri2moon.com",
    "Binh IT Da Nang",
    "Portfolio",
    "Binh Nguyen Portfolio ",
    "Binh Portfolio",
    "Senior Full-Stack & AI Engineer",
    "RAG",
    "LLM",
    "AWS",
    "AWS Certified Developer",
    "Kubernetes",
  ],
};
