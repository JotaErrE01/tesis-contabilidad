import { useNavigate } from 'react-router-dom';

export const ContabilidadApp = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen">
      <img className="fixed bottom-0" src="./svgs/wave.svg" alt="waves" />
      <h1
        className="text-6xl text-orange-500 font-bold leading-normal m-0 ml-10 mt-5 fixed w-4/5"
      >Las Tic en el Aprendizaje de Contabilidad</h1>
      <div className="container mx-auto flex items-center h-screen">
        <div className="basis-3/4 text-center flex justify-center items-center">

          <button
            className="text-4xl text-orange-500 font-bold border-orange-500 border-solid border-2 rounded-full px-10 py-4 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-in-out"
            onClick={() => {
              navigate('#');
            }}
          >
            <i className="fas fa-arrow-circle-right mr-5"></i>
            Iniciar</button>
        </div>

        <div className="flex justify-end basis-3/4">
          <img className=" relative z-10 " src="./img/contabilidad.png" alt="Contabilidad" />
        </div>
      </div>
    </div>
  );
};
