//专门写项目的状态控制的子级树纯函数
//将 constants.js文件中输出的数据解析成对象的形式
import * as types from '../constants';

// 控制modal的纯函数
const app =(state={showModal:true},action)=>{
    switch(action.type){
        case types.CHANGE_MODAL_STATE:
            return {showModal:action.showModal};
        default:
            return state;
    }
}
export default app;