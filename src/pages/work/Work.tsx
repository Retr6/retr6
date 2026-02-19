import { Link } from "react-router-dom";
import { useState } from "react";
import Web from "@/assets/thumbs/web.webm"
import Tools from "@/components/tools/tool";
import { projects } from "@/data/projects";

const Work = () => {
  const [activeTab, setActiveTab] = useState("Product");

  const tabs = ["Product", "Brand", "Web"];

  // Map tab names to category values
  const getCategoryFromTab = (tab: string) => {
    return tab.toLowerCase();
  };

  // Filter projects based on active tab
  const filteredProjects = projects.filter((project) => {
    const category = getCategoryFromTab(activeTab);
    return project.category === category;
  });

  return (
    <section className="lg:py-4 py-8 lg:px-6 px-4">
      <div className=" w-full animate-fade-in">
        <h2 className="text-[22px] font-medium text-white">
          Work
        </h2>

        {/* Tabs */}
        <div className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#262626CC] py-[5px] px-[7px] border-t border-[#FFFFFF4D]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-7 py-[8px] text-sm text-white transition-all duration-200 font-neue ${
                activeTab === tab
                  ? "bg-[#1C1E21] border-[#FFFFFF1A] border-t"
                  : "bg-transparent hover:bg-[#1F1F1F]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="space-y-8 mt-6" key={activeTab}>
          {activeTab === "Web" ? (
            <div className="animate-fade-in">
              <div className="w-full h-[700px] rounded-2xl overflow-hidden">
                <video src={Web} autoPlay muted loop className="w-full h-full object-cover" />
              </div>
              <div className="mt-8 max-w-[540px]">
                <p className="text-[17px] text-white font-medium tracking-tight mb-3">My Web design approach</p>
                <p className="text-sm text-white/70 mb-2 tracking-tight leading-relaxed">Phase 1: I go through the company’s brand guidelines or create brand direction in cases where it is non-existent. I highlight the company’s identity, understand the purpose of the website (brand experience or sales), and the goals of the site visitors.</p>
                <p className="text-sm text-white/70 mb-2 tracking-tight leading-relaxed mt-6">Phase 2: I create a moodboard of other websites and design trends that align with the brand. This gives me visual design direction and helps put me and my client on the same wavelength.</p>
                <p className="text-sm text-white/70 mb-2 tracking-tight leading-relaxed mt-6">Phase 3: I research SEO keywords, and create copy that speaks directly to the site visitors in a way that guides them towards our goal. I then create wireframes to test layouts to present the text, visual components and CTAs optimally.</p>
                <p className="text-sm text-white/70 mb-2 tracking-tight leading-relaxed mt-6">Phase 4: I design the UI and visual components (motion and static), with responsive breakpoints.</p>
                <p className="text-sm text-white mb-2 tracking-tight leading-relaxed mt-3">My approach ensures my final deliverable aligns the website’s purpose, brand identity and user goals.</p>
              </div>
              <div className="max-w-[510px]">
                <Tools />
              </div>
            </div>
          ) : (
            filteredProjects.map((project, index) => (
              <Link
                key={project.id}
                to={`/work/${project.id}`}
                className="group block pb-2 transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full rounded-2xl overflow-hidden">
                  {project.type === 'video' ? (
                    <video src={project.thumbnail} autoPlay muted loop className="w-full" />
                  ) : (
                    <img src={project.thumbnail} alt={project.title} className="w-full" />
                  )}
                </div>
                <div className="mt-4">
                  <h2 className="text-[17px] text-white/90 tracking-tight mb-2">
                    {project.title}
                  </h2>
                  <span  className="text-sm text-white/70">{project.year}</span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Work;
