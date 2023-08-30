import { ComponentType, SizeType } from '../../types/component';

export type StyledMenuOptionType = { label: string | any; value?: string };

export type StyledMenuType = {
  size?: SizeType;
  children?: any;
  list?: StyledMenuOptionType[];
  value?: StyledMenuOptionType;
  onOptionChange: (data: StyledMenuOptionType) => void;
  placeholder: string;
};

export type StyledMenuItemType = {
  size?: SizeType;
  type?: ComponentType;
  icon?: JSX.Element;
  onClick?: any;
  selected?: boolean;
  menuHeaderRef?: any;
};
