/* ============================== REACT ROUTER DOM V6 ============================== */

/*

  >>>>> SOBRE:
  roteamento em aplicações react; permite que você navegue entre diferentes "páginas" ou componentes em
  sua aplicação React sem recarregar a página inteira (SPA);


  >>>>> INSTALAÇÃO:
  npm i react-router-dom

  >>>>> IMPORTAÇÃO:
  import { BrowserRouter } from 'react-router-dom';


*/

/* 

  ============================== browserRouter ==============================

  >>>>> SOBRE:
  responsável por armazenar a localização da aplicação na URL do navegador, permitindo que as informações das rotas sejam renderizadas;

  >>>>> IMPORTAÇÃO:
  import { BrowserRouter } from 'react-router-dom'

  >>>>> EXEMPLO 1 (COMPONENTE APP):
  import { BrowserRouter } from 'react-router-dom'

  function App() {
      return (
          <BrowserRouter>
          // ...
          </BrowserRouter>
      )
  }

  export default App;

  >>>>> EXEMPLO 2 (MAIN - MAIS INDICADO):
  import { BrowserRouter } from 'react-router-dom'

  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
      <App />
    < /BrowserRouter>

*/

/* 
  ============================== Routes | Route ==============================
  
  >>>>> SOBRE:
  responsável por renderizar o elemento correspondente à rota atual;
  
  "path" que receberá o caminho da rota;
  "element" que receberá o componente que vai ser renderizado;

  >>>>> EXEMPLO 1 (COMPONENTE APP):
  import { Route, Routes } from 'react-router-dom';

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



/* 

  ============================== link ==============================

  >>>>> SOBRE:
  ao clicar em um elemento, a página seja direcionada para outra;

  >>>>> EXEMPLO 1:

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


/* 

  ============================== useNavigate ==============================

  >>>>> SOBRE:
  esse "hook" nos retorna uma função que, quando executada, direciona a aplicação para uma nova página;
  é possível, assim, criar validações em formulários, por exemplo, e realizar o redirecionamento apenas após todas as validações serem realizadas;


  >>>>> EXEMPLO 1 (DIRECIONAMENTO DE PÁGINA)
  import { useNavigate } from 'react-router-dom';

  function Component() {
    const navigate = useNavigate();

    function handleClick() {
      navigate('/home');
    }

    return (
      // ...
      <button onClick={ handleClick }>Entrar</button>
    )
  }

  export default Component;

  >>>>> EXEMPLO 2 (REDIRECIONAR APÓS VALIDAÇÃO)

  import { useNavigate } from 'react-router-dom';

  function Login() {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');

    function handleClick() {
      if (password.length > 5) {
        navigate('/home');
      }
    }

    return (
      // ...
      <button onClick={ handleClick }>Acessar</button>
    )
  }

  export default Login;

  >>>>> EXEMPLO 3 (REDIRECIONANDO PARA A PÁGINA ANTERIOR)

  import { useNavigate } from 'react-router-dom';

  function Component() {
    const navigate = useNavigate();

    function handleClick() {
      navigate(-1);
    }

    return (
      // ...
      <button onClick={ handleClick }>Voltar</button>
    )
  }

  export default Component;

*/