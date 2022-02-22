import { Routes, Route, Navigate } from 'react-router-dom';
import { BalanceInicial } from '../unidad1/BalanceInicial';
import { LibroDiario } from '../unidad1/LibroDiario';
import { Navbar } from '../../../components/Navbar';
import { BtnAtras } from '../../../components/BtnAtras';
import { Mayorizacion } from './Mayorizacion';
import { BalanceComprobacion } from './BalanceComprobacion';

const topics = [
  { name: 'Mayorización', to: 'mayorizacion' },
  { name: 'Balance de Comprobación', to: 'balanceComprobacion' }
];

export const Unidad2 = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className='flex items-center justify-center w-[95%] mx-auto gap-2'>
        <BtnAtras route="/unidades" showArrow={true} />
        <Navbar
          topics={topics}
        />
      </div>
      <Routes>
        <Route path='mayorizacion' element={<Mayorizacion />} />
        <Route path='balanceComprobacion' element={<BalanceComprobacion />} />
        <Route path='*' element={<Navigate to="mayorizacion" replace />} />
      </Routes>
    </div>
  );
};
