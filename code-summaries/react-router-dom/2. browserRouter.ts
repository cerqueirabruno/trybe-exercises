// SOBRE: 
// responsável por armazenar a localização da aplicação na URL do navegador, permitindo que as informações das rotas sejam renderizadas;

/* ================================================== EXEMPLO 1 (COMPONENTE APP)

import { BrowserRouter } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
        // ...
        </BrowserRouter>
    )
}

export default App;

*/

/* ================================================== EXEMPLO 2 (MAIN - MAIS INDICADO)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <App />
    < /BrowserRouter>
);

*/