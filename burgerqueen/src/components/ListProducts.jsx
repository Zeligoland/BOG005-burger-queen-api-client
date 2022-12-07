import React from 'react'
import ButtonAll from './Button'

function ListProducts ({ product, clickAdd }) {


    return (
        <div className='listProductsContainer'>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>${product.price}</p>
            <ButtonAll  text='Agregar' className='btnAdd' onClick={() => clickAdd(product)} />
        </div>
    )
}

export default ListProducts

