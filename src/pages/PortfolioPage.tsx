import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-20">
        <section className="bg-gradient-to-b from-background/95 to-background py-20">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <Link
                className="mb-6 inline-flex items-center text-primary transition-colors hover:text-secondary"
                to="/"
              >
                <ArrowLeft aria-hidden className="mr-2 h-5 w-5" />
                Voltar para a home
              </Link>
              <div className="animate-fade-in-up text-center">
                <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                  Nosso <span className="text-glow">portfolio</span>
                </h1>
                <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
                  Explore producoes audiovisuais realizadas para marcas, artistas e eventos em todo o Brasil.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {PORTFOLIO_ITEMS.map((item, index) => (
                <div
                  className="portfolio-item group animate-fade-in-up"
                  key={item.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative h-64 overflow-hidden rounded-xl">
                    <img
                      alt={item.alt}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      src={item.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                      <span className="mb-2 block text-sm font-medium text-secondary">{item.category}</span>
                      <h2 className="mb-2 text-xl font-bold text-white">{item.title}</h2>
                      {item.description ? (
                        <p className="text-sm text-gray-300">{item.description}</p>
                      ) : null}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default PortfolioPage;
