import { MdDelete } from "react-icons/md";
import style from "./style.module.scss";

export const CartItemCard = ({ product, removeBurguer }) => {
  return (
    <li className={style["li"]}>
      <div>
        <img src={product.img} alt={product.name} />
        <div className={style["div-price"]}>
          <h3>{product.name}</h3>
          <p>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
      <button aria-label="delete" title="Remover item">
        <MdDelete size={21} onClick={() => removeBurguer(product.id)} />
      </button>
    </li>
  );
};
