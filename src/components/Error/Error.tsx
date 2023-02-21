interface IErrorProps {
  text: string;
}

export const Error = ({ text }: IErrorProps) => {
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center bg-gray-800">
      <h1 className="text-5xl font-extrabold text-white tracking-widest">
        Erro na requisição
      </h1>
      <div className="bg-[#FAE314] px-2 -mt-12 text-sm rounded rotate-12 absolute">
        {text}
      </div>
      <button className="mt-8" onClick={() => {}}>
        <p className="relative inline-block text-sm font-medium text-[#FAE314] group active:text-[#FAE314] focus:outline-none focus:ring">
          <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FAE314] group-hover:translate-y-0 group-hover:translate-x-0"></span>

          <span
            onClick={() => window.location.reload()}
            className="relative block px-8 py-3 bg-gray-800 border border-current"
          >
            Tentar novamente
          </span>
        </p>
      </button>
    </section>
  );
};
