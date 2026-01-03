import { Quote } from "lucide-react";
import inspirationImage from "@/assets/inspiration-portrait.jpg";

export const InspirationSection = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12 animate-fade-in">
            Words of <span className="text-primary">Inspiration</span>
          </h2>

          {/* Image */}
          <div className="relative mx-auto w-48 h-48 md:w-56 md:h-56 mb-8 animate-scale-in">
            <div className="absolute inset-0 rounded-full gradient-hero opacity-20 blur-xl animate-pulse-soft" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-elevated">
              <img
                src={inspirationImage}
                alt="Dr. Tomo Riba - Inspiring Educator"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: "20s" }} />
          </div>

          {/* Name & Title */}
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Dr. Tomo Riba
          </h3>
          <p className="text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
            Pioneer of Education in Arunachal Pradesh
          </p>

          {/* Quote */}
          <div className="relative animate-fade-in" style={{ animationDelay: "200ms" }}>
            <Quote className="w-12 h-12 text-primary/20 mx-auto mb-4" />
            <blockquote className="font-heading text-xl md:text-2xl italic text-foreground leading-relaxed">
              "Education is the most powerful weapon which you can use to transform 
              not just your life, but the entire community. Every teacher carries the 
              responsibility of shaping the future of our beloved Arunachal Pradesh."
            </blockquote>
          </div>

          {/* Decorative line */}
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-8 rounded-full" />
        </div>
      </div>
    </section>
  );
};
