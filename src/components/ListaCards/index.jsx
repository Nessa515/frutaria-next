import styles from './styles.module.css';
import Cards from '@/components/Cards'

const ListaCards = (props) => {

    const cards = [
        {
        id: 0,
        fruta: "Melancia",
        imagem: "imagens/melancia.png",
        preco: "R$ 10,00"
        },
        {
          id: 1,
          fruta: "Tangerina",
          imagem: "imagens/tangerina.png",
          preco: "R$ 3,00"
        },
        {
          id: 2,
          fruta: "Abacate",
          imagem: "imagens/abacate.png",
          preco: "R$ 7,90"
        },
        {
          id: 3,
          fruta: "Laranja",
          imagem: "imagens/laranja.png",
          preco: "R$ 12,00"
        },
        {
          id: 4,
          fruta: "Banana",
          imagem: "imagens/banana.png",
          preco: "R$ 12,50"
        },
        {
          id: 5,
          fruta: "Mertilio",
          imagem: "imagens/melancia.png",
          preco: "R$ 18,00"
        },
        {
          id: 6,
          fruta: "Açai",
          imagem: "imagens/melancia.png",
          preco: "R$ 10,00"
        },
        {
          id: 7,
          fruta: "Biriba",
          imagem: "imagens/melancia.png",
          preco: "R$ 8,50"
        }
      ]
    
      return(
        <div className={styles.listaCards}>
        {cards.map((card) => (
            <Cards
            key={card.id}
            fruta={card.fruta}
            imagem={card.imagem}
            preco={card.preco}
            />

           
        ))}
        </div>
      )    
        
}

export default ListaCards;