import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../services/api";
import {Toaster,toast} from "react-hot-toast";

export const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const [productList, setProductList] = useState([]);
  const [cartList, setCartList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

 const localFavoriteburguer = localStorage.getItem("@MYFAVORITEBURGUER");

  const [favoriteBurguer, setFavoriteBurguer] = useState(
    localFavoriteburguer ? JSON.parse(localFavoriteburguer) : []
    );

  useEffect(() => {
    const getBurgers = async () => {
      try {
        setLoading(true);
        const { data } = await api.get("products");
        setCartList(data);
        setProductList(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBurgers();
  }, []);
 
  useEffect(() => {
    localStorage.setItem("@MYFAVORITEBURGUER", JSON.stringify (favoriteBurguer));
  },[favoriteBurguer])

  const addBurguer = (list) => {
    if (!favoriteBurguer.some((favoriteList) => favoriteList.id === list.id)) {
      setFavoriteBurguer([...favoriteBurguer, list]);
      toast.success("Burguer adicionado ao carrinho!");
    } else {
      toast.error("Burguer já foi adicionado");
    }
  };

  const removeBurguer = (listId) => {
    const newFavoriteBurguer = favoriteBurguer.filter(
      (burguer) => burguer.id !== listId
    );
    setFavoriteBurguer(newFavoriteBurguer);
  };
 
 
  
  return (
    <>
        <Toaster /> {}
      <Header favoriteBurguer={favoriteBurguer} setIsOpen={setIsOpen} />
      <main>
        {loading ? (
          <p>Carregando...</p>
        ) : (
          <section>
           
             
            <ProductList
              productList={productList}
              setIsOpen={setIsOpen}
              addBurguer={addBurguer}
              isOpen={isOpen}
            />
            {isOpen && (
              <CartModal
                setIsOpen={setIsOpen}
                removeBurguer={removeBurguer}
                favoriteBurguer={favoriteBurguer}
              />
            )}
          </section>
        )}
      </main>
    </>
  );
}

