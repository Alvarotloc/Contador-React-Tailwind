const Boton = ({
  texto,
  funcion,
}: {
  texto: string;
  funcion: () => void;
}): JSX.Element => {
  return (
    <button
      className="md:p-5 text-white mx-2 border-2 rounded-xl bg-slate-600 transition-colors hover:bg-slate-700"
      onClick={funcion}
    >
      {texto}
    </button>
  );
};

export default Boton;
