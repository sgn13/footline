import baseStyled, { ThemedStyledInterface, css } from 'styled-components';

const state = {
  success: { default: '#28a745', hover: '#157347' },
  danger: { default: '#dc3545', hover: '#bb2d3b' },
  warning: { default: '#ffc107', hover: '#ffca2c' },
  info: { default: '#17a2b8', hover: '#31d2f2' },
};

const color = {
  violet: '#9400D3',
  indigo: '#4B0082',
  blue: '#0000FF',
  green: '#00FF00',
  yellow: '#FFFF00',
  orange: '#FF7F00',
  red: '#FF0000',
  gray: '#6c757d',
  white: '#ffffff',
  black: '#000000',
  darkGray: '#ccc',
  spaceGray: 'rgb(212, 212, 212)',
  steelGray: '#969696',
  silver: '#e6e6e6',
  mercuryWhite: '#ebebeb',
  deepForest: '#39423e',
  deepForestMono: '#515D58',
};

const basic = {
  primary: { default: '#0467A0', text: '#ffffff' },
  secondary: { default: '#c83734', text: '#ffffff' },
};

const font = { primary: '', secondary: '' };

export const Scrollbar = ({
  size,
  foregroundColor = 'slategray',
  backgroundColor = color.white,
}) => css`
  &::-webkit-scrollbar {
    width: ${size};
    height: ${size};
  }

  &::-webkit-scrollbar-thumb {
    background: ${foregroundColor};
  }

  &::-webkit-scrollbar-track {
    background: ${backgroundColor};
  }

  & {
    scrollbar-face-color: ${foregroundColor};
    scrollbar-track-color: ${backgroundColor};
  }

  &::-moz-scrollbar-button:decrement,
  &::-moz-scrollbar-button:increment,
  &::-webkit-scrollbar-button:decrement,
  &::-webkit-scrollbar-button:increment {
    width: 0px;
  }
`;

export const Shine = () => css`
  backdrop-filter: blur(2px);
  box-shadow: 0px calc(6rem / 6) calc(6rem / 3) rgba(black, 0.1);

  transition: transform 500ms ease-out;

  overflow: hidden;

  &::before {
    content: '';
    background: rgba(white, 0.4);
    width: 60%;
    height: 100%;
    top: 0%;
    left: -125%;

    transform: skew(45deg);

    position: absolute;

    transition: left 500ms ease-out;
  }

  &:hover {
    &::before {
      left: 150%;
    }
  }
`;

export const StateColor = ({ type, mode = 'default' }) => {
  return type === 'success'
    ? theme.state.success[mode]
    : type === 'danger'
    ? theme.state.danger[mode]
    : type === 'warning'
    ? theme.state.warning[mode]
    : type === 'info'
    ? theme.state.info[mode]
    : theme.primary[mode];
};

const mixin = { scrollbar: Scrollbar, shine: Shine };

const theme = {
  ...basic,
  color,
  state,
  font,
  mixin,
  constant: { bodyHeight: 'calc(100vh - 56px)', authBodyHeight: '100vh', appBar: '56px' },
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;

export default theme;
