

import style from "./header.module.css"
export default function Header() {
    return (
        <header className={style.header}>
            <div>
                <h1>RESTAURANT</h1>
                <p>De pratos clássicos a criações surpreendentes, nosso cardápio é um requinte de sabores refinados</p>
            </div>
        </header>
    )
}