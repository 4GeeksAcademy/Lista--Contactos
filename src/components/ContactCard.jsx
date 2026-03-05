import React, {useState} from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { DeleteContact } from "../pages/fetch.js";
import { Link } from "react-router-dom";

export const ContactCard = ({ contact }) => {
  const { dispatch } = useGlobalReducer();
  const [showModal, setShowModal] = useState(false);

  if (!contact) return null; //validacion de seguridad para evitar errores.

  return (
    <div className="tarjeta-contacto">
     <img src="https://www.cps.pt/media/_versions/artistas/dali_large.jpg"
     alt="contacto" 
     className="foto-contacto" />
            
            
            <div className="informacion-contacto">
            <h3>{contact.name}</h3>
            <p><i className="fas fa-envelope"></i> {contact.email}</p>
            <p><i className="fas fa-phone"></i> {contact.phone}</p>
            <p><i className="fas fa-map-marker-alt"></i> {contact.address}</p>
        </div>

        <div className="accion-contacto">
            <Link to={`/edit/${contact.id}`} className="boton-editar">
            <i className="fas fa-pencil-alt"></i>
            Editar
            </Link>
        
            <button  onClick={() => setShowModal(true)} className="boton-borrar">
            <i className="fas fa-trash-alt"></i>
            Eliminar
            </button>
        </div>

        {showModal && (
            <div className="aviso-modal">
            <div className="contenido-modal">
                <h3>¿Estás seguro de eliminar este contacto?</h3>
                <p>Vas a eliminar este contacto de tu lista</p>
                <div className="botones-avisos">
                    <button onClick={() => setShowModal(false)} className="boton-cancelar">Cancelar</button>
                    <button onClick={() => {
                        DeleteContact(contact.id, dispatch);
                        setShowModal(false);
                    }}>
                    ¡Sí, eliminar!</button>
                </div>
            </div>
            </div> 
        )}
                </div> 
                );
            };


             
             
       