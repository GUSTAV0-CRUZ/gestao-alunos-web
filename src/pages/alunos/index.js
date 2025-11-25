import React, { useEffect, useState } from 'react';
import { FaRegUserCircle, FaUserEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import axios from '../../services/axios';
import { Container } from '../../styles/styledGlobal';
import * as styled from './styled';

export default function Alunos() {
  const [alunos, setAlunos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const arrayAlunos = await axios.get('/aluno');
      setAlunos(arrayAlunos.data);
    };
    getData();
  }, []);
  return (
    <Container>
      <h1>Alunos</h1>
      {
        alunos.map((aluno) => {
          const perfil = () => {
            if (aluno.Pictures.length === 0) {
              return <FaRegUserCircle className="icone-faUser" />;
            }
            return (<div><img src={aluno.Pictures[0].url} alt="" /></div>);
          };
          return (
            <styled.DivAluno key={aluno.id}>
              {perfil()}
              <p>{`${aluno.nome} ${aluno.sobrenome}`}</p>
              <p className="p-email">{aluno.email}</p>
              <Link to={`/aluno/:${aluno.id}`}>
                <FaUserEdit className="icone-edit" />
              </Link>
            </styled.DivAluno>
          );
        })
      }
    </Container>
  );
}
