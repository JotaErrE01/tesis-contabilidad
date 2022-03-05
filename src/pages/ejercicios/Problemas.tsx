import { BtnAtras } from '../../components/BtnAtras';
import { Navbar } from '../../components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Problema1 } from './problemas/Problema1';
import { Problema2 } from './problemas/Problema2';

const topics = [
  { name: 'Problema 1', to: '1', Component: Problema1 },
  { name: 'Problema 2', to: '2', Component: Problema2 }
];

export const Problemas = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className='flex items-center justify-center w-[95%] mx-auto gap-2'>
        <BtnAtras route="/inicio" showArrow={true} />
        <Navbar
          topics={topics}
        />
      </div>
      <Routes>
        {
          topics.map(({ to, Component }, index) => (
            <Route key={index} path={to} element={<Component />} />
          ))
        }
        <Route path='*' element={<Navigate to={topics[0].to} replace />} />
      </Routes>
    </div>
  );
};
