import { Star, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Tage Yania",
    exam: "TGT English",
    year: "2023",
    location: "Itanagar",
    quote: "The study materials were exceptionally well-organized. The focus on Arunachal Pradesh-specific content helped me score high in the GK section. Highly recommend!",
    rating: 5,
  },
  {
    name: "Nabam Rinchin",
    exam: "PGT Mathematics",
    year: "2023",
    location: "Ziro",
    quote: "The crash course was a game-changer. I was struggling with time management, but the structured approach and mock tests gave me the confidence I needed.",
    rating: 5,
  },
  {
    name: "Millo Yanna",
    exam: "TGT Science",
    year: "2022",
    location: "Pasighat",
    quote: "I cleared my exam in the first attempt thanks to the comprehensive notes and personal mentorship. The faculty really understands what APPSC expects.",
    rating: 5,
  },
  {
    name: "Toko Nai",
    exam: "PGT History",
    year: "2023",
    location: "Bomdila",
    quote: "Being from a remote area, online learning was my only option. The video lectures were clear, and the doubt resolution was prompt. Very satisfied!",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-secondary">Students</span> Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from real students who achieved their dreams of becoming 
            government teachers in Arunachal Pradesh.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="group bg-card rounded-2xl p-6 md:p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Quote Icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Quote */}
              <p className="text-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-14 h-14 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.exam} • {testimonial.year}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}, Arunachal Pradesh
                  </p>
                </div>

                {/* Success Badge */}
                <div className="ml-auto hidden sm:block">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    Cleared
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots Indicator (decorative) */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-primary/30 hover:bg-primary/50'
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
