import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/styledGlobal';
import { Form, DivForm } from './styled';
import { loginRequest } from '../../store/modules/auth/actions';
import Loading from '../../components/loading';

export default function Cadastro(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    if (!email && !password) return toast.error('Preencha os campos antes de enviar') && setIsLoading(false);
    let errors = false;
    if (password.length < 6 || password.length > 30) {
      toast.error('Senha precisar estar entre 3 a 50 caracteres');
      errors = true;
    }
    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (errors) return setIsLoading(false);

    dispatch(loginRequest({ email, password, props }));
    return 0;
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Login de Usuário:</h1>
      <DivForm>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h2>Realizar login</h2>
          <label htmlFor="email">
            E-mail:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Logar</button>
          <Link to="/register">
            <button type="button">Cadastrar</button>
          </Link>
        </Form>
      </DivForm>
    </Container>
  );
}
