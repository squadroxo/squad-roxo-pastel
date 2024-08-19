import styles from "./ContainerMembro.module.scss";
import iconLinkedin from "/linkedin-icon.png"

interface IContainerMembroProps {
  nomeMembro: string,
  funcao: string,
  linkLinkedin: string,
  foto: string
  sobreMembro?: string,
  primario?: boolean,
}

export default function ContainerMembro({ foto, funcao, linkLinkedin, nomeMembro, sobreMembro, primario }: IContainerMembroProps){
  const tamanhoTela = window.innerWidth;


  return (
    tamanhoTela >= 500
    ? (
      <div className={styles.container} style={{ flexDirection: primario ? "row" : "row-reverse" }}>
      <div className={styles.container__containerFoto}>
        <img src={foto} alt={`Foto do(a) ${nomeMembro}`} className={styles.container__containerFoto__foto}/>
      </div>
      <div className={styles.container__containerInfos}>
        <div className={styles.container__containerInfos__pessoa}>
          <div className={styles.container__containerInfos__pessoa__txt}>
            <h1 className={styles.container__containerInfos__pessoa__txt__nome}>{nomeMembro}</h1>
            <h2 className={styles.container__containerInfos__pessoa__txt__funcao}>{funcao}</h2>
          </div>
          <a href={linkLinkedin} target="_blank" className={styles.container__containerInfos__pessoa__icon}>
            <img src={iconLinkedin} alt="Logo Linkedin" className={styles.imagemLinkedin}/>
          </a>
        </div>
        <div className={styles.container__containerInfos__containerSobre}>
          <p className={styles.container__containerInfos__containerSobre__sobre}>{sobreMembro}</p>
        </div>
      </div>
    </div>
    )
    :
    <>
      <div className={styles.container}>
        <div className={styles.container__containerFoto}>
          <img src={foto} alt={`Foto do(a) ${nomeMembro}`} className={styles.container__containerFoto__foto}/>
        </div>
        <div className={styles.container__containerInfos}>
          <div className={styles.container__containerInfos__pessoa}>
            <div className={styles.container__containerInfos__pessoa__txt}>
              <h1 className={styles.container__containerInfos__pessoa__txt__nome}>{nomeMembro}</h1>
              <h2 className={styles.container__containerInfos__pessoa__txt__funcao}>{funcao}</h2>
            </div>
            <a href={linkLinkedin} target="_blank" className={styles.container__containerInfos__pessoa__icon}>
              <img src={iconLinkedin} alt="Logo Linkedin" className={styles.imagemLinkedin}/>
            </a>
          </div>
          <div className={styles.container__containerInfos__containerSobre}>
            <p className={styles.container__containerInfos__containerSobre__sobre}>{sobreMembro}</p>
          </div>
        </div>
      </div>
    </>
  )
}