import React from "react";
import { Route, Routes } from "react-router-dom";
import { Administration } from "./Administration";
import { MenuOptions } from "./MenuOptions";
import { OrderState } from  "./OrderState";
import { OrderStateChef } from "./OrderStateChef";
import { Products } from "./Products";
import { Users } from "./Users";


function RoutesByRole() {
  const userActived = localStorage.getItem("userRole");

  return (
    <>
      {userActived === "admin" ? (
        <Routes>
          <Route path="/admin" element={<Administration />}></Route>
          <Route path="/menuOptions" element={<MenuOptions />}></Route>
          <Route path="/orderState" element={<OrderState />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="/products" element={<Products />}></Route>
        </Routes>
      ) : null}
      {userActived === "mesero" ? (
        <Routes>
          <Route path="/menuOptions" element={<MenuOptions />}></Route>
          <Route path="/orderState" element={<OrderState />}></Route>
        </Routes>
      ) : null}
      {userActived === "chef" ? (
        <Routes>
          <Route path="/orderStateChef" element={<OrderStateChef />}></Route>
        </Routes>
      ) : null}
    </>
  );
}

export default RoutesByRole; 
