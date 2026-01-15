import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home", isAnchor: false },
    { href: "/#about", label: "About", isAnchor: true },
    { href: "/#skills", label: "Skills", isAnchor: true },
    { href: "/experience", label: "Experience", isAnchor: false },
    { href: "/projects", label: "Projects", isAnchor: false },
    { href: "/contact", label: "Contact", isAnchor: false },
  ];

  const isActive = (path: string, isAnchor: boolean) => {
    if (isAnchor) {
      return location.pathname === "/" && location.hash === path.replace("/", "");
    }
    return location.pathname === path;
  };

  const handleNavClick = (e: React.MouseEvent, href: string, isAnchor: boolean) => {
    if (isAnchor) {
      e.preventDefault();
      const sectionId = href.replace("/#", "");
      
      if (location.pathname === "/") {
        // Already on home page, just scroll
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home then scroll
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-2xl font-semibold text-gradient"
          >
            Paridhi Talwar
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                className={`transition-colors duration-300 text-sm font-medium ${
                  isActive(link.href, link.isAnchor)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300 shadow-soft"
          >
            Get In Touch
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pt-4 pb-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => {
                  handleNavClick(e, link.href, link.isAnchor);
                  setMobileOpen(false);
                }}
                className={`block py-3 transition-colors ${
                  isActive(link.href, link.isAnchor)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
