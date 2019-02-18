import React from 'react';
import ReactDOM from 'react-dom';

//引入Provider
import {Provider} from 'react-redux';
//引入路由托管
import {ConnectedRouter} from 'react-router-redux';

import store,{history} from './store';

//引入重置样式表
import 'reset-css';
//引入px转rem
import 'react-flexible';
//引入蚂蚁金服样式
import 'antd/dist/antd.css';

import './index.css';
import App from './router';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
   , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
