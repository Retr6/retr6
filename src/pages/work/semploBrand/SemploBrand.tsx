import Two from "@/assets/semplo2/two.mp4"
import Three from "@/assets/semplo/one.mp4"
import Four from "@/assets/semplo2/four.png"
import Five from "@/assets/semplo2/five.png"
import Six from "@/assets/semplo2/six.png"
import Seven from "@/assets/semplo2/seven.png"
import Eight from "@/assets/semplo2/eight.png"

const SemploBrand = () => {
  return (
    <div>
        <div className="mt-12">
            <video src={Two} autoPlay muted loop className="w-full h-auto" />
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">The Goal</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The primary goal of the brand design was to translate Semplo’s product philosophy into a clear and cohesive identity.
          Specifically, the brand needed to communicate simplicity without feeling basic or underpowered</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">My Approach</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The brand design approach was guided by Semplo’s golden circle and core values: simplicity, synergy, ease of access, and sleekness.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Brand Strategy & Positioning</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I held 2 brainstorming sessions with the client to create key brand values. The brand was positioned around one clear promise: <br />
           project management, without the friction. This informed every design decision, from typography to tone of voice. We were able to finalize on brand values, color palette and logo design. <br />
           Rather than competing on feature density, Semplo’s identity emphasizes restraint, clarity, and intentional design.</p>
        </div>


        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Visual Identity</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">A minimal visual system was developed to reduce distraction and keep focus on the work itself:</p>
          <ul className="list-disc pl-6 list-outside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>Typography: Inter was chosen for the product UI due to its exceptional readability and neutrality, while Syne was introduced for brand and marketing moments to add personality without visual noise.</li>
            <li>Color System: A restrained, modern palette supports focus and hierarchy, ensuring content always takes priority over decoration.</li>
            <li>Layout & Spacing: Generous spacing and consistent rhythm reinforce calmness and improve scannability across the interface.</li>
          </ul>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Tone of Voice</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The brand voice was designed to be calm, direct, and human. Copy avoids jargon and unnecessary explanations, favoring short, reassuring statements that guide users without overwhelming them.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Every interaction — from onboarding to error states — was treated as part of the brand experience.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Results</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The final brand identity positions Semplo as a confident, design-forward project management tool built for clarity.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Key outcomes include:</p>
          <ul className="list-disc pl-6 list-outside text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li>A cohesive brand system that aligns seamlessly with the product experience</li>
            <li>A visual identity that feels simple, clean, and modern without being sterile</li>
            <li>Clear differentiation from more complex, feature-heavy competitors</li>
            <li>A strong foundation for scalable product, marketing, and UI design</li>
          </ul>
        </div>

        <div className="mt-12">
            <video src={Three} autoPlay muted loop className="w-full h-auto" />
        </div>

        <div className="grid grid-cols-3 mt-12">
          <div className="col-span-1 bg-white">
            <img src={Four} alt="Style Guide" className="w-full h-auto" />
          </div>
          <div className="col-span-1">
            <img src={Five} alt="Style Guide" className="w-full h-auto" />
          </div>
          <div className="col-span-1">
            <img src={Six} alt="Style Guide" className="w-full h-auto" />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12">
          <div className="col-span-1">
            <img src={Seven} alt="Style Guide" className="w-full h-auto" />
          </div>
          <div className="col-span-1">
            <img src={Eight} alt="Style Guide" className="w-full h-auto" />
          </div>
        </div>
    </div>
  )
}

export default SemploBrand;

