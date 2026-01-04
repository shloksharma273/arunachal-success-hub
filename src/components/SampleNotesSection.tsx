import { Download, BookOpen, FileText, Beaker } from "lucide-react";
import { Button } from "@/components/ui/button";

const sampleNotes = [
  {
    icon: BookOpen,
    subject: "English Literature",
    description: "Comprehensive notes covering prose, poetry, grammar, and teaching methodologies for English subject.",
    topics: ["Grammar Essentials", "Poetry Analysis", "Prose Summary", "Teaching Methods"],
    pages: 25,
    color: "primary" as const,
  },
  {
    icon: FileText,
    subject: "History of India",
    description: "Well-structured notes on Ancient, Medieval, and Modern Indian History with focus on NCERT patterns.",
    topics: ["Ancient India", "Medieval Period", "Freedom Struggle", "Post-Independence"],
    pages: 30,
    color: "secondary" as const,
  },
  {
    icon: Beaker,
    subject: "General Science",
    description: "Science fundamentals covering Physics, Chemistry, and Biology concepts relevant for TGT exams.",
    topics: ["Physics Basics", "Chemistry Concepts", "Biology Fundamentals", "Practical Knowledge"],
    pages: 28,
    color: "primary" as const,
  },
];

export const SampleNotesSection = () => {
  return (
    <section id="sample-notes" className="section-padding bg-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Free Resources
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Try Our <span className="text-secondary">Free Sample</span> Notes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Experience the quality of our study materials before you commit. 
            Download free sample notes and see the difference.
          </p>
        </div>

        {/* Sample Notes Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleNotes.map((note, index) => (
            <div
              key={note.subject}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 border border-border hover:border-primary/30 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className={`p-6 ${note.color === 'primary' ? 'gradient-primary' : 'gradient-secondary'}`}>
                <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <note.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold text-primary-foreground mb-2">
                  {note.subject}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {note.pages} Pages • Free Sample
                </p>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {note.description}
                </p>

                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                    Topics Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {note.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs font-medium"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Download Button */}
                <Button 
                  variant={note.color === 'primary' ? 'default' : 'secondary'}
                  className="w-full group/btn"
                >
                  <Download className="w-4 h-4 group-hover/btn:animate-bounce" />
                  Download Free Sample
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
