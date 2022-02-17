export const LibroDiario = () => {
  return (
    <div
      className="flex flex-col gap-10 text-black text-lg"
    >
      <h1
        className="text-4xl font-bold text-center"
      >¿Qué es el libro diario? 📕</h1>

      <div className="leading-nomal w-4/5 mx-auto">
        <div className="flex gap-5 my-5">
          <div>
            <p className="mb-2">El libro diario es el registro contable principal de cualquier sistema contable, en el cual se anotan todas las operaciones.</p>

            <p className="mb-2">Es un documento que regristra de forma cronológica las transacciones económicas que una empresa realiza. Estas transacciones están relacionadas con la actividad principal de la firma.</p>

            <p className="mb-2">Las operaciones se contabilizan mediante asientos contables, según se vayan produciendo. Esta contabilización se debe ir recogiendo día a día; o en periodos no superiores a un mes en caso de que las actividades se hayan ido recogiendo en otros documentos.</p>
          </div>

          <img className="w-[30rem] object-cover" src="https://i0.wp.com/accounter.co/cdn/2019/05/post-registrocontable-1.jpg?fit=1200%2C750&ssl=1" alt="Libro Diario" />
        </div>

        <img className="mx-auto my-5" src="/img/libroDiarioEx.PNG" alt="Ejemplo libro Diario" />

        <section className="mt-10">
          <h3
            className="text-2xl font-bold my-5"
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
            className="text-2xl font-bold my-5"
          >Importancia</h3>

          <p>El libro de diario ha de llevarse obligatoriamente por todo comerciante, según lo señalado por el Código de Comercio en el artículo 32. Además, ha de estar sellado y presentado en el Registro Mercantil. En cuanto a las características físicas del libro, deberá ser un libro empastado, de folios y deberá estar sellado en todas sus páginas.</p>
        </section>
      </div>

    </div>
  );
};
