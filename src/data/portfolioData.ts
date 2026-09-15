export interface Project {
  title: string;
  subtitle?: string;
  technologies: string[];
  date: string;
  bullets: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Achievement {
  platform: string;
  title: string;
  rating?: string;
  rank?: string;
  year: string;
  link: string;
  detail: string;
}

export const PERSONAL_INFO = {
  name: "Lucky Sharma",
  role: "Undergraduate at MNNIT Allahabad",
  education: "B.Tech, Motilal Nehru National Institute of Technology Allahabad (2024 – 2028)",
  cpi: "8.51 CPI (till 4th semester)",
  email: "lucky1426sharma@gmail.com",
  phone: "+91-9084164350",
  github: "https://github.com/lucky1426shrma",
  githubHandle: "lucky1426shrma",
  linkedin: "https://www.linkedin.com/in/lucky-sharma-9a298a323/",
  leetcode: "https://leetcode.com/u/lucky1426shrma/",
  codeforces: "https://codeforces.com/profile/lucky1426shrma",
  codechef: "https://www.codechef.com/users/nifty_glee_76",
  resumeUrl: `${import.meta.env.BASE_URL}Lucky_Sharma_Resume.pdf`,
  summary: "Undergraduate student at MNNIT Allahabad. I like AI Engineering, Agents, Backend, Scalable - Distributed systems and DSA. LeetCode Knight with an active contest record on Codeforces and CodeChef."
};

export const PROJECTS: Project[] = [
  {
    title: "Multi-Tier Caching Reverse Proxy & Cloud Deployment Engine",
    date: "August 2026",
    technologies: ["TypeScript", "Node.js", "Express", "Docker", "Redis 7", "BullMQ", "V8 (node:vm)", "AWS S3", "Prometheus"],
    bullets: [
      "Engineered a high-performance caching reverse proxy (L1 RAM + L2 SSD) with MD5 ETag validation, serving cached assets in 2ms and cutting S3 upstream read calls by 90%.",
      "Architected an asynchronous build pipeline with BullMQ Redis, isolating untrusted repository compilation inside ephemeral Docker containers (512MB RAM, 1 CPU limit) to mitigate host RCE.",
      "Benchmarked reverse proxy throughput at 1,671+ req/sec with a p99 latency of 22ms (Autocannon), exporting live telemetry via Prometheus (/metrics) and Server Side Events to the dashboard.",
      "Made an on-demand serverless runtime into the reverse proxy using Google V8 based VM sandboxes (node:vm), dispatching Express APIs in 2ms cold starts with 0% idle CPU consumption."
    ],
    githubUrl: "https://github.com/lucky1426shrma/Distributed-Cloud-Deployment-CDN-Platform"
  },
  {
    title: "Eval-Driven Video Transcript RAG Application",
    date: "September 2026",
    technologies: ["Python", "LangChain", "DeepEval", "Google Gemini Flash", "ChromaDB", "Cross-Encoder (ms-marco)", "CI/CD"],
    bullets: [
      "Architected a two-stage RAG pipeline pairing ChromaDB bi-encoder search with a Cross-Encoder reranker (ms-marco-MiniLM-L-6-v2), boosting Contextual Precision from 68% to 86% (+18% lift) and Contextual Recall to 89% on curated benchmarks.",
      "Engineered an automated CI/CD regression suite in DeepEval to evaluate the RAG Triad (Faithfulness, Relevancy), enforcing a 3-tier CI decision gate (PASS=0, FAIL=1, REVIEW=2) calibrated to empirical noise floors (0.02 gate, 0.05 guardrail).",
      "Built enterprise safety guardrails evaluated across 105 test cases, programmatically blocking prompt injection, PII leakage (0.9 threshold), and toxic outputs (0.3 threshold) while enforcing deterministic abstentions for ungrounded queries.",
      "Profiled operational latency and reliability by isolating retrieval and generation runtimes, enforcing strict production SLO targets (800ms TTFT, 2,500ms e2e p95) with exponential backoff fault tolerance."
    ],
    githubUrl: "https://github.com/lucky1426shrma/Production-grade-Eval-Driven-RAG-application"
  },
  {
    title: "Adaptive MCP Enterprise Agent — Multi-Modal Incident Triage System",
    date: "July 2026 (Razorpay Buildathon)",
    technologies: ["Python", "FastAPI", "Next.js", "LangGraph", "Model Context Protocol (MCP)", "Qdrant", "PostgreSQL", "Docker"],
    bullets: [
      "Built for the Razorpay Buildathon to solve multi-system production incident triage by cross-referencing live telemetry, postmortem documentation, and Git commits.",
      "Decoupled capabilities into 3 independent Model Context Protocol (MCP) microservices (db-mcp querying 360k+ PostgreSQL records, rag-mcp with Hybrid BM25/Vector RAG + Cross-Encoder reranker on Qdrant, and github-mcp with least-privilege repo scoping).",
      "Implemented Self-Reflection & Retrieval Assessment with local query rewriting guards, autonomously scoring evidence sufficiency and reducing hallucination rates by 65%.",
      "Benchmarked head-to-head against single-shot baseline RAG via an automated evaluation harness: achieved 98.1% multi-modal accuracy, 100% verified citation validity, and cut human investigation time from ~45 minutes to ~12 seconds."
    ],
    githubUrl: "https://github.com/lucky1426shrma/Adaptive-MCP-Enterprise-Agent"
  },
  {
    title: "Shaharnaama — AI-Powered Travel Community Connect & Exploration Platform",
    date: "January 2026",
    technologies: ["Google Gemini LLM", "Node.js", "Express.js", "Passport.js", "Socket.io", "React.js", "MongoDB"],
    bullets: [
      "Developed a Google Gemini 2.5 Flash (LLM) powered 12-hour TTL cache optimized Quiz Engine.",
      "Built real-time live presence tracked chat feature with Socket.io with Group/individual channels to connect explorers.",
      "Implemented Google OAuth 2.0, JWT, based multi-strategy authentication with OTP email verification via Nodemailer and Passport.js middleware chain."
    ],
    githubUrl: "https://github.com/lucky1426shrma"
  },
  {
    title: "Upsolvers — LLM Workflow Based Competitive Programming Helper",
    date: "April 2026",
    technologies: ["Python", "LangGraph", "LangChain", "SQLite", "Streamlit", "Asyncio", "Pandas"],
    bullets: [
      "Built a stateful LLM workflow orchestrating 6 specialized nodes using conditional flows and graphs via LangGraph and LangChain, with SQLite-backed checkpointing state persistence enabling session resumption across HITL & agent failures.",
      "Implemented Human-in-the-Loop (HITL) workflows to review and refine Groq LLM-generated personalized study plans.",
      "Fetched competitive programming data via Codeforces REST API and LeetCode GraphQL API."
    ],
    githubUrl: "https://github.com/lucky1426shrma/Upsolvers"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    platform: "LeetCode",
    title: "LeetCode Knight",
    rating: "1974 Max Rating",
    rank: "Global Rank 557 (Weekly 506)",
    year: "2026",
    link: "https://leetcode.com/u/lucky1426shrma/",
    detail: "Top 2.93% globally. Rank 557 in LeetCode Weekly Contest 506."
  },
  {
    platform: "Codeforces",
    title: "Specialist",
    rating: "1449 Rating",
    rank: "Global Rank 853 (Round 1090)",
    year: "2026",
    link: "https://codeforces.com/profile/lucky1426shrma",
    detail: "Specialist on Codeforces. Global Rank 853 in Codeforces Round 1090."
  },
  {
    platform: "CodeChef",
    title: "3-Star",
    rating: "1617 Rating",
    rank: "Global Rank 191 (Starters 194)",
    year: "2025",
    link: "https://www.codechef.com/users/nifty_glee_76",
    detail: "Rated 1617 (3-Star). Global Rank 191 in CodeChef Starters 194."
  },
  {
    platform: "ICPC",
    title: "ICPC India Prelims",
    rank: "Team Rank 743",
    year: "2025",
    link: "https://www.linkedin.com/in/lucky-sharma-9a298a323/",
    detail: "Top 10 teams from MNNIT Allahabad in ICPC India Prelims."
  },
  {
    platform: "Hackathon",
    title: "Goldman Sachs India Hackathon",
    rank: "Rank 3,440 of 20,000+",
    year: "2026",
    link: "https://www.linkedin.com/in/lucky-sharma-9a298a323/",
    detail: "Ranked 3,440 among 20,000+ participants across India."
  }
];

export const SKILLS = {
  languages: ["C++", "JavaScript", "TypeScript", "Python", "Java (Basics)", "SQL"],
  frameworks: ["Node.js", "Express", "React.js", "Socket.io", "Passport.js", "LangChain", "LangGraph", "DeepEval", "Hugging Face"],
  toolsAndDatabases: ["Docker", "Redis 7", "MongoDB", "PostgreSQL", "ChromaDB", "MySQL", "SQLite", "AWS S3", "Prometheus", "BullMQ", "Git", "GitHub", "Postman", "VS Code"],
  coursework: ["Data Structures & Algorithms", "Operating Systems", "Object-Oriented Programming", "Database Management Systems", "Computer Networks"],
  interests: ["Competitive Programming", "Web Development", "Generative AI", "Agentic AI", "RAG", "MCP"]
};

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    organization: "Enactus MNNIT",
    period: "January 2025",
    location: "Prayagraj, India",
    bullets: [
      "Built Full Stack web application serving 1200+ users during TechnoCultural Fest, MNNIT."
    ],
    technologies: ["Node.js", "Express", "React", "MongoDB"]
  }
];

export const EDUCATION = [
  {
    institution: "Motilal Nehru National Institute of Technology Allahabad",
    degree: "Bachelor of Technology (B.Tech)",
    period: "2024 – 2028",
    score: "CPI: 8.51 (till 4th Semester)"
  }
];
