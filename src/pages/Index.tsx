import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      
      {/* Footer */}
      <footer className="bg-background border-t border-primary/10 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            Made with ❤️ for preserving South Indian cultural heritage through technology
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
