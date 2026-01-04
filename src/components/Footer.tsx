import { BookOpen, Instagram, Youtube, Send, MessageCircle, Mail, MapPin, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Exam Details", href: "#exam-details" },
  { name: "Notes", href: "#notes" },
  { name: "Courses", href: "#courses" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

const resources = [
  { name: "Free Samples", href: "#sample-notes", isRoute: false },
  { name: "Study Materials", href: "/courses", isRoute: true },
  { name: "Mock Tests", href: "/courses", isRoute: true },
  { name: "Previous Papers", href: "/courses", isRoute: true },
  { name: "Syllabus", href: "#exam-details", isRoute: false },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/ig_prepforum", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com/@PrepForum", label: "YouTube" },
  { icon: Send, href: "https://t.me/PrepForum_tg", label: "Telegram" },
  { icon: MessageCircle, href: "https://chat.whatsapp.com/Cy4FvmNTKrWJcQMyofVCuu?mode=ems_copy_t", label: "WhatsApp Community" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div className="gradient-primary pt-16 pb-8">
        <div className="container-custom px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection("#home"); }} className="flex items-center gap-2 mb-4">
                <img 
                  src="/prepforum-logo.jpeg" 
                  alt="PrepForum Logo" 
                  className="h-10 w-10 object-cover rounded-full"
                />
                <span className="font-heading font-bold text-lg text-primary-foreground">
                  PrepForum
                </span>
              </a>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
                Empowering aspirants to achieve their dreams through quality education and expert guidance.
              </p>
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/70 hover:bg-primary-foreground/20 hover:text-primary-foreground transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-4">
                Resources
              </h4>
              <ul className="space-y-2">
                {resources.map((link) => (
                  <li key={link.name}>
                    {link.isRoute ? (
                      <Link
                        to={link.href}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                        className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-semibold text-primary-foreground mb-4">
                Contact Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="mailto:prepforum.official@gmail.com" className="flex items-center gap-2 text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                    <Mail className="w-4 h-4" />
                    prepforum.official@gmail.com
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
                    <MapPin className="w-4 h-4" />
                    India
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-primary-foreground/60 text-sm text-center md:text-left">
              <p>© 2026 PrepForum. All rights reserved.</p>
              <p className="mt-1">Made with ❤️ for aspirants across India</p>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full gradient-secondary shadow-secondary flex items-center justify-center text-secondary-foreground hover:scale-110 transition-transform z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5" />
      </button>
    </footer>
  );
};
