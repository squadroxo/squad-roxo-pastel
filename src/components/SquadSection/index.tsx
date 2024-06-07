import ContainerMembro from "../ContainerMembro";
import styles from "./SquadSection.module.scss"

export default function SquadSection(){
  return (
    <article>
      <h2 className={styles.teste}>Membros do Squad</h2>
      <ContainerMembro />
    </article>
  )
}