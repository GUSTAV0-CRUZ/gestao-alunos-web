import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import axios from '../../services/axios';

import { Container } from '../../styles/styledGlobal';
import {
  ContainerConfigs, Form, DivButton,
} from './styled';
import store from '../../store';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/loading';
import MsgConfirmation, { toUseMsg, BtnOkAction } from '../../components/msgConfirmacao';

export default function UserConfigs() {
  const { email, nome } = store.getState().auth.dataUser;
  const [nomeInput, setnomeInput] = useState(nome);
  const [emailInput, setEmailInput] = useState(email);
  const [password, setPassword] = useState('');
  const dispache = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [containMsg, setContainMsg] = useState(false);
  const [opitionUser, SetOpitionUser] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleBtnSair() {
    toast.success('Usuário deslogado com sucesso');
    setIsLoading(true);
    dispache(actions.loginFAILED());
  }

  async function handleExcluiConta() {
    if (!opitionUser) return SetOpitionUser(false);
    setIsLoading(true);
    try {
      await axios.delete('/user/');
      dispache(actions.loginFAILED());
      toast.success('Conta excluida com sucesso');
    } catch (e) {
      toast.error('Erro ao tentar excluir a conta');
      setIsLoading(false);
    }
    return SetOpitionUser(false);
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <MsgConfirmation isMsg={containMsg} acao={SetOpitionUser} />
      <BtnOkAction onClick={() => handleExcluiConta()} opitionUser={opitionUser} />
      <h1>Configurações do usuário</h1>
      <ContainerConfigs>
        <p>Informações</p>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="nome">
            Nome:
            <input type="text" onChange={(e) => setnomeInput(e.target.value)} value={nomeInput} />
          </label>
          <label htmlFor="email">
            E-mail:
            <input type="text" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
          </label>
          <label htmlFor="senha">
            Senha Atual:
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} />
          </label>
          <button type="submit">Salvar Alterações</button>
        </Form>
        <DivButton>
          <button type="button" className="btn-sair-conta" onClick={handleBtnSair}>Sair da conta</button>
          <button type="button" className="btn-excluir-conta" onClick={() => toUseMsg({ setIsLoading, setContainMsg })}>Excluir conta</button>
        </DivButton>
      </ContainerConfigs>
    </Container>
  );
}
