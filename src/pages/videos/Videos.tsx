import { BtnAtras } from '../../components/BtnAtras';
import { useNavigate } from 'react-router-dom';

export const Videos = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto w-4/5 md:w-full mb-5">
      <div className="flex flex-col justify-center my-10">
        <h1
          className="text-center text-2xl md:text-4xl font-bold mb-10 lg:mb-20"
        >Elige un Video 📺</h1>

        <div className="grid lg:grid-cols-2 md:w-full lg:w-4/5 mx-auto gap-x-5 gap-y-10 place-items-center grid-cols-1 grid-rows-4 lg:grid-rows-2">
        <div
            className="rounded-lg overflow-hidden hover:shadow-xl bg-orange-400 text-white text-2xl p-5 text-center px-8 py-10 w-full lg:w-[90%] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
            onClick={() => navigate('/videoCard?url=https://www.youtube.com/embed/ugxCocs75zE&title=¿Qué es la Contabilidad?')}
          >
            <i className="fas fa-money-check-dollar text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >¿Qué es la Contabilidad?</h2>
          </div>

          <div
            className="rounded-lg overflow-hidden hover:shadow-xl bg-emerald-500 text-white text-2xl p-5 text-center cursor-pointer px-8 py-10 w-full lg:w-[90%] hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
            onClick={() => navigate('/videoCard?url=https://www.youtube.com/embed/AD6y8kzPc-U&title=Activo, Pasivo y Capital')}
          >
            <i className="fas fa-money-bill text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >Activo, Pasivo y Capital</h2>
          </div>

          <div
            className="rounded-lg overflow-hidden hover:shadow-xl bg-pink-500 text-white text-2xl px-8 py-10 text-center w-full lg:w-[90%] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
            onClick={() => navigate('/videoCard?url=https://www.youtube.com/embed/SCw71-zsyBo&title=Libro Diario y Mayor')}
            >
            <i className="fas fa-book text-7xl mb-5"></i>
            <h2
              className="font-bold"
              >Libro Diario y Libro Mayor</h2>
          </div>

          <div
            className="rounded-lg overflow-hidden hover:shadow-xl bg-red-500 text-white text-2xl p-5 text-center px-8 py-10 w-full lg:w-[90%] cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
            onClick={() => navigate('/videoCard?url=https://www.youtube.com/embed/lRJrAqgLmc4&title=¿Qué es el Balance Inicial?')}
            >
            <i className="fas fa-piggy-bank text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >¿Qué es el Balance Inicial?</h2>
          </div>
        </div>
      </div>

      <BtnAtras route="/inicio" className='fixed bottom-5 left-5' />
    </div>
  );
};
