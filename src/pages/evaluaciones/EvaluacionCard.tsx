import { useLocation } from 'react-router-dom';
import { parse } from 'query-string';
import { BtnAtras } from '../../components/BtnAtras';

interface URLProps{
  url: string;
  title: string;
}

export const EvaluacionCard = () => {
  const { search } = useLocation();
  const { url, title }: URLProps = (parse(search) as unknown) as URLProps;

  return (
    <>
      <h1
        className="text-center text-2xl md:text-4xl font-bold mb-10 mt-10 lg:mb-10"
      >{ title }</h1>

      <iframe className='rounded-lg w-4/5 h-[30rem] lg:h-[80vh] md:w-3/5 aspect-video mx-auto mt-10 bg-slate-700 shadow-md shadow-gray-500' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      {/* <p
        className="text-center text-xl md:text-2xl mb-10 mt-10 lg:mb-10 hover:cursor-pointer"
        onClick={() => {
          window.open(url, '_blank');
        }}
      ><span className="font-bold">Fuente:</span> {url}</p> */}

      <BtnAtras route='/evaluaciones' className='ml-5 mt-5 md:fixed top-5 left-5' showArrow/>
    </>
  );
};
