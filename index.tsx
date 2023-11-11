import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './theme/index.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppThemeProvider from 'theme/provider';
import AppRouter from './App';
import { initializeStore } from './store';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Chart, ArcElement, registerables } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(ArcElement, ChartDataLabels, ...registerables);

const store = initializeStore();

const App = () => {
  return (
    // <DndProvider backend={HTML5Backend}>
    <Provider store={store}>
      <AppThemeProvider>
        <AppRouter />
      </AppThemeProvider>
    </Provider>
    // </DndProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
