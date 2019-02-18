//合并状态树
import {combineReducers} from 'redux';

//引入路由的reducer
import {routerReducer} from 'react-router-redux';
//引入数据的子级树
import qcsdata from './qcsdata';


// 输出
export default combineReducers({
    routerReducer,
    qcsdata
})

