import figmaIcon from "@/assets/icons/figma.png";
import framerIcon from "@/assets/icons/framer.png";
import photoshopIcon from "@/assets/icons/photoshop.png";
import riveIcon from "@/assets/icons/rive.png";
import chatgptIcon from "@/assets/icons/chatgpt.png";
import illustratorIcon from "@/assets/icons/illustrator.png";
import mixpanelIcon from "@/assets/icons/mixpanel.png";
import midjourneyIcon from "@/assets/icons/midjourney.png";
import notionIcon from "@/assets/icons/notion.png";
import cursorIcon from "@/assets/icons/cursor.png";
import rotatoIcon from "@/assets/icons/rotato.png";
import splineIcon from "@/assets/icons/spline.png";
import blenderIcon from "@/assets/icons/blender.png";
import weavyIcon from "@/assets/icons/weavy.png";
import replitIcon from "@/assets/icons/replit.png";

const About = () => {
  const tools = [
    {
      name: 'Figma',
      icon: figmaIcon
    },
    {
      name: 'Framer',
      icon: framerIcon
    },
    {
      name: 'Photoshop',
      icon: photoshopIcon
    },
    {
      name: 'Rive',
      icon: riveIcon
    },
    {
      name: 'ChatGPT',
      icon: chatgptIcon
    },
    {
      name: 'Illustrator',
      icon: illustratorIcon
    },
    {
      name: 'MixPanel',
      icon: mixpanelIcon
    },
    {
      name: 'Midjourney',
      icon: midjourneyIcon
    },
    {
      name: 'Notion',
      icon: notionIcon
    },
    {
      name: 'Cursor',
      icon: cursorIcon
    },
    {
      name: 'Rotato',
      icon: rotatoIcon
    },
    {
      name: 'Spline',
      icon: splineIcon
    },
    {
      name: 'Blender',
      icon: blenderIcon
    },
    {
      name: 'Weavy AI',
      icon: weavyIcon
    },
    {
      name: 'Replit',
      icon: replitIcon
    },
  ]
  return (
    <section className="py-4 px-6">
      <div className=" w-full animate-fade-in">
        <h2 className="text-[22px] font-medium text-white">
          About Me
        </h2>
        <p className="text-sm text-white/70 mt-4">
          Design <span className="mx-1">•</span> Gym <span className="mx-1">•</span> Astronomy
        </p>


        <div className="w-full animate-fade-in border-b border-white/10 pb-3">
          <div className="grid grid-cols-2 py-2 mt-8">
            <div className="">
              <p className="text-[17px] text-white font-medium max-w-[360px]">Intro</p>
            </div>
            <div>
              <p className="text-[17px] text-white font-medium">Femi, 6xyx, kaizeroj</p>
              <p className="text-sm text-white/70 max-w-[455px] mt-2 leading-relaxed tracking-tight">Hi, my name is Femi. I am a designer with 6 years of professional experience building products and solutions for startups and companies.
              Apart from my career, I pride myself as an athlete, part-time personal trainer, and amateur astronomer.</p>
            </div>
          </div>
        </div>
        <div className="w-full animate-fade-in border-b border-white/10 pb-3">
          <div className="grid grid-cols-2 py-2 mt-6">
            <div className="">
              <p className="text-[17px] text-white font-medium max-w-[360px]">How I work</p>
            </div>
            <div>
              <p className="text-[17px] text-white">My design approach</p>
              <p className="text-sm text-white/70 max-w-[455px] mt-2 leading-relaxed tracking-tight">Phase 1: I start every project by researching (market, user & competitor). I ensure I understand your business/ brand, your customers and your goals, and outline all relevant data and insights. <br />
Phase 2: I connect the gathered insights to the idea/features to be built. Every design decision will be backed by data and insights gotten from the first phase. <br />
Phase 3: I create tangible deliverables and measure their impacts</p>

<p className="text-[17px] text-white font-medium mt-8">Tools</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="flex items-center gap-2 rounded-full px-3 py-[6px] bg-[#262626] hover:bg-[#26282C] transition-colors min-w-0"
                  >
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="h-6 w-6 object-contain flex-shrink-0"
                    />
                    <span className="text-[13px] text-white/70 truncate">{tool.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full animate-fade-in pb-3">
          <div className="grid grid-cols-2 pb-4 mt-10">
            <div className="">
              <p className="text-[17px] text-white font-medium max-w-[360px]">Interests</p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="text-[17px] text-white font-medium">Design</p>
                <p className="text-sm text-white/70 max-w-[455px] mt-2 leading-relaxed tracking-tight">I started designing in 2017. Actually I didn’t start as a designer. I was playing around on Photoshop, trying to learn photo manipulation tricks for fun and somehow I saw myself taking a design course on Udemy.
                Its been 8 years and I’ve had a roller coaster relationship with design. From working with clients, mentoring newbies, doing pro-bono work, building global products, taking career breaks, job hunting, its been a crazy ride and I’m glad I experienced that.</p>
              </div>
              <div>
                <p className="text-[17px] text-white font-medium">Gym</p>
                <p className="text-sm text-white/70 max-w-[455px] mt-2 leading-relaxed tracking-tight">On a random day in 2021 I strolled into a gym weighing 55kg, paid for a one-month sub and started swinging a dumbbell. That was the start of an arc that reshaped my persona. From going during times when the gym was empty because I was too weak to even bench an empty bar to having an enviable physique, its been a critical part of my life.</p>
              </div>
              <div>
                <p className="text-[17px] text-white font-medium">Astronomy</p>
                <p className="text-sm text-white/70 max-w-[455px] mt-2 leading-relaxed tracking-tight">The loml❤️. In 2023, I saw a video of Brian Cox on Tiktok talking about blackholes. I was fascinated by the time-dilation concept and I got into an endless rabbit-hole in a field that sparked a strange happiness in me. Been in love ever since...
                My Astronomy blog and Astrowurld are products of my astrophilia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
