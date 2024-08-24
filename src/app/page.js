'use client'
import {useState} from "react"
import {searchProducts, filterProducts , EntraceProducts} from "../service"

// importando componentes
import Header from "@/components/header";
import Buttons from "@/components/buttons";
import SearchField from "@/components/searchField";
import Card from "@/components/cards";


// importando estilo
import styles from "./page.module.css";

export default function Home() {
  
  const [dadosFiltrados, setDadosFiltrados] = useState(EntraceProducts);
  const [textoBuscaDigitado, setTextoBuscaDigitado] = useState("");

  const [botaoClicado , setBotaoClicado] = useState("Entradas");

  const handleBusca = (textoDigitado) =>{
    setTextoBuscaDigitado(textoDigitado);
    textoDigitado.length >= 3 && setDadosFiltrados(searchProducts(textoDigitado));
    setBotaoClicado("");
  }

  const handleFiltre = (categoria) => {
    setTextoBuscaDigitado("");
    setDadosFiltrados(filterProducts(categoria));
    setBotaoClicado(categoria);
  }





  return (
    <div className={styles.body}>
      <Header />
      <main>
        <section className={styles.section_menu}>
          <Buttons handleFiltre={handleFiltre} botaoClicado={botaoClicado} />
          <SearchField textoBuscaDigitado={textoBuscaDigitado} handleBusca={handleBusca} />
        </section> 
        <section className={styles.section_cardapio}>
          <h2>Cardápio</h2>
          <div className={styles.container_cards}>
            {dadosFiltrados.map((produto) => (
              <Card key={produto.id} produto={produto}/> 
              ))}
          </div>
        </section>
      </main>


      
    </div>
  );
}
