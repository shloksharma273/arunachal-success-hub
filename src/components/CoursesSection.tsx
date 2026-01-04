import { Clock, Users, PlayCircle, Award, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const courses = [
  {
    title: "Mains Velocity",
    subtitle: "High-Intensity Mains Revision & MCQ Programme",
    duration: "10 Nov – 5 Dec 2025",
    lectures: "25 Sessions",
    students: "320+ Reviews",
    price: 3400,
    rating: "4.9",
    features: [
      "Daily Class PDFs & Practice Sheets",
      "Topic-wise & Subject-wise Revision Capsules",
      "2 Sectional + 3 Full-Length Tests",
      "Final Strategy: How to Score 100+ in Paper-1",
      "Speed & Accuracy Training",
    ],
    badge: "Best Seller",
    featured: true,
    color: "primary" as const,
  },
  {
    title: "CA Sprint 360",
    subtitle: "One Month. Full Year. Complete Mastery.",
    duration: "30 Days Sprint",
    lectures: "30 Sessions",
    students: "450+ Reviews",
    price: 2269,
    rating: "4.8",
    features: [
      "30 Live/Recorded Sessions",
      "30 One-Pager Visual PDFs",
      "4 Weekly Thematic Tests (50 MCQs each)",
      "1 Final Grand Test (100 MCQs)",
      "12 Months Validity",
    ],
    badge: "New",
    color: "secondary" as const,
  },
  {
    title: "MGP – History",
    subtitle: "Descriptive Answer Writing Programme",
    duration: "~15-16 Sessions",
    lectures: "16 Sessions",
    students: "165+ Reviews",
    price: 2886,
    rating: "4.8",
    features: [
      "75 HOTS Questions (~100 with sub-questions)",
      "Historical Interpretation Focus",
      "Model Answer Booklet (PDF)",
      "Full-Length Descriptive Mains Test",
      "Faculty Evaluation & Feedback",
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
              {/* Badge */}
              {course.badge && (
                <div className="absolute top-4 right-4 z-10">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold shadow-lg ${
                    course.badge === 'Best Seller' 
                      ? 'bg-yellow-500 text-yellow-950' 
                      : 'bg-accent text-accent-foreground'
                  }`}>
                    {course.badge}
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

                {/* Rating & Pricing */}
                <div className="mb-6">
                  {course.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-bold text-foreground">{course.rating}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Rating</span>
                    </div>
                  )}
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-foreground">₹{course.price.toLocaleString()}</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <Button 
                    variant={course.color === 'primary' ? 'default' : 'secondary'} 
                    className="flex-1 group"
                  >
                    Enroll Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1"
                    asChild
                  >
                    <Link to="/courses">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Courses Button */}
        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="default"
            className="group px-8"
            asChild
          >
            <Link to="/courses">
              Explore All Courses
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
