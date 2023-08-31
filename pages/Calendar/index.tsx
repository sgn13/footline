import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { AppState } from 'store/reducer';

export const pageName = 'Example';

const Calendar: React.FC<PropsFromRedux> = ({}) => {
  const fetchFunction = ({}) => {
    return true;
  };

  useEffect(() => {
    fetchFunction({});
  }, []);

  return <></>;
};

const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Calendar);
