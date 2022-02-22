import { parse } from 'query-string';
import { useLocation } from 'react-router-dom';
import { BtnAtras } from '../../components/BtnAtras';

interface URLProps{
  url: string;
  title: string;
}

export const VideoCard = () => {
  const { search } = useLocation();
  const { url, title }: URLProps = (parse(search) as unknown) as URLProps;

  return (
    <>
      <h1
        className="text-center text-2xl md:text-4xl font-bold mb-10 mt-10 lg:mb-10"
      >{ title }</h1>

      <iframe className='rounded w-4/5 h-[30rem] lg:h-auto md:w-3/5 aspect-video mx-auto mt-10 bg-slate-700' src={url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>

      <BtnAtras route='/videos' className='ml-5 mt-5 md:fixed top-5 left-5' showArrow/>
    </>
  );
};
