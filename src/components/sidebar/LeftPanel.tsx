import { Link, useLocation } from "react-router-dom";
import phoneMockup from "@/assets/phone-mockup.png";

const navItems = [
  { label: "home", path: "/" },
  { label: "about", path: "/about" },
  { label: "work", path: "/work" },
  { label: "contact", path: "/contact" },
];

const LeftPanel = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-0 h-screen w-[50vw] flex flex-col justify-between p-10 lg:p-14 overflow-hidden">
      {/* Top: Nav */}
      <nav className="flex gap-6 text-body">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`lowercase tracking-wide transition-colors duration-200 ${
              location.pathname === item.path
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Middle: Headline + CTA */}
      <div className="max-w-md space-y-8">
        <h1 className="text-main-header lowercase leading-tight tracking-tight text-foreground">
          i build products, brands &amp; experiences that attract customers, build trust, and drive growth.
        </h1>
        <p className="text-body text-muted-foreground">
          product designer & developer focused on crafting digital experiences that matter.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-body font-medium text-primary-foreground transition-all duration-300 hover:opacity-90"
        >
          let's talk
        </Link>
      </div>

      {/* Bottom: Phone mockup */}
      <div className="absolute bottom-0 right-0 w-[55%] max-w-[320px] pointer-events-none select-none">
        <img
          src={phoneMockup}
          alt="Fintech app mockup showcasing product design capability"
          className="w-full h-auto object-contain drop-shadow-2xl"
          loading="lazy"
        />
      </div>

      {/* Subtle gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </aside>
  );
};

export default LeftPanel;
