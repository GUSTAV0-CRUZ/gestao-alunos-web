import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import store from '../store';

export default function MyRouter({ component: Component, isClose, ...rest }) {
  const { isLoggedIn } = store.getState().auth;

  if (!isLoggedIn && isClose) {
    return (
      <Redirect
        to={{ pathname: '/login', state: { prevpath: rest.location.state } }}
      />
    );
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
}

MyRouter.defaultProps = {
  isClose: false,
};

MyRouter.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  isClose: PropTypes.bool,
};
