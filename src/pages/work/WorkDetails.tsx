import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { projects } from "@/data/projects";
import Footer from "@/components/footer/footer";

type Project = {
  id: string;
  thumbnail: string;
  title: string;
  category: string;
  year: string;
  type: 'video' | 'image';
  company?: string;
  industry?: string;
  website?: string;
  about?: string;
  cover: {
    type: 'video' | 'image';
    src: string;
  };
  content?: React.ReactNode;
};

const WorkDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? projects.find((p) => p.id === id) as Project | undefined : null;

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
    <div className="min-h-screen bg-[#0A0A0B] py-12">
      

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 lg:px-14 pb-20 animate-fade-in">
        {/* Header */}
      <header className="flex items-center gap-4 mb-12">
        <Link
          to="/work"
          className="flex items-center gap-2 text-white font-medium hover:text-white transition-colors duration-200 text-xs border border-[#FFFFFF33] rounded-lg px-3 py-1.5"
        >
          <ChevronLeft className="w-3.5 h-3.5 -ml-1.5" />
          Back
        </Link>
      </header>
        {/* Title */}
        <h1 className="text-[26px] lg:text-[60px] font-medium text-white mb-8 leading-tight tracking-tight font-neue">
          {project.title}
        </h1>

        {/* Metadata Grid */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 mb-16">
            <div>
              <p className="text-[14px] text-white/90 mb-1 font-medium">Company</p>
              <p className="text-base text-white/70">{project.company || "—"}</p>
            </div>
            <div>
              <p className="text-[14px] text-white/90 mb-1 font-medium">Industry</p>
              <p className="text-base text-white/70">{project.industry || "—"}</p>
            </div>
            <div>
              <p className="text-[14px] text-white/90 mb-1 font-medium">Website</p>
              <a 
                href={project.website || "#"} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base text-white/70 hover:text-white/80 hover:underline transition-colors"
              >
                {project.website ? project.website.replace("https://", "") : "—"}
              </a>
            </div>
            <div>
              <p className="text-[14px] text-white/90 mb-1 font-medium">Year</p>
              <p className="text-base text-white/70">{project.year}</p>
            </div>
        </div>

        {/* Main Visual */}
        <div className="w-full mb-8 overflow-hidden rounded-2xl">
          {project.cover.type === 'video' ? (
            <video src={project.cover.src} autoPlay muted loop className="w-full h-auto rounded-2xl" />
          ) : (
            <img src={project.cover.src} alt={project.title} className="w-full h-auto rounded-2xl" />
          )}
        </div>

        {/* About the project */}
        {project.about && (
          <div>
            <h2 className="text-[20px] font-medium text-white/90 mb-4">About the project</h2>
            <p className="text-[17px] max-w-[960px] text-white/80 leading-relaxed tracking-tight">
              {project.about}
            </p>
          </div>
        )}

        {project.content}

      </div>
      <Footer />
    </div>
  );
};

export default WorkDetails;
