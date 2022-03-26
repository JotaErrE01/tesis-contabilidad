import { useState } from 'react';

export const BalanceInicial = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="flex flex-col gap-10 text-black text-lg w-[95%] lg:w-4/5 mx-auto"
    >
      <h1
        className="text-3xl md:text-4xl font-bold text-center"
      >Balance Inicial ⚖️</h1>

      <div
        className="mb-10"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <p>El balance inicial es aquel balance que se hace al momento de iniciar una empresa o un negocio, en el cual se registran los activos, pasivos y patrimonio con que se constituye y se inician operaciones.</p>

        <div
          className={`${isMouseOver ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-out`}
        >
          <h2
            className="text-xl md:text-2xl font-bold my-5"
          >El balance general al inicio de operaciones.</h2>

          <img
            className="rounded-lg mx-auto my-5 w-3/4 aspect-video"
            src="https://uploadgerencie.com/imagenes/balance-inicial.png"
            alt="Balance Inicial"
          />

          <p className="my-5">Cuando se crea una nueva empresa se requiere que los socios aporten una serie de activos y posiblemente se deba incurrir en algunas obligaciones para poder operar o adquirir los activos, lo que en su conjunto conforman el balance inicial.</p>

          <p className="my-5">Sabemos que un activo es todo bien o derecho que tenga la empresa. Que el pasivo son las deudas y obligaciones que se tienen con terceros y que el patrimonio son los aportes que los socios hacen a la nueva empresa.</p>

          <p className="my-5">Una nueva empresa para poder iniciar operaciones requiere de activos, los cuales deben ser financiados. Esta financiación puede provenir de los socios que aportan los activos o de terceros que hacen créditos a la nueva empresa. De esta forma surgen los pasivos y el patrimonio, que se presentan en el balance inicial.</p>

          <h2
            className="text-xl md:text-2xl font-bold mt-10 mb-3"
          >Ejemplo de balance inicial:</h2>

          <p className="mb-5">Supongamos la constitución de una sociedad limitada conformada por cinco socios que aportarán lo siguiente:</p>

          <ul className="ml-5">
            <li>A. $30.000.000</li>
            <li>B. $20.000.000</li>
            <li>C. Un vehículo valorado en $30.000.000 de los cuales debe $5.000.000 (La empresa asume la deuda)</li>
            <li>D. Una oficina valorada en $15.000.000</li>
            <li>E. Una cartera por $10.000.000 y mercancías por $5.000.000</li>
          </ul>

          <h2
            className="text-xl md:text-2xl font-bold mt-10 mb-3"
          >Contabilización del balance general inicial.</h2>

          <table className="w-[95%] md:w-4/5 mx-auto mt-8 text-center text-sm md:text-lg">
            <tbody className="border-[1px] border-gray-500">
              <tr className="font-semibold">
                <td className="border-[1px] border-gray-500">Cuenta</td>
                <td className="border-[1px] border-gray-500">Debito</td>
                <td className="border-[1px] border-gray-500">Crédito</td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">110505</td>
                <td className="border-[1px] border-gray-500">50.000.000</td>
                <td className="border-[1px] border-gray-500"></td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">130505</td>
                <td className="border-[1px] border-gray-500">10.000.000</td>
                <td className="border-[1px] border-gray-500"></td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">143505</td>
                <td className="border-[1px] border-gray-500">5.000.000</td>
                <td className="border-[1px] border-gray-500"></td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">151610</td>
                <td className="border-[1px] border-gray-500">15.000.000</td>
                <td className="border-[1px] border-gray-500"></td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">1540505</td>
                <td className="border-[1px] border-gray-500">30.000.000</td>
                <td className="border-[1px] border-gray-500"></td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">238095</td>
                <td className="border-[1px] border-gray-500"></td>
                <td className="border-[1px] border-gray-500">5.000.000</td>
              </tr>
              <tr>
                <td className="border-[1px] border-gray-500">311505</td>
                <td className="border-[1px] border-gray-500"></td>
                <td className="border-[1px] border-gray-500">105.000.000</td>
              </tr>
            </tbody>
          </table>

          <p
            className="text-lg md:text-xl font-bold mt-10 mb-3"
          >El balance inicial quedaría así:</p>

          <div className="w-[95%] md:w-4/5 mx-auto mt-8 text-xs md:text-lg border-[1px] border-solid border-gray-500">
            <p className="font-semibold p-2">ABC Ltda.<br />Balance inicial 01 de junio de 2017</p>

            <div className="flex text-center justify-between border-t-[1px] border-solid border-gray-500">
              <div className="border-r-[1px] border-solid border-gray-500 flex-1">
                <p className="font-semibold my-2">ACTIVO</p>
                <p className="text-left font-semibold ml-5 my-2">Activo corriente</p>

                <p>Caja y bancos $50.000.000</p>

                <p>Clientes $10.000.000</p>

                <p>Inventarios $5.000.000</p>

                <p>Total activo corriente $65.000.000</p>

                <p className="text-left font-semibold ml-5 my-2">Activo no corriente</p>

                <p>Oficinas $15.000.000</p>

                <p>Vehículos $30.000.000</p>

                <p>Total activos no corrientes $45.000.000</p>

                <p>Otros activos -0-</p>

                <p className="text-left font-semibold ml-5 my-2">Total activos $110.000.000</p>
              </div>

              <div className="flex-1">
                <p className="font-semibold my-2">PASIVOS</p>
                <p className="text-left font-semibold ml-5 my-2">Pasivo corriente</p>

                <p>Otras cuentas por pagar $5.000.000</p>

                <p>Total pasivo corriente $5.000.000</p>

                <p>Pasivos no corrientes -0-</p>

                <p>Otros pasivos -0-</p>

                <p className="text-left font-semibold ml-5 my-2">Total pasivos $5.000.000</p>

                <p className="text-left font-semibold ml-5 my-2">PATRIMONIO</p>

                <p>Aportes sociales $105.000.000</p>

                <p className="text-left font-semibold ml-5 my-2">Total patrimonio $105.000.000</p>

                <p className="text-left font-semibold ml-5 my-2">Total pasivo y patrimonio $110.000.000</p>
              </div>
            </div>
          </div>

          <p className="mt-5">En términos generales, el anterior debe ser el balance inicial que se debe preparar y presentar al conformarse una sociedad.</p>
        </div>
      </div>
    </div>
  );
};
