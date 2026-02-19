import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Home", path: "/", external: false },
  { label: "Work", path: "/work", external: false },
  { label: "About Me", path: "/about", external: false },
  { label: "Contact", path: "/contact", external: false },
  { label: "Blog", path: "https://femisblog.framer.website/", external: true },
];

const LeftPanel = () => {
  const location = useLocation();

  return (
    <aside className="hidden lg:block fixed left-4 top-5 bottom-5 w-[32vw] p-[5px] overflow-hidden bg-[#18191B] rounded-2xl border border-[#FFFFFF1A] animate-fade-in-up">
      <div className="rounded-xl h-full flex flex-col justify-between p-4 bg-[#131416]">

      
      {/* Top: Profile + Headline */}
      <div className="max-w-xl space-y-7">
        {/* Profile row */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-10 rounded-full bg-[#131416] flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Olufemi Kolade logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <p className="text-[18px] font-neue font-medium text-foreground">Olufemi Kolade</p>
          </div>
        </div>

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

      {/* Bottom: Nav */}
      <nav className="flex gap-6 text-body">
        {navItems.map((item) => 
          item.external ? (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className="tracking-wide transition-colors duration-200 text-white/60 hover:text-white/90 font-neue"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              className={`tracking-wide transition-colors duration-200 font-neue ${
                location.pathname === item.path
                  ? "text-white/90"
                  : "text-white/60 hover:text-white/90"
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
      </div>
    </aside>
  );
};

export default LeftPanel;
