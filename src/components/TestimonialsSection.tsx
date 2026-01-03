import { Star, Quote } from "lucide-react";

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

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="flex-shrink-0 w-[350px] md:w-[400px] bg-card rounded-2xl p-6 shadow-card border border-border mx-3">
    {/* Quote Icon */}
    <Quote className="w-8 h-8 text-primary/20 mb-3" />

    {/* Quote */}
    <p className="text-foreground leading-relaxed mb-4 text-sm md:text-base line-clamp-4">
      "{testimonial.quote}"
    </p>

    {/* Rating */}
    <div className="flex items-center gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
      ))}
    </div>

    {/* Author Info */}
    <div className="flex items-center gap-3">
      {/* Avatar Placeholder */}
      <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center text-primary-foreground font-bold text-sm">
        {testimonial.name.split(' ').map(n => n[0]).join('')}
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="font-heading font-semibold text-foreground text-sm truncate">
          {testimonial.name}
        </h4>
        <p className="text-xs text-muted-foreground">
          {testimonial.exam} • {testimonial.year}
        </p>
      </div>

      {/* Success Badge */}
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary/10 text-secondary text-xs font-medium">
        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
        Cleared
      </span>
    </div>
  </div>
);

export const TestimonialsSection = () => {
  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="section-padding bg-muted/30 overflow-hidden">
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
      </div>

      {/* Continuous Sliding Testimonials */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />

        {/* Sliding Track */}
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          {duplicatedTestimonials.map((testimonial, index) => (
            <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};
