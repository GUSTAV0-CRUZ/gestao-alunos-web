import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import { Container } from '../../styles/styledGlobal';
import { Form, DivForm } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    if (!nome && !email && !password) return toast.error('Preencha os campos antes de enviar');
    let errors = false;
    if (nome.length < 3 || nome.length > 30) {
      toast.error('Nome precisar estar entre 3 a 30 caracteres');
      errors = true;
    }
    if (password.length < 6 || password.length > 30) {
      toast.error('Senha precisar estar entre 3 a 50 caracteres');
      errors = true;
    }
    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (errors) return 0;

    let response;
    try {
      response = await axios.post('/user/', { nome, email, password });
    } catch (error) {
      const { data } = error.response;
      toast.error(data.errors[0]);
      data.errors[0].map((err) => {
        toast.error(err);
        errors = true;
        return 0;
      });
    }

    if (errors) return 0;

    toast.success(` ${response.data.nome} seu cadastro foi realizado com sucesso, agora faça login.`);
    history.push('/login');
    return 0;
  }

  return (
    <Container>
      <h1>Cadastrar Usuário:</h1>
      <DivForm>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <h2>Realizar Cadastro</h2>
          <label htmlFor="nome">
            Nome:
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </label>
          <label htmlFor="email">
            E-mail:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            Senha:
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          <button type="submit">Confirmar</button>
        </Form>
      </DivForm>
    </Container>
  );
}
