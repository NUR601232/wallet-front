import React, { useState, useEffect} from 'react' //imr
import { Button, Card, Container, Form, FormControl } from 'react-bootstrap';
import { insertUsuario } from '../services/userService';
import { addAccessToken, logOut } from '../services/authService';
import { useNavigate } from "react-router-dom";

const RegisterUser = () => { //sfc
    const navigate = useNavigate();
    const [contrasenha, setContrasenha] = useState('');
    const [correo, setCorreo] = useState('');
    const [nombre, setNombre] = useState('');

  
    const guardarDatos = (e) => {
        e.preventDefault();
        insertUsuario({
            nombre,
            correo,
            contrasenha
        }).then((res)=>{
            navigate('/');
            console.log(res);
        }).catch((error)=>{
            console.log(error);
        });
        const registrar= (e) => {
        
        navigate('/register');
    }
    }
    const login= (e) => {
        
        navigate('/');
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>registrar de Persona</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={guardarDatos}>
                    <label>nombre</label>
                    <FormControl required value={nombre} onChange={(e)=>{
                        setNombre(e.target.value);
                    }}/>
                    <label>correo</label>
                    <FormControl required value={correo} onChange={(e)=>{
                        setCorreo(e.target.value);
                    }}/>
                    <label>Contrasenha</label>
                    <FormControl required value={contrasenha} onChange={(e)=>{
                        setContrasenha(e.target.value);
                    }} />
                    <div className='mt-2'>
                        <Button type='submit' variant='primary'>Guardar</Button>
                        <Button onClick={login} variant='primary'>login</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>);
}

export default RegisterUser;