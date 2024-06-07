import styles from "./ContainerMembro.module.scss";
import { FaLinkedin } from "react-icons/fa";

interface IContainerMembroProps {
  nomeMembro: string,
  funcao: string,
  linkLinkedin: string,
  sobreMembro: string,
  foto: string
}

export default function ContainerMembro({ foto, funcao, linkLinkedin, nomeMembro, sobreMembro }: IContainerMembroProps){
  return (
    <div className={styles.container}>
      <div className={styles.container__containerFoto}>
        <img src={foto} alt={`Foto do(a) ${nomeMembro}`} className={styles.container__containerFoto__foto}/>
      </div>
      <div className={styles.container__containerInfos}>
        <div className={styles.container__containerInfos__pessoa}>
          <div>
            <h1 className={styles.container__containerInfos__pessoa__nome}>{nomeMembro}</h1>
            <h2 className={styles.container__containerInfos__pessoa__funcao}>{funcao}</h2>
          </div>
          <a href={linkLinkedin} target="_blank">
            <FaLinkedin size={40}/>
          </a>
        </div>
        <p className={styles.container__containerInfos__sobre}>{sobreMembro}</p>
      </div>
    </div>
  )
}