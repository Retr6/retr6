import Two from "@/assets/astrowurld/two.png"
import Three from "@/assets/astrowurld/three.png"
import Four from "@/assets/astrowurld/four.png"

const Astrowurld = () => {
  return (
    <div>
        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">The roadblocks</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I did a lot of research and started the product design process, but I got stuck while trying to figure out how to pull off the technical aspect. </p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Design Process</h2>
          <p className="text-[18px] text-white/80 leading-relaxed tracking-tight font-medium">Research, Blogging and Documentation</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight mt-4">Progress was slow or almost stagnant for a long while until I stumbled on a video from Dalton & Michael at YCombinator. They talked about how you can always start big things small and grow instead of trying to go big from the onset, and that changed my perspective.
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight my-1"></p>I restrategized and created the Astrowurld blog as the first major step to have something out. Working on the blog has helped me become more proactive on the project, and I have learnt a lot more while writing educational content.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I started learning Blender again and explored various open-source libraries for 3d assets I can work with. I found many open-source assets by Mieke Roth to be quite useful.</p>

          <p className="text-[18px] text-white/80 leading-relaxed tracking-tight font-medium mt-8">3D asset design</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight mt-4">I started learning Blender again and explored various open-source libraries for 3d assets I can work with. I found many open-source assets by Mieke Roth to be quite useful.</p>
        </div>

        <div className="max-w-[770px] mt-8 mx-auto">
            <img src={Two} alt="Style Guide" className="w-full h-auto" />
            <p className="text-[17px] text-white/80 leading-relaxed tracking-tight text-center mt-4">Mars 3D asset</p>
        </div>

        <div className="max-w-[770px] mt-8 mx-auto">
            <img src={Three} alt="Style Guide" className="w-full h-auto" />
            <p className="text-[17px] text-white/80 leading-relaxed tracking-tight text-center mt-4">Mercury 3D Asset</p>
        </div>
        
        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Drafting the PRD</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I had used ChatGPT as an AI assistant from the start of the project so it was easy to create a PRD without feeding it too much new information. I created a PRD that covered the idea and execution I had for the MVP</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Vibecoding with Tempo</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I created a Vite project on Tempo, vibecoded and iterated the product in one weekend, and submitted in time for the <a href="https://www.tempo.io/news/2021-partner-awards-hackathon-winner" target="_blank" rel="noopener noreferrer" className="underline cursor-pointer hover:text-white transition-colors">Tempo hackathon</a>.</p>
        </div>
        
        <div className="mt-8">
            <img src={Four} alt="Style Guide" className="w-full h-auto" />
        </div>
    </div>
  )
}

export default Astrowurld;