export const PROFILE = {
  name: 'Namra Vora',
  role: 'Software Engineer',
  headline: 'I build backends that hold up, and AI features that actually work.',
  promise: 'Backend, Full-Stack and AI-application engineer. Node.js, TypeScript, Java/Spring Boot and the Gemini API.',
  status: 'Open to work, available immediately',
  location: 'Gujarat, India',
  email: 'voranamra625@gmail.com',
  phone: '+91 7016304912',
  links: {
    linkedin: 'https://www.linkedin.com/in/namra-vora/',
    github: 'https://github.com/Vora-Namra',
    leetcode: 'https://leetcode.com/u/Namra_Vora',
  },
  photo: '/assets/Namra-Vora-portrait.png',
  // Add the real PDF at this path to enable the resume download button.
  resume: '/assets/Namra_Vora-CV.pdf',
};

export const SUMMARY = 'Software Engineer with 10 months of production experience building backend systems and AI-powered applications. Works with Node.js, TypeScript, Java/Spring Boot, PostgreSQL and the Gemini API. Strong in REST APIs, database design, role-based access control, queues and background jobs, and clear technical documentation. Fast learner who enjoys solving real engineering problems.';

export const PASSION = [
  'I like turning messy, real-world requirements into clean systems that stay reliable under load.',
  'What excites me most is making AI features that are genuinely useful — grounded, validated and safe to ship.',
  'I learn fast, write clear docs, and care about the small details that keep production systems healthy.',
];

export const EXPERIENCE = {
  role: 'Software Engineer',
  company: 'eSparkBiz',
  project: 'The ASL Shop',
  period: 'Jan 2026 — Nov 2026',
  bullets: [
    'Designed production database architecture for gift card and coupon management: creation, redemption, expiry, usage limits, condition-based rules, analytics and automated deactivation.',
    'Built role-based access control (user-wise and role-wise permissions for every feature and module) and a request-and-approve workflow where operational admins request permission and the action runs only after an admin approves.',
    'Optimized heavy course curriculum listing queries with database-level pagination and attribute projection, replacing unbounded table scans with bounded 10-record windows.',
    'Built database-driven email and notification templates sent through a queue (dictionary sync, course publish failure, subscription failure), with Admin alerting after 3 failed course publishes.',
  ],
  tech: ['Node.js', 'TypeScript', 'PostgreSQL', 'Sequelize', 'Redis', 'RabbitMQ'],
};

export const PROJECTS = [
  {
    no: '01',
    title: 'Satva',
    tagline: 'Hospital Appointment Booking System',
    summary: 'A multi-tenant booking platform for patients, doctors, staff and administrators.',
    bullets: [
      'Multi-tenant platform for 5 roles (patient, doctor, staff, admin, super admin), layered Express and MySQL backend with a 31-table schema, JWT access and refresh tokens, Google OAuth, role-based guards, Zod validation, rate-limited auth and audit logging.',
      'Core booking flow: slot availability from doctor schedules, leaves and existing bookings; reschedule and cancel with an 8-state status history; Zoom links for online visits; medical records with prescriptions and file uploads; in-app notifications; Gemini-generated record summaries.',
      'Tested with Vitest (unit) and Playwright (end-to-end).',
    ],
    tech: ['React', 'TypeScript', 'TanStack Query', 'Express', 'MySQL', 'Zoom API', 'Gemini', 'Vitest', 'Playwright'],
    github: 'https://github.com/Vora-Namra/Satva',
    live: null,
    diagram: ['Patients', 'Express API', 'MySQL', 'JWT · OAuth · RBAC', 'Zoom · Gemini'],
  },
  {
    no: '02',
    title: 'Hustlr',
    tagline: 'AI-Powered Job Portal',
    summary: 'A recruitment platform with candidate workflows and AI-assisted resume scoring.',
    bullets: [
      'Full recruitment flow: secure sign-up and login, password recovery, profiles, job posts, application tracking and interview scheduling for applicants and employers.',
      'ATS-style resume scoring that evaluates candidate profiles and helps recruiters find suitable candidates faster.',
    ],
    tech: ['Spring Boot', 'MongoDB', 'TypeScript', 'React', 'Mantine', 'Tailwind', 'JWT', 'Gemini', 'Spring Security'],
    github: 'https://github.com/Vora-Namra/Hustlr',
    live: 'https://hustlr-07.netlify.app/',
    diagram: ['Applicants', 'Spring Boot', 'MongoDB', 'Spring Security · JWT', 'Gemini ATS scoring'],
  },
  {
    no: '03',
    title: 'SkillSync',
    tagline: 'AI Career Platform',
    summary: 'A career dashboard with personalized quizzes and AI-assisted application tools.',
    bullets: [
      'AI career dashboard with personalized industry quizzes, instant feedback and weekly Gemini-powered insights on salary, demand and market trends.',
      'AI resume and cover-letter builder that tailors content to a target role and exports to PDF in one click.',
    ],
    tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Clerk', 'Gemini', 'Tailwind CSS'],
    github: 'https://github.com/Vora-Namra/SkillSync',
    live: 'https://skill-sync-eta-dusky.vercel.app/',
    diagram: ['Career dashboard', 'Next.js', 'PostgreSQL · Prisma', 'Clerk auth', 'Gemini insights'],
  },
  {
    no: '04',
    title: 'AskMyDocs',
    tagline: 'RAG Application · PDF Question Answering',
    summary: 'A document question-answering app that grounds responses in uploaded PDFs.',
    bullets: [
      'Upload multiple PDFs and ask questions; includes ingestion, text extraction, chunking, embeddings and vector similarity search.',
      'Answers are limited to retrieved document content, with a fallback reply when the answer is not in the documents, to reduce hallucinations.',
    ],
    tech: ['Python', 'LangChain', 'FAISS', 'Gemini API', 'Streamlit'],
    github: 'https://github.com/Vora-Namra/AskMyDocs',
    live: 'https://askmydocs-gwhxnweywyjtcycjwv9edq.streamlit.app/',
    diagram: ['PDF uploads', 'Text · chunks · embeddings', 'FAISS search', 'Retrieved context', 'Grounded answer'],
  },
  {
    no: '05',
    title: 'ImageSpeak',
    tagline: 'AI Image-to-Speech Assistant',
    summary: 'An accessibility-focused app that turns images into spoken descriptions.',
    bullets: [
      'Accessibility-focused app that turns images into spoken descriptions for specially-abled users: BLIP captions, Gemini enrichment, text-to-speech with a local fallback, downloadable audio.',
    ],
    tech: ['Python', 'PyTorch', 'Hugging Face Transformers', 'BLIP', 'Gemini API', 'MMS-TTS', 'Streamlit'],
    github: 'https://github.com/Vora-Namra/ImageSpeak/',
    live: null,
    diagram: ['Image input', 'BLIP captions', 'Gemini enrichment', 'MMS-TTS', 'Downloadable audio'],
  },
];

export const SKILLS = [
  { group: 'Languages', items: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL'] },
  { group: 'Backend', items: ['Node.js', 'Express.js', 'NestJS', 'Spring Boot', 'Spring Security', 'REST APIs', 'JWT', 'OAuth', 'RabbitMQ', 'Zod'] },
  { group: 'Frontend', items: ['React.js', 'Next.js', 'Tailwind CSS', 'TanStack Query', 'Redux Toolkit'] },
  { group: 'Databases & ORMs', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase', 'Prisma', 'Sequelize'] },
  { group: 'Testing', items: ['Vitest', 'Playwright'] },
  { group: 'Cloud & DevOps', items: ['AWS EC2', 'Nginx', 'Linux', 'Docker', 'Git (GitHub, GitLab)'] },
  { group: 'Generative AI', items: ['LLM APIs', 'Gemini API', 'Prompt Engineering', 'Structured LLM Outputs', 'RAG', 'Embeddings', 'Vector Search', 'AI Response Validation'] },
];

export const EDUCATION = [
  {
    degree: 'B.Tech, Information Technology',
    school: 'Dharmsinh Desai University, Nadiad',
    detail: 'CGPA 8.56',
    period: '2023 — May 2026',
  },
  {
    degree: 'Diploma, Computer Engineering',
    school: 'Gujarat Technological University, Jamnagar',
    detail: 'CGPA 9.07',
    period: '2020 — 2023',
  },
];

export const ACHIEVEMENTS = [
  '300+ problems solved on LeetCode, 50 Days Badge earned twice.',
  'AWS Cloud Foundations (AWS Academy).',
  'AWS Machine Learning Foundations (AWS Academy).',
];

export const STATS = [
  { value: 10, suffix: '', label: 'Months in production' },
  { value: 5, suffix: '', label: 'Projects' },
  { value: 300, suffix: '+', label: 'LeetCode solved' },
  { value: 8.56, suffix: '', label: 'B.Tech CGPA', decimals: 2 },
];
