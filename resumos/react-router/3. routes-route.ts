// SOBRE:
// é responsável por renderizar o elemento correspondente à rota atual;

// "path" que receberá o caminho da rota;
// "element" que receberá o componente que vai ser renderizado;

/* ================================================== EXEMPLO 1

import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import CoffeeList from './pages/coffee-list';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/coffees" element={ <CoffeeList /> } />
    </Routes>
  )
}

export default App;

*/