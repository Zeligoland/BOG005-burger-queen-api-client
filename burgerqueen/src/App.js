import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./routes/Login";
import { Administration } from "./routes/Administration";
import { MenuOptions } from "./routes/MenuOptions";
import { OrderState } from  "./routes/OrderState";
import { OrderStateChef } from "./routes/OrderStateChef";
import { Products } from "./routes/Products";
import { Users } from "./routes/Users";

import './/styles/Header.css';
import './/styles/MenuOptions.css';


function App () { 

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}/>        
          <Route path="/admin" element={<Administration />}></Route>
          <Route path="/menuOptions" element={<MenuOptions />}></Route>
          <Route path="/orderState" element={<OrderState />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/orderStateChef" element={<OrderStateChef />}></Route>
          <Route path="*" element={<div>404 -Not found</div>} />     
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App; 


/* import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './/styles/Login.css';
import './/styles/Header.css';
import './/styles/MenuOptions.css';
import './/styles/OrderListProduct.css';
import './/styles/ProductCardListProduct.css';
import './/styles/Administration.css';
import './/styles/OrderState.css';
import './/styles/Modal.css';
import './/styles/Users.css';


import { Login } from './routes/Login'
import RoutesByRole from './routes/RoutesByRol';

function App() {
  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/menuOptions' element={<RoutesByRole />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}

export default App; */