import React, { useEffect, useState } from 'react';
import { FaRegUserCircle, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import { Container } from '../../styles/styledGlobal';
import * as styled from './styled';
import store from '../../store';
import Loading from '../../components/loading';

export default function Alunos() {
  const [isLoading, setIsLoading] = useState(false);
  const stateAuth = store.getState().auth;
  // console.log(store.getState());

  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      const arrayAlunos = await axios.get('/aluno');
      setAlunos(arrayAlunos.data);
      setIsLoading(false);
    };
    getData();
  }, []);
  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>Alunos</h1>
      {
        alunos.map((aluno) => (
          <styled.DivAluno key={aluno.id}>
            {
              aluno.Pictures.length === 0 ? <FaRegUserCircle className="icone-faUser" /> : (<div><img src={aluno.Pictures[0].url} alt="" /></div>)
            }
            <p>{`${aluno.nome} ${aluno.sobrenome}`}</p>
            <p className="p-email">{aluno.email}</p>
            {stateAuth.isLoggedIn && (
              <Link to={`/aluno/:${aluno.id}`}>
                <FaUserEdit className="icone-edit" />
              </Link>
            )}
          </styled.DivAluno>
        ))
      }
    </Container>
  );
}
