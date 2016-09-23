import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { Provider } from 'react-redux';
import buildStore from '../react/store';

global.React = React;
global.ReactDOM = ReactDOM;
global.ReactDOMServer = ReactDOMServer;
global.Provider = Provider;
global.configureStore = buildStore;
