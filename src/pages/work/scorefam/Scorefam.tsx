import Two from "@/assets/scorefam/two.png"
import Three from "@/assets/scorefam/three.png"
import Four from "@/assets/scorefam/four.png"
import Five from "@/assets/scorefam/five.png"
import Six from "@/assets/scorefam/six.png"
import Seven from "@/assets/scorefam/seven.png"
import Eight from "@/assets/scorefam/eight.png"
import Nine from "@/assets/scorefam/nine.png"

const Scorefam = () => {
  return (
    <div>
        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">My Role</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I started working at Scorefam in 2021 as the lone designer on the team. I designed the MVP and the second version of the product, and led a team of 3 designers when the team grew.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Industry challenges that affected the design process of the product</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Building a user-friendly product in 2021-2022 was not an easy task. Some of the issues I faced are:</p>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li className="pl-2">Resistant User-base: The crypto ecosystem was dominated by early adopters who had not only adapted to complexity but also embraced it. Many viewed navigational complexity as a feature rather than a bug, and so it became a thing of pride to be able to navigate these complexities.</li>
            <li className="pl-2">Technological Limitations: The infrastructure needed for intuitive user experiences simply wasn't mature yet. Innovations such as Account abstraction and beginner-friendly wallets were not available in 2021, making it difficult to design products with optimal UX.</li>
            <li className="pl-2">Misaligned User Incentives: The average crypto user uses an app for potential monetary profit instead of the actual purpose it was built to serve. This is a major problem when building crypto products because it impacts design decisions, and not in a good way.</li>
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">UX issues from the MVP</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">Scorefam's MVP had some design flaws that were cited after it was launched:</p>
          <ol className="list-decimal list-outside pl-6 space-y-2 text-[17px] text-white/80 leading-relaxed tracking-tight">
            <li className="pl-2">Unaccommodating to non-crypto natives: The product could only be used by connecting a crypto wallet. This made it difficult for people who didn't have such facilities to use the product, despite the marketing efforts to get them to visit the website.</li>
            <li className="pl-2">Lack of platform engagement: The MVP lacked important features and interactions that could keep users interested and get them to return regularly.</li>
            <li className="pl-2">Difficulty funding their account: Users who didn't have the required tokens to use the platform ($SFT) and pay for gas ($BNB) were usually forced to close the app without accomplishing their goals. This was bad for user satisfaction and business metrics.</li>
          </ol>
        </div>

        <div className="mt-12">
          <h2 className="text-[20px] font-medium text-white/90 mb-4">Design Approach</h2>
          <h2 className="lg:text-[20px] text-[18px] font-medium text-white/90 mb-4">Step 1: I conducted user and competitor research:</h2>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I conducted user research by conducting surveys in the project's community on Telegram. I also had direct conversations with selected users to get insight into their pain points when using the MVP.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I was able to discover the mindset of crypto users, understanding what drives their interest and their biases. I also noted the technical limitations to building a product with optimal UX.</p>
          <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">I also reviewed the existing version and got insights from the marketing team using Mixpanel.</p>

          <h2 className="lg:text-[20px] text-[18px] font-medium text-white/90 mb-4 mt-8">Step 2: I created user personas to properly understand Scorefam's customer base</h2>
        </div>

        <div className="max-w-[770px] mt-8">
            <img src={Two} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="max-w-[770px] mt-8">
            <img src={Three} alt="Style Guide" className="w-full h-auto" />
        </div>

        <h2 className="lg:text-[20px] text-[18px] font-medium text-white/90 mb-4 mt-8">Step 3: I created user journey maps and user flows for the product's features:</h2>
        <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">With the information obtained from the user research, I was able to craft user journey maps and user flows that satisfied our users and improved the product.</p>

        <div className="mt-8">
            <img src={Four} alt="Style Guide" className="w-full h-auto" />
        </div>

        <h2 className="lg:text-[20px] text-[18px] font-medium text-white/90 mb-4 mt-8">Step 4: I designed the User Interface using insights gained from the first 2 steps:</h2>
        <p className="text-[17px] text-white/80 leading-relaxed tracking-tight">The UI Design was done on Figma. I collaborated with a 3D artist and brand designer to create the visual deliverables for the landing page and the web app.</p>
        
        <h2 className="text-[20px] font-medium text-white/90 mb-4 mt-12 tracking-tight">Design decisions made</h2>
        <ol className="list-decimal list-outside pl-6 space-y-4 text-[17px] text-white/80 leading-relaxed tracking-tight">
          <li className="pl-2"><strong>Highlighting financial incentives at every given chance:</strong> In order to ensure users maintain their interest in the product at all times, I had to strategically place potential incentives that were were not related to what they were currently engaged in. For example</li>
        </ol>

        <div className="mt-8">
            <img src={Five} alt="Style Guide" className="w-full h-auto" />
        </div>

        <ol className="list-decimal list-outside pl-6 space-y-4 text-[17px] text-white/80 leading-relaxed tracking-tight mt-12" start={2}>
          <li className="pl-2"><strong>Making the product inclusive for non-crypto natives:</strong> Users who are not familiar with crypto tech were considered in the design. The product could be accessed with an email, which was not popular at the time.</li>
        </ol>

        <div className="mt-8">
            <img src={Six} alt="Style Guide" className="w-full h-auto" />
        </div>

        <ol className="list-decimal list-outside pl-6 space-y-4 text-[17px] text-white/80 leading-relaxed tracking-tight mt-12" start={3}>
          <li className="pl-2"><strong>Implementing a leaderboard system:</strong> I proposed that a leaderboard system be implemented to improve user engagement. This kept users returning back to the app to view leaderboard updates and make interactions that boosted business metrics to climb the leaderboard.</li>
        </ol>

        <div className="mt-8">
            <img src={Seven} alt="Style Guide" className="w-full h-auto" />
        </div>

        <ol className="list-decimal list-outside pl-6 space-y-4 text-[17px] text-white/80 leading-relaxed tracking-tight mt-12" start={4}>
          <li className="pl-2"><strong>Introducing a crypto ramp solution:</strong> Users with no tokens to make use of the product finally had a solution. We introduced a crypto ramp solution to help users buy tokens with FIAT (cash) with their debit cards. This feature was not available to users in certain parts of the world due to regulatory compliance.</li>
        </ol>

        <div className="mt-8">
            <img src={Eight} alt="Style Guide" className="w-full h-auto" />
        </div>

        <div className="mt-12">
            <img src={Nine} alt="Style Guide" className="w-full h-auto" />
        </div>
    </div>
  )
}

export default Scorefam;