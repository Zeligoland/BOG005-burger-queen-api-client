import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Header from "../components/Header";
import FormInput from "../components/FormInput";
import { getProducts, orderPetition } from "../helpers/axios";
import ListProducts from "../components/ListProducts";
import CardProductsOrder from "../components/CardProductsOrder";
import Swal from 'sweetalert2';
import ButtonAll from "../components/Button";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export function MenuOptions() {

  const navigate = useNavigate()

  const [productsOptions, setProductsOptions] = useState([]);
  const [orderList, setOrderList] = useState([]);
  const [productsList, setProductsList] = useState([]);
  const [nameClient, setNameClient] = useState('')

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

  // Función para agregar productos al pedido
  const addProductOrder = (props) => {
    
    let productInOrder = orderList.map((product) => product.product.id).includes(props.id)
    
    if(productInOrder){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Producto ya agregado a la orden!'
        })
    } else {
        setOrderList([...orderList, { qty: 1, product: props }])
    }
}

const totalPrice = orderList.map((product) => product.product.price * product.qty).reduce((sum, val) => sum + val, 0)

const handleChange = (e) => {
    setNameClient(e.target.value)
}

const sendOrderPetition = async (e) => {
    e.preventDefault()
    try {
        const res = await orderPetition(orderList, nameClient)
        if (res === 201) {
            navigate('/orderState')
        }
    } catch {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Algo ocurrió y no se pudo crear la orden!'
        })
    }
}

  return (
    <section className="order">
      <Header />
      <ButtonAll
        className="btnStateOrder"
        onClick={() => {navigate('/orderState')}}
        text="Estado de los pedidos">
          <FontAwesomeIcon className='iconArrow' icon={faCircleArrowRight}/>
      </ButtonAll>
      <div className="mainList">
        <p>Realizar Pedido</p>
      </div>
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
                  clickAdd={() => addProductOrder(product)}>
                  </ListProducts>
              </div>);
          })
          }          
        </section>
        <form typeof="submit" className="formOrder" onSubmit={sendOrderPetition}>
          <p className="pOrderSummary">Resumen del Pedido</p>
          <FormInput 
            className='inputNameClient'
            value={nameClient}
            requires
            placeholder='Nombre del cliente'
            onChange={handleChange}>            
          </FormInput>
          <section className="containerLabels">
            <p>Productos</p>
            <p>Precio</p>
            <p>Cant.</p>
            <p>Eliminar</p>
          </section>
          <div className="containerProductosAdmin">
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
            <ButtonAll text='Enviar' className='btnSend'></ButtonAll>
            <ButtonAll text='Cancelar' className='btnCancel'></ButtonAll>
          </section>
          
        </form>
      </section>
    </section>
  );
}


