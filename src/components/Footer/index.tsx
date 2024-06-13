import styles from "./Footer.module.scss";
import { FaSpotify, FaYoutube, FaLinkedin } from "react-icons/fa";
import dentinho from "../../../public/dentinho.png";
import pipoca from "../../../public/pipoca_agil.png";
import urso from "../../../public/logo_pipoca 1.png";
import dentesFooter from "../../../public/dentes-footer.png";


export default function Footer(){
  return (
    <footer className={styles.container}>
      <img src={dentesFooter} alt="Dentes correndo" className={styles.fotoFooter}/>
      <div className={styles.container__esquerda}>
        <img src={urso} alt="Imagem de um urso" />
        <img src={pipoca} alt="Logo do Pipoca Ágil" />
      </div>
      <div className={styles.container__central}>
        <div>
          <FaSpotify size={57} color="#1DB954"/>
          <FaYoutube size={57} color="red"/>
          <FaLinkedin size={57} color="blue"/>
        </div>
        <p>&copy; 2003 - 2024 Todos os direitos reservados.</p>
      </div>
      <img src={dentinho} alt="" />
    </footer>
  )
}