// #4th.编写src/store.js 文件,内容格式固定,可以直接复制
//定义中间件组件
//applyMiddleware 允许使用中间件
//compose 添加 devtools 调试工具使用的
import {createStore,applyMiddleware,compose} from 'redux';

//引入路由中间件
import {routerMiddleware} from 'react-router-redux';

//引入history历史记录
import createHistory from 'history/createBrowserHistory';
//引入异步处理中间件
import thunk from 'redux-thunk';
//引入登陆日志中间件,用于调试
import logger from 'redux-logger';

//引入纯函数, 需要在src目录下创建modules/index.js文件
import rootReducer from './modules';

export const history = createHistory();

//创建仓库,将reducer纯函数和路由作为参数
export default createStore(rootReducer,
    //中间件
    applyMiddleware(routerMiddleware(history),logger,thunk)    
)
