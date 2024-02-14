import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import {  getListaMovimientos } from '../services/movimientoService';
//import { getJuegos, getListaMovimientos } from '../services/authService';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { isLoged } from '../services/authService';

const DetalleMovimientos = () => {
    const { id } = useParams();
    const [listaMovimientos, setListaMovimientos] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        estaLogeado();
        fetchMovimientos();
    }, []);
    const estaLogeado = () => {
        if (isLoged()) {
            navigate('/');
        }
    }

    const fetchMovimientos = () => {
        getListaMovimientos().then((res) => {
            setListaMovimientos(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Lista de Movimientos</Card.Title>
            </Card.Header>
            <Card.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Cuenta</th>
                            <th>Categoria</th>
                            <th>tipo</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaMovimientos.map((juego) => {
                            return (<tr key={"persona-" + juego.id}>
                                <td>{juego.cuenta.nombre}</td>
                                <td>{juego.categoria.nombre}</td>
                                <td>{juego.tipo}</td>
                                <td>{juego.monto}</td>

                            </tr>);

                        })}
                    </tbody>
                </table>
            </Card.Body>
        </Card>
    </Container>);
}


export default DetalleMovimientos;