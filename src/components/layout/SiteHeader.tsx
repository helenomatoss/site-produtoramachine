import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import produtoraMachineLogo from "@/assets/produtora-machine-logo.png";
import { siteMetadata } from "@/config/site-metadata";

const NAVIGATION_TARGETS = [
  { id: "services", label: "Servicos" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "Sobre" },
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

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border/20 bg-background/95 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            aria-label="Ir para o topo"
            className="flex items-center"
            onClick={closeMenu}
            to="/#top"
          >
            <img
              alt="Logo da Machine Produtora"
              className="mr-2 h-9 w-9"
              src={produtoraMachineLogo}
            />
            <span className="text-2xl font-bold text-glow">{siteMetadata.brandName}</span>
          </Link>

          <nav aria-label="Menu principal" className="hidden items-center space-x-8 md:flex">
            {NAVIGATION_TARGETS.map((item) => (
              <Link
                className="text-foreground transition-colors hover:text-primary"
                key={item.id}
                onClick={closeMenu}
                to={`/#${item.id}`}
              >
                {item.label}
              </Link>
            ))}
            <Link className="btn-secondary" onClick={closeMenu} to="/#contact">
              Contato
            </Link>
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
                <Link
                  className="text-left text-foreground transition-colors hover:text-primary"
                  key={`mobile-${item.id}`}
                  onClick={closeMenu}
                  to={`/#${item.id}`}
                >
                  {item.label}
                </Link>
              ))}
              <Link className="btn-secondary w-fit" onClick={closeMenu} to="/#contact">
                Contato
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;


