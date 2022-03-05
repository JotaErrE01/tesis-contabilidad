import { BtnAtras } from '../../components/BtnAtras';
import { Card } from '../../components/Card';

export const Videos = () => {
  return (
    <div className="container mx-auto w-4/5 md:w-full mb-5">
      <div className="flex flex-col justify-center my-10">
        <h1
          className="text-center text-2xl md:text-4xl font-bold mb-10 lg:mb-20"
        >Elige un Video 📺</h1>

        <div className="w-full flex justify-evenly flex-wrap gap-10 p-5 lg:px-20">
          <Card
            className='bg-orange-400 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-money-check-dollar text-6xl lg:text-7xl mb-5"
            text="¿Qué es la Contabilidad?"
            page='/videoCard?url=https://www.youtube.com/embed/ugxCocs75zE&title=¿Qué es la Contabilidad?'
          />

          <Card
            className='bg-emerald-400 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-money-bill text-6xl lg:text-7xl mb-5"
            text="Activo, Pasivo y Capital"
            page='/videoCard?url=https://www.youtube.com/embed/AD6y8kzPc-U&title=Activo, Pasivo y Capital'
          />

          <Card
            className='bg-pink-500 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-book text-6xl lg:text-7xl mb-5"
            text="Libro Diario y Libro Mayo"
            page='/videoCard?url=https://www.youtube.com/embed/SCw71-zsyBo&title=Libro Diario y Mayor'
          />

          <Card
            className='bg-red-500 w-[30rem] text-2xl lg:text-3xl'
            icoClass="fas fa-piggy-bank text-6xl lg:text-7xl mb-5"
            text="¿Qué es el Balance Inicial?"
            page='/videoCard?url=https://www.youtube.com/embed/lRJrAqgLmc4&title=¿Qué es el Balance Inicial?'
          />
        </div>
      </div>

      <BtnAtras route="/inicio" className='fixed bottom-5 lg:top-20 lg:bottom-auto left-5' />
    </div>
  );
};
