import { GraduationCap, BookCheck, MapPin, Award, Users, Clock } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Experienced Faculty",
    description: "Learn from educators who have helped thousands of students clear TGT/PGT exams.",
    color: "primary" as const,
  },
  {
    icon: BookCheck,
    title: "Comprehensive Material",
    description: "Well-researched study materials aligned with APPSC exam patterns and syllabus.",
    color: "secondary" as const,
  },
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Special focus on Arunachal Pradesh GK, culture, and state-specific topics.",
    color: "primary" as const,
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "85% of our students have successfully cleared their exams in the first attempt.",
    color: "secondary" as const,
  },
  {
    icon: Users,
    title: "Personal Mentorship",
    description: "One-on-one guidance and doubt resolution to ensure you never feel stuck.",
    color: "primary" as const,
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    description: "Study at your own pace with lifetime access to recorded lectures and materials.",
    color: "secondary" as const,
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Our Advantages
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why <span className="text-primary">Choose</span> Us?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We're committed to your success with a unique approach tailored 
            for Arunachal Pradesh TGT/PGT aspirants.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-card rounded-xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-5 ${
                feature.color === 'primary' ? 'bg-primary' : 'bg-secondary'
              }`} />

              {/* Icon */}
              <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                feature.color === 'primary' 
                  ? 'gradient-primary shadow-primary' 
                  : 'gradient-secondary shadow-secondary'
              }`}>
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                feature.color === 'primary' ? 'gradient-primary' : 'gradient-secondary'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
