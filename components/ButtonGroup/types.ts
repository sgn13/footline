import { ComponentType } from 'types/component';

type ButtonSizeType = 'sm' | 'md' | 'lg';

export type StyledButtonGroupType = {
    size?: ButtonSizeType;
    variant?: ComponentType;
    primary?: boolean;
    transparent?: boolean;
    icon?: JSX.Element;
    dropdown?: boolean;
};
