import s from "./Nav.module.css";
import { Logo } from "./Logo";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export const Nav = () => {
  const history = useHistory();

  const handleNavigate = () => {
    history.push("/login");
  };

  return (
    <div className={s.refNav}>
      <section className={s.navSectionCont}>
        <div className={s.navCont}>
          <div className={s.divNav}>
            <ul className={s.ulNav}>
              <Logo height={"65px"} />
            </ul>
            <ul className={s.ulNav}>

            </ul>
            <ul className={s.ulNav}>
              <PrimaryButton onClick={handleNavigate} text="Ingresar" />
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}