import { StyledTextType } from '../Text/types';
import React from 'react';
import theme, { styled } from '../../theme/styled-components';

type BaseTextType = React.ComponentProps<'span'> & StyledTextType & { ref?: any };

const StyledText = styled.span<BaseTextType>`
  font-size: ${({ size = 'md' }) => (size === 'lg' ? 1.5 : size === 'md' ? 1.2 : 1)}rem;

  ${({ type }) =>
    type === 'label' &&
    `
    font-weight: bold;
   `}
  ${({ type }) =>
    type === 'help' &&
    `
    color:${theme.color.gray};
    
    font-style: italic;
   `}
     ${({ type }) =>
    type === 'error' &&
    `
    color:${theme.color.red};

    font-weight: bold;
   `}
  ${({ icon }) =>
    icon &&
    `
      display: flex;
      text-align:left;
      svg{
        margin-right: .5rem;
      }
   `}
`;

const StyledAsterisk = styled.span`
  margin-right: 0.1rem;
`;

const BaseText: React.FC<BaseTextType> = (props) => {
  const { children, icon, required } = props;

  return (
    <StyledText {...props}>
      {required && <StyledAsterisk>*</StyledAsterisk>}
      {icon}
      {children}
    </StyledText>
  );
};

export default BaseText;
