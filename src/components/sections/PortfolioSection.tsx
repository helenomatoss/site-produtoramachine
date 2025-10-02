import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PORTFOLIO_ITEMS } from "@/data/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-blue-900/10 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">
            Nosso <span className="text-magenta">portfolio</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-400">
            Conheca alguns projetos que produzimos com a assinatura Machine Produtora.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {PORTFOLIO_ITEMS.map((item) => (
            <Link
              className="group relative block overflow-hidden rounded-lg shadow-lg"
              key={item.id}
              to="/portfolio"
            >
              <img
                alt={item.alt}
                className="h-96 w-full transform object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                loading="lazy"
                src={item.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="text-sm font-semibold text-magenta">{item.category}</span>
                <h3 className="mt-1 text-2xl font-bold text-white">{item.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            className="inline-flex items-center gap-2 text-lg font-semibold text-magenta transition-colors duration-300 hover:text-white"
            to="/portfolio"
          >
            Ver portfolio completo
            <ArrowRight aria-hidden className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
