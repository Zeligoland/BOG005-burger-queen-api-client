import React, { useEffect } from "react";
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import ButtonAll from "../components/Button";
import { useState } from "react";
import { getProducts, orderPetition } from "../helpers/axios";
import ListProducts from "../components/ListProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import CardProductsOrder from "../components/CardProductsOrder";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

import { OrderState } from "../routes/OrderState";
import { Products} from "../routes/Products";

/* export function MenuOptions() {
  const navegate = useNavigate();

  const [productsOptions, setProductsOptions] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [nameClient, setNameClient] = useState("");

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

  // Funcion para agregar productos al pedido
  const addProductOrder = (props) => {
    let productInOrder = orderList
      .map((product) => product.product.id)
      .includes(props.id);

    if (productInOrder) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Producto ya agregado a la orden!",
      });
    } else {
      setOrderList([...orderList, { qty: 1, product: props }]);
    }
  };

  const totalPrice = orderList
    .map((product) => product.product.price * product.qty)
    .reduce((sum, val) => sum + val, 0);

  const handleChange = (e) => {
    setNameClient(e.target.value);
  };

  const sendOrderPetition = async (e) => {
    e.preventDefault();
    try {
      const res = await orderPetition(orderList, nameClient);
      if (res === 201) {
        navegate("/orderState");
      }
    } catch {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Algo ocurrió y no se pudo crear la orden!",
      });
    }
  };

  return (
    <section className="order">
      <Header />
      <ButtonAll
        className="btnStateOrder"
        onClick={() => {
          navegate("/orderState");
        }}
        text="Estado Pedidos"
      >
        <FontAwesomeIcon className="iconArrow" icon={faCircleArrowRight} />
      </ButtonAll>
      <div className="containerH1">
        <h1>Realizar Pedido</h1>
      </div>
      <section className="mainlist">
        <div className="optionsListContainer">
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
                  clickAdd={() => addProductOrder(product)}
                ></ListProducts>
              </div>
            );
          })}
        </div>
        <form
          typeof="submit"
          className="formOrder"
          onSubmit={sendOrderPetition}
        >
          <p className="pOrderSummary">Resumen del pedido</p>
          <FormInput
            className="inputNameClient"
            value={nameClient}
            required
            placeholder="Nombre del cliente"
            onChange={handleChange}
          ></FormInput>
          <section className="containerLabels">
            <p>Producto</p>
            <p>Precio</p>
            <p>Cantidad</p>
            <p>Opciones</p>
          </section>
          <div className="containerProductsAdmin">
            {orderList.map((product, id) => (
              <div key={id}>
                <CardProductsOrder
                  productSelect={product}
                  orderList={orderList}
                  setOrderList={setOrderList}
                />
              </div>
            ))}
          </div>

          <div className="totalPrice">
            <p>Total</p>
            <p>${totalPrice}</p>
          </div>
          <section className="sectionBtn">
            <ButtonAll text="Enviar" className="btnEnviar"></ButtonAll>
            <ButtonAll text="Cancelar" className="btnCancel"></ButtonAll>
          </section>
        </form>
      </section>
    </section>
  );
} */

export function MenuOptions() {
  const navigate = useNavigate();
  return (
    <div>     
      <Header/>
      <div className="options-container">
        <section
          className="options-block"
          onClick={() => navigate(Products)}
        >
          <h3>Desayuno</h3>
        </section>
        <section
          className="options-block"
          onClick={() => navigate(Products)}
        >
          <h3>Almuerzo y Cena</h3>
        </section>
        <section
          className="options-block"
          onClick={() => navigate(OrderState)}
        >
          <h3>Pedido</h3>
        </section>
      </div>

      <section className="breakfastMenu">
        <button className="botonBreakfas">Café americano</button>
        <button className="botonBreakfas">Café con leche</button>
        <button className="botonBreakfas">Sandwich de jampon y queso</button>
        <button className="botonBreakfas">Jugo de frutas natural</button>
      </section>

      <section className="lunchDinnerMenu">
        <h5>Hamburguesas</h5>
        <button className="botonLunchDinner">Hamburguesa simple</button>
        <button className="botonLunchDinner">Hamburguesa doble</button>
        <h5>Acompañamientos</h5>
        <button className="botonLunchDinner">Papas fritas</button>
        <button className="botonLunchDinner">Aros de cebolla</button>
        <h5>Para tomar</h5>
        <button className="botonLunchDinner">Agua 500ml</button>
        <button className="botonLunchDinner">Agua 700ml</button>
        <button className="botonLunchDinner">Bebida/gaseosa 500ml</button>
        <button className="botonLunchDinner">Bebida/gaseosa 700ml</button>
      </section>
    </div>
  );
} 
