import BaseComponent from 'components/BaseComponent';
import { StyledDialogType } from './types';
import { StyledBaseComponentType } from 'components/BaseComponent/types';
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import theme, { styled } from 'theme/styled-components';
import BaseBackdrop from './Backdrop';

type BaseDialogType = React.ComponentProps<'div'> &
  StyledDialogType &
  StyledBaseComponentType & { ref?: any };

const ModalWrap = styled.div<{ open: boolean }>`
  position: fixed;
  z-index: 9999;
  top: 50%;
  left: 50%;
  padding: 1rem;
  border-radius: 8px;
  transition: 0.3s ease all;
  display: ${({ open }) => (open ? 'block' : 'none')};
  transform: translate(-50%, -50%);
`;

const Header = styled.div`
  display: flex;
  background: ${theme.primary.default};
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  font-weight: 600;
  border-radius: 8px 8px 0 0;
  color: ${theme.color.white};
`;

const DialogWrap = styled.div`
  background-color: #eee;
  outline: none;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: fit-content;
`;

const DialogContent = styled.div`
  line-height: 1.5;
  color: #555;
  padding: 1rem;
`;

const DialogActions = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const BaseDialog: React.FC<BaseDialogType> = (props) => {
  const {
    children,
    actions,
    open,
    onClose,
    title,
    icon,
    name,
    label,
    required,
    errors,
    helpText,
    onClear,
    style,
  } = props;

  const baseComponentProps = { name, label, required, errors, helpText, onClear, style, icon };
  return (
    <BaseComponent {...baseComponentProps}>
      <BaseBackdrop open={open} onClose={onClose} />
      <ModalWrap open={open}>
        <DialogWrap>
          <Header>
            {title && <h4>{title}</h4>}
            <FaTimes onClick={onClose} />
          </Header>
          {children && <DialogContent>{children}</DialogContent>}
          {actions && <DialogActions>{actions}</DialogActions>}
        </DialogWrap>
      </ModalWrap>
    </BaseComponent>
  );
};

export default BaseDialog;
