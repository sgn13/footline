import React from 'react';
import { styled } from 'theme/styled-components';

const StyledBackdrop = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: ${({ open }) => (open ? 999 : -10)};
  left: 0;
  top: 0;
  background-color: rgba(97, 96, 96, 0.5);
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition: 0.3s ease all;
`;

const BaseBackdrop = (props) => {
  const { invisible, open, transitionDuration, onClose, ...other } = props;
  return <StyledBackdrop onClick={onClose} open={open} />;
};

export default BaseBackdrop;
