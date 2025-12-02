import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import axios from '../../services/axios';
import { Container } from '../../styles/styledGlobal';
import * as styled from './styled';
import store from '../../store';
import * as actions from '../../store/modules/auth/actions';
import Loading from '../../components/loading';
import MsgConfirmation, { toUseMsg, BtnOkAction } from '../../components/msgConfirmacao';

export default function UserConfigs(props) {
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
    setIsLoading(true);
    if (nomeInput === nome && email === emailInput) return toast.error('Nenhuma alteração detectada') && setIsLoading(false);
    if (!nomeInput && !emailInput) return toast.error('Preencha os campos antes de enviar') && setIsLoading(false);
    let errors = false;
    if (nomeInput.length < 3 || nomeInput.length > 30) {
      toast.error('Nome precisar estar entre 3 a 30 caracteres');
      errors = true;
    }
    if (password.length > 0 && (password.length < 6 || password.length > 30)) {
      toast.error('Senha precisar estar entre 3 a 50 caracteres');
      errors = true;
    }
    if (!isEmail(emailInput)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (errors) return setIsLoading(false);
    dispache(actions.userUpdateRequest({
      nomeInput, emailInput, password, props,
    }));

    return setIsLoading(false);
  }

  function handleBtnSair() {
    toast.success('Usuário deslogado com sucesso');
    setIsLoading(true);
    dispache(actions.loginFailed());
  }

  async function handleExcluiConta() {
    if (!opitionUser) return SetOpitionUser(false);
    setIsLoading(true);
    try {
      await axios.delete('/user/');
      dispache(actions.loginFailed());
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
      <styled.ContainerConfigs>
        <p>Informações</p>
        <styled.Form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="nome">
            Nome:
            <input type="text" onChange={(e) => setnomeInput(e.target.value)} value={nomeInput} />
          </label>
          <label htmlFor="email">
            E-mail:
            <input type="text" onChange={(e) => setEmailInput(e.target.value)} value={emailInput} />
          </label>
          <label htmlFor="senha">
            Nova Senha:
            <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="(Opicional)" />
          </label>
          <button type="submit">Editar dados</button>
        </styled.Form>
        <styled.DivButton>
          <button type="button" className="btn-sair-conta" onClick={handleBtnSair}>Sair da conta</button>
          <button type="button" className="btn-excluir-conta" onClick={() => toUseMsg({ setIsLoading, setContainMsg })}>Excluir conta</button>
        </styled.DivButton>
      </styled.ContainerConfigs>
    </Container>
  );
}
