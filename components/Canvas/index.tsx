import React from 'react';

import { styled } from '../../theme/styled-components';
import { StyledCanvasType } from './types';

type BaseCanvasType = React.ComponentProps<'div'> & StyledCanvasType & { ref?: any };

const StyledCanvas = styled.div`
  width: 100%;
  height: 100%;

  background-size: 35px 35px;
  background-image: radial-gradient(circle, #000000 0.5px, rgba(0, 0, 0, 0) 1px);
`;

const BaseCanvas: React.FC<BaseCanvasType> = ({ children, ...props }) => {
  return <StyledCanvas {...props}>{children}</StyledCanvas>;
};

export default BaseCanvas;
