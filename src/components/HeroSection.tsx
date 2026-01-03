import { ArrowRight, Users, BookCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mountains.jpg";

const stats = [
  { icon: Users, value: "5000+", label: "Students Enrolled" },
  { icon: BookCheck, value: "150+", label: "Study Materials" },
  { icon: Award, value: "85%", label: "Success Rate" },
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Arunachal Pradesh Mountains" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-6 py-12 md:py-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-soft" />
            <span className="text-sm font-medium text-primary-foreground/90">
              Arunachal Pradesh's #1 Exam Prep Platform
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Your Gateway to{" "}
            <span className="relative">
              TGT/PGT
              <span className="absolute -bottom-2 left-0 right-0 h-1.5 bg-accent rounded-full" />
            </span>{" "}
            Success
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "200ms" }}>
            Comprehensive study materials, expert guidance, and proven strategies 
            to help you crack the Arunachal Pradesh Teacher Eligibility Exams with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Button 
              variant="hero"
              onClick={() => scrollToSection("#courses")}
              className="group"
            >
              Explore Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="hero-outline"
              onClick={() => scrollToSection("#sample-notes")}
            >
              Try Free Samples
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center md:text-left"
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <stat.icon className="w-5 h-5 text-accent hidden md:block" />
                  <span className="text-2xl md:text-3xl font-bold text-primary-foreground">
                    {stat.value}
                  </span>
                </div>
                <span className="text-xs md:text-sm text-primary-foreground/70">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};
