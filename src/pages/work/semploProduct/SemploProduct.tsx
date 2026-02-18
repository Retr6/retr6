import Two from "@/assets/semplo/two.png"
import Three from "@/assets/semplo/three.png"
import Four from "@/assets/semplo/four.png"
import Five from "@/assets/semplo/five.mp4"
import Six from "@/assets/semplo/six.mp4"
import Seven from "@/assets/semplo/seven.png"
import Eight from "@/assets/semplo/eight.png"
import Nine from "@/assets/semplo/nine.png"

const SemploProduct = () => {
  return (
    <div>
        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">The Challenge</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Existing tools often:</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Force new users to configure too much before they can get started.</li>
            <li>Overcomplicate project management activities, which should be simple to the average user.</li>
            <li>Use complex jargon, creating the need for a steep learning curve to use and communicate actions with other team members.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">The Goal</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Semplo was designed to simplify workspace collaboration by:</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Erasing the need to learn how to use PM tools.</li>
            <li>Centralizing activities, tasks, and projects.</li>
            <li>Giving users clear visibility into their own work and team progress.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">My Role & Timeline</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Role: Lead UX/UI Designer</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Responsibilities: Research, IA design, wireframes, high-fidelity UI, prototyping.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Team: I worked with product owner & two engineers.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Timeline: 8 weeks (Research: 2, Style guide & Wireframes: 2, Visual Design: 3, Testing and Handoff: 1).</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">My Design Process</h2>
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Research & Discovery</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I interviewed 4 professionals (developer and designer) and 2 project managers via calls to find out what Project management tools they use and details about their experiences using these products.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Key insights gotten:</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Using these tools felt like an extra task instead of an ease to managing existing tasks, especially for personal usage.</li>
            <li>A personal task overview/ dashboard that could help users articulate their recent productivity was missing in many tools.</li>
          </ul>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">From the user research I was able to create 2 user personas</p>
        </div>

        <div className="max-w-[770px] mt-8">
            <img src={Two} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="max-w-[770px] mt-8">
            <img src={Three} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-8">
          <h2 className="text-[18px] font-bold text-white/90 mb-4">Competitive Analysis</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I reviewed Trello, Clickup, Jira and Notion.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">From my research I was able to define the general strength and weaknesses of existing PM tools.</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Strengths: Powerful task management, integrations.</li>
            <li>Weaknesses: Overwhelming UI, steep learning curves, cluttered dashboards.</li>
          </ul>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I also created a quadrant comparison chart to visualize  and compare each tool with their features and usability</p>
        </div>

        <div className="max-w-[650px] mt-8">
            <img src={Four} alt="Style Guide" className="w-full h-auto" />
        </div>

        <p className="text-[17px] text-white/80 leading-relaxed tracking-tight mt-6">In this chart, Usability refers to how easy and intuitive the tool is for users to navigate, learn, and adopt. Features refers to the range of features the tool offers and how intricate or specialized the tool is.</p>

        <div className="mt-8">
          <h2 className="text-[20px] font-bold text-white/90 mb-3">Ideation</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I brainstormed flows for:</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Signing up vs joining via invite:</li>
            <li>Creating tasks from a Kanban board.</li>
            <li>Viewing and managing milestones.</li>
            <li>Centralizing activities in a timeline feed.</li>
          </ul>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I used Replit for quick prototyping of the user flows.</p>
        </div>

        <div className="mt-8">
          <h2 className="text-[18px] font-bold text-white/90 mb-3">Key User Flows</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I mapped out key user flows to make interactions intuitive.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Onboarding allows users to create a workspace or join via invite</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">By focusing on these flows, I aimed to deliver a seamless experience that balances efficiency with simplicity for both individuals and teams.</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Onboarding: For users that sign up directly they are required to set up a new workspace, while users that sign up from a workspace invite will start off without creating one.</li>
            <li>Task Creation: Task creation can happen directly on Kanban boards or from the quick action button at the top navigation tab</li>
            <li>Milestone Management:  Milestones can be created, assigned, and tracked within projects.</li>
          </ul>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">By focusing on these flows, I aimed to deliver a seamless experience that balances efficiency with simplicity for both individuals and teams.</p>
        </div>

        <div className="mt-8">
          <h2 className="text-[18px] font-bold text-white/90 mb-3">Visual (UI) Design</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The final brand identity positions Snappipay as a credible, modern, and user-first crypto payment solution.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Key outcomes include:</p>
          <ul className="list-disc list-inside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>A clear and consistent brand system that scales across UI, web, and marketing</li>
            <li>Strong visual trust signals suitable for a financial product</li>
            <li>A calm, confident tone that reduces friction and user anxiety</li>
          </ul>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Most importantly, the brand successfully supports Snappipay’s core promise: making crypto payments feel as seamless and reliable as traditional payment methods—while retaining the freedom and flexibility of crypto.</p>
        </div>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 mt-12">
            <div>
                <video src={Five} autoPlay muted loop className="w-full h-auto" />
            </div>
            <div className="relative">
            <p className="text-[17px] text-white/80 leading-relaxed tracking-tight absolute lg:bottom-0 -bottom-12 left-0">Whatsapp integration feature presentation for Semplo.</p>
            </div>
        </div>

        <div className="mt-24 lg:mt-12">
            <video src={Six} autoPlay muted loop className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Seven} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Eight} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Nine} alt="Style Guide" className="w-full h-auto" />
        </div>
        
    </div>
  )
}

export default SemploProduct;

