import { Button } from "@/components/Button";
import { Hash, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // damit wird geprueft ob man auf der startseite ist
  //falls ja wird mit replace{} dafuer gesorgt das der browserverlauf keine unnoetigen eintraege bekommt
  //falls nicht (Impressum/Legal) wird ein neuer eintrag gepusht und die navigation ueber den browser ist moeglich
  const location = useLocation();
  const areWeHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // schliesst das mobile menu wenn es auf ist und gescrollt wird
  useEffect(() => {
    const mblNavImprove = () => {
      if (!isMobileMenuOpen) return;
      if (isMobileMenuOpen && isScrolled) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("scroll", mblNavImprove);

    return () => window.removeEventListener("scroll", mblNavImprove);
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="relative justify-between container mx-auto px-6 flex items-center ">
        <HashLink
          to={"/#home"}
          className="text-3xl font-bold italic tracking-tight hover:text-(--color-primary) transition-all"
        >
          stv<span className="text-(--color-primary)">.</span>
        </HashLink>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div
            className={`${
              isScrolled ? "bg-transparent py-5" : "glass-strong py-3"
            } rounded-full px-2 py-1 flex items-center gap-1`}
          >
            {navLinks.map((link, index) => (
              <HashLink
                to={`/${link.href}`}
                key={index}
                replace={areWeHome}
                className="transition-all px-4 py-2 text-sm text-(--color-muted-foreground) hover:text-(--color-foreground) rounded-full hover:bg-(--color-surface)"
              >
                {link.label}
              </HashLink>
            ))}
          </div>
        </div>

        {/* to center the nav in the desktop layout */}
        <div className="sm:hidden md:flex"></div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-(--color-foreground) right-10 cursor-pointer"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {/* Only appears if the menu is isMobileMenuOpen = true */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <HashLink
                to={`/${link.href}`}
                key={index}
                onClick={() => setIsMobileMenuOpen(false)}
                replace={areWeHome}
                className="text-lg text-(--color-muted-foreground) hover:text-(--color-foreground) py-2"
              >
                {link.label}
              </HashLink>
            ))}

            <Button onClick={() => setIsMobileMenuOpen(false)} size={"sm"}>
              <HashLink to={"/#contact"}>Contact Me</HashLink>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
