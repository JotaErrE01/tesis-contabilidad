import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContabilidadApp } from '../pages/ContabilidadApp';
import { DashboarbRoutes } from './DashboarbRoutes';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ContabilidadApp /> }/>
        <Route path='*' element={ <DashboarbRoutes /> }/>
      </Routes>
    </BrowserRouter>
  );
};
