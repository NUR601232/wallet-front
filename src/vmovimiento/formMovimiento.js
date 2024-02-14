import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, FormControl, FormSelect } from 'react-bootstrap';
import { insertMovimiento } from '../services/movimientoService';
import { getListaCategoria } from '../services/categoriaService';
import { getListaCuenta } from '../services/cuentaService';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { isLoged } from '../services/authService';

const FormMovimiento = () => { //sfc
    const [monto, setMonto] = useState(0);
    const [cuenta, setCuenta] = useState('');
    const [tipo, setTipo] = useState(0);
    const [categoria, setCategoria] = useState('');
    const [fecha, setFecha] = useState('');
    const [listaCategoria, setListaCategoria] = useState([]);
    const [listaCuenta, setListaCuenta] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        estaLogeado();
        fetchCuentas();
        fetchCategorias();
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

    const fetchCategorias = () => {
        getListaCategoria().then((res) => {
            setListaCategoria(res);
        }).catch((error) => {
            console.log(error);
        });
    }



    const guardarDatos = (e) => {
        e.preventDefault();
        insertMovimiento({
            monto,
            cuenta,
            categoria,
            tipo,
            fecha
        }).then((res) => {
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Formulario de Persona</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={guardarDatos}>
                    <label>Monto</label>
                    <FormControl required type='number' value={monto} onChange={(e) => {
                        setMonto(e.target.value);
                    }} />
                    <label>Cuenta</label>
                    <FormSelect required value={cuenta} onChange={(e) => {
                        setCuenta(e.target.value);
                    }}>
                        {listaCuenta.map(persona =>
                            <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                        )}
                    </FormSelect>
                    <label>Categoria</label>
                    <FormSelect required value={categoria} onChange={(e) => {
                        setCategoria(e.target.value);
                    }}>
                        {listaCategoria.map(persona =>
                            <option key={persona.id} value={persona.id}>{persona.nombre}</option>
                        )}
                    </FormSelect>
                    <label>Tipo</label>
                    <FormSelect required value={tipo} onChange={(e) => {
                        setTipo(e.target.value);
                    }}>
                        
                        <option key='si' value='ingreso'>Ingreso</option>
                        <option key='no' value='egreso'>Egreso</option>
                        
                    </FormSelect>
                    
                    <label>fecha</label>
                    <FormControl required type='date' value={fecha} onChange={(e) => {
                        setFecha(e.target.value);
                    }} />
                    <div className='mt-2'>
                        <Button type='submit' variant='primary'>Guardar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>);
}

export default FormMovimiento;