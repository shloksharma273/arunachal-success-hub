import { useState } from "react";
import { Menu, X, BookOpen, Apple, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home", path: "/", isRoute: false },
  { name: "Exam Details", href: "#exam-details", path: "/#exam-details", isRoute: false },
  { name: "Notes", href: "#notes", path: "/#notes", isRoute: false },
  { name: "Courses", href: "#courses", path: "/#courses", isRoute: false },
  { name: "All Courses", href: "/courses", path: "/courses", isRoute: true },
  { name: "Testimonials", href: "#testimonials", path: "/#testimonials", isRoute: false },
  { name: "Contact", href: "#contact", path: "/#contact", isRoute: false },
];

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (href: string, path: string, isRoute: boolean) => {
    if (isRoute) {
      // Navigate to a different route
      navigate(path);
    } else if (location.pathname === "/") {
      // Already on home page, just scroll
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-6">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-2 group"
          >
            <img 
              src="/prepforum-logo.jpeg" 
              alt="PrepForum Logo" 
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-lg group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-heading font-bold text-lg md:text-xl text-foreground hidden sm:block">
              PrepForum
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.href, link.path, link.isRoute)}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200 rounded-lg hover:bg-muted"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* App Download Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Button 
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=co.lazarus.zrkxv" target="_blank" rel="noopener noreferrer">
                <Apple className="w-4 h-4" />
                iOS
              </a>
            </Button>
            <Button 
              variant="outline"
              size="sm"
              className="gap-2"
              asChild
            >
              <a href="https://play.google.com/store/apps/details?id=co.lazarus.zrkxv" target="_blank" rel="noopener noreferrer">
                <Play className="w-4 h-4" />
                Android
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-elevated animate-fade-in">
            <nav className="flex flex-col p-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href, link.path, link.isRoute)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors text-left"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.name}
                </button>
              ))}
              <div className="flex gap-2 mt-4">
                <Button 
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/details?id=co.lazarus.zrkxv" target="_blank" rel="noopener noreferrer">
                    <Apple className="w-4 h-4" />
                    iOS App
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 gap-2"
                  asChild
                >
                  <a href="https://play.google.com/store/apps/details?id=co.lazarus.zrkxv" target="_blank" rel="noopener noreferrer">
                    <Play className="w-4 h-4" />
                    Android App
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
