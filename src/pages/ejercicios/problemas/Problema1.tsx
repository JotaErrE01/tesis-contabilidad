// import { useState } from 'react';
// import { BtnSolution } from '../../../components/BtnSolution';

export const Problema1 = () => {
  // const [showSolution, setShowSolution] = useState(false);

  return (
    <div className='px-5 lg:px-0'>
      <h1
        className="text-3xl md:text-4xl font-bold text-center mb-10"
      >Realizar el Balance Inicial</h1>

      <div>
        <p>La empresa REPUESTOS CAR S.L. empieza el año (la empresa ya estaba creada) con los siguientes conceptos:
        </p>

        <ul
          className="pl-5"
        >
          <li
            className="list-disc"
          >
            <p className="mt-2">Hay varias facturas pendientes de cobro a un cliente por valor de $12.857. Se mantiene una deuda de $60.000 con una entidad bancaria, de la cual, $6.000 se abonaran éste año entrante.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">La empresa sigue contando con las máquinas que hasta ahora permiten que la producción no decaiga, están valoradas en $30.000 totales y tienen asignadas una amortización acumulada de $6.000 por su uso.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">El edificio propiedad de la empresa tiene un valor de $90.000, siendo el valor del terreno de $40.000.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">En la cuenta corriente poseen $12.500.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">Se deben a los proveedores de mercaderías, $22.000.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">El dinero en caja asciende a $1.200.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">Debemos un pago de $3.000 a nuestro proveedor de maquinaria a corto plazo.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">Tenemos un derecho de cobro sobre otro de nuestros clientes formalizado en letra de cambio, por valor de $3.000.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">Software en propiedad de la empresa por valor de $4.000.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">La empresa cataloga como «pérdida», como «negativo» el resultado del ejercicio anterior (ingresos – gastos) de $1.200.</p>
          </li>

          <li
            className="list-disc"
          >
            <p className="mt-2">Capital: ?</p>
          </li>
        </ul>
      </div>

      <button
        className='px-5 py-2 mx-auto mt-10 mb-10 rounded-lg outline outline-3 outline-purple-500 flex text-purple-700 font-semibold hover:outline-transparent hover:text-white hover:bg-purple-700 transition-colors duration-300 ease-in-out'
        onClick={() => {
          window.open('https://ugye-my.sharepoint.com/:x:/g/personal/aron_almeidam_ug_edu_ec/EWB1oFv4FMFPqWRyXBent7wBKEkQRG809qsAtp_sM06EtA?rtime=H7PQnmUP2kg', '_blank', 'noopener,noreferrer');
        }}
      >Resolver en Excel</button>

      {/* {
        !showSolution
          ? <BtnSolution setShowSolution={setShowSolution} />

          : (
            <div className="w-[95%] md:w-4/5 mt-8 text-xs md:text-lg border-[1px] border-solid border-gray-500 mb-10">
              <div className="flex text-center justify-between border-t-[1px] border-solid border-gray-500">
                <div className="border-r-[1px] border-solid border-gray-500 flex-1">
                  <p className="font-semibold my-2">ACTIVOS</p>
                  <p className="text-left font-semibold ml-5 my-2">Activo corriente</p>

                  <p>Bancos c/c $12.500</p>

                  <p>Caja $1.200</p>

                  <p>Clientes $12.857</p>

                  <p>Efectos comerciales a cobrar $3.000</p>

                  <p>Total activo corriente $29.557</p>

                  <p className="text-left font-semibold ml-5 my-2">Activo no corriente</p>

                  <p>Aplicaciones Informaticas $4.000</p>

                  <p>Terrenos y Bienes Naturales $40.000</p>

                  <p>Construcciones $50.000</p>

                  <p>Maquinaria $30.000</p>
                  <p>Amortización acumulada del inmovilizado material (maquinaria) –$6.000</p>

                  <p>Total activos no corrientes $118.000</p>

                  <p className="text-left font-semibold ml-5 my-2">Total activos $147.557</p>
                </div>

                <div className="flex-1">
                  <p className="font-semibold my-2">PASIVOS</p>
                  <p className="text-left font-semibold ml-5 my-2">Pasivo corriente</p>

                  <p>Proveedores $22.000</p>

                  <p>Proveedores de inmovilizado a corto plazo $3.000</p>

                  <p>Total pasivo corriente $25.000</p>

                  <p className="text-left font-semibold ml-5 my-2">Pasivos no corrientes</p>

                  <p>Deudas a largo plazo con entidades de crédito $54.000</p>

                  <p>Total pasivo no corriente $54.000</p>

                  <p className="text-left font-semibold ml-5 my-2">Total pasivos $79.000</p>

                  <p className="text-left font-semibold ml-5 my-2">PATRIMONIO</p>

                  <p>Capital Social $69.757</p>

                  <p>Resultados negativos de ejercicios anteriores –$1.200</p>

                  <p className="text-left font-semibold ml-5 my-2">Total patrimonio $68.557</p>

                  <p className="text-left font-semibold ml-5 mb-2 mt-8">Total pasivo y patrimonio $147.557</p>
                </div>
              </div>
            </div>
            )
      } */}
    </div>
  );
};
