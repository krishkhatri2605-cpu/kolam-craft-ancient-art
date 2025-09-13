import { Card } from "@/components/ui/card";
import { BookOpen, Brain, Cpu, Layers } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Cultural Heritage",
      description: "KOLAM is a traditional South Indian art form passed down through generations, representing prosperity and welcoming spirits."
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: "Pattern Recognition",
      description: "Using computer vision and machine learning to identify and analyze the geometric principles underlying KOLAM designs."
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: "Algorithmic Recreation",
      description: "Developing Python programs that can automatically generate authentic KOLAM patterns based on traditional design rules."
    },
    {
      icon: <Layers className="w-8 h-8 text-primary" />,
      title: "Sacred Geometry",
      description: "Exploring the mathematical foundations of these intricate patterns, revealing the hidden symmetries and proportions."
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            The Art of <span className="text-primary">Sacred Patterns</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-sacred mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            KOLAM represents the perfect harmony between art and mathematics, where every curve and dot 
            follows ancient geometric principles that have fascinated scholars for centuries.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 border-primary/10 hover:border-primary/20 bg-card/80 backdrop-blur-sm group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Project Vision */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-8 bg-gradient-sacred/5 border-primary/20 shadow-soft">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Our Vision
            </h3>
            <p className="text-lg text-foreground/80 leading-relaxed">
              By bridging ancient wisdom with modern technology, we aim to preserve and celebrate 
              the rich cultural heritage of South Indian art while making it accessible to a global audience. 
              Our algorithms don't just recreate patterns—they understand the cultural and spiritual 
              significance embedded within each design.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;