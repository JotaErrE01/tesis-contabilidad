import { Player } from '@lottiefiles/react-lottie-player';
import { useNavigate } from 'react-router-dom';

export const ContabilidadApp = () => {
  const navigate = useNavigate();

  return (
    <div id='inicio' className="h-screen">
      <h1
        className="lg:text-6xl text-orange-600 font-bold m-0 ml-10 lg:mt-10 sm:fixed lg:w-4/5 md:text-5xl md:w-full md:mt-20 text-4xl pt-8 sm:pt-0 leading-normal lg:leading-normal md:leading-normal"
      >Las Tic en el Aprendizaje de Contabilidad</h1>
      <div className="container mx-auto flex items-center sm:h-screen flex-col-reverse sm:flex-row md:mt-0 mt-10 gap-10 text-xl">
        <div className="basis-3/4 text-center flex justify-center items-center">
          <button
            className="lg:text-4xl text-orange-600 font-bold border-orange-600 border-solid border-2 rounded-full px-10 py-4 hover:bg-orange-600 hover:text-white transition-colors duration-300 ease-in-out md:text-2xl relative z-10 sm:px-8 sm:py-4"
            onClick={() => {
              navigate('/inicio');
            }}
          >
            <i className="fas fa-arrow-circle-right mr-5"></i>
            Iniciar</button>
        </div>

        <div className="flex justify-end lg:basis-3/4">
          <img className="relative z-10" src="./img/contabilidad.png" alt="Contabilidad" />
        </div>
      </div>

      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/packages/lf20_xx9zron9.json"
        style={{ height: '250px', width: '250px' }}
        className="absolute bottom-0 left-5 z-10 hidden md:block"
      >
      </Player>

      <img className="fixed bottom-0 object-cover h-[10rem] sm:h-auto" src="./svgs/wave.svg" alt="waves" />
    </div>
  );
};
