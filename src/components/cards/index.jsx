import Image from "next/image";
import style from "./card.module.css"

const Card = ({ produto }) => {
    return (

        <div className={style.container_card}>
            <figure className={style.container_img}>
                <Image src={produto.imagem} alt={produto.nome} className={style.img_card} />
            </figure>
            <div className={style.container_text}>
                <div>
                    <h3>{produto.nome}</h3>
                    <small>{produto.categoria}</small>
                    <p>{produto.descricao}</p>
                </div>
                <div>
                    <p className={style.preco}>{new Intl.NumberFormat("pt-br", {style: "currency", currency: "BRL"}).format(produto.preco)}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;