import { Link } from "react-router-dom";

const projects = [
  {
    id: "fintech-trading-app",
    title: "fintech trading app",
    category: "product design · mobile",
    year: "2024",
    description: "a comprehensive trading platform designed for both novice and experienced traders.",
  },
  {
    id: "saas-dashboard",
    title: "saas dashboard",
    category: "ui/ux · web app",
    year: "2024",
    description: "analytics dashboard with real-time data visualization for enterprise clients.",
  },
  {
    id: "brand-identity-nova",
    title: "brand identity — nova",
    category: "branding · identity",
    year: "2023",
    description: "complete brand overhaul for a fintech startup entering the european market.",
  },
  {
    id: "ecommerce-platform",
    title: "e-commerce platform",
    category: "design · development",
    year: "2023",
    description: "end-to-end e-commerce experience for a premium lifestyle brand.",
  },
];

const Work = () => {
  return (
    <section className="flex flex-col justify-center min-h-screen p-10 lg:p-14">
      <div className="space-y-10 animate-fade-in">
        <p className="text-sm-header text-muted-foreground uppercase tracking-widest">work</p>

        <div className="space-y-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/work/${project.id}`}
              className="group block border-b border-border pb-6 transition-colors duration-300"
            >
              <div className="flex items-baseline justify-between">
                <h2 className="text-main-header-sm lowercase text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>
                <span className="text-body text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-body text-muted-foreground mt-1">{project.category}</p>
              <p className="text-body text-muted-foreground mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
