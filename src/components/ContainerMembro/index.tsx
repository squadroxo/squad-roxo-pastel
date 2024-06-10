import styles from "./ContainerMembro.module.scss";
import { FaLinkedin } from "react-icons/fa";

interface IContainerMembroProps {
  nomeMembro: string,
  funcao: string,
  linkLinkedin: string,
  foto: string
  sobreMembro?: string,
  primario?: boolean,
  fotoAuxiliar?: string
}

export default function ContainerMembro({ foto, funcao, linkLinkedin, nomeMembro, sobreMembro, primario = true, fotoAuxiliar }: IContainerMembroProps){
  return (
    <>
      <div className={styles.container}>
      <img src={fotoAuxiliar} className={ primario ? styles.container__fotoAuxiliar : styles.container__fotoAuxiliarSec}/>
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
              <FaLinkedin size={40} color="#0E46A8"/>
            </a>
          </div>
          <p className={styles.container__containerInfos__sobre}>{sobreMembro}</p>
        </div>
      </div>
    </>
  )
}