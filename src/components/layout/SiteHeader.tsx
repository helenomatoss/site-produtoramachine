import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import produtoraMachineLogo from "@/assets/produtora-machine-logo.png";
import { Button } from "@/components/ui/button";
import { siteMetadata } from "@/config/site-metadata";

const NAVIGATION_TARGETS = [
  { id: "services", label: "Servicos" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "Sobre" },
  { id: "testimonials", label: "Depoimentos" },
] as const;

const SiteHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border/20 bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <img
              alt="Logo da Machine Produtora"
              className="mr-2 h-9 w-9"
              src={produtoraMachineLogo}
            />
            <span className="text-2xl font-bold text-glow">{siteMetadata.brandName}</span>
          </div>

          <nav aria-label="Menu principal" className="hidden items-center space-x-8 md:flex">
            {NAVIGATION_TARGETS.map((item) => (
              <button
                className="text-foreground transition-colors hover:text-primary"
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                type="button"
              >
                {item.label}
              </button>
            ))}
            <Button className="btn-secondary" onClick={() => handleNavigate("contact")} type="button">
              Contato
            </Button>
          </nav>

          <button
            aria-expanded={isMenuOpen}
            aria-label="Abrir menu de navegacao"
            className="text-foreground md:hidden"
            onClick={() => setIsMenuOpen((previous) => !previous)}
            type="button"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="border-t border-border/20 py-4 md:hidden">
            <nav aria-label="Menu principal mobile" className="flex flex-col space-y-4">
              {NAVIGATION_TARGETS.map((item) => (
                <button
                  className="text-left text-foreground transition-colors hover:text-primary"
                  key={`mobile-${item.id}`}
                  onClick={() => handleNavigate(item.id)}
                  type="button"
                >
                  {item.label}
                </button>
              ))}
              <Button className="btn-secondary w-fit" onClick={() => handleNavigate("contact")} type="button">
                Contato
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
