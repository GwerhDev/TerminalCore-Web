import s from './ConnectedApps.module.css';
import { motion } from 'framer-motion';

export const ConnectedApps = (props) => {
  const { apps } = props
  return (
    <div className={s.bgCanvas}>
      <div className={s.divTitle}>
        <section className={s.sectionCont}>
          <div className={s.contApps}>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              viewport={{once: false}}
              transition={{duration: 1}}
              >
              <h1 className={s.title}>Aplicaciones Conectadas</h1>
            </motion.div>
              <ul className={s.listPages}>
                {
                  apps?.map((e, index)=>{
                    return(
                      <motion.div
                      initial={{opacity: 0}}
                      whileInView={{opacity: 1}}
                      viewport={{once: false}}
                      transition={{duration: 1.5}}
                      >
                      <li className={s.pagesIcon} key={`app${index}`}>
                        <a className={s.link} rel="noreferrer" target='_blank' href={e.url}>
                          <img src={e.idImg} className={s.imgApps} alt={e.name} width="120px" />
                        </a>
                      </li>
                    </motion.div>
                    )
                  })
                }
              </ul>
            <h2>Aplicaciones interactivas, multimedia, E-commerce y mucho más...</h2>
          </div>
        </section>
      </div>
    </div>
  )
}