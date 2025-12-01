import React, { useEffect } from 'react';
import {
  FaHome, FaUserAlt, FaCog, FaRegAddressCard,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
  }, [isLoggedIn]);
  return (
    <Nav>
      <Link to="/">
        <FaHome />
      </Link>
      {/* {console.log(isLoggedIn)} */}
      {
        isLoggedIn ? (
          <Link to="/aluno"><FaRegAddressCard className="cria-aluno" /></Link>
        ) : (
          <Link to="/login"><FaUserAlt /></Link>
        )
      }
      <Link to="/userConfigs">
        <FaCog />
      </Link>
    </Nav>
  );
}
