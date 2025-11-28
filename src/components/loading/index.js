import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import PropTypes from 'prop-types';

import { DivLoad } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;
  return (
    <DivLoad>
      <AiOutlineLoading3Quarters className="icone-carregamento" />
      <p>Aguarde o carregamento...</p>
    </DivLoad>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
