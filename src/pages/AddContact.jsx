import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalReducer  from "../hooks/useGlobalReducer.jsx";
import { CreateContact } from "../pages/fetch.js";


export const AddContact = () => {
    const { dispatch } = useGlobalReducer();
    const navigate = useNavigate();


    const [nuevoContacto, setNuevoContacto] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
    });


    const actualizarDatos = (e) => {
        const { name, value } = e.target;
        setNuevoContacto({
            ...nuevoContacto,
            [name]: value,
        });
    };


    const guardarContacto = async (e) => {
        try{
        e.preventDefault();
        console.log("Guardando contacto:", nuevoContacto); 

        const contactoCreado = await CreateContact(nuevoContacto, dispatch);
        if (contactoCreado){ navigate("/");}  /* Si el contacto se creó correctamente, lo lleva a la página principal */
    }
     catch (error) {
        console.error("Error al guardar el contacto:", error);
    }
    };

    return (
        <div className="contenedor-pagina">
            <div className="formulario-contacto">
                <h1 className="formulario">Añadir Nuevo contacto</h1>
               <form onSubmit={guardarContacto} className="editor-contacto">
                    <div className="grupos-fom">
                        <label>Nombre Completo</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nombre y Apellidos"
                            onChange={actualizarDatos}
                            required
                        />
                    </div>


                    <div className="grupos-fom">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="correo@ejemplo.com"
                            onChange={actualizarDatos}
                            required
                        />
                    </div>

                    <div className="grupos-fom">
                        <label>Telefono</label>
                        <input
                            type="text"
                            name="phone"
                            placeholder="Escribe un número de teléfono"
                            onChange={actualizarDatos}
                            required
                        />
                    </div>

                    <div className="grupos-fom">
                        <label>Dirección</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Dirección completa"
                            onChange={actualizarDatos}
                            required
                        />
                    </div>

                    <div className="botones-formulario">
                        <button type="submit" className="guardar">Guardar Contacto</button>
                        <Link to="/" className="volver">Volver a la Agenda</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};


