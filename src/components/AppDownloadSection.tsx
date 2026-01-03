import { Smartphone, Bell, BookOpen, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const appFeatures = [
  { icon: BookOpen, text: "Access all study materials on-the-go" },
  { icon: Bell, text: "Get exam notifications & updates" },
  { icon: Clock, text: "Track your learning progress" },
  { icon: CheckCircle, text: "Practice with mock tests anywhere" },
];

export const AppDownloadSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
              Mobile App Available
            </span>

            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Download Our <br className="hidden lg:block" />
              <span className="text-accent">Mobile App</span>
            </h2>

            <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto lg:mx-0">
              Take your TGT/PGT preparation wherever you go. Our mobile app brings 
              all the study materials, mock tests, and notifications right to your fingertips.
            </p>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {appFeatures.map((feature, index) => (
                <li 
                  key={feature.text}
                  className="flex items-center gap-3 text-primary-foreground/90 animate-fade-in-left"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                    <feature.icon className="w-4 h-4 text-accent" />
                  </div>
                  {feature.text}
                </li>
              ))}
            </ul>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="app-store" className="group">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <span className="text-xs opacity-70 block">Download on the</span>
                  <span className="font-semibold">App Store</span>
                </div>
              </Button>

              <Button variant="app-store" className="group">
                <svg viewBox="0 0 24 24" className="w-6 h-6 mr-2" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 0 1-.609-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <div className="text-left">
                  <span className="text-xs opacity-70 block">GET IT ON</span>
                  <span className="font-semibold">Google Play</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-8 bg-accent/20 rounded-full blur-3xl" />
              
              {/* Phone Frame */}
              <div className="relative w-64 md:w-72 h-[500px] md:h-[550px] bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden relative">
                  {/* Screen Content */}
                  <div className="gradient-primary h-1/3 p-6 flex flex-col justify-end">
                    <Smartphone className="w-10 h-10 text-primary-foreground/50 mb-2" />
                    <h3 className="font-heading text-xl font-bold text-primary-foreground">
                      AP TGT/PGT Prep
                    </h3>
                    <p className="text-sm text-primary-foreground/70">
                      Your exam companion
                    </p>
                  </div>
                  <div className="p-6 space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-muted animate-pulse-soft" />
                        <div className="flex-1 space-y-2">
                          <div className="h-3 bg-muted rounded w-3/4 animate-pulse-soft" />
                          <div className="h-2 bg-muted rounded w-1/2 animate-pulse-soft" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-foreground rounded-full" />
              </div>

              {/* Floating Elements */}
              <div className="absolute -left-8 top-1/4 w-16 h-16 rounded-xl gradient-secondary shadow-secondary flex items-center justify-center animate-float">
                <BookOpen className="w-8 h-8 text-secondary-foreground" />
              </div>
              <div className="absolute -right-4 bottom-1/3 w-12 h-12 rounded-lg bg-accent shadow-card flex items-center justify-center animate-float" style={{ animationDelay: "500ms" }}>
                <Bell className="w-6 h-6 text-accent-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
