import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {ContactCard} from "../components/ContactCard.jsx";
import {GetAllUsers} from "../pages/fetch.js";


export const Home = () => {

  const {store, dispatch}= useGlobalReducer();
   useEffect(() => {
	GetAllUsers(dispatch);
  }, []);

	return (
		<div className="contenedor-principal">
			<header className="header">
				<h1>Lista de Contactos</h1>
				<Link to="/add-contact">  <button className="boton-añadir">
					<i className="fas fa-plus"></i> Agregar nuevo Contacto
					</button>
				</Link>
			</header>

         <main className="contenedor-contactos">
			{store.usuarios && store.usuarios.length > 0 ? (
				store.usuarios.map((contacto) => {
              return (
				<ContactCard 
				key={contacto.id}
				contact={contacto}/> );
				})): 
				(
			<div className="agenda-vacia">
			<p>Tu agenda está vacía Añade un contacto</p>
			</div>
			)}
		</main>
		</div>
	);
};


