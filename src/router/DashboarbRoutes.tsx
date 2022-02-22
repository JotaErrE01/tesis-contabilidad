import { Routes, Route, Navigate } from 'react-router-dom';
import { Inicio } from '../pages/Inicio';
import { Unidades } from '../pages/unidades/Unidades';
import { Unidad1 } from '../pages/unidades/unidad1/Unidad1';
import { Unidad2 } from '../pages/unidades/unidad2/Unidad2';
import { Videos } from '../pages/videos/Videos';
import { VideoCard } from '../pages/videos/VideoCard';

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
        {/* <Route path='librosDM' element={<Videos />} /> */}
        {/* <Route path='videos' element={<Videos />} /> */}
        {/* <Route path='videos' element={<Videos />} /> */}
        {/* <Route path='*' element={<Navigate to='/inicio' />} /> */}
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
