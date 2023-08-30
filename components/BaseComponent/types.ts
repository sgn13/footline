import { SizeType } from '../../types/component';

export type StyledBaseComponentType = {
  name?: string;
  label?: string;
  icon?: JSX.Element;
  required?: boolean;
  errors?: { [key: string]: string } | any;
  helpText?: string;
  onClear?: () => void;
  style?: any;
  value?: any;
  size?: SizeType;
  inputSize?: SizeType;
};
