import s from "./Nav.module.css";
import { Logo } from "./Logo";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { DialogModal } from "./Modals/DialogModal";
import { useState } from "react";
import { LoginForm } from "./Forms/LoginForm";

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLoginDialog = () => {
    setIsOpen(true);
  };

  const handleCloseLoginDialog = () => {
    setIsOpen(false);
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
              <PrimaryButton onClick={handleOpenLoginDialog} text="Ingresar" />
            </ul>
          </div>
        </div>
      </section>
      <DialogModal isOpen={isOpen} onClose={handleCloseLoginDialog} >
        <LoginForm />
      </DialogModal>
    </div>
  )
}