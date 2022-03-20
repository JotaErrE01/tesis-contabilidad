import { Card } from '../../components/Card';
import { BtnAtras } from '../../components/BtnAtras';

export const Evaluaciones = () => {
  return (
    <div className="container mx-auto w-4/5 md:w-full mb-5">
      <div className="flex flex-col justify-center my-10">
        <h1
          className="text-center text-2xl md:text-4xl font-bold mb-10 lg:mb-20"
        >Elige una Evaluacion </h1>

        <div className="w-full flex justify-evenly flex-wrap gap-10 p-5 lg:px-20">
          <Card
            className='bg-fuchsia-500 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-money-check-dollar text-6xl lg:text-7xl mb-5"
            text="Test de Conocimientos"
            page='/evaluacionCard?url=https://es.educaplay.com/juego/11684581-contabilidad.html&title=Prueba tus Conocimientos'
          />

          <Card
            className='bg-lime-500 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-crop text-6xl lg:text-7xl mb-5"
            text="Crucigrama"
            page='/evaluacionCard?url=https://es.educaplay.com/juego/11659216-crucigrama.html&title=Completa el Crucigrama con tus Conocimientos'
          />

          <Card
            className='bg-teal-500 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-puzzle-piece text-6xl lg:text-7xl mb-5"
            text="Sopa de Letras"
            page='/evaluacionCard?url=https://www.youtube.com/embed/SCw71-zsyBo&title=Libro Diario y Mayor'
          />
        </div>
      </div>

      <BtnAtras route="/inicio" className='fixed bottom-5 lg:top-20 lg:bottom-auto left-5' />
    </div>
  );
};
