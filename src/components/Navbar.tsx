import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
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
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-display text-xl font-extrabold tracking-tight text-foreground hover:text-primary transition-colors"
          >
            PT<span className="text-primary">.</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.isAnchor)}
                className={`transition-all duration-300 text-sm tracking-wide ${
                  isActive(link.href, link.isAnchor)
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground font-medium"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
          
          <Link
            to="/contact"
            className="hidden md:inline-flex bg-foreground text-background px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300"
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
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-6 pb-4 space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={(e) => {
                      handleNavClick(e, link.href, link.isAnchor);
                      setMobileOpen(false);
                    }}
                    className={`block py-3 px-4 rounded-lg transition-all text-lg font-display ${
                      isActive(link.href, link.isAnchor)
                        ? "text-primary font-bold bg-primary/5"
                        : "text-muted-foreground hover:text-foreground font-medium"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
