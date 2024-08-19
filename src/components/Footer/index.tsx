import styles from "./Footer.module.scss";
import LogoYoutube from "../../../public/LogoYoutube.png";
import LogoLinkedin from "../../../public/LogoLinkedin.png";
import LogoSpotify from "../../../public/LogoSpotify.png";
import dentinho from "/dentinho.png";
import pipoca from "/pipoca_agil.png";
import dentesFooter from "/dentes-footer.png";


export default function Footer(){
  return (
    <footer className={styles.container}>
      <img src={dentesFooter} alt="Dentes correndo" className={styles.fotoFooter}/>
      <div className={styles.container__esquerda}>
        <a className={styles.logoPipoca}  href="https://pipocaagil.com.br/" target="_blank"><img src={pipoca} alt="Logo do Pipoca Ágil" /></a>
      </div>
      <div className={styles.container__central}>
        <div className={styles.container__links}>
          <a className={styles.spotify}  href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J?si=27d5abb36c16408f&nd=1&dlsi=e313a2412f91422d"  target="_blank"><img src={LogoSpotify} alt="Logo do Spotify ela redireciona para o podcast pipoca agil" /></a>
          <a className={styles.youtube} href="https://www.youtube.com/@PipocaAgil" target="_blank"><img src={LogoYoutube} alt="Logo do youtube ela redireciona para o canal do pipoca agil" /></a>
          <a className={styles.linkedin} href="https://www.linkedin.com/company/pipoca-%C3%A1gil/"  target="_blank"><img src={LogoLinkedin} alt="Logo do linkedin ela redireciona para o perfil do pipoca agil " /></a>
        </div>
        <p>&copy; 2003 - 2024 Todos os direitos reservados.</p>
      </div>
      <img src={dentinho} alt="" className={styles.dentinho}/>
    </footer>
  )
}