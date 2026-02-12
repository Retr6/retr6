import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const projectData: Record<string, { title: string; category: string; year: string; description: string; details: string[] }> = {
  "fintech-trading-app": {
    title: "fintech trading app",
    category: "product design · mobile",
    year: "2024",
    description: "a comprehensive trading platform designed for both novice and experienced traders.",
    details: [
      "led the end-to-end design process from research to final handoff, creating an intuitive trading experience that reduced onboarding time by 40%.",
      "designed a real-time data visualization system that displays complex market data in an accessible format, with customizable charts and alerts.",
      "implemented a design system with 200+ components, ensuring consistency across ios, android, and web platforms.",
    ],
  },
  "saas-dashboard": {
    title: "saas dashboard",
    category: "ui/ux · web app",
    year: "2024",
    description: "analytics dashboard with real-time data visualization for enterprise clients.",
    details: [
      "designed an enterprise-grade analytics dashboard serving 10,000+ daily active users with sub-second data refresh rates.",
      "created interactive data visualization components that transform complex datasets into actionable insights.",
      "built a modular widget system allowing users to customize their dashboard layout based on role and preferences.",
    ],
  },
  "brand-identity-nova": {
    title: "brand identity — nova",
    category: "branding · identity",
    year: "2023",
    description: "complete brand overhaul for a fintech startup entering the european market.",
    details: [
      "developed a comprehensive brand strategy including positioning, voice, and visual identity for european market entry.",
      "created a flexible logo system with 12 variants optimized for digital and print applications.",
      "designed brand guidelines spanning 80+ pages, covering typography, color, imagery, and application rules.",
    ],
  },
  "ecommerce-platform": {
    title: "e-commerce platform",
    category: "design · development",
    year: "2023",
    description: "end-to-end e-commerce experience for a premium lifestyle brand.",
    details: [
      "designed and developed a high-conversion e-commerce platform that increased sales by 65% in the first quarter.",
      "created an immersive product browsing experience with 3d product previews and ar try-on features.",
      "implemented a streamlined checkout flow that reduced cart abandonment by 30%.",
    ],
  },
};

const WorkDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projectData[id] : null;

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen p-10">
        <div className="text-center space-y-4">
          <p className="text-main-header text-foreground">project not found</p>
          <Link to="/work" className="text-primary hover:underline text-body">
            ← back to work
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center gap-4 p-8 lg:p-14">
        <Link
          to="/work"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 text-body"
        >
          <ArrowLeft className="w-4 h-4" />
          back
        </Link>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-8 lg:px-14 pb-20 animate-fade-in">
        <div className="space-y-4 mb-12">
          <p className="text-sm-header text-muted-foreground uppercase tracking-widest">
            {project.category}
          </p>
          <h1 className="text-main-header lowercase text-foreground">{project.title}</h1>
          <p className="text-body text-muted-foreground">{project.year}</p>
        </div>

        <div className="space-y-6 mb-16">
          <p className="text-body text-foreground">{project.description}</p>
        </div>

        <div className="space-y-4">
          <p className="text-sm-header text-muted-foreground uppercase tracking-widest">highlights</p>
          <ul className="space-y-4">
            {project.details.map((detail, i) => (
              <li key={i} className="text-body text-muted-foreground pl-4 border-l-2 border-primary">
                {detail}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WorkDetails;
