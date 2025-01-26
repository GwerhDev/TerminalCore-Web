import s from './Logo.module.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import logo from "../../assets/images/svg/terminalcore-icon.svg";

export const Logo = (props) => {
  const { href, height } = props;

  return (
    <Link to={href || "/"} className={s.container}>
      <img className={s.terminalcoreLogo} src={logo} alt="Logo" height={height || "100%"} />
      <ul className={s.slogan}>
        <p className={s.title} style={{ fontSize: `calc(${height}/3)` }}>TerminalCore</p>
        <small className={s.subtitle} style={{ fontSize: `calc(${height}/6)` }}>Conecta tus sentidos</small>
      </ul>
    </Link>
  );
};
