import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { FaRegUserCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';

import axios from '../../services/axios';
import { Container } from '../../styles/styledGlobal';
import { DivBackground, DivCentral } from './styled';
import { atualizaTokenAxios } from '../../store/modules/auth/actions';
import history from '../../services/history';
import Loading from '../../components/loading';

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
  const [isLoading, setIsLoading] = useState(false);

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
      setIsLoading(true);
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
        setIsLoading(false);
      } catch (e) {
        toast.error('Erro ao tentar exibir aluno');
        history.push('/');
      }
    }
    getData();
    updateValueInput();
  }, [nome]);

  async function handleExlude() {
    setIsLoading(true);
    try {
      await axios.delete(url);
      history.push('/');
      toast.success('Aluno exluido com sucesso');
    } catch (e) {
      toast.error('Erro ao tentar excluir aluno');
      setIsLoading(false);
    }
  }

  async function handleEdit() {
    setIsLoading(true);
    if (inputNome === nome
      && inputSobrenome === sobrenome
      && inputEmail === email
      && inputIdade === idade
      && inputAltura === altura
      && inputPeso === peso
    ) return toast.error('Aluno sem alterações') && setIsLoading(false);

    let errors = false;

    if (inputNome.length < 3 || inputNome.length > 30) {
      toast.error('Nome precisar estar entre 3 a 20 caracteres');
      errors = true;
    }

    if (inputSobrenome.length < 3 || inputSobrenome.length > 20) {
      toast.error('Sobrenome precisar estar entre 3 a 30 caracteres');
      errors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (inputIdade < 3 || inputIdade > 130) {
      toast.error('Idade presisa estar entre 3 a 130 anos');
      errors = true;
    }

    if (errors) return setIsLoading(false);

    try {
      await axios.put(url, {
        nome: inputNome,
        sobrenome: inputSobrenome,
        email: inputEmail,
        idade: inputIdade,
        ...(inputAltura !== '' ? { altura: inputAltura } : { altura: 0 }),
        ...(inputPeso !== '' ? { peso: inputPeso } : { peso: 0 }),
      });
      toast.success('Aluno editado com sucesso');
      setIsLoading(false);
    } catch (e) {
      toast.error('Erro ao tentar editar aluno');
      setIsLoading(false);
    }
    return setIsLoading(false);
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
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
                <input onChange={(e) => setInputIdade(e.target.value)} type="number" value={inputIdade} />
              </label>
              <label htmlFor="altura">
                Altura:
                <input onChange={(e) => setInputAltura(e.target.value)} type="number" value={inputAltura} />
              </label>
              <label htmlFor="peso">
                Peso:
                <input onChange={(e) => setInputPeso(e.target.value)} type="number" value={inputPeso} />
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
