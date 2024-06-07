import ContainerMembro from "../ContainerMembro";
import styles from "./SquadSection.module.scss"

export default function SquadSection(){
  return (
    <article className={styles.container}>
      <h2 className={styles.container__tituloSquad}><strong>Membros</strong> da Squad</h2>
      <ContainerMembro 
        foto="devs/ari-dev.png"
        funcao="Front-end Develotooth"
        linkLinkedin="https://github.com/iuricode/padroes-de-commits"
        sobreMembro="Graduada em Administração de Empresas, por não ter me identificado na área, e gostar muito de tecnologia, entrei em processo de transição de carreira para a área de TI. Sou uma profissional com o perfil hands-on, atualmente estou atuando em um projeto (voluntario) como FRONT-END no 'PIPOCA ÁGIL', e trabalhando como recuperadora de credito na empresa LOCALCRED, estou sempre em buscando aprimorar meus conhecimentos."
        nomeMembro="Ari Dell"
      />
    </article>
  )
}