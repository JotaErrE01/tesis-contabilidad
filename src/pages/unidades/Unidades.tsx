import { BtnAtras } from '../../components/BtnAtras';
import { useNavigate } from 'react-router-dom';

export const Unidades = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mt-10 h-screen lg:h-auto">
      <h1
        className="text-center text-2xl md:text-4xl font-bold mb-10 mt-10 lg:mt-0 lg:mb-20"
      >Selecciona una Unidad 📚</h1>

      <div className="w-full mb-10 flex justify-evenly flex-wrap gap-10 lg:gap-5">
        <div
          className="rounded overflow-hidden hover:shadow-xl bg-yellow-500 text-white text-center cursor-pointer py-10 w-4/5 lg:w-auto hover:scale-105 transition-all duration-300 ease-in-out md:px-32 flex flex-col gap-10 items-center animate__animated animate__fadeIn"
          onClick={() => { navigate('/unidad1'); }}
        >
          <img className="invert w-28 h-20 md:w-48 md:h-36" src="/svgs/unidad1.svg" alt="Unidad 1" />
          <h2
            className="font-bold text-2xl md:text-4xl"
          >Unidad 1</h2>
        </div>

        <div
          className="rounded overflow-hidden hover:shadow-xl bg-purple-500 text-white py-10 text-center w-4/5 lg:w-auto cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out md:px-32 flex flex-col gap-10 items-center animate__animated animate__fadeIn"
        >
          <img className="invert w-28 h-20 md:w-48 md:h-36" src="/svgs/unidad2.svg" alt="Unidad 2" />
          <h2
            className="font-bold text-2xl md:text-4xl"
          >Unidad 2</h2>
        </div>
      </div>

      <BtnAtras route="/inicio" />
    </div>
  );
};
