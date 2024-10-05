import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import { useKeydowm } from "../../hooks/useKeydowm";
import style from "./style.module.scss";

export const CartModal = ({ setIsOpen, favoriteBurguer,removeBurguer,
}) => {
 
  const total = favoriteBurguer.reduce((prevValue, produce) => {
    return prevValue + produce.price;
  }, 0);

  const buttonRef = useKeydowm("Escape", (element) => {
    element.click();
  });

  return (
    <div role="dialog" className={style["ul-modal"]}>
      <div className={style["modal-Box"]}>
        <div className={style["modal-affection"]}>
          <h2>Carrinho de compras</h2>
          <button
            aria-label="close"
            title="Fechar"
            ref={buttonRef}
            onClick={() => setIsOpen(false)}
          >
            <MdClose size={21} />
          </button>
        </div>
        <div className={style["div-ul"]}>
          <ul>
            {favoriteBurguer.map((product) => (

              <CartItemCard
                key={product.id}
                product={product}
                removeBurguer={removeBurguer}
              />
            ))}
          </ul>
        </div>
        <div className={style["div-button"]}>
          <div className={style["div-total"]}>
            <span>Total</span>
            <span className={style["span-total"]}>
              {total.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button>Remover todos</button>
        </div>
      </div>
    </div>
  );
};
