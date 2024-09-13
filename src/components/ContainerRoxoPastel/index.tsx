import styles from './ContainerRoxoPastel.module.scss';
import logo1 from "/logo_pipoca 1.png";
import dente from '/dente_alegre_escova.svg';

export default function ContainerRoxoPastel() {
    return (
        <>
            <header className={styles.cabecalho}>
                <img className={styles.logo1} src={logo1} alt="Logo do projeto Pipoca" />
            </header>

            <div className={styles.home}>
                <img src={dente} alt="Um dente alegre segurando uma escova" className='fotoHome-dente'  width="1233" height="966"/>
                <div className={styles.homeTexto}>
                    <h1>Squad<br/><span>Roxo Pastel</span></h1>
                    <p>Conheça nossa equipe <span>Roxo Pastel!</span></p>
                </div>
            </div>
        </>
    );
}

