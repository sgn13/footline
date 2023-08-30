import React from 'react';
import theme, { styled } from 'theme/styled-components';

import { Line } from 'react-chartjs-2';
import { Header } from 'containers/Dashboard/DashContainer';

const Chartss = styled.div`
  position: relative;
  width: 35rem;
  color: white;
  border-radius: 7px;
  border: 3px solid ${theme.primary.default};
  height: min-content;
  canvas {
    border-radius: 7px;
  }
  //   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const index = ({ chartName, label, datas }) => {
  const data = {
    labels: datas.labels,
    datasets: [
      {
        label: label,
        data: datas.data,
        fill: true,
        borderColor: `${theme.primary.default}`,
        tension: 0.1,
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
  return (
    <>
      <Chartss>
        <Header>{chartName}</Header>
        <Line data={data} options={options} plugins={[plugin]} />
      </Chartss>
    </>
  );
};

export default index;
