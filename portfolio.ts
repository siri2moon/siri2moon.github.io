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
  name: 'Binh Nguyen',
  title: "Hi all, I'm Binh",
  descriptions: [
      "Dynamic and results-driven Full-Stack Developer with over 10 years of experience" +
      "designing and deploying robust web applications, complemented by specialized expertise in" +
      "AI-driven solutions and Web3 technologies.\n" +
      "Proficient in leveraging AWS and Google Cloud to architect scalable, cloud-native" +
      "infrastructure, with a proven track record of delivering high-performance systems. Skilled in" +
      "modern frameworks and DevOps practices, I excel in building end-to-end solutions that" +
      "prioritize innovation, security, and user experience.\n" +
      "A collaborative and approachable team player, I am passionate about embracing cutting-" +
      "edge technologies and continuously enhancing my technical expertise to drive business" +
      "success in fast-paced, tech-forward environments.",
  ],

  resumeLink:
    'https://drive.google.com/file/d/1Mdlrxw67Sys4mgJmBUZMhSVurN5GP3St/view?usp=sharing',
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
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full-Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in PHP & Ruby & NestJS REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Ruby',
          fontAwesomeClassName: 'logos:ruby',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassName: 'logos:php',
        },
        {
          skillName: 'NestJs',
          fontAwesomeClassName: 'logos:nestjs',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Danang University of Education',
    subHeader: 'Bachelor of Information Technology',
    duration: 'September 2011 - April 2015',
    desc: 'I graduated in bachelor of Information Technology',
    grade: 'Grade A',
    descBullets: [
      'PHP developer',
      'Javascript developer',
    ],
  },
];

export const experience: ExperienceType[] = [
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
    desc:
      "Partnered with Japanese clients to define project scopes and conceptualize innovative software" +
      "solutions, fostering cross-cultural collaboration and technical precision.\n" +
      "Managed project schedules effectively, ensuring on-time delivery of content and maintaining high" +
      "standards of quality, contributing to client trust and project success.",
  },
  {
    role: "Teacher",
    company: "VinaEnter",
    companyLogo: "/img/exp/vinaenter.png",
    date: "Jun 2015 - Mar, 2016",
    desc: "Taught PHP and Java web development training courses.\n",
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
