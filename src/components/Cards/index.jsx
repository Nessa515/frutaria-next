import styles from './styles.module.css';

const Cards = (props) => {

    return(
        <div className={styles.card}>
            <img src="imagens/melancia.png" alt="Melancia" />
            <p className={styles.fruta}>Melancia</p>
            <p className={styles.preco}>R$ 3,00</p>
        </div>
    )
}

export default Cards;