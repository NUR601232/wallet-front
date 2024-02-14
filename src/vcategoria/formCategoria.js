import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { insertCategoria } from '../services/categoriaService';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { isLoged } from '../services/authService';

const FormCategoria = () => { //sfc
    const [nombre, setNombre] = useState('');
    
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
        insertCategoria({
            nombre
        }).then((res)=>{
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Formulario de Categoria</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={guardarDatos}>
                    <label>Nombre</label>
                    <FormControl required value={nombre} onChange={(e)=>{
                        setNombre(e.target.value);
                    }}/>
                    
                    <div className='mt-2'>
                        <Button type='submit' variant='primary'>Guardar</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>);
}

export default FormCategoria;