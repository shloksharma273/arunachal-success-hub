import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  Video, 
  Target, 
  Star, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp,
  Users,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Course type definition
interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Mains Prep" | "Current Affairs" | "Test Series" | "MGP";
  duration: string;
  schedule?: string;
  sessions?: number;
  tests?: number;
  questions?: number;
  rating: number;
  reviews: number;
  instructors: string[];
  subjects: string[];
  features: string[];
  deliverables: string[];
  badge?: "Best Seller" | "New" | "Intensive" | "Comprehensive" | "Top Rated";
  price: number;
  enrollLink: string;
}

// All 7 courses data
const coursesData: Course[] = [
  {
    id: "mains-velocity",
    title: "Mains Velocity",
    subtitle: "High-Intensity Mains Revision & MCQ Programme",
    description: "Fast-track, exam-focused revision programme designed to maximise scores in Paper-1 of PGT Mains and Arunachal Pradesh Government Teacher Recruitment Exams.",
    category: "Mains Prep",
    duration: "10 Nov – 5 Dec 2025",
    schedule: "Mon–Sat | 4.5 hrs/day",
    sessions: 25,
    tests: 5,
    rating: 4.9,
    reviews: 320,
    instructors: ["Mohit Sharma", "Unnati Tomar", "Ambuj Gautam", "Vikas"],
    subjects: ["Pedagogy", "Teaching Aptitude", "General English", "General Awareness"],
    features: [
      "Daily Class PDFs & Practice Sheets",
      "Topic-wise & Subject-wise Revision Capsules",
      "2 Sectional + 3 Full-Length Tests",
      "Final Strategy: How to Score 100+ in Paper-1"
    ],
    deliverables: [
      "Complete Syllabus Coverage",
      "Speed & Accuracy Training",
      "Elimination Techniques",
      "Post-Test Answer Keys with Explanations"
    ],
    badge: "Best Seller",
    price: 3400,
    enrollLink: "https://whntgu.courses.store/754187?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "ca-sprint-360",
    title: "CA Sprint 360",
    subtitle: "One Month. Full Year. Complete Mastery.",
    description: "Intensive, concept-driven Current Affairs Mastery Programme covering one full year (Nov 2024 – Nov 2025) in just 30 days without rote memorisation.",
    category: "Current Affairs",
    duration: "30 Days Sprint",
    schedule: "1.5 hrs/day",
    sessions: 30,
    tests: 5,
    rating: 4.8,
    reviews: 450,
    instructors: ["Ambuj Gautam", "Mohit Sharma", "Shivam Sharma"],
    subjects: ["National Affairs", "International Affairs", "State-Specific Issues", "Arunachal Pradesh & NE Focus"],
    features: [
      "30 Live/Recorded Sessions",
      "30 One-Pager Visual PDFs",
      "4 Weekly Thematic Tests (50 MCQs each)",
      "1 Final Grand Test (100 MCQs)"
    ],
    deliverables: [
      "12 Months Validity",
      "Concept • Context • Exam Relevance",
      "4 Arunachal & NE Mini-Capsules",
      "Issue + Background + Exam Linkage"
    ],
    badge: "New",
    price: 2269,
    enrollLink: "https://whntgu.courses.store/753617?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "operation-27",
    title: "OPERATION 27",
    subtitle: "PGT Mains Test Series – Paper-1",
    description: "27-Day Intensive Test & Revision Programme with systematic evaluation, structured revision, and exam-level practice for the final phase before mains examination.",
    category: "Test Series",
    duration: "9 Nov – 5 Dec 2025",
    schedule: "27 Days | Guided Self-Study",
    tests: 8,
    rating: 4.7,
    reviews: 280,
    instructors: ["PrepForum Faculty"],
    subjects: ["Teaching Aptitude", "Pedagogy", "General Awareness", "General English"],
    features: [
      "6 Sectional Tests (Subject-wise)",
      "2 Full-Length Tests (Paper-1 Simulation)",
      "Answer Keys with Conceptual Explanations",
      "Elimination & Accuracy Techniques"
    ],
    deliverables: [
      "Topic-wise Schedule Provided",
      "Live/Recorded Discussion Sessions",
      "Complete Paper-1 Coverage",
      "Exam Temperament Building"
    ],
    badge: "Intensive",
    price: 2475,
    enrollLink: "https://whntgu.courses.store/754767?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "mgp-political-science",
    title: "MGP – Political Science",
    subtitle: "Descriptive Answer Writing Programme",
    description: "Specialised programme for Arunachal Pradesh PGT Mains focusing on analytical, theory-based, and contemporary issue-oriented answer writing.",
    category: "MGP",
    duration: "~15-16 Sessions",
    schedule: "Every 3rd Day | 1.5 hrs",
    questions: 75,
    sessions: 16,
    tests: 1,
    rating: 4.9,
    reviews: 180,
    instructors: ["Ambuj Gautam", "Pearl Batra"],
    subjects: ["Political Theory", "Indian Constitution", "Comparative Politics", "International Relations"],
    features: [
      "75 HOTS Questions (~100 with sub-questions)",
      "50 Questions Discussed in Class",
      "Model Answer Booklet (PDF)",
      "Full-Length Descriptive Mains Test"
    ],
    deliverables: [
      "Answer Structure & Argument Building",
      "Faculty Feedback & Guidance",
      "Concept Support Sessions",
      "Continuous Academic Support"
    ],
    price: 2886,
    enrollLink: "https://whntgu.courses.store/757080?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "mgp-history",
    title: "MGP – History",
    subtitle: "Descriptive Answer Writing Programme",
    description: "Specialised programme focusing on analytical, comparative, and historiography-oriented answer writing for AP PGT Mains across Ancient, Medieval, Modern Indian History and World History.",
    category: "MGP",
    duration: "~15-16 Sessions",
    schedule: "Every 3rd Day | 1.5 hrs",
    questions: 75,
    sessions: 16,
    tests: 1,
    rating: 4.8,
    reviews: 165,
    instructors: ["Vikas"],
    subjects: ["Ancient India", "Medieval India", "Modern India", "World History"],
    features: [
      "75 HOTS Questions (~100 with sub-questions)",
      "Historical Interpretation Focus",
      "Model Answer Booklet (PDF)",
      "Full-Length Descriptive Mains Test"
    ],
    deliverables: [
      "Comparative & Analytical Perspectives",
      "Historiographical Insights",
      "Faculty Evaluation & Feedback",
      "Timelines & Key Points"
    ],
    price: 2886,
    enrollLink: "https://whntgu.courses.store/757086?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "mgp-geography",
    title: "MGP – Geography",
    subtitle: "Descriptive Answer Writing Programme",
    description: "Specialised programme focusing on concept-based, application-oriented, and map/diagram-supported answer writing for AP PGT Mains.",
    category: "MGP",
    duration: "~15-16 Sessions",
    schedule: "Every 3rd Day | 1.5 hrs",
    questions: 75,
    sessions: 16,
    tests: 1,
    rating: 4.8,
    reviews: 142,
    instructors: ["Vikas"],
    subjects: ["Physical Geography", "Human Geography", "Indian Geography", "World Geography"],
    features: [
      "75 HOTS Questions (~100 with sub-questions)",
      "Diagram & Map-based Explanations",
      "Model Answer Booklet (PDF)",
      "Full-Length Descriptive Mains Test"
    ],
    deliverables: [
      "Spatial Understanding",
      "Application-based Answers",
      "Geographical Processes & Models",
      "Faculty Feedback on Presentation"
    ],
    price: 2886,
    enrollLink: "https://whntgu.courses.store/757098?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  },
  {
    id: "mgp-mathematics",
    title: "MGP – Mathematics",
    subtitle: "Descriptive Answer Writing Programme",
    description: "Specialised problem-solving programme focusing on conceptual depth, logical sequencing of solutions, and examiner-friendly presentation for AP PGT Mains.",
    category: "MGP",
    duration: "As per syllabus",
    schedule: "Every 3rd Day | 1.5 hrs",
    questions: 150,
    sessions: 20,
    tests: 1,
    rating: 4.9,
    reviews: 198,
    instructors: ["Gurleen"],
    subjects: ["Algebra", "Calculus", "Linear Algebra", "Applied Mathematics"],
    features: [
      "~150 High-Level Descriptive Questions",
      "All Questions Discussed in Class",
      "Stepwise Model Solutions (PDF)",
      "Full-Length Descriptive Practice"
    ],
    deliverables: [
      "Logical Flow & Notation Guidance",
      "Speed & Accuracy Improvement",
      "Examiner-Friendly Presentation",
      "Concept Reinforcement Sessions"
    ],
    badge: "Comprehensive",
    price: 2886,
    enrollLink: "https://whntgu.courses.store/763887?utm_source=other&utm_medium=tutor-course-referral&utm_campaign=course-overview-webapp"
  }
];

// Badge color mapping
const getBadgeVariant = (badge?: string) => {
  switch (badge) {
    case "Best Seller":
      return "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20";
    case "New":
      return "bg-accent/10 text-accent-foreground border-accent/20";
    case "Intensive":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
    case "Comprehensive":
      return "bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20";
    case "Top Rated":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    default:
      return "bg-primary/10 text-primary border-primary/20";
  }
};

// Course Card Component
const CourseCard = ({ course, index }: { course: Course; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="bg-card rounded-3xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-in flex flex-col"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header with Gradient */}
      <div className="relative p-6 pb-8 gradient-primary">
        <div className="flex items-start justify-between gap-2 mb-3">
          <Badge className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
            {course.category}
          </Badge>
          {course.badge && (
            <Badge className={getBadgeVariant(course.badge)}>
              {course.badge}
            </Badge>
          )}
        </div>
        
        <h3 className="font-heading text-2xl font-bold text-primary-foreground mb-1">
          {course.title}
        </h3>
        <p className="text-primary-foreground/80 text-sm font-medium mb-3">
          {course.subtitle}
        </p>
        <p className="text-primary-foreground/70 text-sm leading-relaxed">
          {course.description}
        </p>
      </div>

      {/* Body */}
      <div className="p-6 flex-1 flex flex-col">
        {/* Quick Info */}
        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 text-primary" />
            <span>{course.duration}</span>
          </div>
          {course.sessions && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Video className="w-4 h-4 text-primary" />
              <span>{course.sessions} Sessions</span>
            </div>
          )}
          {course.tests && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <Target className="w-4 h-4 text-primary" />
              <span>{course.tests} Tests</span>
            </div>
          )}
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(course.rating)
                    ? "fill-yellow-500 text-yellow-500"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-foreground">{course.rating}</span>
          <span className="text-sm text-muted-foreground">({course.reviews} reviews)</span>
        </div>

        {/* Instructors */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex -space-x-2">
              {course.instructors.slice(0, 3).map((instructor, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full gradient-secondary flex items-center justify-center text-xs font-semibold text-secondary-foreground border-2 border-card"
                  title={instructor}
                >
                  {instructor.split(" ").map(n => n[0]).join("")}
                </div>
              ))}
            </div>
            <Users className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-xs text-muted-foreground">
            {course.instructors.join(", ")}
          </p>
          <p className="text-xs text-primary font-medium">
            {course.instructors.length > 1 ? "Faculty Team" : "Course Instructor"}
          </p>
        </div>

        {/* Expandable Details */}
        <div className="mb-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="flex items-center justify-between w-full text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <span>{expanded ? "Hide Details" : "View Details"}</span>
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {expanded && (
            <div className="mt-4 space-y-4 animate-fade-in">
              {/* Subjects */}
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Subjects Covered</h4>
                <div className="flex flex-wrap gap-2">
                  {course.subjects.map((subject) => (
                    <Badge key={subject} variant="secondary" className="text-xs">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-3">
                {course.questions && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Questions</p>
                    <p className="text-lg font-bold text-foreground">{course.questions}</p>
                  </div>
                )}
                {course.sessions && (
                  <div className="bg-muted/50 rounded-lg p-3">
                    <p className="text-xs text-muted-foreground">Sessions</p>
                    <p className="text-lg font-bold text-foreground">{course.sessions}</p>
                  </div>
                )}
                {course.schedule && (
                  <div className="bg-muted/50 rounded-lg p-3 col-span-2">
                    <p className="text-xs text-muted-foreground">Schedule</p>
                    <p className="text-sm font-semibold text-foreground">{course.schedule}</p>
                  </div>
                )}
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">Key Features</h4>
                <ul className="space-y-2">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h4 className="text-xs font-semibold text-foreground mb-2">What You'll Get</h4>
                <ul className="space-y-2">
                  {course.deliverables.map((deliverable, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer - pushed to bottom */}
        <div className="mt-auto pt-4 border-t border-border">
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-foreground">₹{course.price.toLocaleString()}</span>
          </div>

          <div className="flex gap-3">
            <Button
              variant="default"
              className="flex-1 group"
              onClick={() => window.open(course.enrollLink, "_blank")}
            >
              Enroll Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setExpanded(!expanded)}
            >
              View Details
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Courses = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Courses");

  const categories = ["All Courses", "Mains Prep", "Current Affairs", "Test Series", "MGP"];

  const filteredCourses = selectedCategory === "All Courses"
    ? coursesData
    : coursesData.filter(course => course.category === selectedCategory);

  // Scroll to top when component mounts
  useEffect(() => {
    // Disable smooth scroll temporarily
    const htmlElement = document.documentElement;
    const originalScrollBehavior = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = 'auto';
    
    // Force scroll to top using multiple methods immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also scroll after DOM updates
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      
      // Restore scroll behavior
      setTimeout(() => {
        htmlElement.style.scrollBehavior = originalScrollBehavior;
      }, 100);
    });
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Page Header */}
      <section className="section-padding bg-gradient-to-b from-primary/5 to-background">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Comprehensive Courses
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
              Our <span className="text-gradient-primary">Courses</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Expertly designed programmes for TGT/PGT Mains preparation, covering all aspects from revision to answer writing mastery.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Courses */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Course Count */}
          <p className="text-center text-muted-foreground mb-8">
            Showing {filteredCourses.length} {filteredCourses.length === 1 ? "course" : "courses"}
          </p>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Courses;
