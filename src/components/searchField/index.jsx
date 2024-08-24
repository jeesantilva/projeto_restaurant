'use client'
import Image from "next/image"
import style from "./search.module.css"
import Lupa from "../../../public/assets/lupa.png"

const SearchField = ({ textoBuscaDigitado, handleBusca })=> {
    return(
        <div className={style.container_input}>
            <Image src={Lupa} className={style.img_input} />
            <input type="text" value={textoBuscaDigitado}
            onChange={(event) => handleBusca(event.target.value)} 
            placeholder="Pesquise aqui um dos pratos do nosso cardápio"/>
        </div>
    )
}

export default SearchField;