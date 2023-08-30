import React from 'react';

import { connect } from 'react-redux';

import { AppState } from 'store/reducer';

export const withAuth = (WrappedComponent) => {
  class HOC extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = ({}: AppState) => ({});

  const mapDispatchToProps = {};

  const connector = connect(mapStateToProps, mapDispatchToProps);

  return connector(HOC);
};

export default withAuth;
