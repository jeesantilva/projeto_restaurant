'use client'
import Image from "next/image"
// importando imagens
import Entrada from "../../../public/assets/entrada.png"
import Massa from "../../../public/assets/massa.png"
import Carne from "../../../public/assets/carne.png"
import Bebida from "../../../public/assets/bebidas.png"
import Salada from "../../../public/assets/salada.png"
import Sobremesa from "../../../public/assets/sobremesa.png"
// importando estilo
import style from "./buttons.module.css"

const Buttons = ({handleFiltre, botaoClicado }) => {
    return(
        <div className={style.container_btns}>
            <button className={botaoClicado === "Entradas" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Entradas")}>
                <Image className={style.img_btn} src={Entrada} />
                <p>Entradas</p>
            </button>
            <button className={botaoClicado === "Massas" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Massas")}>
                <Image className={style.img_btn} src={Massa} />
                <p>Massas</p>
            </button>
            <button className={botaoClicado === "Carnes" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Carnes")}>  
                <Image className={style.img_btn} src={Carne} />
                <p>Carnes</p>
            </button>
            <button className={botaoClicado === "Bebidas" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Bebidas")}>
                <Image className={style.img_btn} src={Bebida} />
                <p>Bebidas</p>
            </button>
            <button className={botaoClicado === "Saladas" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Saladas")}>
                <Image className={style.img_btn} src={Salada} />
                <p>Saladas</p>
            </button>
            <button className={botaoClicado === "Sobremesas" ? style.btnAtivo : style.bntDesativo} onClick={() => handleFiltre("Sobremesas")}>
                <Image className={style.img_btn} src={Sobremesa} />
                <p>Sobremesas</p>
            </button>
        </div>
    )
}
export default Buttons;