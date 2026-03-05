import React from "react";
import { Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AddContact } from "./pages/AddContact";


const Rutas = ( 
<>
  <Route element={<Home/>} path="/" />
  <Route element={<AddContact/>} path="/add-contact"/>
  <Route element={<AddContact/>} path="/edit/:id"/>
  <Route element={<h1>Not Found</h1>} path="*"/>
</>
);

export default Rutas;