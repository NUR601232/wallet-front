import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { getListaCategoria } from '../services/categoriaService';
import { isLoged } from '../services/authService';
import { Link, useParams, useNavigate } from 'react-router-dom';
const ListaCategoria = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [listaCuenta, setListaCuenta] = useState([]);
    useEffect(() => {
        estaLogeado();
        fetchCuentas();
    }, []);
    const estaLogeado = () => {
        if (isLoged()) {
            navigate('/');
        }
    }
    const fetchCuentas = () => {
        getListaCategoria().then((res) => {
            setListaCuenta(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Lista de Categorias</Card.Title>
            </Card.Header>
            <Card.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaCuenta.map((juego) => {
                            return (<tr key={"persona-" + juego.id}>
                                <td>{juego.nombre}</td>

                            </tr>);

                        })}
                    </tbody>
                </table>
            </Card.Body>
        </Card>
    </Container>);
}


export default ListaCategoria;