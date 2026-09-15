<div align="center">

# Lucky Sharma

**Undergraduate at Motilal Nehru National Institute of Technology (MNNIT) Allahabad**  
*(Batch of 2024 – 2028 &bull; CPI: 8.51)*

<p align="center">
  <i>"I like AI Engineering, Agents, Backend, Scalable - Distributed systems and DSA."</i>
</p>

[![Portfolio](https://img.shields.io/badge/Portfolio-lucky1426shrma.github.io-0d1117?style=flat-square&logo=googlechrome&logoColor=white)](https://lucky1426shrma.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-lucky--sharma-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lucky-sharma-9a298a323/)
[![LeetCode](https://img.shields.io/badge/LeetCode-Knight%201974-FFA116?style=flat-square&logo=leetcode&logoColor=black)](https://leetcode.com/u/lucky1426shrma/)
[![Codeforces](https://img.shields.io/badge/Codeforces-Specialist%201449-1F8ACB?style=flat-square&logo=codeforces&logoColor=white)](https://codeforces.com/profile/lucky1426shrma)
[![CodeChef](https://img.shields.io/badge/CodeChef-3★%201617-5B4638?style=flat-square&logo=codechef&logoColor=white)](https://www.codechef.com/users/nifty_glee_76)
[![Email](https://img.shields.io/badge/Email-lucky1426sharma%40gmail.com-EA4335?style=flat-square&logo=gmail&logoColor=white)](mailto:lucky1426sharma@gmail.com)

</div>

---

### 🏆 Competitive Programming & Contest Records

| Platform / Event | Rating / Rank | Benchmark / Proof |
| :--- | :--- | :--- |
| **LeetCode** | **Knight (1974 Max)** | Top **2.93%** globally &bull; Global Rank **557** in Weekly Contest 506 &bull; [Profile](https://leetcode.com/u/lucky1426shrma/) |
| **Codeforces** | **Specialist (1449)** | Global Rank **853** in Codeforces Round 1090 &bull; [Profile](https://codeforces.com/profile/lucky1426shrma) |
| **CodeChef** | **3-Star (1617)** | Global Rank **191** in CodeChef Starters 194 &bull; [Profile](https://www.codechef.com/users/nifty_glee_76) |
| **ICPC India Prelims** | **Team Rank 743** | Top 10 teams from MNNIT Allahabad in ICPC India Regional Prelims |
| **Goldman Sachs Hackathon** | **Rank 3,440** | Ranked 3,440 among 20,000+ national participants across India |

---

### 🛠️ Featured Systems & Agentic AI Projects

#### 1. [Multi-Tier Caching Reverse Proxy & Cloud Deployment Engine](https://github.com/lucky1426shrma/Distributed-Cloud-Deployment-CDN-Platform)
*TypeScript, Node.js, Express, Docker, Redis 7, BullMQ, V8 (node:vm), AWS S3, Prometheus*
- Engineered a high-performance caching reverse proxy (L1 RAM + L2 SSD) with MD5 ETag validation, serving cached assets in **2ms** and cutting S3 upstream read calls by **90%**.
- Architected an asynchronous build pipeline with BullMQ Redis, isolating untrusted repository compilation inside ephemeral Docker containers (512MB RAM, 1 CPU limit) to mitigate host RCE.
- Benchmarked reverse proxy throughput at **1,671+ req/sec** with a p99 latency of **22ms** (Autocannon), exporting live telemetry via Prometheus (`/metrics`) and Server-Sent Events to the dashboard.
- Integrated an on-demand serverless runtime into the reverse proxy using Google V8 VM sandboxes (`node:vm`), dispatching Express APIs in **2ms** cold starts with 0% idle CPU consumption.

#### 2. [Eval-Driven Video Transcript RAG Application](https://github.com/lucky1426shrma/Production-grade-Eval-Driven-RAG-application)
*Python, LangChain, DeepEval, Google Gemini Flash, ChromaDB, Cross-Encoder (ms-marco), CI/CD*
- Architected a two-stage RAG pipeline pairing ChromaDB bi-encoder search with a Cross-Encoder reranker (`ms-marco-MiniLM-L-6-v2`), boosting Contextual Precision from **68% to 86%** (+18% lift) and Contextual Recall to **89%** on curated benchmarks.
- Engineered an automated CI/CD regression suite in DeepEval to evaluate the RAG Triad (Faithfulness, Relevancy), enforcing a 3-tier CI decision gate (`PASS=0`, `FAIL=1`, `REVIEW=2`) calibrated to empirical noise floors (0.02 gate, 0.05 guardrail).
- Built enterprise safety guardrails evaluated across 105 test cases, programmatically blocking prompt injection, PII leakage (0.9 threshold), and toxic outputs (0.3 threshold) while enforcing deterministic abstentions for ungrounded queries.
- Profiled operational latency and reliability by isolating retrieval and generation runtimes, enforcing strict production SLO targets (800ms TTFT, 2,500ms e2e p95) with exponential backoff fault tolerance.

#### 3. [Adaptive MCP Enterprise Agent — Multi-Modal Incident Triage](https://github.com/lucky1426shrma/Adaptive-MCP-Enterprise-Agent)
*Python, FastAPI, Next.js, LangGraph, Model Context Protocol (MCP), Qdrant, PostgreSQL, Docker*
- Built for the **Razorpay Buildathon** to solve multi-system production incident triage by cross-referencing live telemetry, postmortem documentation, and Git commits.
- Decoupled capabilities into 3 independent Model Context Protocol (MCP) microservices (`db-mcp` querying 360k+ PostgreSQL records, `rag-mcp` with Hybrid BM25/Vector RAG + Cross-Encoder reranker on Qdrant, and `github-mcp` with least-privilege repo scoping).
- Implemented Self-Reflection & Retrieval Assessment with local query rewriting guards, autonomously scoring evidence sufficiency and reducing hallucination rates by **65%**.
- Benchmarked head-to-head against single-shot baseline RAG via an automated evaluation harness: achieved **98.1%** multi-modal accuracy, 100% verified citation validity, and cut investigation time from ~45 minutes to ~12 seconds.

#### 4. [Upsolvers — LLM Workflow Based CP Assistant](https://github.com/lucky1426shrma/Upsolvers)
*Python, LangGraph, LangChain, SQLite, Streamlit, Asyncio, Pandas*
- Built a stateful LLM workflow orchestrating 6 specialized nodes using conditional flows and graphs via LangGraph and LangChain.
- Integrated SQLite-backed checkpointing state persistence enabling session resumption across human-in-the-loop (HITL) checkpoints & agent failures.
- Ingested competitive programming statistics via Codeforces REST API and LeetCode GraphQL API to generate personalized problem-solving strategies.

#### 5. [Shaharnaama — AI Travel Community & Exploration Platform](https://github.com/lucky1426shrma)
*Google Gemini 2.5 Flash, Node.js, Express.js, Socket.io, React.js, MongoDB, Passport.js*
- Developed a Google Gemini 2.5 Flash powered 12-hour TTL cache-optimized quiz and discovery engine.
- Implemented real-time live presence tracking and group/individual chat with Socket.io.
- Engineered multi-strategy authentication with Google OAuth 2.0, JWT, and email OTP verification.

---

### 💻 Technical Skills & Tooling

```
Languages              : C++, JavaScript, TypeScript, Python, SQL, Java (Basics)
Frameworks & LLM Ops   : Node.js, Express, React.js, LangChain, LangGraph, DeepEval, Socket.io, Passport.js
Databases & Infra      : Docker, Redis 7, MongoDB, PostgreSQL, ChromaDB, MySQL, SQLite, AWS S3, Prometheus, BullMQ
Relevant Coursework    : Data Structures & Algorithms, Operating Systems, OOPs, DBMS, Computer Networks
Areas of Interest      : AI Engineering, Agentic Workflows, Scalable Backend Systems, RAG & MCP Architecture
```

---

### 📬 Get In Touch

- **Portfolio**: [lucky1426shrma.github.io](https://lucky1426shrma.github.io/)
- **Email**: [lucky1426sharma@gmail.com](mailto:lucky1426sharma@gmail.com)
- **LinkedIn**: [linkedin.com/in/lucky-sharma-9a298a323](https://www.linkedin.com/in/lucky-sharma-9a298a323/)
- **GitHub**: [github.com/lucky1426shrma](https://github.com/lucky1426shrma)
