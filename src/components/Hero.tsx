import { Button } from "@/components/ui/button";
import kolamHero from "@/assets/kolam-hero.jpg";
import { ArrowDown, Sparkles, Code2, Palette, Star, Zap, Circle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <img 
          src={kolamHero} 
          alt="Traditional KOLAM pattern" 
          className="w-full h-full object-cover animate-pulse-glow"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      </div>
      
      {/* Dynamic Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/30 rounded-full animate-float blur-sm" />
      <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-sacred rounded-full animate-float-delayed blur-lg opacity-60" />
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-sacred rounded-full blur-xl animate-pulse-glow" />
      <div className="absolute bottom-32 left-16 w-20 h-20 border border-primary/40 rounded-lg rotate-45 animate-float opacity-30" />
      
      {/* Rotating Mandala Background */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 mandala-bg rounded-full" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 mandala-bg rounded-full" />
      
      {/* Floating Icons */}
      <div className="absolute top-1/3 left-20 floating-element">
        <Star className="w-6 h-6 text-primary/40 animate-pulse" />
      </div>
      <div className="absolute top-2/3 right-32 floating-element">
        <Zap className="w-8 h-8 text-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-1/3 left-32 floating-element">
        <Circle className="w-5 h-5 text-primary/50 animate-pulse" />
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading with Creative Effects */}
          <div className="animate-fade-in-scale">
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6 leading-tight">
              <span className="text-primary text-shadow-glow shimmer-effect inline-block hover:scale-105 transition-transform duration-300">
                KOLAM
              </span>
              <br />
              <span className="text-3xl md:text-4xl font-sans font-light bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent animate-slide-in-right">
                Sacred Geometry
              </span>
            </h1>
          </div>
          
          {/* Animated Subtitle */}
          <div className="animate-fade-in" style={{animationDelay: '0.3s', animationFillMode: 'both'}}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-serif italic relative">
              <span className="relative z-10">"Where ancient wisdom meets modern algorithms"</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent blur-xl" />
            </p>
          </div>
          
          {/* Enhanced Description */}
          <div className="animate-fade-in" style={{animationDelay: '0.6s', animationFillMode: 'both'}}>
            <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed glass-morphism p-6 rounded-xl border-animated">
              Discover the mathematical beauty hidden within traditional South Indian KOLAM patterns. 
              Our hackathon project explores the intersection of art, culture, and computer science.
            </p>
          </div>
          
          {/* Creative Animated Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in" style={{animationDelay: '0.9s', animationFillMode: 'both'}}>
            <div className="group flex items-center gap-2 glass-morphism px-6 py-3 rounded-full border border-primary/30 hover-lift shimmer-effect cursor-pointer">
              <Code2 className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Pattern Recognition
              </span>
            </div>
            <div className="group flex items-center gap-2 glass-morphism px-6 py-3 rounded-full border border-primary/30 hover-lift shimmer-effect cursor-pointer" style={{animationDelay: '0.1s'}}>
              <Sparkles className="w-5 h-5 text-primary group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              <span className="text-sm font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Algorithmic Art
              </span>
            </div>
            <div className="group flex items-center gap-2 glass-morphism px-6 py-3 rounded-full border border-primary/30 hover-lift shimmer-effect cursor-pointer" style={{animationDelay: '0.2s'}}>
              <Palette className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Cultural Heritage
              </span>
            </div>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{animationDelay: '1.2s', animationFillMode: 'both'}}>
            <Button variant="sacred" size="xl" className="group relative overflow-hidden shimmer-effect hover:shadow-sacred hover:scale-105 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">
                Explore Patterns
                <Sparkles className="w-5 h-5 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-glow/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="hero" size="xl" className="group hover:shadow-elegant hover:scale-105 transition-all duration-300 glass-morphism">
              <span className="flex items-center gap-2">
                View Project
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </div>
        
        {/* Enhanced Floating Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float group cursor-pointer">
          <div className="flex flex-col items-center text-muted-foreground glass-morphism px-4 py-3 rounded-xl hover:border-primary/30 transition-all duration-300">
            <span className="text-sm mb-2 group-hover:text-primary transition-colors">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 group-hover:text-primary transition-all duration-300" />
            <div className="absolute -inset-1 bg-gradient-sacred opacity-0 group-hover:opacity-20 blur rounded-xl transition-opacity duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;