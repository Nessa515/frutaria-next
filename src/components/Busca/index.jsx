import styles from './styles.module.css'

const Busca = () => {
    return(
        <div className={styles.busca}>
            <h2>Nome da fruta:</h2>
            <input/>
            <img src="/imagens/bottom.png" alt="Busca" />
            <p>Buscar</p>
        </div>
    )
}

export default Busca;