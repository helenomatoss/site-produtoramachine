import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background text-foreground">
      <div className="text-center">
        <h1 className="text-6xl font-bold">404</h1>
        <p className="mt-4 text-xl text-muted-foreground">Página não encontrada.</p>
        <Link className="mt-6 inline-block text-primary underline-offset-4 hover:underline" to="/">
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;

