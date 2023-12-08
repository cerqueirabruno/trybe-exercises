// SOBRE:
// esse "hook" nos retorna uma função que, quando executada, direciona a aplicação para uma nova página;
// é possível, assim, criar validações em formulários, por exemplo, e realizar o redirecionamento apenas após todas as validações serem realizadas;


/* ======================================== EXEMPLO 1 (DIRECIONAMENTO DE PÁGINA)

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

*/



/* ======================================== EXEMPLO 2 (REDIRECIONAR APÓS VALIDAÇÃO)

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

*/



/* ================================================== EXEMPLO 3 (REDIRECIONANDO PARA A PÁGINA ANTERIOR)

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