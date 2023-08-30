import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './theme/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppThemeProvider from 'theme/provider';
import AppRouter from './App';
import { initializeStore } from './store';

import { Chart, ArcElement, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, ChartDataLabels, ...registerables);

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
