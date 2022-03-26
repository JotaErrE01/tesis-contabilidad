import { useState } from 'react';

export const LibroDiario = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div className="flex flex-col gap-10 text-black text-lg">
      <h1
        className="text-3xl md:text-4xl font-bold text-center"
      >¿Qué es el Libro Diario? 📕</h1>

      <div
        className="leading-nomal w-[95%] mx-auto"
        onMouseEnter={() => setIsMouseOver(true)}
        onMouseLeave={() => setIsMouseOver(false)}
      >
        <div className="flex gap-5 items-center flex-col lg:flex-row">
          <div className="order-1 lg:order-none">
            <p className="mb-2">El libro diario es el registro contable principal de cualquier sistema contable, en el cual se anotan todas las operaciones.</p>

            <div className={`${isMouseOver ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-out`}>
              <p className='mb-2'>Es un documento que regristra de forma cronológica las transacciones económicas que una empresa realiza. Estas transacciones están relacionadas con la actividad principal de la firma.</p>

              <p className='mb-2 '>Las operaciones se contabilizan mediante asientos contables, según se vayan produciendo. Esta contabilización se debe ir recogiendo día a día; o en periodos no superiores a un mes en caso de que las actividades se hayan ido recogiendo en otros documentos.</p>
            </div>

          </div>

          <img className="lg:w-[30rem] lg:h-[20rem] rounded" src="https://cdn.billomat.com/ext/uploads/2021/09/income-statement-person1-holding-book-with-calculator-on-table-2058137.jpg" alt="Libro Diario" />
        </div>

        <div className={`${isMouseOver ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200 ease-out`}>
          <img className="mx-auto my-5" src="/img/libroDiarioEx.png" alt="Ejemplo libro Diario" />

          <section className="mt-10">
            <h3
              className="text-xl md:text-2xl font-bold my-5"
            >Informacion que Debe Incluir</h3>

            <p className="my-5">Hay una serie de datos mínimos necesarios para la creación de un libro diario:</p>

            <ul className="list-disc ">
              <li className="my-2 ml-10">Fecha de cada transacción. </li>
              <li className="my-2 ml-10">Las cuentas involucradas en la transacción. </li>
              <li className="my-2 ml-10">El importe de la operación. </li>
              <li className="my-2 ml-10">Breve explicación de la transacción.</li>
            </ul>
          </section>

          <section className="my-10">
            <h3
              className="text-xl md:text-2xl font-bold my-5"
            >Importancia</h3>

            <p>El libro de diario ha de llevarse obligatoriamente por todo comerciante, según lo señalado por el Código de Comercio en el artículo 32. Además, ha de estar sellado y presentado en el Registro Mercantil. En cuanto a las características físicas del libro, deberá ser un libro empastado, de folios y deberá estar sellado en todas sus páginas.</p>
          </section>
        </div>
      </div>

    </div>
  );
};
