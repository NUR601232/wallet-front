import React, { useState, useEffect } from 'react' //imr
import { Button, Card, Container, Form, FormControl, Nav } from 'react-bootstrap';
import { loginUsuario } from '../services/userService';
import { addAccessToken, logOut } from '../services/authService';
import { useNavigate } from "react-router-dom";

const LoginUser = () => { //sfc
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const guardarDatos = (e) => {
        e.preventDefault();
        loginUsuario({
            email,
            password
        }).then((res) => {
            addAccessToken(res.accessToken);
            console.log(res.accessToken);
            navigate('/cuenta');
            console.log(res);
        }).catch((error) => {
            console.log(error);
        });
    }

    const registrar= (e) => {
        
        navigate('/register');
    }

    return (<Container>
        <Card className="mt-3">
            <Card.Header>
                <Card.Title>Login de Persona</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form onSubmit={guardarDatos}>
                    <label>correo</label>
                    <FormControl required value={email} onChange={(e) => {
                        setEmail(e.target.value);
                    }} />
                    <label>Contrasenha</label>
                    <FormControl required value={password} onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    <div className='mt-2'>
                        <Button type='submit' variant='primary'>Entrar</Button>
                        <Button onClick={registrar} variant='primary'>Registrar </Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    </Container>);
}

export default LoginUser;