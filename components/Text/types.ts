import { SizeType } from '../../types/component';

export type StyledTextType = {
  type?: 'text' | 'label' | 'error' | 'help';
  icon?: JSX.Element;
  required?: boolean;
  size?: SizeType;
};
