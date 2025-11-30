import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Divbackground, DivButton, DivbackgroundBtn } from './styled';

export function toUseMsg({ setIsLoading, setContainMsg }) {
  setIsLoading(true);
  setContainMsg(false);
  setTimeout(() => {
    setContainMsg(true);
    setIsLoading(false);
  }, 100);
}

export function BtnOkAction({ onClick, opitionUser }) {
  if (!opitionUser) return <> </>;
  return (
    <DivbackgroundBtn>
      <p>Pressione o botão para confirmar</p>
      <button type="button" className="btn-confirmar" onClick={onClick}>Confirmar</button>
    </DivbackgroundBtn>
  );
}

export default function MsgConfirmation({ isMsg, acao }) {
  if (!isMsg) return <> </>;
  const [containMsg, SetContainMsg] = useState(true);
  function handleCancelar() {
    acao(false);
    SetContainMsg(false);
  }
  function handleProsseguir() {
    acao(true);
    SetContainMsg(false);
  }

  if (!containMsg) return <> </>;

  return (
    <Divbackground>
      <p>Deseja prosseguir com a ação ?</p>
      <DivButton>
        <button type="button" className="btn-cancelar" onClick={handleCancelar}>Cancelar</button>
        <button type="button" className="btn-prosseguir" onClick={handleProsseguir}>Prosseguir</button>
      </DivButton>
    </Divbackground>
  );
}

MsgConfirmation.defaultProps = {
  isMsg: false,
};

MsgConfirmation.propTypes = {
  isMsg: PropTypes.bool,
  acao: PropTypes.func.isRequired,
};

BtnOkAction.propTypes = {
  onClick: PropTypes.func.isRequired,
  opitionUser: PropTypes.bool.isRequired,
};
