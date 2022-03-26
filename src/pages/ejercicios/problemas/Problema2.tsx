// import { useState } from 'react';
// import { BtnSolution } from '../../../components/BtnSolution';
// import { LibroDiarioSolution } from '../../../components/LibroDiarioSolution';
// import { LibroMayorSolution } from '../../../components/LibroMayorSolution';
// import { BalanceComprobacionSolucion } from '../../../components/BalanceComprobacionSolucion';

export const Problema2 = () => {
  // const [showSolution, setShowSolution] = useState(false);

  return (
    <div className='px-2 lg:px-0'>
      <h1
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >Realizar el Libro Diario, Mayorización y Balance de Comprobación</h1>

      <div className="px-2">
        <ul>
          <li className="list-decimal">
            <p className="mt-2">Un señor llamado Ronald Rodríguez en fecha 02 de enero de 2020, decide poner un negocio propio, dedicándose a la venta de computadoras y dispone de $ 100.000 para invertir</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra un terreno por un valor de $ 12.000 y un edificio por $ 40.000, se paga al contado.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compran varios muebles para el uso del negocio por un valor de $ 8.000, se paga al contado.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra mercaderías para el negocio por un valor de $ 80.000, al crédito sin documento (se refiere a que no hay condiciones de pago, como la de una letra de cambio).</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se apertura una cuenta corriente en el Banco con un depósito inicial de $ 30.000.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se vende mercaderías al contado por un valor de $ 50.000.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra mercaderías por un valor de $ 30.000, se paga el 30% al contado y el 70% con cheque del Banco.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra material de escritorio para el uso de la empresa (papel, lápiz, borrador y entre otros), por un valor de $ 1.000 y se paga al contado.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se hace un depósito a la cuenta corriente del Banco por un valor de $ 10.000.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se paga los sueldos a los trabajadores por un valor de $ 5.000 y el mismo es emitido con cheque del Banco.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se vende mercaderías por un valor de $ 80.000, nos pagan al contado.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se hace un depósito en nuestra cuenta corriente del Banco por $ 30.000.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se vende mercaderías por un valor de $ 40.000 y nos pagan el 40% al contado y el 60% al crédito sin documento.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se paga impuestos a la alcaldía por $ 600 con cheque del Banco.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra mercaderías por un valor de $ 36.000, se paga el 20% al contado y el saldo al crédito sin documento.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se paga con cheque del Banco el 10% de la deuda sin documento que teníamos en el ejercicio número 4.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Nos pagan el 50% de la deuda sin documento del ejercicio número 13.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra mercaderías por un valor de $ 158.000, se paga el 20% al contado, el 10% con cheque del Banco y por el saldo se establece un crédito con documento (Letra de Cambio).</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se vende mercaderías por un valor de $ 200,000 nos pagan el 30% al contado, el 20% del crédito sin documento y por el saldo se define un crédito con documento (Letra de Cambio).</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se compra un vehículo para el uso empresarial, por un valor de $ 12.000, se paga al contado.</p>
          </li>

          <li className="list-decimal">
            <p className="mt-2">Se cancela el consumo de los servicios básicos (luz, agua, gas e internet), por un valor de $ 700, el mismo se cancela con el fondo de la cuenta corriente del Banco.</p>
          </li>
        </ul>

        <button
        className='px-5 py-2 mx-auto mt-10 mb-10 rounded-lg outline outline-3 outline-purple-500 flex text-purple-700 font-semibold hover:outline-transparent hover:text-white hover:bg-purple-700 transition-colors duration-300 ease-in-out'
        onClick={() => {
          window.open('https://ugye-my.sharepoint.com/:x:/g/personal/aron_almeidam_ug_edu_ec/Eb9S-QYBVNBBgBoZXmieuzUBXgcdv7Xc0nQQIlwQNcF74w?e=3wwbac&fbclid=IwAR3emRHs02yuAylHfsMX0Qxe8cHM08HuXn2io6NCl3eF7V8PiKBsYbNheX4', '_blank', 'noopener,noreferrer');
        }}
      >Resolver en Excel</button>

        {/* {
          !showSolution
            ? <BtnSolution setShowSolution={setShowSolution} />
            : (
              <>
                <h2
                  className='text-2xl font-bold text-center mt-10 mb-5 text-orange-500'
                >Libro Diario</h2>
                <LibroDiarioSolution />

                <h2
                  className='text-lg md:text-2xl font-bold text-center mb-5 mt-10 text-orange-500'
                >Libros Mayores</h2>
                <LibroMayorSolution />

                <h2
                  className='text-lg md:text-2xl font-bold text-center mb-5 mt-10 text-orange-500'
                >Balance de Comprobación de Sumas y Saldos</h2>
                <BalanceComprobacionSolucion />
              </>
              )
        } */}
      </div>
    </div>
  );
};
