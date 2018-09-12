import React from 'react';
import dva from 'dva';

import './index.css';
import App from './App';
import result from './model/result';
import registerServiceWorker from './registerServiceWorker';

const app = dva();

app.model(result);

app.router(() => <App />);

app.start('#root');
registerServiceWorker();
