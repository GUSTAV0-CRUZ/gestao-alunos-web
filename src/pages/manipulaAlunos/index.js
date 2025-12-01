import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';

import axios from '../../services/axios';
import { Container } from '../../styles/styledGlobal';
import { DivBackground, DivCentral } from './styled';
import { atualizaTokenAxios } from '../../store/modules/auth/actions';
import history from '../../services/history';

export default function ManipulaAlunos(props) {
  const dispatch = useDispatch();
  dispatch(atualizaTokenAxios());
  const [dataUser, setDataUser] = useState({});
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [url, setUrl] = useState('');
  const [inputNome, setInputNome] = useState(nome);
  const [inputSobrenome, setInputSobrenome] = useState(sobrenome);
  const [inputEmail, setInputEmail] = useState(email);
  const [inputIdade, setInputIdade] = useState(idade);
  const [inputAltura, setInputAltura] = useState(altura);
  const [inputPeso, setInputPeso] = useState(peso);

  function updateValueInput() {
    setInputNome(nome);
    setInputSobrenome(sobrenome);
    setInputEmail(email);
    setInputIdade(idade);
    setInputAltura(altura);
    setInputPeso(peso);
    // console.log('chega');
  }

  useEffect(() => {
    async function getData() {
      try {
        const { match } = props;
        setUrl(match.url);
        const response = await axios.get(match.url);
        const aluno = response.data;
        setDataUser(aluno);
        setNome(aluno.nome);
        setSobrenome(aluno.sobrenome);
        setEmail(aluno.email);
        setIdade(aluno.idade);
        setAltura(aluno.altura);
        setPeso(aluno.peso);
      } catch (e) {
        toast.error('Erro ao tentar exibir aluno');
        history.push('/');
      }
    }
    getData();
    updateValueInput();
  }, [nome]);

  async function handleExlude() {
    try {
      await axios.delete(url);
      history.push('/');
      toast.success('Exluido com sucesso');
    } catch (e) {
      toast.error('Erro ao tentar excluir aluno');
    }
  }

  function handleEdit() {
    const alunoEdig = {
      inputNome,
      inputSobrenome,
      inputEmail,
      inputIdade,
      inputAltura,
      inputPeso,
    };
    console.log(alunoEdig);
  }

  return (
    <Container>
      <h1>ManipulaAlunos</h1>
      <div>
        <DivBackground>
          <DivCentral>
            <h2>
              {`${dataUser.nome} ${dataUser.sobrenome}`}
              {/* {console.log(dataUser)} */}
            </h2>
            <div className="div-img">
              {
              dataUser.Pictures && dataUser.Pictures.length !== 0 ? <img src={`http://50.19.59.67/images/${dataUser.Pictures[0].filename}`} alt="" /> : <FaRegUserCircle className="icone-faUser" />
              }
            </div>
            <form>
              <label htmlFor="nome">
                Nome:
                <input onChange={(e) => setInputNome(e.target.value)} type="text" value={inputNome} />
              </label>
              <label htmlFor="sobrenome">
                Sobrenome:
                <input onChange={(e) => setInputSobrenome(e.target.value)} type="text" value={inputSobrenome} />
              </label>
              <label htmlFor="email">
                E-mail:
                <input onChange={(e) => setInputEmail(e.target.value)} type="text" value={inputEmail} />
              </label>
              <label htmlFor="idade">
                Idade:
                <input onChange={(e) => setInputIdade(e.target.value)} type="text" value={inputIdade} />
              </label>
              <label htmlFor="altura">
                Altura:
                <input onChange={(e) => setInputAltura(e.target.value)} type="text" value={inputAltura} />
              </label>
              <label htmlFor="peso">
                Peso:
                <input onChange={(e) => setInputPeso(e.target.value)} type="text" value={inputPeso} />
              </label>
              <div className="div-btn">
                <button onClick={handleEdit} type="button" className="btn-edit-exlude">Editar</button>
                <button onClick={handleExlude} type="button" className="btn-edit-exlude btn-excluir-aluno">Excluir aluno</button>
              </div>
            </form>
          </DivCentral>
        </DivBackground>
      </div>
    </Container>
  );
}

ManipulaAlunos.propTypes = {
  match: PropTypes.string.isRequired,
};
