import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './routes/Login';
import { Waiters } from './routes/Waiters';
import { Chef } from './routes/Chef';
import { Admin } from './routes/Admin';
import { Layout } from './layout';


ReactDOM.render(
<BrowserRouter>
    <Routes>
        <Route path='/' element={<Layout/>}>       
            <Route index element={<Login />} />            
            <Route path='waitersView' element={<Waiters />} />
            <Route path='chefView' element={<Chef/>} />
            <Route path='adminView' element={<Admin />} />
            <Route path='*' element={<div>404 -Not found</div>} />
        </Route>         
    </Routes>

</BrowserRouter>, 
document.getElementById("root")
);
 

