import { SizeType, ComponentType } from '../../types/component';

export type StyledButtonType = {
  size?: SizeType;
  variant?: ComponentType;
  primary?: boolean;
  transparent?: boolean;
  icon?: JSX.Element;
  dropdown?: boolean;
  btnType?:String;
};
