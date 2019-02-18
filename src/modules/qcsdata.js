//将constants.js 文件中输出的数据解析成一个对象的形式
import * as types from '../constants';


//纯函数 
//Object.assgin 方法用于将所有可以枚举属性的值从一个或多个源对象复制到目标对象,并返回目标对象
const qcsdata = (state={},action)=>{
    switch(action.type){
        case types.FETCH_SWIPER_SUCCESS: //获取的是swiper轮播图的数据
            return Object.assign({},state,{swiperList:action.swiperList});
        case types.FETCH_SECKILL_SUCCSESS:
            return Object.assign({},state,{SecKillData:action.SecKillData});
        default:
            return state;
    }
}
export default qcsdata;
