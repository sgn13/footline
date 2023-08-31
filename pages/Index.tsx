import React from 'react';
import theme, { styled } from 'theme/styled-components';
import { connect, ConnectedProps } from 'react-redux';

import { AppState } from 'store/reducer';
import { FiUsers } from 'react-icons/fi';
import ProfileContainer from 'containers/ProfileContainer/Index';
import Bar from 'containers/Dashboard/Charts/Bar';
import Line from 'containers/Dashboard/Charts/Line';
import { DetailWrapper, Cards, Card, Header } from 'containers/Dashboard/DashContainer';
import { Row, Col } from 'react-bootstrap';
import Doughnut from 'containers/Dashboard/Charts/Doughnut';
import { BsChatRightDots, BsBookFill } from 'react-icons/bs';
import { BiHelpCircle, BiSupport } from 'react-icons/bi';
export const HelpBar = styled.div`
  background-color: ${theme.primary.default};
  width: 25%;
  height: 50px;
  border-radius: 7px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  svg {
    color: white;
    font-size: 1.5rem;

    &:hover {
      cursor: pointer;
      color: ${theme.secondary.default};
    }
  }
`;

const data = [
  {
    id: 1,
    name: 'Data 1',
    number: 500,
    icon: <FiUsers />,
  },
  {
    id: 2,
    name: 'Data 2',
    number: 400,
    icon: <FiUsers />,
  },
  {
    id: 3,
    name: 'Data 3',
    number: 20,
    icon: <FiUsers />,
  },
];

const linedata = {
  data: [65, 59, 80, 81, 56, 55, 40],
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

const doughnutdata = {
  data: [100, 10],
  labels: ['Data 1', 'Data 2'],
};
const bardata = {
  data: [1100, 1000, 900, 1222, 2333, 2222, 1000],
  label: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
};

const Index: React.FC<PropsFromRedux> = ({}) => {
  return (
    <>
      <h2>Hello</h2>
    </>
  );
};

const mapStateToProps = ({ appState: { me } }: AppState) => ({
  me,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(Index);
