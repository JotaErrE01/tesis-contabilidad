import 'animate.css';
import { Card } from '../components/Card';

export const Inicio = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center">
        <h1
          className="text-center text-2xl md:text-4xl font-bold mb-5 lg:mb-8 mt-10"
        >Elige una Actividad para Empezar 💰</h1>

        <div className="w-full flex justify-evenly flex-wrap gap-10 p-5 lg:px-20">
          <Card
            className='w-[30rem] text-3xl'
            icoClass="fas fa-university text-7xl mb-5"
            text="Explora las Unidades"
            page='/unidades'
          />

          <Card
            className='bg-rose-500 w-[30rem] text-3xl'
            icoClass="fas fa-film text-7xl mb-5"
            text="Aprende con Videos"
            page='/videos'
          />

          <Card
            className='bg-green-500 w-[30rem] text-3xl'
            icoClass="fas fa-piggy-bank text-7xl mb-5"
            text="Aprende Jugando"
            page='/unidades'
          />

          <Card
            className='bg-amber-500 w-[30rem] text-3xl'
            icoClass="fas fa-puzzle-piece text-7xl mb-5"
            text="Problemas Propuestos"
            page='/problemas'
          />
        </div>
      </div>
    </div>
  );
};
