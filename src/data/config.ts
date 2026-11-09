/**
 * ============================================================
 *  NAMA' SALAMEH — PORTFOLIO CONFIGURATION
 * ============================================================
 */

// ─── Identity ────────────────────────────────────────────────
export const SITE = {
  name: "Nama' Salameh",
  title: "Software Engineer",
  tagline: "Building practical solutions through code.",
  bio: "Software Engineering graduate from An-Najah National University with experience in frontend development, backend integration, and building web applications. I enjoy solving problems, learning new technologies, and turning ideas into practical solutions.",
  bioExtended: `I have worked with Angular, React, TypeScript, and modern web technologies across professional projects, training programs, and personal work.

  My experience includes developing dashboards, integrating APIs, working with databases, and building backend services. I am always interested in improving my skills and taking on new technical challenges.`,
  available: true,
  // Update to the deployed production URL when published.
  url: "https://github.com/Nama-Salameh/namaa-salameh-portfolio",
  // Add this PDF to the public folder using the exact filename.
  cvPdf: "/Nama-Salameh-CV.pdf",
  email: "nama.salameh@gmail.com",
  location: "Nablus, Palestine",
};

// ─── Demo ribbon ─────────────────────────────────────────────
export const TEMPLATE_BANNER = {
  show: false,
  repoUrl: "https://github.com/Nama-Salameh/namaa-salameh-portfolio",
  bundleLabel: "",
  bundleUrl: "",
};

// ─── Navigation ──────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;

// ─── Social ──────────────────────────────────────────────────
export const SOCIAL_LINKS = [
  { label: "GitHub", href: "https://github.com/Nama-Salameh" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nama-salameh/",
  },
] as const;

// ─── Skills ──────────────────────────────────────────────────
export const SKILL_GROUPS = [
  {
    heading: "Frontend Development",
    tags: [
      "Angular",
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Sass",
      "Angular Material",
    ],
  },
  {
    heading: "Backend Development",
    tags: [
      "Node.js",
      "REST APIs",
      "Webhooks",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    heading: "Tools & Technologies",
    tags: [
      "Git",
      "GitHub",
      "Docker",
      "GitHub Actions",
      "Jira",
      "Postman",
      "OAuth",
      "WebSockets",
    ],
  },
] as const;

// ─── Experience ──────────────────────────────────────────────
export const EXPERIENCE = [
  {
    period: "May 2025 — May 2026",
    role: "Frontend Developer",
    company: "Radix Company",
    companyUrl: "https://radixtechs.com/",
    description:
      "Worked mainly with Angular and TypeScript on web applications and dashboards. Contributed to upgrading SalesScript from Angular 10 to Angular 19, improving existing code, integrating REST APIs and payment services, and developing dashboard features. Also worked with real-time functionality, analytics integrations, and the development team using Jira and Agile workflows.",
  },
  {
    period: "February — March 2026",
    role: "Backend Developer Intern",
    company: "Foothill Technology Solutions",
    companyUrl: "https://www.foothillsolutions.com/",
    description:
      "Completed a backend internship through the Boot.dev program. Built a webhook-driven task processing pipeline using TypeScript, Node.js, and PostgreSQL, and worked with asynchronous processing, Docker, and GitHub Actions for CI/CD.",
  },
  {
    period: "May — September 2024",
    role: "Frontend Developer",
    company: "Radix Company",
    companyUrl: "https://radixtechs.com/",
    description:
      "Contributed to frontend development using Angular, TypeScript, Angular Material, and Sass. Worked on user interfaces, API integration, and fixing application issues in collaboration with the development team.",
  },
  {
    period: "February — May 2024",
    role: "Frontend Developer Trainee",
    company: "ASAL Technologies",
    companyUrl: "https://www.asaltech.com/",
    description:
      "Completed frontend development training focused on HTML, CSS, JavaScript, TypeScript, React, Next.js, and Sass.",
  },
  {
    period: "July 2023 — January 2024",
    role: "Frontend Developer Trainee",
    company: "Foothill Technology Solutions",
    companyUrl: "https://www.foothillsolutions.com/",
    description:
      "Completed practical frontend training using React, JavaScript, and TypeScript. Worked with routing, reusable components, UI development, testing, and backend integration. Developed Starry Stay as the final training project.",
  },
  {
    period: "July 2023 — February 2024",
    role: "Volunteer Frontend Developer",
    company: "Art to Heart",
    companyUrl: "",
    description:
      "Contributed to frontend development using React and TypeScript as part of a volunteer project.",
  },
] as const;

// ─── Education ───────────────────────────────────────────────
export const EDUCATION = [
  {
    period: "September 2020 — June 2024",
    degree: "B.Sc. in Software Engineering",
    school: "An-Najah National University",
    note: "Graduated with a GPA of 3.51.",
  },
] as const;

// ─── Certifications ──────────────────────────────────────────
export const CERTIFICATIONS = [
  {
    year: "2026",
    name: "Backend Developer Internship Certificate",
    issuer: "Foothill Technology Solutions",
    image: "/certificates/foothill-backend-internship.png",
  },
  {
    year: "2026",
    name: "Learn Git",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-git.png",
  },
  {
    year: "2026",
    name: "Learn TypeScript",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-typescript.png",
  },
  {
    year: "2026",
    name: "Learn HTTP Clients in TypeScript",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-http-clients-typescript.png",
  },
  {
    year: "2026",
    name: "Learn SQL",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-sql.png",
  },
  {
    year: "2026",
    name: "Learn HTTP Servers in TypeScript",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-http-servers-typescript.png",
  },
  {
    year: "2026",
    name: "Learn Docker",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-docker.png",
  },
  {
    year: "2026",
    name: "Learn CI/CD with GitHub Actions, Docker and TypeScript",
    issuer: "Boot.dev",
    image: "/certificates/bootdev-learn-ci-cd.png",
  },
] as const;

// ─── Portfolio Projects ──────────────────────────────────────
export const PROJECTS = [
  {
    slug: "starry-stay",
    title: "Starry Stay",
    tagline: "A travel and accommodation booking web application.",
    description:
      "A web application developed as the final project during my frontend training at Foothill Technology Solutions. Built with React and TypeScript, it provides a user interface for exploring and booking accommodation.",
    solution:
      "Developed the application using React and TypeScript, with React Router for navigation, React Hook Form for form handling, Material UI for interface components, CSS Modules for styling, and Axios for API requests.",
    outcome:
      "Completed as the final project of the Foothill frontend training program.",
    tags: [
      "React",
      "TypeScript",
      "React Router",
      "Material UI",
      "CSS Modules",
      "Axios",
    ],
    year: "2024",
    role: "Frontend Developer",
    liveUrl: "https://github.com/Nama-Salameh/Starry-Stay",
    featured: true,
  },
  {
    slug: "webhook-processing-pipeline",
    title: "Webhook Processing Pipeline",
    tagline: "An event-driven backend system for asynchronous task processing.",
    description:
      "A backend project completed as the final deliverable of my Backend Developer Internship. The system receives webhook events, processes tasks asynchronously, and delivers results to subscribed endpoints.",
    solution:
      "Built REST APIs and background processing using TypeScript and Node.js, with PostgreSQL for data storage. Used Docker for containerization and GitHub Actions for CI/CD.",
    outcome:
      "Completed as the final deliverable of the backend internship. The source code is available on GitHub.",
    tags: [
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
      "REST APIs",
      "Webhooks",
    ],
    year: "2026",
    role: "Backend Developer",
    liveUrl: "https://github.com/Nama-Salameh/webhook-pipeline",
    featured: true,
  },
  {
    slug: "radix-marketing-dashboard",
    title: "Marketing Dashboard",
    tagline: "A dashboard for managing and analyzing digital marketing activity.",
    description:
      "A professional project developed at Radix Company. The dashboard brings together marketing platforms, allowing users to manage campaign-related activities and review performance data.",
    solution:
      "Contributed to frontend development and integrations involving Meta Ads, Google Ads, and Google Analytics, including connected accounts, campaign-related workflows, and analytics reporting.",
    outcome:
      "Contributed to the development of a marketing dashboard as part of the Radix development team.",
    tags: [
      "Angular",
      "TypeScript",
      "Meta Ads",
      "Google Ads",
      "Google Analytics",
      "API Integration",
    ],
    year: "2026",
    role: "Frontend Developer",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "radix-admin-dashboards",
    title: "Admin & Super Admin Dashboards",
    tagline: "Role-based dashboards for managing application data and users.",
    description:
      "Professional dashboard development at Radix Company, involving administrative interfaces for different user roles.",
    solution:
      "Worked on Angular interfaces with token-based authentication, role-based access, REST API integration, CRUD operations, pagination, search, dialogs, and responsive layouts.",
    outcome:
      "Contributed to the development and maintenance of the dashboards as part of the Radix team.",
    tags: [
      "Angular",
      "TypeScript",
      "Angular Material",
      "REST APIs",
      "Authentication",
      "Role-Based Access",
    ],
    year: "2025",
    role: "Frontend Developer",
    liveUrl: "",
    featured: true,
  },
  {
    slug: "wassilni-carpooling-app",
    title: "Wassilni — Carpooling App",
    tagline: "A university team project focused on shared transportation.",
    description:
      "A carpooling mobile application designed to help people find affordable transportation to places of work that are far away. It aims to provide an alternative to public transportation through shared rides.",
    solution:
      "Developed as a team project for a university mobile application course.",
    outcome:
      "Completed as part of the university coursework.",
    tags: [
      "Mobile Application",
      "University Project",
      "Team Project",
      "Carpooling",
    ],
    year: "2023",
    role: "Team Project",
    liveUrl:
      "https://github.com/Farha-Dahman/WassilniApp_Project_/tree/Dev",
    featured: false,
  },
] as const;