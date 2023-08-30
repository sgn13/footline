import React from 'react';
import theme, { styled } from 'theme/styled-components';

import { Bar } from 'react-chartjs-2';
import { Header } from 'containers/Dashboard/DashContainer';

const Chartss = styled.div`
  position: relative;
  color: white;
  border-radius: 7px;
  border: 3px solid ${theme.primary.default};
  height: min-content;
  canvas {
    border-radius: 7px;
  }
  //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const plugin = {
  id: 'custom_canvas_background_color',
  beforeDraw: (chart) => {
    const ctx = chart.canvas.getContext('2d');
    ctx.save();
    ctx.globalCompositeOperation = 'destination-over';
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, chart.width, chart.height);
    ctx.restore();
  },
};
const index = ({ chartName, label, datas }) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        backgroundColor: [`${theme.primary.default}`],
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 40,
        right: 50,
        bottom: 20,
        left: 50,
      },
    },
  };
  return (
    <>
      <Chartss>
        <Header>{chartName}</Header>
        <Bar data={data} options={options} plugins={[plugin]} />
      </Chartss>
    </>
  );
};

export default index;
