import s from './Developers.module.css';
import { motion } from 'framer-motion';
import laloPic from '../../assets/images/png/Gwerh-fondo-1.png';
import nachoPic from '../../assets/images/png/nacho-iconic.png';

export const Developers = () => {
  return (
    <div className={s.developersCont}>
      <div className={s.cardsCont}>
        <a target='_blank' rel="noreferrer" href='http://gwerh.netlify.app/'>
          <motion.div
            initial={{
              opacity: 0,
              y: 10,
              background: "#ffffff20",
              boxShadow: "0px 0px 20px white",
              width: "300px",
              borderRadius: "15px",
              paddingBottom: "50px"
            }}
            transition={{
              duration: 2,
              type: 'spring'
            }}
            animate={{ opacity: 1, y: 0 }}
          >
            <>
              <img
                className={s.imgProfile}
                src={laloPic}
                alt="Gwerh"
                width="100px"
                height="100px"
              />
              <h2 className={s.name} style={{ color: "white", fontFamily: 'Poppins', fontWeight: '300', filter: 'drop-shadow(0px 0px .1px yellow)' }}>Gerardo Guarda</h2>
              <h3 className={s.alias} style={{ color: "white", fontWeight: 'thin' }}>gwerh</h3>
            </>
            <p style={{ color: 'white', fontFamily: 'Poppins' }}>
              Develop, Design & Sound
            </p>

          </motion.div>
        </a>
        <a target='_blank' rel="noreferrer" href='https://portfolio-ignacio-melgarejo-27.vercel.app/'>
          <motion.div
            initial={{ opacity: 0, y: 10, background: "#ffffff20", boxShadow: "0px 0px 20px white", width: "300px", borderRadius: "15px", paddingBottom: "50px" }}
            transition={{ duration: 2, type: 'spring' }}
            animate={{ opacity: 1, y: 0 }}
          >
            <>
              <img
                className={s.imgProfile}
                src={nachoPic}
                alt="NachoIconic"
                width="100px"
                height="100px"
              />
              <h2 className={s.name} style={{ color: "white", fontFamily: 'Poppins', fontWeight: '300', filter: 'drop-shadow(0px 0px .1px yellow)' }}>Ignacio Melgarejo</h2>
              <h3 className={s.alias} style={{ color: "white", fontWeight: 'thin' }}>nachoiconic</h3>
            </>
            <p style={{ color: 'white', fontFamily: 'Poppins' }}>
              FullStack Web Developer
            </p>

          </motion.div>
        </a>

      </div>

    </div>
  )
}