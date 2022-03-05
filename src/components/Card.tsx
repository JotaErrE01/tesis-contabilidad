import { useNavigate } from 'react-router-dom';

interface Props {
  text: string;
  icoClass?: string;
  className?: string;
  page: string;
  img?: Img;
}

interface Img {
  src: string;
  alt: string;
  className?: string;
}

export const Card = ({ icoClass, text, className, page, img }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={`rounded hover:shadow-xl bg-indigo-500 text-white p-5 text-center cursor-pointer px-8 py-10 hover:scale-105 transition-all duration-300 ease-in-out animate__animated animate__fadeIn ${className}`}
      onClick={() => navigate(page)}
    >
      {
        img
          ? <img className={img.className} src={img.src} alt={img.alt} />
          : <i className={icoClass}></i>
      }
      <h2
        className="font-bold"
      >{text}</h2>
    </div>
  );
};
