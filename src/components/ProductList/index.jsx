import { ProductCard } from "./ProductCard";
import style from "./style.module.scss"

export const ProductList = ({ productList,setIsOpen ,addBurguer,isOpen}) => {
  
   return (
      <ul className={style.ul}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product}  setIsOpen={setIsOpen} addBurguer={addBurguer} isOpen={isOpen}/>
         ))}
      </ul>
   );
};
