// SOBRE:
// ao clicar em um elemento, a página seja direcionada para outra;

/* ================================================== EXEMPLO 1

src/pages/home/index.tsx

import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>Coffeeteria</h1>
      <Link to="/coffees">
        <button>Conheça nossos produtos</button>
      </Link>
    </>
  )
}

export default Home;

*/