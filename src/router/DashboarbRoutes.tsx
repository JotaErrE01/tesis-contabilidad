import { Routes, Route, Navigate } from 'react-router-dom';
import {
  Inicio,
  Unidades,
  Unidad1,
  Unidad2,
  Videos,
  VideoCard,
  Problemas
} from '../pages';

export const DashboarbRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='inicio' element={<Inicio />} />
        <Route path='unidades' element={<Unidades />} />
        <Route path='unidad1/*' element={<Unidad1 />} />
        <Route path='unidad2/*' element={<Unidad2 />} />
        <Route path='videos' element={<Videos />} />
        <Route path='videoCard' element={<VideoCard />} />
        <Route path='problemas/*' element={<Problemas />} />
        {/* <Route path='videos' element={<Videos />} /> */}
        {/* <Route path='videos' element={<Videos />} /> */}
        {/* <Route path='*' element={<Navigate to='/inicio' />} /> */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
