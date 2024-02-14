import React from 'react'
import { Routes, Route } from "react-router-dom";
import LoginUser from '../vusuario/loginUser';
import RegisterUser from '../vusuario/registerUser';
import ListaCuenta from '../vcuenta/listaCuenta';
import FormCuenta from '../vcuenta/formCuenta';
import ListaCategoria from '../vcategoria/listaCategoria';
import FormCategoria from '../vcategoria/formCategoria';
import DetalleMovimientos from '../vmovimiento/detalleMovimientos';
import FormMovimiento from '../vmovimiento/formMovimiento';
import FormTransferencia from '../vmovimiento/formTransferencia';

const RouterConfig = () => {
    return (<Routes>
        <Route path="/" element={<LoginUser />} />
        <Route path="/register" element={<RegisterUser />} />

        <Route path="/cuenta" element={<ListaCuenta />} />
        <Route path="/cuenta/create" element={<FormCuenta />} />

        <Route path="/categoria" element={<ListaCategoria />} />
        <Route path="/categoria/create" element={<FormCategoria />} />

        <Route path="/movimiento" element={<DetalleMovimientos />} />
        <Route path="/movimiento/create" element={<FormMovimiento />} />
        <Route path="/movimiento/transferir" element={<FormTransferencia />} />

    </Routes>);
}

export default RouterConfig;