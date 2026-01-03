import { FileText, Users, Calendar, Clock, GraduationCap, ListChecks } from "lucide-react";
import { Button } from "@/components/ui/button";

const examInfo = [
  {
    icon: GraduationCap,
    title: "TGT Eligibility",
    details: "Graduate degree with B.Ed. or equivalent teaching qualification",
  },
  {
    icon: GraduationCap,
    title: "PGT Eligibility",
    details: "Post Graduate degree with B.Ed. or equivalent teaching qualification",
  },
  {
    icon: ListChecks,
    title: "Subjects Available",
    details: "English, Hindi, Mathematics, Science, Social Studies, and more",
  },
  {
    icon: FileText,
    title: "Exam Pattern",
    details: "Objective type questions covering subject knowledge & pedagogy",
  },
  {
    icon: Clock,
    title: "Duration",
    details: "2-3 hours depending on the paper",
  },
  {
    icon: Calendar,
    title: "Exam Frequency",
    details: "Conducted annually by APPSC",
  },
];

export const ExamDetailsSection = () => {
  return (
    <section id="exam-details" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Know Your Exam
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            TGT/PGT Exam <span className="text-primary">Details</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to know about the Arunachal Pradesh Teacher Graduate 
            and Post Graduate Teacher eligibility examinations.
          </p>
        </div>

        {/* Info Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {examInfo.map((item, index) => (
            <div
              key={item.title}
              className="group bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-primary">
                <item.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.details}
              </p>
            </div>
          ))}
        </div>

        {/* Download Notification CTA */}
        <div className="bg-gradient-to-br from-primary via-primary to-primary-dark rounded-2xl p-8 md:p-12 text-center shadow-elevated relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary-foreground rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary-foreground rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
          </div>

          <div className="relative z-10">
            <FileText className="w-16 h-16 text-primary-foreground/80 mx-auto mb-6 animate-float" />
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Get the Latest Exam Notification
            </h3>
            <p className="text-primary-foreground/80 max-w-xl mx-auto mb-8">
              Download the official APPSC notification for TGT/PGT recruitment. 
              Stay updated with eligibility criteria, important dates, and application process.
            </p>
            <Button variant="cta" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-elevated">
              <FileText className="w-5 h-5" />
              Download Official Exam Notification
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
