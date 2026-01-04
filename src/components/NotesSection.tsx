import { BookOpen, Check, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const notes = [
  {
    subject: "English",
    topics: ["Literature", "Grammar", "Comprehension", "Teaching Pedagogy"],
    price: 299,
    originalPrice: 499,
    popular: false,
  },
  {
    subject: "Mathematics",
    topics: ["Algebra", "Geometry", "Trigonometry", "Teaching Methods"],
    price: 349,
    originalPrice: 599,
    popular: true,
  },
  {
    subject: "Science",
    topics: ["Physics", "Chemistry", "Biology", "Practical Teaching"],
    price: 399,
    originalPrice: 699,
    popular: false,
  },
  {
    subject: "Social Studies",
    topics: ["History", "Geography", "Civics", "Economics"],
    price: 299,
    originalPrice: 499,
    popular: false,
  },
  {
    subject: "Hindi",
    topics: ["व्याकरण", "साहित्य", "पठन कौशल", "शिक्षण विधियाँ"],
    price: 249,
    originalPrice: 449,
    popular: false,
  },
  {
    subject: "General Knowledge",
    topics: ["Current Affairs", "Arunachal Pradesh GK", "India GK", "World GK"],
    price: 199,
    originalPrice: 349,
    popular: true,
  },
];

export const NotesSection = () => {
  return (
    <section id="notes" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Study Materials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Subject-wise <span className="text-primary">Notes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Comprehensive, exam-focused study materials prepared by experienced 
            educators who understand the APPSC exam pattern.
          </p>
        </div>

        {/* Notes Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {notes.map((note, index) => (
            <div
              key={note.subject}
              className={`relative bg-card rounded-xl p-6 shadow-card hover:shadow-elevated transition-all duration-300 border-2 animate-fade-in ${
                note.popular ? 'border-primary' : 'border-border hover:border-primary/30'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Popular Badge */}
              {note.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-xs font-semibold shadow-primary">
                  Most Popular
                </div>
              )}

              {/* Subject Icon & Name */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground">
                  {note.subject}
                </h3>
              </div>

              {/* Topics List */}
              <ul className="space-y-2 mb-6">
                {note.topics.map((topic) => (
                  <li key={topic} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-secondary flex-shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-foreground">₹{note.price}</span>
                <span className="text-lg text-muted-foreground line-through">₹{note.originalPrice}</span>
                <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                  {Math.round((1 - note.price / note.originalPrice) * 100)}% OFF
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button variant="outline" className="flex-1">
                  View Details
                </Button>
                <Button variant="default" className="flex-1">
                  <ShoppingCart className="w-4 h-4" />
                  Buy Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bundle Offer */}
        <div className="mt-12 bg-gradient-to-br from-secondary via-secondary to-secondary-dark rounded-2xl p-8 md:p-12 text-center shadow-elevated relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-60 h-60 bg-secondary-foreground rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="relative z-10">
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-4">
              Complete Subject Bundle
            </h3>
            <p className="text-secondary-foreground/80 max-w-xl mx-auto mb-6">
              Get all 6 subjects at a special discounted price. Perfect for comprehensive preparation.
            </p>
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-4xl font-bold text-secondary-foreground">₹999</span>
              <span className="text-xl text-secondary-foreground/60 line-through">₹2,994</span>
              <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-bold">
                Save 67%
              </span>
            </div>
            <Button variant="cta" className="bg-secondary-foreground text-secondary hover:bg-secondary-foreground/90">
              <ShoppingCart className="w-5 h-5" />
              Get Complete Bundle
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
