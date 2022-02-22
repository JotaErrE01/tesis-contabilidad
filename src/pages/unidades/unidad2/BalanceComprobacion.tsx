export const BalanceComprobacion = () => {
  return (
    <div
      className="flex flex-col gap-10 text-black text-lg w-[95%] lg:w-4/5 mx-auto"
    >
      <h1
        className="text-3xl md:text-4xl font-bold text-center"
      >Balance de Comprobación 💹</h1>

      <div
        className="leading-nomal mx-auto"
      >
        <h2
          className="text-xl md:text-2xl font-bold mb-5"
        >¿Qué es Balance de Comprobación?</h2>
        <p>El balance de comprobación o balance de sumas y saldos es un informe que recoge las posiciones deudoras y acreedoras de una empresa para verificarlas.</p>

        <p>Este balance se utiliza para comprobar que todos los saldos que utilicemos durante el ejercicio económico sean fiables. Esto es, en otras palabras, revisar que mediante balance de comprobación el balance general es correcto. Las dos formas de hacer este informe son la siguientes:</p>

        <ol className="list-decimal block my-5 ml-5">
          <li className="my-2">Suma de saldos mayores. Se recogen todos los saldos del libro mayor en el tiempo determinado elegido y se confirma que el saldo total deudor y acreedor sean el mismo.</li>

          <li>Suma de partidas diarias. En este caso se recogerán los movimientos del libro diario de todas las cuentas. Estos saldos serán los propios libros mayores y podrán ser acreedores o deudores. De igual manera, se deberá dar también el principio de doble partida.</li>
        </ol>

        <h2
          className="text-xl md:text-2xl font-bold mb-5"
        >Ejemplos de balance de comprobación</h2>

        <p>Para tener una visión del concepto más visual, vamos a poner ejemplos de balances de comprobación tanto con sumas de libros mayores como de libros diarios. En primer lugar, un balance de comprobación de suma de saldos mayores sería así:</p>

        <img className="mx-auto my-2" src="/img/comprobacion.png" alt="Balance" />

        <p>Como podemos observar ambos saldos coinciden, luego se cumple el mencionado principio de doble partida.</p>

        <p>En segundo lugar, si recopilamos también los asientos contables en el libro diario, nos quedaría un balance comprobación tal que así:</p>

        <img className="mx-auto my-2" src="/img/comprobacion2.png" alt="Balance" />
      </div>
    </div>
  );
};
