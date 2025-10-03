import webgestLogo from "@/assets/webgest-logo.svg";
import { siteMetadata } from "@/config/site-metadata";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border/20 bg-gradient-to-t from-background/95 to-background py-12">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-bold text-glow">{siteMetadata.brandName}</h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Criamos experiências audiovisuais marcantes com planejamento, tecnologia e atenção aos detalhes.
            </p>
          </div>

          <div className="mb-6 inline-flex items-center justify-center">
            <a
              aria-label="Abrir o site da Webgest Solutions em nova guia"
              className="flex items-center space-x-2 rounded-lg bg-white/90 px-4 py-2 backdrop-blur-sm transition hover:bg-white/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400/70 focus:ring-offset-background"
              href="https://webgestsolutions.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img alt="Webgest Solutions" className="h-12 w-12" src={webgestLogo} />
              <span className="text-xs text-gray-500 transition-colors hover:text-gray-900">
                Desenvolvido com Webgest Solutions
              </span>
            </a>
          </div>

          <div className="mt-4 text-sm text-muted-foreground">
            {new Date().getFullYear()} {siteMetadata.brandName}. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

