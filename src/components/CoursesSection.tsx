import { Clock, Users, PlayCircle, Award, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "TGT Complete Course",
    subtitle: "Foundation to Advanced",
    duration: "6 Months",
    lectures: "150+",
    students: "1200+",
    price: 4999,
    originalPrice: 9999,
    features: [
      "Complete subject coverage",
      "Live doubt sessions",
      "Mock tests included",
      "Notes & study materials",
      "Previous year papers",
    ],
    color: "primary" as const,
  },
  {
    title: "PGT Master Course",
    subtitle: "Advanced Preparation",
    duration: "8 Months",
    lectures: "200+",
    students: "800+",
    price: 6999,
    originalPrice: 14999,
    features: [
      "In-depth subject mastery",
      "Expert faculty guidance",
      "Weekly assessments",
      "Interview preparation",
      "Guaranteed support",
    ],
    featured: true,
    color: "secondary" as const,
  },
  {
    title: "Crash Course",
    subtitle: "Quick Revision",
    duration: "2 Months",
    lectures: "60+",
    students: "2000+",
    price: 1999,
    originalPrice: 3999,
    features: [
      "Focused revision",
      "Important topics only",
      "Quick tips & tricks",
      "Last-minute prep",
      "Practice questions",
    ],
    color: "primary" as const,
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Online Courses
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Expert-Led <span className="text-secondary">Courses</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Learn from the best educators with our structured online courses 
            designed specifically for TGT/PGT aspirants.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={course.title}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in ${
                course.featured ? 'ring-2 ring-secondary lg:scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Featured Badge */}
              {course.featured && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-3 py-1 rounded-full gradient-secondary text-secondary-foreground text-xs font-semibold shadow-secondary">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Course Header */}
              <div className={`p-6 pb-8 ${course.color === 'primary' ? 'gradient-primary' : 'gradient-secondary'}`}>
                <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-1">
                  {course.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm mb-6">
                  {course.subtitle}
                </p>

                {/* Stats */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 text-primary-foreground/80 text-sm">
                    <Clock className="w-4 h-4" />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-foreground/80 text-sm">
                    <PlayCircle className="w-4 h-4" />
                    {course.lectures} Lectures
                  </div>
                  <div className="flex items-center gap-1.5 text-primary-foreground/80 text-sm">
                    <Users className="w-4 h-4" />
                    {course.students}
                  </div>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6">
                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        course.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                      }`}>
                        <Check className={`w-3 h-3 ${
                          course.color === 'primary' ? 'text-primary' : 'text-secondary'
                        }`} />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-3xl font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground line-through">₹{course.originalPrice.toLocaleString()}</span>
                </div>

                {/* CTA */}
                <Button 
                  variant={course.color === 'primary' ? 'default' : 'secondary'} 
                  className="w-full group"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
