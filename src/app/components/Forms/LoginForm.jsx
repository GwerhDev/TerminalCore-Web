import s from "./LoginForm.module.css";
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../Buttons/PrimaryButton'
import { login } from "../../../middlewares/services/login";

export const LoginForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password).then(res => {
      console.log(res);
      if (res) {
        window.location.href = 'https://developers.terminalcore.cl/auth?token=' + res;
      }
    });
  };

  useEffect(() => {
    setSubmitDisabled(!(username && password));
  }, [username, password]);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Ingresar</h1>
      <p>Por favor, ingrese su nombre de usuario y contraseña para ingresar a nuestra plataforma de desarrolladores</p>
      <ul className={s.list}>
        <li>
          <span><label htmlFor="username">Nombre de usuario o correo electrónico</label></span>
          <input onInput={handleInput} type="text" id="username" name="username" />
        </li>
        <li>
          <span><label htmlFor="password">Contraseña</label></span>
          <input onInput={handleInput} type="password" id="password" name="password" />
        </li>
        <li>
          <PrimaryButton disabled={submitDisabled} text="Iniciar sesión" />
        </li>
      </ul>
    </form>
  )
}
