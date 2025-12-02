import React, { useState } from 'react';
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

export default function CriaAluno() {
  const dispatch = useDispatch();
  dispatch(atualizaTokenAxios());
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [urlViewImagem, setUrlViewImagem] = useState('null');
  const [picture, setPicture] = useState({});

  async function handleCreat() {
    setIsLoading(true);
    let errors = false;

    if (nome.length < 3 || nome.length > 30) {
      toast.error('Nome precisar estar entre 3 a 20 caracteres');
      errors = true;
    }

    if (sobrenome.length < 3 || sobrenome.length > 20) {
      toast.error('Sobrenome precisar estar entre 3 a 30 caracteres');
      errors = true;
    }

    if (!isEmail(email)) {
      toast.error('E-mail inválido');
      errors = true;
    }

    if (idade < 3 || idade > 130) {
      toast.error('Idade presisa estar entre 3 a 130 anos');
      errors = true;
    }

    if (errors) return setIsLoading(false);

    try {
      const response = await axios.post('/aluno/', {
        nome,
        sobrenome,
        email,
        idade,
        ...(altura !== '' ? { altura } : { altura: 0 }),
        ...(peso !== '' ? { peso } : { peso: 0 }),
      });

      if (picture?.type) {
        const formData = new FormData();
        formData.append('id_aluno', response.data.id);
        formData.append('picture', picture);
        await axios.post('/picture/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
      }

      toast.success('Aluno criado com sucesso');
      history.push(`/aluno/${response.data.id}`);
    } catch (e) {
      setIsLoading(false);
      // console.log(e);
      if (e?.response?.data[0]) return toast.error(e.response.data[0]);

      return toast.error('Erro ao tentar criar aluno');
    }
    return setIsLoading(false);
  }

  function handleUpload(e) {
    setIsLoading(true);
    try {
      const fileUpload = e.target.files[0];
      const imgPartName = fileUpload.type.slice(0, 6);

      if (imgPartName !== 'image/') return toast.error('Adicone uma imagem') && setIsLoading(false);
      const viewImagem = URL.createObjectURL(e.target.files[0]);
      setUrlViewImagem(viewImagem);

      setPicture(fileUpload);
      setIsLoading(false);
      return toast.success('Imagem selecionada');
    } catch (err) {
      setIsLoading(false);
      return toast.error('Erro ao visualizar imagem');
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Adicionar aluno</h1>
      <div>
        <DivBackground>
          <DivCentral>
            <h2>
              {`${nome} ${sobrenome}`}
            </h2>
            <div className="div-img">
              <label htmlFor="uplodad-imagem" className="label-upload">
                {
                  urlViewImagem !== 'null' ? <img src={urlViewImagem} alt="foto de perfil do aluno" /> : <FaRegUserCircle className="icone-faUser" />
                }
                {
                  urlViewImagem === 'null' && <p>Adicionar imagem</p>
                }
                <input type="file" className="btn-upload" id="uplodad-imagem" onChange={handleUpload} />
              </label>
            </div>
            <form>
              <label htmlFor="nome">
                Nome:
                <input onChange={(e) => setNome(e.target.value)} type="text" value={nome} />
              </label>
              <label htmlFor="sobrenome">
                Sobrenome:
                <input onChange={(e) => setSobrenome(e.target.value)} type="text" value={sobrenome} />
              </label>
              <label htmlFor="email">
                E-mail:
                <input onChange={(e) => setEmail(e.target.value)} type="email" value={email} />
              </label>
              <label htmlFor="idade">
                Idade:
                <input onChange={(e) => setIdade(e.target.value)} type="number" value={idade} />
              </label>
              <label htmlFor="altura">
                Altura:
                <input onChange={(e) => setAltura(e.target.value)} type="number" value={altura} />
              </label>
              <label htmlFor="peso">
                Peso:
                <input onChange={(e) => setPeso(e.target.value)} type="number" value={peso} />
              </label>
              <div className="div-btn">
                <button onClick={handleCreat} type="button" className="btn-cria">Adicionar</button>
              </div>
            </form>
          </DivCentral>
        </DivBackground>
      </div>
    </Container>
  );
}
