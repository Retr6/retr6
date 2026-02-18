import { Link, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";
import menuIcon from "@/assets/icons/menu.png";

const navItems = [
  { label: "Home", path: "/", external: false },
  { label: "Work", path: "/work", external: false },
  { label: "About Me", path: "/about", external: false },
  { label: "Contact", path: "/contact", external: false },
  { label: "Blog", path: "https://femisblog.framer.website/", external: true },
];

const MobileNavbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className={`lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
      open ? 'h-auto rounded-b-2xl bg-[#131416]' : 'h-[57px]'
    }`}>
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Name */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Olufemi Kolade logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-base font-medium text-white">Olufemi Kolade</span>
        </Link>

        {/* Menu/Close Button */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white rounded-lg transition-colors"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" /> : <img src={menuIcon} alt="Menu" className="h-7 w-7" />}
        </button>
      </div>

      {/* Navigation Links - Always in DOM, shown when expanded */}
      <nav className="flex flex-col px-4 pb-6 gap-6 mt-8">
        {navItems.map((item) => 
          item.external ? (
            <a
              key={item.path}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="text-base tracking-wide transition-colors duration-200 text-white/60"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={`text-base tracking-wide transition-colors duration-200 ${
                location.pathname === item.path
                  ? "text-white/90 font-medium"
                  : "text-white/60"
              }`}
            >
              {item.label}
            </Link>
          )
        )}
      </nav>
    </nav>
  );
};

export default MobileNavbar;
