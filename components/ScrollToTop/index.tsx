import React, { useEffect } from 'react';

import { useLocation } from 'react-router-dom';

import { connect } from 'react-redux';

const ScrollToTop = ({}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const mapStateToProps = ({}) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector(ScrollToTop);
