import React from 'react';
import { styled } from 'theme/styled-components';

const color1 = '#048f32';
const color2 = '#febb06';
const color3 = '#1982C4';
const color4 = '#fff';

const LoaderWrapper = styled.div`
  background: rgba(4, 103, 160, 0.06);
  backdrop-filter: blur(10px);
  overflow: hidden;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 99999;

  .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 250px;
    height: 250px;
  }

  .app-logo {
    width: 130px;
    height: 130px;

    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .loader-line-wrap {
    width: 250px;
    height: 125px;

    transform-origin: 50% 100%;

    animation: spin 2000ms cubic-bezier(0.175, 0.885, 0.32, 1.275) infinite;
    box-sizing: border-box;
    overflow: hidden;

    position: absolute;
  }

  .loader-line {
    position: absolute;
    bottom: 0;
    top: 0;
    right: 0;
    left: 0;

    border: 4px solid #ccc;
    border-radius: 100%;
    box-sizing: border-box;
    margin: 0 auto;
  }
  .loader-line-wrap {
    &:nth-child(1) {
      animation-delay: -50ms;

      .loader-line {
        border-color: ${color1};
        height: 250px;
        width: 250px;
        top: 0px;
      }
    }

    &:nth-child(2) {
      animation-delay: -100ms;

      .loader-line {
        border-color: ${color2};
        height: 220px;
        width: 220px;
        top: 15px;
      }
    }
    &:nth-child(3) {
      animation-delay: -150ms;

      .loader-line {
        border-color: ${color3};
        height: 190px;
        width: 190px;
        top: 30px;
      }
    }
    &:nth-child(4) {
      animation-delay: -150ms;

      .loader-line {
        border-color: ${color4};
        height: 190px;
        width: 190px;
        top: 30px;
      }
    }
  }

  @keyframes spin {
    0%,
    15% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper>
      <img className="app-logo" src={require('assets/images/logo.png').default} />
      <div className="inner">
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>{' '}
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>{' '}
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>{' '}
        <div className="loader-line-wrap">
          <div className="loader-line"></div>
        </div>
      </div>
    </LoaderWrapper>
  );
};

const TableLoaderWrapper = styled.div`
  overflow: hidden;

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  z-index: 0;

  .inner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    width: 80px;
  }

  .spinner-item {
    width: 20px;
    height: 20px;
    display: inline-block;
    margin: 0 3px;
    border-radius: 50%;

    animation: spinner4 1150ms ease-in-out infinite;

    &:nth-child(1) {
      background-color: ${color1};
      border: thin solid #ccc;
      animation-delay: calc(1150ms / 6 * -1);
    }

    &:nth-child(2) {
      background-color: ${color4};
      border: thin solid #ccc;
      animation-delay: calc(1150ms / 6 * -2);
    }

    &:nth-child(3) {
      background-color: ${color3};
      border: thin solid #ccc;
      animation-delay: calc(1150ms / 6 * -3);
    }

    @keyframes spinner4 {
      0%,
      100% {
        transform: translateY(75%);
      }

      50% {
        transform: translateY(-75%);
      }
    }
  }
`;

export const TableLoader = () => {
  return (
    <TableLoaderWrapper>
      <div className="inner">
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
        <div className="spinner-item"></div>
      </div>
    </TableLoaderWrapper>
  );
};

export default Loader;
