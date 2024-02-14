import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap';
import { getListaCuenta } from '../services/cuentaService';
import { isLoged } from '../services/authService';
import { Link, useParams, useNavigate } from 'react-router-dom';
const ListaCuenta = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [listaCuenta, setListaCuenta] = useState([]);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        estaLogeado();
        fetchCuentas();
        sumatoria();
    }, []);
    const estaLogeado = () => {
        if (isLoged()) {
            navigate('/');
        }
    }
    const fetchCuentas = () => {
        getListaCuenta().then((res) => {
            setListaCuenta(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    const sumatoria = () => {
        let suma = 0;
        listaCuenta.forEach(cuenta => {
            suma += cuenta.saldo;
        });
        return suma;
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Lista de Cuentas</Card.Title>
                <Card.Text>Saldo Total: {sumatoria()}</Card.Text>
            </Card.Header>
            <Card.Body>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>saldo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaCuenta.map((juego) => {
                            return (<tr key={"persona-" + juego.id}>
                                <td>{juego.nombre}</td>
                                <td>{juego.saldo}</td>

                            </tr>);

                        })}
                    </tbody>
                </table>
            </Card.Body>
        </Card>
    </Container>);
}


export default ListaCuenta;