
import style from "./style.module.scss"


export const ProductCard = ({ product,setIsOpen,addBurguer,isOpen}) => {
   
    return(
        
        <li className={`${style["modal-disable"]} ${isOpen ? style["modal-active"] : null}`} tabindex="0">
            <div className={style["div-img"]}>
              <img src={ product.img} alt={ product.name} />   
            </div>
            <div className={style["div-character"]}>
                <h3>{ product.name}</h3>
                <span>{ product.category}</span>
                <span class={style["span-value"]}>{ product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
              <button onClick={() => {addBurguer(product);setIsOpen(true)}}>Adicionar</button>
            </div> 
        </li>
    )
}
