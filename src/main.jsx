

import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './pages/Layout';

const Main = () => {
    return (
        <React.StrictMode>  
            <Layout />   
        </React.StrictMode>
    );
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main />)
