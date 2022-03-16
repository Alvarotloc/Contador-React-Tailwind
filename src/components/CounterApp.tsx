import { useState } from "react";
import Boton from "./Boton";

const CounterApp = (): JSX.Element => {
  const [puntos, setPuntos] = useState(0);

  const sumarPuntos = () => {
    return setPuntos(puntos + 1);
  };
  const resetear = () => {
    return setPuntos(0);
  };
  const restarPuntos = () => {
    if (puntos > 0) {
      return setPuntos(puntos - 1);
    }
  };
  return (
    <>
      <h1 className="md:text-5xl text-white font-bold text-center">Que papaia de counter</h1>
      <h2 className="md:text-3xl text-white font-black my-10">{puntos}</h2>
      <div className="flex">
        <Boton texto={"Restar puntos"} funcion={restarPuntos} />
        <Boton texto={"Reset"} funcion={resetear} />
        <Boton texto={"Sumar puntos"} funcion={sumarPuntos} />
      </div>
    </>
  );
};

export default CounterApp;
