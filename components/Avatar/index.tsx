import BaseComponent from 'components/BaseComponent';
import { StyledAvatarType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import React from 'react';
import theme, { styled } from 'theme/styled-components';

type BaseAvatarType = React.ComponentProps<'img'> &
  StyledAvatarType &
  StyledBaseComponentType & { ref?: any };

const BaseAvatar: React.FC<BaseAvatarType> = (props) => {
  const { children, icon, name, label, required, errors, helpText, onClear, style } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };

  const AvatarWrapper = styled.div<StyledAvatarType>`
    border-radius: 100%;
    width: ${({ width }) => props.width || '32px'};
    height: ${({ height }) => props.height || '32px'};
    transition: 200ms;
    align-self: center;
    background-image: ${({ src }) => `url(${src})`};
    background-size: cover;
    background-position: center;
    background-color: rgba(0, 0, 0, 0.25);

    cursor: pointer;
  `;

  const StyledBaseComponent = styled(BaseComponent)`
    width: min-content;
    min-width: min-content;
  `;

  return (
    <StyledBaseComponent {...baseComponentProps}>
      <AvatarWrapper {...props}>{children}</AvatarWrapper>
    </StyledBaseComponent>
  );
};

export default BaseAvatar;
