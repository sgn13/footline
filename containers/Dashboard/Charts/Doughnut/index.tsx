import React from 'react';
import theme, { styled } from 'theme/styled-components';

import { Doughnut } from 'react-chartjs-2';
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
const Index = ({ chartName, label, datas }) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        backgroundColor: datas.colors,
        hoverOffset: 4,
      },
    ],
  };
  const options = {
    cutout: 100,
    percentageInnerCutout: 50,
    maintainAspectRatio: true,
    layout: {
      padding: {
        top: 60,
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
        <Doughnut data={data} options={options} plugins={[plugin]} />
      </Chartss>
    </>
  );
};

export default Index;
