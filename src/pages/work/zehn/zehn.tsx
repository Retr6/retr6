import Two from "@/assets/thumbs/zehn1.mp4"
import Three from "@/assets/zehn/three.png"
import Four from "@/assets/zehn/four.png"
import Five from "@/assets/zehn/five.png"
import Six from "@/assets/zehn/six.png"

const Zehn = () => {
  return (
    <div>
        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">The Goal</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The goal of the visual identity was to create a system that reflects precision, focus, and progress, while remaining scalable across mobile interfaces, competitions, and club ecosystems. The brand needed to feel credible to serious athletes, accessible to newcomers, and distinct within the sports-tech space.</p>
        </div>

        <div className="mt-12">
            <video src={Two} autoPlay muted loop className="w-full h-auto" />
        </div>

        

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">My Approach</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The identity was built around the nature of archery itself—accuracy, discipline, and control</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">A restrained color palette anchored in deep green and off-white establishes focus and clarity, while a yellow-gold accent signals achievement and competition. Clean typography and minimal iconography ensure legibility across score tracking, leaderboards, and data-heavy screens. Every element was designed with an app-first mindset, prioritizing consistency, usability, and long-term scalability.</p>

          <h2 className="text-[20px] font-medium text-white/90 mb-4 mt-8">Visual Identity System</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Every element was designed with an app-first mindset, prioritizing consistency, usability, and long-term scalability.</p>
        </div>

        <div className="mt-12">
            <img src={Three} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Results</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The final visual identity positions Zehn as a focused, professional, and competitive platform. It provides a strong foundation for product design, reinforces trust with athletes and clubs, and allows the brand to scale confidently across tournaments, digital experiences, and future extensions—while staying true to the discipline and precision of archery.</p>
        </div>

        

        <div className="mt-12">
            <img src={Four} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Five} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Six} alt="Style Guide" className="w-full h-auto" />
        </div>
    </div>
  )
}

export default Zehn;

