import styles from './styles.module.css';

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
            <img src="/imagens/logo.png" alt="logo" />
            <h3>Frutaria</h3>
        </header>
    )
}

export default Cabecalho;