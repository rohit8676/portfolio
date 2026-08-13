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
          name: "React",
          category: "frontend",
          highlight: "Component UI & State Hooks",
          iconName: "Code2",
          badge: "Library"
        },
        {
          name: "Next.js",
          category: "frontend",
          highlight: "Modern Web Framework",
          iconName: "Globe",
          badge: "Framework"
        },
        {
          name: "JavaScript",
          category: "frontend",
          highlight: "ES6+, Async/Await, DOM APIs",
          iconName: "FileCode",
          badge: "Language"
        }
      ]
    },
    backend: {
      title: "Backend & Systems",
      description: "Building scalable services, RESTful APIs, and robust server-side application logic.",
      skills: [
        {
          name: "Java",
          category: "backend",
          highlight: "OOP, Core Java, Data Structures",
          iconName: "Cpu",
          badge: "Language"
        },
        {
          name: "Spring Boot",
          category: "backend",
          highlight: "REST APIs & Microservices",
          iconName: "Server",
          badge: "Framework"
        },
        {
          name: "C#",
          category: "backend",
          highlight: ".NET Development & Systems",
          iconName: "Terminal",
          badge: "Language"
        }
      ]
    },
    database: {
      title: "Database & Data Modeling",
      description: "Designing relational database schemas, complex SQL joins, and data integrity constraints.",
      skills: [
        {
          name: "SQL",
          category: "database",
          highlight: "Queries, DDL/DML, Optimization",
          iconName: "Database",
          badge: "Query Language"
        },
        {
          name: "MySQL",
          category: "database",
          highlight: "Relational DBMS & Storage Engine",
          iconName: "Layers",
          badge: "RDBMS"
        }
      ]
    },
    tools: {
      title: "Tools & Environment",
      description: "Modern developer workflows, source version control, and productivity environments.",
      skills: [
        {
          name: "Git",
          category: "tools",
          highlight: "Version Control & Branching",
          iconName: "GitBranch",
          badge: "VCS"
        },
        {
          name: "GitHub",
          category: "tools",
          highlight: "Repository & Collaboration",
          iconName: "GitPullRequest",
          badge: "Platform"
        },
        {
          name: "VS Code",
          category: "tools",
          highlight: "IDE, Debugging & Extensions",
          iconName: "Laptop",
          badge: "Editor"
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
