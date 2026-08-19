export const PERSONAL_INFO = {
  name: "Rohit Kumar",
  title: "Software Developer",
  role: "Full-Stack & Backend Developer",
  location: "Delhi, India",
  email: "rk7312899@gmail.com",
  phone: "+91 8757628253",
  educationDegree: "Bachelor of Computer Application (BCA)",
  greeting: "Hello, I'm Rohit Kumar",
  heroHeading: "Software Developer Building Modern Digital Solutions.",
  heroSubheading:
    "I build responsive web applications, backend systems, APIs, and database-driven software using modern technologies.",
  about: {
    lead: "Rohit Kumar is a Software Developer passionate about building reliable, scalable, and user-friendly software solutions.",
    paragraphs: [
      "He works across frontend and backend development, with experience in JavaScript, Java, SQL, C#, React, Next.js, Spring Boot, and MySQL. He enjoys transforming business requirements into practical digital solutions, developing responsive web applications, designing REST APIs, working with databases, and creating clean and maintainable software.",
      "His technical interests span full-stack web development, backend engineering, database-driven applications, and modern software architecture."
    ],
    highlights: [
      {
        title: "Full-Stack Web Engineering",
        desc: "Building interactive frontend interfaces with React & Next.js connected to robust backends."
      },
      {
        title: "Backend & RESTful APIs",
        desc: "Architecting structured APIs and business logic using Java, Spring Boot, and C#."
      },
      {
        title: "Database Architecture",
        desc: "Designing normalized schemas, writing optimized queries, and managing data with SQL & MySQL."
      },
      {
        title: "Clean Code & Reliability",
        desc: "Committed to maintainable codebases, version control workflows, and responsive cross-platform designs."
      }
    ],
    quickStats: [
      { label: "Degree", value: "BCA Graduate" },
      { label: "Specialization", value: "Software Development" },
      { label: "Core Stack", value: "Full-Stack & Backend" },
      { label: "Base Location", value: "Delhi, India" }
    ]
  },
  socialPlaceholders: {
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://www.instagram.com/its_rohitray_04",
    email: "mailto:rk7312899@gmail.com",
    phone: "tel:+918757628253"
  }
};

export const SKILLS_DATA = {
  categories: [
    {
      id: "all",
      name: "All Technologies"
    },
    {
      id: "frontend",
      name: "Frontend"
    },
    {
      id: "backend",
      name: "Backend"
    },
    {
      id: "database",
      name: "Database"
    },
    {
      id: "tools",
      name: "Tools & DevOps"
    }
  ],
  grouped: {
    frontend: {
      title: "Frontend Development",
      description: "Crafting modern, accessible, and responsive user interfaces with reactive component architectures.",
      skills: [
        {
          id: "react",
          name: "React",
          category: "frontend",
          highlight: "Component UI & State Hooks",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
          badge: "Library",
          brandColor: "#61DAFB",
          tags: ["Hooks", "Virtual DOM", "SPA"]
        },
        {
          id: "nextjs",
          name: "Next.js",
          category: "frontend",
          highlight: "Modern Web & SSR Framework",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
          badge: "Framework",
          brandColor: "#38BDF8",
          tags: ["SSR/SSG", "App Router", "Full-Stack"]
        },
        {
          id: "javascript",
          name: "JavaScript",
          category: "frontend",
          highlight: "ES6+, Async/Await, Modern DOM",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          badge: "Language",
          brandColor: "#F7DF1E",
          tags: ["ES6+", "Async/Await", "Event Loop"]
        }
      ]
    },
    backend: {
      title: "Backend & Systems",
      description: "Building scalable services, RESTful APIs, and robust server-side application logic.",
      skills: [
        {
          id: "java",
          name: "Java",
          category: "backend",
          highlight: "OOP, Core Java & Data Structures",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          badge: "Language",
          brandColor: "#EA2D2E",
          tags: ["OOP", "JVM", "Multithreading"]
        },
        {
          id: "springboot",
          name: "Spring Boot",
          category: "backend",
          highlight: "REST APIs & Microservices",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
          badge: "Framework",
          brandColor: "#6DB33F",
          tags: ["Spring MVC", "REST APIs", "IoC"]
        },
        {
          id: "nodejs",
          name: "Node.js",
          category: "backend",
          highlight: "Server-side Runtime & Async APIs",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          badge: "Runtime",
          brandColor: "#5FA04E",
          tags: ["Express", "Async I/O", "REST APIs"]
        },
        {
          id: "dotnet",
          name: ".NET",
          category: "backend",
          highlight: "Cross-platform Framework & Web APIs",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
          badge: "Framework",
          brandColor: "#512BD4",
          tags: ["ASP.NET Core", "Entity Framework", "C#"]
        },
        {
          id: "csharp",
          name: "C#",
          category: "backend",
          highlight: ".NET Development & Systems",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
          badge: "Language",
          brandColor: "#9B4993",
          tags: [".NET", "LINQ", "OOP Architecture"]
        }
      ]
    },
    database: {
      title: "Database & Data Modeling",
      description: "Designing relational database schemas, complex SQL joins, and data integrity constraints.",
      skills: [
        {
          id: "sql",
          name: "SQL",
          category: "database",
          highlight: "Queries, DDL/DML & Optimization",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuresqldatabase/azuresqldatabase-original.svg",
          badge: "Query Language",
          brandColor: "#00758F",
          tags: ["Complex Joins", "Indexing", "Schemas"]
        },
        {
          id: "mysql",
          name: "MySQL",
          category: "database",
          highlight: "Relational DBMS & Storage Engine",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          badge: "RDBMS",
          brandColor: "#00758F",
          tags: ["InnoDB", "ACID", "Transactions"]
        }
      ]
    },
    tools: {
      title: "Tools & Environment",
      description: "Modern developer workflows, source version control, and productivity environments.",
      skills: [
        {
          id: "androidstudio",
          name: "Android Studio",
          category: "tools",
          highlight: "Android App Dev, Kotlin/Java & Gradle",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg",
          badge: "IDE / Mobile",
          brandColor: "#3DDC84",
          tags: ["Android SDK", "Emulators", "Gradle"]
        },
        {
          id: "git",
          name: "Git",
          category: "tools",
          highlight: "Version Control & Branching",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          badge: "VCS",
          brandColor: "#F05032",
          tags: ["Branching", "Merging", "Rebase"]
        },
        {
          id: "github",
          name: "GitHub",
          category: "tools",
          highlight: "Repository & Team Collaboration",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          badge: "Platform",
          brandColor: "#94A3B8",
          tags: ["Pull Requests", "CI/CD", "Collab"]
        },
        {
          id: "vscode",
          name: "VS Code",
          category: "tools",
          highlight: "IDE, Debugging & Extensions",
          iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
          badge: "Editor",
          brandColor: "#007ACC",
          tags: ["Debugging", "Extensions", "CLI"]
        }
      ]
    }
  }
};

export const PROJECTS_DATA = [
  {
    id: "raushani-bakery",
    title: "Raushani Sudha & Bakery",
    category: "Web Application",
    featured: true,
    tagline: "Modern Bakery & Confectionery Business Web Presence",
    description:
      "A modern bakery business website designed to provide customers with an engaging online experience and present the bakery's products, services, and business information through a clean and responsive interface.",
    liveUrl: "https://raushani-six.vercel.app/",
    githubUrl: null, // Only include if provided
    technologies: ["React", "JavaScript", "Responsive Design", "Modern CSS", "Vercel"],
    highlights: [
      "Intuitive product showcase showcasing freshly baked goods, cakes, and artisan specialties",
      "Seamless responsive navigation tailored for mobile food ordering and catalog browsing",
      "Fast page transitions, clean card layouts, and interactive visual hierarchy"
    ]
  }
];

export const EDUCATION_DATA = {
  degree: "Bachelor of Computer Application (BCA)",
  level: "Undergraduate Degree",
  summary: "Comprehensive academic curriculum covering software engineering, computer programming, database management, and computing architecture.",
  keyAreas: [
    "Software Engineering & Architecture",
    "Object-Oriented Programming (OOP)",
    "Relational Database Management Systems (RDBMS)",
    "Data Structures & Algorithms",
    "Web Application Technologies"
  ]
};

export const CODE_SNIPPETS = {
  java: {
    language: "Java",
    filename: "SoftwareDeveloperController.java",
    code: `@RestController
@RequestMapping("/api/v1/developer")
public class SoftwareDeveloperController {

    private final DeveloperService service;

    public SoftwareDeveloperController(DeveloperService service) {
        this.service = service;
    }

    @GetMapping("/profile")
    public ResponseEntity<DeveloperProfile> getProfile() {
        DeveloperProfile profile = DeveloperProfile.builder()
            .name("Rohit Kumar")
            .title("Software Developer")
            .location("Delhi, India")
            .skills(List.of("React", "Java", "Spring Boot", "MySQL", "C#"))
            .status("Ready for Impact")
            .build();

        return ResponseEntity.ok(profile);
    }
}`
  },
  react: {
    language: "React / JSX",
    filename: "SolutionArchitect.jsx",
    code: `import React, { useState } from 'react';

export const DeveloperDashboard = ({ engineer = "Rohit Kumar" }) => {
  const [activeStack] = useState([
    'React', 'Next.js', 'Spring Boot', 'MySQL'
  ]);

  return (
    <div className="dev-container">
      <h3>Building Scalable Web & Backend Solutions</h3>
      <div className="stack-chips">
        {activeStack.map((tech) => (
          <span key={tech} className="tech-badge">{tech}</span>
        ))}
      </div>
    </div>
  );
};`
  },
  sql: {
    language: "SQL",
    filename: "schema_queries.sql",
    code: `-- Querying developer technical capabilities
SELECT 
    d.developer_name,
    d.specialization,
    GROUP_CONCAT(s.skill_name SEPARATOR ', ') AS core_technologies
FROM developers d
JOIN developer_skills ds ON d.id = ds.developer_id
JOIN skills s ON ds.skill_id = s.id
WHERE d.developer_name = 'Rohit Kumar'
GROUP BY d.id;`
  }
};
