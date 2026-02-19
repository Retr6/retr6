import shotsWebm from "@/assets/shots.webm";
import { ArrowUpRight } from "lucide-react";
import logo from "@/assets/logo.png";

const Home = () => {
  return (
    <section className="relative w-full h-full min-h-screen overflow-hidden p-4 lg:p-0">

      {/* Top: Profile + Headline */}
      <div className="lg:hidden block">
        <div className="max-w-xl space-y-7">

          {/* Headline + tags */}
        <div className="space-y-2">
          <p className="text-[26px] leading-tight text-foreground font-medium font-neue">
            Multidisciplinary Designer
          </p>
          <p className="text-sm text-white/70 mt-4">
            Product <span className="mx-1">•</span> Web <span className="mx-1">•</span> Brand
          </p>
        </div>

        {/* Body copy */}
        <p className="text-body text-white/70 max-w-[360px]">
          I&apos;m Femi, an ambitious designer. I help businesses build products, brands, and websites that
          attract customers, build trust, and drive growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="https://calendly.com/femikolade6/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="font-neue inline-flex items-center gap-2 rounded-lg bg-[#26282C] px-3 py-2.5 text-sm font-medium text-white shadow-[0_-1px_0_0_#393C42] transition-all duration-300 hover:opacity-90"
          >
            Let&apos;s Talk
            <ArrowUpRight strokeWidth={1.5} size={20} />
          </a>
          <a
            href="https://contra.com/olufemi_kolade?referralExperimentNid=DEFAULT_REFERRAL_PROGRAM&referrerUsername=olufemi_kolade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-2 py-2.5 text-sm font-medium text-foreground/90 hover:text-white border border-[#FFFFFF1A] rounded-lg font-neue"
          >
            Hire on Contra
          </a>
        </div>
        </div>
        <video
          src={shotsWebm}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-[300px] object-cover mt-10 rounded-xl"
        />
      </div>


      <div className="lg:block hidden">
        <video
          src={shotsWebm}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  );
};

export default Home;
