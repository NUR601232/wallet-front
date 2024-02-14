import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {  Link } from "react-router-dom";
import { logOut } from './../services/authService';
import { useNavigate } from "react-router-dom";

const Menu = () => {
    
    const navigate = useNavigate();
    const handleLogout = (e) => {
        console.log('borra');
        e.preventDefault();
        // Elimina el contenido del localStorage al hacer clic en logout
        logOut();
        // Redirige al usuario a la página de inicio de sesión
        navigate('/');
        
    };


    return (
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Wallet</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="salir">
                        <Link className="dropdown-item" onClick={handleLogout}>logOut</Link>
                    </NavDropdown>
                    <NavDropdown title="Usuario">
                        <Link className="dropdown-item" to={"/"}>Login</Link>
                        <Link className="dropdown-item" to={"/register"}>Register</Link>
                    </NavDropdown>
                    <NavDropdown title="Categoria">
                        <Link className="dropdown-item" to={"/categoria/create"}>Crear Categoria</Link>
                        <Link className="dropdown-item" to={"/categoria"}>Lista de Categoria</Link>
                    </NavDropdown>
                    <NavDropdown title="Cuenta">
                        <Link className="dropdown-item" to={"/cuenta/create"}>Crear Cuenta</Link>
                        <Link className="dropdown-item" to={"/cuenta"}>Lista de Cuenta</Link>
                    </NavDropdown>
                    <NavDropdown title="Movimiento">
                        <Link className="dropdown-item" to={"/movimiento/create"}>Crear Movimiento</Link>
                        <Link className="dropdown-item" to={"/movimiento/transferir"}>Crear Transaccion</Link>
                        <Link className="dropdown-item" to={"/movimiento"}>Lista de Movimiento</Link>
                    </NavDropdown>
                </Nav>
                

            </Container>
        </Navbar>
    );
}

export default Menu;