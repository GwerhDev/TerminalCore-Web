import s from "./Nav.module.css";
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logo } from "./Logo";
import { DEVELOPERS_URL } from "../../middlewares/config";

export const Nav = () => {
  return (
    <div className={s.refNav}>
      <section className={s.navSectionCont}>
        <div className={s.navCont}>
          <div className={s.divNav}>
            <span className={s.burgerContainer}>
              <FontAwesomeIcon size="lg" icon={faBars} />
            </span>

            <span className={s.logoContainer}>
              <Logo height={"65px"} />
            </span>

            <ul className={s.ulNav}>

            </ul>
            <ul className={s.ulNav}>
              <li>
                <a className={s.aNav} href={DEVELOPERS_URL + "/login"} text="Ingresar">
                  <FontAwesomeIcon size="lg" icon={faUser} />
                  <span>
                    Ingresar
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
