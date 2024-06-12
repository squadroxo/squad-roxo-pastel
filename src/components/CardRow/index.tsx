import Card from "../Card";
import styles from "./CardRow.module.scss";

interface CardRowProps {
    tituloRows: string;
    titulo1: string;
    texto1: string;
    titulo2: string;
    texto2: string;
    titulo3: string;
    texto3: string;
}
export default function CardRow({tituloRows,titulo1, texto1, titulo2, texto2, titulo3, texto3}: CardRowProps) {
    return(
        <>
            <h1 className={styles.tituloRows} >{tituloRows}</h1>
            <div className={styles.cards}>
                
                <Card  
                    titulo={titulo1}
                    texto={texto1}
                />
                <Card 
                    titulo={titulo2}
                    texto={texto2}
                />
                <Card 
                    titulo={titulo3}
                    texto={texto3}
                />
                
               
            </div>
        </>
        
    );


}