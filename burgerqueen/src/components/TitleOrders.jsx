import React from 'react'

const TittleOrders = () => {

  const emailUserTitle = localStorage.getItem('userEmail')
  const roleUserTitle = localStorage.getItem('userRole')

  return (
    <>
      <div className='tittleOrders'>        
        <h1>SISTEMA DE PEDIDOS</h1>
      </div>
      <div className='contP'>
        <p>{emailUserTitle} - {roleUserTitle}</p>
      </div>
    </>
  )
}

export default TittleOrders