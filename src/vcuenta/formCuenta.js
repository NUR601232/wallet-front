import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { insertCuenta } from '../services/cuentaService';
import { useNavigate } from 'react-router-dom';
import { isLoged } from '../services/authService';

const FormCuenta = () => { //sfc
    const [nombre, setNombre] = useState('');
    const [saldo, setSaldo] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        estaLogeado();
    }, []);
    const estaLogeado = () => {
        if (isLoged()) {
            navigate('/');
        }
    }

    const guardarDatos = (e) => {
        e.preventDefault();
        insertCuenta({
            nombre,
            saldo
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
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
                    <label>Nombre</label>
                    <FormControl required value={nombre} onChange={(e)=>{
                        setNombre(e.target.value);
                    }}/>
                    <label>saldo</label>
                    <FormControl required type='number' value={saldo} onChange={(e)=>{
                        setSaldo(e.target.value);
                    }} />
                    <div className='mt-2'>
                        <Button type='submit' variant='primary'>Guardar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>);
}

export default FormCuenta;