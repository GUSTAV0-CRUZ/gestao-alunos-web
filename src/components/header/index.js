import React from 'react';
import { FaHome, FaUserAlt, FaSignInAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styled';

export default function Header() {
  const example = useSelector((state) => state.example.example);
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
      {example ? 'true' : 'false'}
    </Nav>
  );
}
