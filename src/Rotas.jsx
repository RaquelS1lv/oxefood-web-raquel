import React from 'react';
import { Route, Routes } from "react-router-dom";
import ListCliente from './views/cliente/ListCliente';
import ListProduto from './views/produto/ListProduto';
import FormCliente from './views/cliente/FormCliente';
import Home from './views/home/Home';
import FormProduto from './views/produto/FormProduto';

function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="list-cliente" element={ <ListCliente/> } />
                <Route path="list-produto" element={ <ListProduto/> } />
                <Route path="form-cliente" element={ <FormCliente/> } />
                <Route path="form-produto" element={ <FormProduto/> } />
        
            </Routes>
        </>
    )
}

export default Rotas
