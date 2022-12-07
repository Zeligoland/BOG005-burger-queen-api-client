import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { getProducts } from "../helpers/axios";
import ListProducts from "../components/ListProducts";


export function MenuOptions() {
  const [productsOptions, setProductsOptions] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProductsOption = async () => {
      const result = await getProducts();
      setProductsOptions(result);
    };

    getProductsOption();
  }, [orderList]);

  const selectOption = (e) => {
    const resultFilter = productsOptions.filter((product) => {
      if (e.target.value === product.type) {
        return true;
      }
      return false;
    });
    setProductsList(resultFilter);
  };

  return (
    <div>
      <Header />
      <section className="options-container">
        <section className="optionsListContainer">
          <select className="optionMenu" onChange={selectOption}>
            <option value="Seleccione Desayuno/Almuerzo y Cena">
              Seleccione una opción
            </option>
            <option value="Desayuno">Desayuno</option>
            <option value="Almuerzo">Almuerzo y Cena</option>
          </select>
          {productsList.map((product, id) => {
            return (
              <div key={id} className="listProductsOrder">
                <ListProducts
                  product={product}
                  dataEntry={new Date()}                  
                ></ListProducts>
              </div>
            );
          })}
        </section>
      </section>
    </div>
  );
}


