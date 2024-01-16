import { useState } from 'react';
import { ButtonContainer, Container, FormContainer, FormControl, Label, Paragraph, TextContainer, TextLogin } from './styles';
import logo from '../../assets/logo.png';

import { Link, useNavigate } from 'react-router-dom';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

import { api } from '../../services/api';

export function SignUp() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    function handleSignUp() {
        if (!name || !email || !password) {
            return alert('Preencha todos os campos!')
        }
        api
            .post('/users', { name, email, password })
            .then(() => {
                alert('Usuário cadastrado com successo!')
                navigate('/')
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert('Não foi possível cadastrar')
                }
            })
    }
    return (
        <Container>
            <TextContainer>
                <img src={logo} alt="Logo da Food Explorer" />
            </TextContainer>
            <FormContainer>
                <TextLogin>
                    <h1>
                        Crie sua conta
                    </h1>
                </TextLogin>
                <FormControl>
                    <Label>Seu nome</Label>
                    <Input
                        primary
                        id="inputSignIn"
                        type="text"
                        placeholder="Exemplo: Maria da Silva"
                        onChange={e => setName(e.target.value)}

                    />
                </FormControl>

                <FormControl>
                    <Label>Email</Label>
                    <Input
                        primary
                        id="inputSignIn"
                        type="text"
                        placeholder="Exemplo: exemplo@exemplo.com.br"
                        onChange={e => setEmail(e.target.value)}

                    />
                </FormControl>
                <FormControl>
                    <Label>Senha</Label>
                    <Input
                        primary
                        id="inputSignIn"
                        type="password"
                        placeholder="No mínimo 6 caracteres"
                        onChange={e => setPassword(e.target.value)}

                    />

                </FormControl>
                <ButtonContainer>
                    <Button
                        className="buttonEnter"
                        title="Entrar"
                        onClick={handleSignUp}
                        required
                    />
                </ButtonContainer>

                <Paragraph>
                    <Link to="/">
                        Já tenho uma conta
                    </Link>
                </Paragraph>

            </FormContainer>
        </Container >
    );
}