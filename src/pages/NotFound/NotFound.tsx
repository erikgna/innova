import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center dark:bg-gray-800">
      <h1 className="text-9xl font-extrabold text-white tracking-widest">
        404
      </h1>
      <div className="bg-[#FAE314] px-2 text-sm rounded rotate-12 absolute">
        Página não encontrada
      </div>
      <button className="mt-8">
        <p className="relative inline-block text-sm font-medium text-[#FAE314] group active:text-[#FAE314] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FAE314] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link to="/">Voltar ao Inicio</Link>
          </span>
        </p>
      </button>
    </section>
  );
};
