import s from "./Welcome.module.css";
import { motion } from "framer-motion";
import { Wrapper3D } from "./Wrapper3D/Wrapper3D";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { SecondaryButton } from "./Buttons/SecondaryButton";
import logo from "../../assets/images/svg/terminalcore-icon.svg";

export const Welcome = () => {
  return (
    <div className={s.welcomeCont}>
      <ul className={s.welcomeText}>
        <div className={s.textAlign}>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h3>Llevamos el desarrollo de software</h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .15 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1>Al siguiente nivel</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .3 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h4>Creamos soluciones innovadoras, abiertas y colaborativas que potencien a las personas para prosperar en un mundo digital en constante cambio.</h4>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            transition={{ duration: 1.5, delay: .45 }}
            animate={{ opacity: 1, x: 0 }}
            className={s.buttonContainer}
          >
            <PrimaryButton text="Conoce nuestros productos" />

            <SecondaryButton href="mailto:terminalcore.conhexa@gmail.com" text="Contactar" />
          </motion.div>
        </div>
        <div className={s.wrapper}>
          <Wrapper3D image={logo} alt="Logo Terminal Core" />
        </div>
      </ul>
    </div>
  )
}