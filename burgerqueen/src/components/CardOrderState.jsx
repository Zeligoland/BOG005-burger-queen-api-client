import React from "react";
import ButtonAll from "../components/Button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { changeOrderToDelivering, deleteOrderPending } from "../helpers/axios";

const CardOrderState = ({ order }) => {

    const sendToDelivering = async () => {
      await changeOrderToDelivering(order.id)
    }
  
    const orderPendingDelete = async () => {
      await deleteOrderPending(order.id)
    }
  
    return (
      <>
        <div className="greyCont">
  
          <div className="divNameSend">
            <h3>{order.client}</h3>
            <p>Id mesero:{order.userId}</p>
            {
              order.products.map((product, id) => {
                return (
                  <div key={id} className='divProductStateOrder'>
                    <p>{product.product.name}</p>
                    <p>{product.qty}</p>
                  </div>
                )
              })
            }
          </div>
  
          <div className="divTime">
            <p>{order.dataEntry}</p>
          </div>
          <div className='btnContOrderState'>
            <div className='divCheck'>
              <ButtonAll><FontAwesomeIcon icon={faCheck} onClick={sendToDelivering} /></ButtonAll>
            </div>
            <div className='divCheckRed'>
              <ButtonAll><FontAwesomeIcon icon={faTrashCan} onClick={orderPendingDelete} /></ButtonAll>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default CardOrderState