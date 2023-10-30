import { useState } from 'react'
import baralhoCartas from './assets/baralho-cartas.png';


// resultados
import cardUm from "./assets/carts/1.png";
import cardDois from "./assets/carts/2.png";
import cardTres from "./assets/carts/3.png";
import cardQuartro from "./assets/carts/4.png";
import cardCinco from "./assets/carts/5.png";
import cardSeis from "./assets/carts/6.png";
import cardSete from "./assets/carts/7.png";
import cardOito from "./assets/carts/8.png";
import cardNove from "./assets/carts/9.png";
import cardDez from "./assets/carts/10.png";
import cardOnze from "./assets/carts/11.png";
import cardDoze from "./assets/carts/12.png";
import cardTrese from "./assets/carts/13.png";






const App = () => {
  const [virarCarta, setVirarCarta] = useState("verso");
  const [imgCard, setImagCard] = useState(baralhoCartas);
  const [cartas] = useState([
    cardUm,
    cardDois,
    cardTres,
    cardQuartro,
    cardCinco,
    cardSeis,
    cardSete,
    cardOito,
    cardNove,
    cardDez,
    cardOnze,
    cardDoze,
    cardTrese,




  ])

  const sortearCarta = () => {
    if (virarCarta === "verso") {
      // trocar imagem carta
      setVirarCarta("frente");
      //criando randon das cartas 

      const index_resultado = Math.floor(Math.random() * (cartas.length));
      setImagCard(cartas[index_resultado]);

    } else {

      setVirarCarta("verso");
      setImagCard(baralhoCartas);
    }
  }

  return (
    <>
      <h1>Clicar para virar a carta! - {virarCarta} </h1>
      <div id="cartas">
        <img src={imgCard}
          onClick={sortearCarta}
        />
      </div>
    </>
  )
}

export default App
