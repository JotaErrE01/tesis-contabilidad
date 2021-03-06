import { useState } from 'react';

export const BalanceComprobacion = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="flex flex-col gap-10 text-black text-lg w-[95%] lg:w-4/5 mx-auto"
    >
      <h1
        className="text-3xl md:text-4xl font-bold text-center"
      >Balance de Comprobaci贸n 馃捁</h1>

      <div
        className="leading-nomal mx-auto"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <h2
          className="text-xl md:text-2xl font-bold mb-5"
        >驴Qu茅 es Balance de Comprobaci贸n?</h2>
        <p>El balance de comprobaci贸n o balance de sumas y saldos es un informe que recoge las posiciones deudoras y acreedoras de una empresa para verificarlas.</p>

          <p>Este balance se utiliza para comprobar que todos los saldos que utilicemos durante el ejercicio econ贸mico sean fiables. Esto es, en otras palabras, revisar que mediante balance de comprobaci贸n el balance general es correcto. Las dos formas de hacer este informe son la siguientes:</p>

        <div className={`${isMouseOver ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-out`}>
          <ol className="list-decimal block my-5 ml-5">
            <li className="my-2">Suma de saldos mayores. Se recogen todos los saldos del libro mayor en el tiempo determinado elegido y se confirma que el saldo total deudor y acreedor sean el mismo.</li>

            <li>Suma de partidas diarias. En este caso se recoger谩n los movimientos del libro diario de todas las cuentas. Estos saldos ser谩n los propios libros mayores y podr谩n ser acreedores o deudores. De igual manera, se deber谩 dar tambi茅n el principio de doble partida.</li>
          </ol>

          <h2
            className="text-xl md:text-2xl font-bold mb-5"
          >Ejemplos de balance de comprobaci贸n</h2>

          <p>Para tener una visi贸n del concepto m谩s visual, vamos a poner ejemplos de balances de comprobaci贸n tanto con sumas de libros mayores como de libros diarios. En primer lugar, un balance de comprobaci贸n de suma de saldos mayores ser铆a as铆:</p>

          <img className="mx-auto my-2" src="/img/comprobacion.png" alt="Balance" />

          <p>Como podemos observar ambos saldos coinciden, luego se cumple el mencionado principio de doble partida.</p>

          <p>En segundo lugar, si recopilamos tambi茅n los asientos contables en el libro diario, nos quedar铆a un balance comprobaci贸n tal que as铆:</p>

          <img className="mx-auto my-2" src="/img/comprobacion2.png" alt="Balance" />
        </div>
      </div>
    </div>
  );
};
