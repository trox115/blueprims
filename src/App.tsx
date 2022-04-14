import React from 'react';
import { Provider } from 'react-redux';

import './App.scss';
import Page from './containers/Page';
import store from './store';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <Page />
      </div>
    </Provider>
  );
}

export default App;
