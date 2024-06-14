import styles from './ContainerRoxoPastel.module.scss';
import logo1 from "../../../public/logo_pipoca 1.png";
import logo2 from '../../../public/pipoca_agil.png';
import dente from '../../../public/dente1.png';


export default function ContainerRoxoPastel() {
    return (
        <>
            <header className={styles.cabecalho}>
                <img  src={logo1} alt="Logo do projeto Pipoca" />
                <img  src={logo2} alt="Logo do Pipoca Ágil" />
            </header>

            <div className={styles.home}>
                <img src={dente} alt="Imagem de um dente" />
                <div>
                    <h1>Squad <br /> <span>Roxo Pastel</span></h1>
                    <p>Conheça nossa equipe Roxo Pastel!</p>
                </div>
            </div>
        </>
    );
}

