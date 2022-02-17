import { Navbar } from '../../../components/Navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LibroDiario } from './LibroDiario';
import { BalanceInicial } from './BalanceInicial';

const topics = [
  { name: 'Libro Diario', to: 'libroDiario' },
  { name: 'Balance Inicial', to: 'balanceInicial' }
];

export const Unidad1 = () => {
  return (
    <div className="container mx-auto flex flex-col gap-10">
      <Navbar
        topics={topics}
      />
      <Routes>
        <Route path='libroDiario' element={ <LibroDiario /> }/>
        <Route path='balanceInicial' element={ <BalanceInicial /> }/>
        <Route path='*' element={ <Navigate to="libroDiario" replace /> }/>
      </Routes>
    </div>
  );
};
