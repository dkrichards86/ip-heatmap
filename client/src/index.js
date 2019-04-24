import React from 'react';
import ReactDOM from 'react-dom';
import 'leaflet/dist/leaflet.css';
import 'bulma/css/bulma.css';
import './index.css';

const MOUNT_NODE = document.getElementById('root');

const render = () => {
  const App = require('./components/app').default
  ReactDOM.render(<App />, MOUNT_NODE)
}
  
render()

if (module.hot) {
  module.hot.accept(['./components/app'], () =>
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE)
      render()
    }),
  )
}
