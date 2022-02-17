import 'animate.css';
import { useNavigate } from 'react-router-dom';

export const Inicio = () => {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto mb-5">
      <div className="flex flex-col justify-center mt-10 lg:mt-20">
        <h1
          className="text-center text-4xl font-bold mb-10 lg:mb-20"
        >Elige una Actividad para Empezar 💰</h1>

        <div className="w-full mb-4 flex justify-evenly flex-wrap gap-5">
          <div
            className="rounded overflow-hidden hover:shadow-xl bg-indigo-500 text-white text-3xl p-5 text-center cursor-pointer px-8 py-10 w-4/5 lg:w-auto hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
            onClick={() => navigate('/unidades')}
          >
            <i className="fas fa-university text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >Explora las Unidades</h2>
          </div>

          <div
            className="rounded overflow-hidden hover:shadow-xl bg-rose-500 text-white text-3xl px-8 py-10 text-center w-4/5 lg:w-auto cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
          >
            <i className="fas fa-film text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >Aprende con Videos</h2>
          </div>

          <div
            className="rounded overflow-hidden hover:shadow-xl bg-green-500 text-white text-3xl p-5 text-center px-8 py-10 w-4/5 lg:w-auto cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn"
          >
            <i className="fas fa-piggy-bank text-7xl mb-5"></i>
            <h2
              className="font-bold"
            >Aprende Jugando</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
