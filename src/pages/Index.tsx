import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InspirationSection } from "@/components/InspirationSection";
import { ExamDetailsSection } from "@/components/ExamDetailsSection";
import { SampleNotesSection } from "@/components/SampleNotesSection";
import { CoursesSection } from "@/components/CoursesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { AppDownloadSection } from "@/components/AppDownloadSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <InspirationSection />
      <ExamDetailsSection />
      <SampleNotesSection />
      <CoursesSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <AppDownloadSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
