import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Menu, X, Github, ExternalLink, Search } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Patterns", href: "#patterns" },
    { name: "Technology", href: "#tech" },
    { name: "Team", href: "#team" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-morphism border-b border-primary/20 animate-fade-in">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-sacred rounded-xl flex items-center justify-center shadow-elegant hover-lift group-hover:animate-pulse-glow">
              <span className="text-white font-bold text-base">K</span>
            </div>
            <span className="text-xl font-serif font-bold text-foreground group-hover:text-primary transition-colors duration-300 text-shadow-glow">
              KOLAM
            </span>
          </div>

          {/* Enhanced Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="sacred-link text-foreground/80 hover:text-primary transition-all duration-300 font-medium px-3 py-2 rounded-lg hover:bg-primary/5 hover:scale-105"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Enhanced Search Bar */}
          <div className="hidden md:flex items-center relative group">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" />
              <Input
                type="search"
                placeholder="Search KOLAM patterns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 w-72 glass-morphism border-primary/30 focus:border-primary/60 focus:shadow-elegant focus:scale-105 transition-all duration-300 rounded-xl shimmer-effect"
              />
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button variant="sacred" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-primary/10 bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground/80 hover:text-primary hover:bg-accent/50 rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              
              {/* Mobile Search */}
              <div className="px-4 pb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search KOLAM patterns..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 bg-background/50 border-primary/20 focus:border-primary/40"
                  />
                </div>
              </div>

              <div className="px-4 pt-4 space-y-2 border-t border-primary/10">
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button variant="sacred" size="sm" className="w-full justify-start">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;