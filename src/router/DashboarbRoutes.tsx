import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';
import { Unidades } from '../pages/unidades/Unidades';
import { Unidad1 } from '../pages/unidades/unidad1/Unidad1';
import { Unidad2 } from '../pages/unidades/unidad2/Unidad2';

export const DashboarbRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='inicio' element={<Inicio />} />
        <Route path='unidades' element={<Unidades />} />
        <Route path='unidad1/*' element={<Unidad1 />} />
        <Route path='unidad2' element={<Unidad2 />} />
        {/* <Route path='balanceInicial' element={ <BalanceInicial /> }/> */}
        {/* <Route path='libroDiario' element={ <LibroDiario /> }/> */}
        {/* <Route path='balanceComprobacion' element={ <BalanceComprobacion /> }/> */}
        {/* <Route path='mayorizacion' element={ <Mayorizacion /> }/> */}
        {/* <Route path='videos' element={ <Inicio /> }/> */}
        {/* <Route path='juegos' element={ <Inicio /> }/> */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
