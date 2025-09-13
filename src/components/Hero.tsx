import { Button } from "@/components/ui/button";
import kolamHero from "@/assets/kolam-hero.jpg";
import { ArrowDown, Sparkles, Code2, Palette } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src={kolamHero} 
          alt="Traditional KOLAM pattern" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-sacred rounded-full blur-xl animate-pulse" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
            <span className="text-primary">KOLAM</span>
            <br />
            <span className="text-3xl md:text-4xl font-sans font-light">Sacred Geometry</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-serif italic">
            "Where ancient wisdom meets modern algorithms"
          </p>
          
          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Discover the mathematical beauty hidden within traditional South Indian KOLAM patterns. 
            Our hackathon project explores the intersection of art, culture, and computer science.
          </p>
          
          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Code2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Pattern Recognition</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Algorithmic Art</span>
            </div>
            <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20">
              <Palette className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">Cultural Heritage</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="sacred" size="xl" className="group">
              Explore Patterns
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
            </Button>
            <Button variant="hero" size="xl">
              View Project
              <ArrowDown className="w-5 h-5" />
            </Button>
          </div>
        </div>
        
        {/* Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-muted-foreground">
            <span className="text-sm mb-2">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;