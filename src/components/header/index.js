import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const teste = useSelector((state) => state.teste);
  return (
    <Nav>
      <Link to="/">
        <FaHome />
      </Link>
      <Link to="/login">
        <FaUserAlt />
      </Link>
      <Link to="/logout">
        <FaSignInAlt />
      </Link>
      {teste ? 'true' : 'false'}
    </Nav>
  );
}
