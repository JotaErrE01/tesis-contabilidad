import { BtnAtras } from '../../components/BtnAtras';
import { Card } from '../../components/Card';

export const Unidades = () => {
  return (
    <div className="container mx-auto mt-10 h-screen lg:h-auto">
      <h1
        className="text-center text-2xl md:text-4xl font-bold mb-10 mt-10 lg:mt-0 lg:mb-20"
      >Selecciona una Unidad 📚</h1>

      <div className="w-full mb-10 flex justify-evenly flex-wrap gap-10 lg:gap-5">
        <Card
          text="Unidad 1"
          img={{
            src: '/svgs/unidad1.svg',
            alt: 'Unidad 1',
            className: 'invert w-28 h-20 md:w-48 md:h-36'
          }}
          className="bg-yellow-500 flex flex-col gap-10 items-center md:px-32 text-2xl md:text-4xl"
          page='/unidad1'
        />

        <Card
          text="Unidad 2"
          img={{
            src: '/svgs/unidad2.svg',
            alt: 'Unidad 2',
            className: 'invert w-28 h-20 md:w-48 md:h-36'
          }}
          className="bg-purple-500 flex flex-col gap-10 items-center md:px-32 text-2xl md:text-4xl"
          page='/unidad2'
        />
      </div>

      <BtnAtras route="/inicio" />
    </div>
  );
};
