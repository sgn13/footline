import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { AppState } from 'store/reducer';

export const pageName = 'Charts';

const Charts: React.FC<PropsFromRedux> = ({}) => {
  return <>Bar</>;
};

const mapStateToProps = ({}: AppState) => ({});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Charts);
