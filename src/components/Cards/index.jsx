import styles from './styles.module.css';

const Cards = ({fruta, imagem, preco}) => {

    return(
        <div className={styles.card}>
            <img src={imagem}alt="Melancia" />
            <p className={styles.fruta}>{fruta}</p>
            <p className={styles.preco}>{preco}</p>
        </div>
    )
}

export default Cards;