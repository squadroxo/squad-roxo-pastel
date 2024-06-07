import ContainerMembro from "../ContainerMembro";
import styles from "./SquadSection.module.scss";
import dados from './infos.json';

export default function SquadSection(){
  return (
    <article className={styles.container}>
      <h2 className={styles.container__tituloSquad}><strong>Membros</strong> da Squad</h2>
      {
        dados.map(membro => <ContainerMembro 
          key={membro.id}
          foto={membro.foto}
          funcao={membro.funcao}
          linkLinkedin={membro.linkLinkedin}
          nomeMembro={membro.nomeMembro}
          sobreMembro={membro.sobreMembro}
        />)
      }
    </article>
  )
}