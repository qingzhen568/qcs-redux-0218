//合并状态树
import {combineReducers} from 'redux';

//引入路由的子级树reducer
import {routerReducer} from 'react-router-redux';
//引入数据的子级子级状态树
import qcsdata from './qcsdata';
// 引入控制状态的子级状态树
import app from './app';

// 输出
export default combineReducers({
    routerReducer,
    qcsdata,
    app
})

