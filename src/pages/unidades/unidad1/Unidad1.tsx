import { Navbar } from '../../../components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LibroDiario } from './LibroDiario';
import { BalanceInicial } from './BalanceInicial';
import { BtnAtras } from '../../../components/BtnAtras';

const topics = [
  { name: 'Libro Diario', to: 'libroDiario' },
  { name: 'Balance Inicial', to: 'balanceInicial' }
];

export const Unidad1 = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <div className='flex items-center justify-center w-[95%] mx-auto gap-2'>
        <BtnAtras route="/unidades" showArrow={true} />
        <Navbar
          topics={topics}
        />
      </div>
      <Routes>
        <Route path='libroDiario' element={<LibroDiario />} />
        <Route path='balanceInicial' element={<BalanceInicial />} />
        <Route path='*' element={<Navigate to="libroDiario" replace />} />
      </Routes>
    </div>
  );
};
