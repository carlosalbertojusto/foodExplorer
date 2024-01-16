import { useState } from 'react';
import { ButtonContainer, Container, FormContainer, FormControl, Label, Paragraph, TextContainer, TextLogin } from './styles';
import logo from '../../assets/logo.png';

import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';


export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <TextContainer>
                <img src={logo} alt="Logo da Food Explorer" />
            </TextContainer>
            <FormContainer>
                <TextLogin>
                    <h1>
                        Faça login
                    </h1>
                </TextLogin>
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
                        onClick={handleSignIn}
                        required
                    />
                </ButtonContainer>

                <Paragraph>
                    <Link to="/signup">
                        Criar uma conta
                    </Link>
                </Paragraph>

            </FormContainer>
        </Container >
    );
}