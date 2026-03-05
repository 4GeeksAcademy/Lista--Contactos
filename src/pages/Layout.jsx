import React from "react"
import {BrowserRouter, Routes} from "react-router-dom";
import Rutas from "../routes.jsx";
import { StoreProvider } from "../hooks/useGlobalReducer.jsx";
import { Navbar } from "../components/Navbar"
import { Footer } from "../components/Footer"
import "../index.css";

// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
const Layout = () => {
    return (

        <StoreProvider>
            <div className="layout">
                <BrowserRouter>
               <Navbar/>
                    <Routes>
                        {Rutas}
                    </Routes>
                     <Footer/>
                </BrowserRouter>
            </div>
        </StoreProvider>
    );
};
export default Layout;
