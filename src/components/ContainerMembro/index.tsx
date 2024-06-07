import styles from "./ContainerMembro.module.scss"

export default function ContainerMembro(){
  return (
    <div className={styles.testeContainer}>
        <h1>Teste</h1>
        <h2>Subtitulo</h2>
        <p>Sobre a pessoa</p>
        <button>Icone Linkedin</button>
    </div>
  )
}