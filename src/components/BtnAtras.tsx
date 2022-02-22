import { useNavigate } from 'react-router-dom';

interface Props {
  route: string;
  showArrow?: boolean;
  className?: string;
}

export const BtnAtras = ({ route, showArrow, className = '' }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      className={className}
    >
      {
        showArrow
          ? <i
            className='fas fa-arrow-alt-circle-left text-indigo-500 text-5xl hover:cursor-pointer bg-white rounded-full transition-all hover:text-indigo-700 hover:bg-slate-200 hover:scale-105 mt-5'
            onClick={() => navigate(route)}
          ></i>

          : <>
          <button
            className='bg-transparent hover:bg-indigo-500 text-indigo-700 font-semibold hover:text-white py-2 px-8 border-2 border-indigo-500 hover:border-transparent text-2xl rounded items-center gap-1 hidden lg:flex'
            onClick={() => navigate(route)}
          >
            <i className="fas fa-caret-left"></i>
            Atras
          </button>

          <i
            className='fas fa-arrow-alt-circle-left text-indigo-500 text-5xl sticky bottom-5 left-5 lg:hidden hover:cursor-pointer bg-white rounded-full'
            onClick={() => navigate(route)}
          ></i>
        </>
      }

    </div>
  );
};
