import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Work", path: "/work" },
  { label: "About Me", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const LeftPanel = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-4 top-5 bottom-5 w-[32vw] p-[5px] overflow-hidden bg-[#18191B] rounded-2xl border border-[#FFFFFF1A] animate-fade-in-up">
      <div className="rounded-xl h-full flex flex-col justify-between p-4 bg-[#131416]">

      
      {/* Top: Profile + Headline */}
      <div className="max-w-xl space-y-7">
        {/* Profile row */}
        <div className="flex items-center gap-2">
          <div className="h-12 w-10 rounded-full bg-[#131416] flex items-center justify-center overflow-hidden">
            <img
              src={logo}
              alt="Olufemi Kolade logo"
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <p className="text-body font-medium text-foreground">Olufemi Kolade</p>
          </div>
        </div>

        {/* Headline + tags */}
        <div className="space-y-2">
          <h1 className="text-main-header leading-tight tracking-tight text-foreground">
            Multidisciplinary Designer
          </h1>
          
        </div>

        {/* Body copy */}
        <p className="text-body text-white/70 max-w-[360px]">
          I&apos;m Femi, an ambitious designer. I help businesses build products, brands, and websites that
          attract customers, build trust, and drive growth.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-[#26282C] px-3 py-3 text-sm font-medium text-white shadow-[0_-1px_0_0_#393C42] transition-all duration-300 hover:opacity-90"
          >
            Let&apos;s Talk
            <svg
              aria-hidden="true"
              viewBox="0 0 16 16"
              className="h-4 w-4"
            >
              <path
                d="M6 4h6v6M6 10l6-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 px-2 py-3 text-sm font-medium text-foreground/90 hover:underline hover:text-white"
          >
            See My Work
          </Link>
        </div>
      </div>

      {/* Bottom: Nav */}
      <nav className="flex gap-6 text-body">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`tracking-wide transition-colors duration-200 ${
              location.pathname === item.path
                ? "text-white/90"
                : "text-white/60 hover:text-white/90"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
      </div>
    </aside>
  );
};

export default LeftPanel;
