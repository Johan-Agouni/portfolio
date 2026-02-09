export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: "saas" | "dashboard" | "api" | "tools";
  links: {
    live?: string;
    github?: string;
  };
  techStack: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    tools?: string[];
  };
  color: string;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "securiscan",
    title: "SecuriScan",
    description: "SaaS web security monitoring platform with vulnerability scanning and real-time alerts.",
    image: "/images/projects/securiscan.png",
    tags: ["SaaS", "Security", "Monitoring"],
    category: "saas",
    links: {
      github: "https://github.com/Johan-Agouni/securiscan",
      live: "https://securiscan.vercel.app",
    },
    techStack: {
      frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Recharts"],
      backend: ["Node.js", "Express", "TypeScript"],
      database: ["PostgreSQL", "Prisma", "Redis", "BullMQ"],
      tools: ["Docker", "GitHub Actions", "Stripe", "Vercel", "Railway"],
    },
    color: "#6366f1",
  },
  {
    id: "2",
    slug: "kosma-dashboard",
    title: "Kosma Dashboard",
    description: "Full-stack e-commerce dashboard with product management, orders and advanced analytics.",
    image: "/images/projects/kosma.png",
    tags: ["E-commerce", "Dashboard", "Analytics"],
    category: "dashboard",
    links: {
      github: "https://github.com/Johan-Agouni/kosma-dashboard",
    },
    techStack: {
      frontend: ["React 18", "Vite", "React Router v6", "Recharts", "React Hook Form"],
      backend: ["Node.js 18", "Express 4", "JWT"],
      database: ["MongoDB 7", "Mongoose 8"],
      tools: ["Docker", "Jest", "Vitest", "Cypress", "GitHub Actions"],
    },
    color: "#8b5cf6",
  },
  {
    id: "3",
    slug: "atmosphere-api",
    title: "Atmosphere API",
    description: "Interactive weather dashboard with 3D globe, real-time data and advanced visualizations.",
    image: "/images/projects/atmosphere.jpg",
    tags: ["API", "Data Viz", "3D"],
    category: "api",
    links: {
      github: "https://github.com/Johan-Agouni/atmosphere-api",
    },
    techStack: {
      frontend: ["JavaScript", "HTML5", "CSS3", "Globe.gl", "Chart.js"],
      backend: ["External REST API"],
      tools: ["Vite", "Weather API"],
    },
    color: "#ec4899",
  },
  {
    id: "4",
    slug: "invoiceflow",
    title: "InvoiceFlow",
    description: "Complete invoicing app for freelancers and small businesses with PDF generation and payment tracking.",
    image: "/images/projects/invoiceflow.png",
    tags: ["Invoicing", "PDF", "SaaS"],
    category: "saas",
    links: {
      github: "https://github.com/Johan-Agouni/invoiceflow",
    },
    techStack: {
      frontend: ["PHP", "Tailwind CSS", "Chart.js"],
      backend: ["PHP 8.2", "MVC Architecture"],
      database: ["MySQL 8.0", "PDO"],
      tools: ["Docker", "Dompdf", "PHPMailer"],
    },
    color: "#10b981",
  },
];
