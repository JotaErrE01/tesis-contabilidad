import { useState } from 'react';

export const Mayorizacion = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className="flex flex-col gap-10 text-black text-lg"
    >
      <h1
        className="text-3xl md:text-4xl font-bold text-center flex items-center justify-center"
      >Mayorización
        <img id="svg" className="w-12 h-8" src="/svgs/unidad1.svg" alt="stocks" />
      </h1>

      <div
        className="leading-nomal w-[95%] mx-auto"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <h2
          className="text-xl md:text-2xl font-bold mb-5"
        >¿Qué es la Mayorización?</h2>

        <p>La mayorización es el proceso o acción en la cual se trasladan de forma sistemática y de manera clasificada los valores que se encuentran en el libro diario.</p>
        <p>Este proceso se realiza a final del periodo o ciclo contable. Con el fin de conocer los saldos de todas las cuentas que se usaron durante el periodo.</p>

        <div className={`${isMouseOver ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-out`}>
          <img className="mx-auto md:w-1/2 lg:w-[30%] rounded-lg" src="/img/mayorizacion.png" alt="Mayorizacion" />

          <h2
            className="text-xl md:text-2xl font-bold my-5"
          >Objetivos de la Mayorización</h2>

          <p className="mb-2">Su objetivo es mostrar los movimientos y saldos de cada una de las cuentas que intervinieron en el registro de las operaciones financieras. Después de analizar e interpretar le proporcionara información a la administración.
          </p>

          <p className="mb-2">Básicamente para su realización hay que pasar las cifras del ya mencionado libro diario respetando la ubicación de las cifras. Dicho esto si el valor está en el debe la cifra pasará al debe y si está en el haber pasará al haber.</p>

          <p className="mb-2">Este proceso lo encuentras por otros autores como el mayor principal o mayor general. Conforme van apareciendo las cuentas en el libro diario general se utiliza una “T” para en ella registrar los valores debitados o acreditados previamente en este libro.</p>

          <h2
            className="text-xl md:text-2xl font-bold my-5"
          >Proceso para Mayorizar</h2>

          <ol className="list-decimal">
            <li className="ml-5">
              <p className="mb-2">
                Primeramente, se le asignará a cada cuenta que se use en el libro diario un código, según corresponda en el plan único de cuentas. En este esta asignada todos los códigos con sus respectivas cuentas.
              </p>
            </li>

            <li className="ml-5">
              <p className="mb-2">Luego, se irán pasando según las cuentas que se vayan registrado en el libro diario. Así mismo,  según la ubicación de los valores, del debe, al debe;  y del haber, al haber de las respectivas cuentas.</p>
            </li>

            <li className="ml-5">
              <p className="mb-2">
                Después de haber ingresado cada valor en su respectivo lugar, se obtendrán los saldos de la siguiente manera: Se sumaran los valores del DEBE, así mismo, se sumaran los valores del HABER, para luego obtener una diferencia matemática entre ambos. Si tal diferencia se sitúa en el DEBE,  éste será un saldo deudor; por el contrario si está en el lado del HABER, se trata de una saldo acreedor.
              </p>
            </li>

            <li className="ml-5">
              <p className="mb-2">Para finalizar este proceso, se presentara un solo balance donde estarán todas las cuentas organizadas, con sus respectivos saldos finales. Sean estos Deudores o Acreedores según los resultados de cada mayorización</p>
            </li>
          </ol>

          <div className="flex gap-5 w-fit mx-auto my-5 border-orange-400 border-solid border-2 py-2 px-4 rounded">
            <div className="flex flex-col">
              <p className="font-bold text-center border-b border-1 border-orange-400">Fecha</p>
              <br />
              <p>06/03/2020</p>
              <br />
              <br />
              <br />
              <p>07/03/2020</p>
            </div>

            <div>
              <p className="font-bold text-center border-b border-1 border-orange-400">Código</p>
              <br />
              <p>1105</p>
              <p>1110</p>
              <br />
              <br />
              <p>1110</p>
              <p>1105</p>
            </div>

            <div>
              <p className="font-bold text-center border-b border-1 border-orange-400">Cuenta</p>
              <br />
              <p>Caja</p>
              <p>Bancos</p>
              <p className="font-bold">Saldos Iguales</p>
              <br />
              <p>Bancos</p>
              <p>Caja</p>
              <p className="font-bold">Saldos Iguales</p>
            </div>

            <div>
              <p className="font-bold text-center border-b border-1 border-orange-400">Debe</p>
              <br />
              <p>10000000</p>
              <br />
              <p className="font-bold">10.000.000</p>
              <br />
              <p>7000000</p>
              <br />
              <p className="font-bold">7.000.000</p>
            </div>

            <div>
              <p className="font-bold border-b text-center border-1 border-orange-400">Haber</p>
              <br />
              <br />
              <p>10000000</p>
              <p className="font-bold">1.000.0000</p>
              <br />
              <br />
              <p>7000000</p>
              <p className="font-bold">7.000.000</p>
            </div>
          </div>

          <p>Después de tener los registro del libro diarios, se podrá realizar el mayoreo. Lo haremos teniendo en cuenta los pasos mencionado anteriormente.</p>

          <p className="font-bold text-xl my-5">A continuación, veremos como quedara la mayorización:</p>

          <div className="flex gap-10 w-[70%] mx-auto mb-10">
            <div className="w-fit mx-auto border-2 border-orange-400 borde-solid rounded px-4 py-2">
              <h3 className="text-center border-b-2 border-orange-400 borde-solid mb-2">Caja 1105</h3>
              <div className="flex text-center gap-5">
                <div className="flex flex-col">
                  <p className="font-bold">Debe</p>
                  <p>$ 10.000.000</p>

                </div>

                <div className="flex flex-col">
                  <p className="font-bold">Haber</p>
                  <p>$ 7.000.000</p>
                  <p className="font-bold">$ 3.000.000</p>
                </div>
              </div>
            </div>

            <div className="w-fit mx-auto border-2 border-orange-400 borde-solid rounded px-4 py-2">
              <h3 className="text-center border-b-2 border-orange-400 borde-solid mb-2">Caja 1105</h3>
              <div className="flex text-center gap-5">
                <div className="flex flex-col">
                  <p className="font-bold">Debe</p>
                  <p>$ 7.000.000</p>
                  <p className="font-bold">$ 3.000.000</p>

                </div>

                <div className="flex flex-col">
                  <p className="font-bold">Haber</p>
                  <p>$ 10.000.000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
