import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ContabilidadApp } from '../pages/ContabilidadApp';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <ContabilidadApp /> }/>
      </Routes>
    </BrowserRouter>
  );
};
