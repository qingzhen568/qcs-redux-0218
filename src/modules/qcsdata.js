//将constants.js 文件中输出的数据解析成一个对象的形式
import * as types from '../constants';


//子级状态树纯函数 
//Object.assgin 方法用于将所有可以枚举属性的值从一个或多个源对象复制到目标对象,并返回目标对象
const qcsdata = (state={},action)=>{
    switch(action.type){
        case types.FETCH_SWIPER_SUCCESS: //获取的是swiper轮播图的数据
            return Object.assign({},state,{swiperList:action.swiperList});
        case types.FETCH_SECKILL_SUCCSESS:  //获取今日秒杀的数据
            return Object.assign({},state,{SecKillData:action.SecKillData});
        case types.FETCH_DELIVERY_MEMBER_FREE_SIGNIN:  //获取头部信息,闪电送,会员中心,免费试用,签到 数据
            return Object.assign({},state,{fourNavGif:action.fourNavGif});
        case types.FETCH_LUCKYMONEY:  //获取头部信息 红包 数据
            return Object.assign({},state,{luckyMoneyGif:action.luckyMoneyGif});
        case types.FETCH_RECOMMEND:  //获取 大牌精选|好货推荐 数据
            return Object.assign({},state,{recommendData:action.recommendData});
        case types.FETCH_FOOTER_6NAV:  //获取底部 6格导航 数据
            return Object.assign({},state,{footerSixNavs:action.footerSixNavs});
        case types.FETCH_TOPSALE_2019:  //获取 2019霸屏好货揭榜 数据
            return Object.assign({},state,{topSale2019:action.topSale2019});
        case types.FETCH_HOME_MASK_LIST:  //获取 面膜 数据
            return Object.assign({},state,{homeMaskList:action.homeMaskList});
        case types.FETCH_HOME_SKIN_CARE:  //获取 护肤 数据
            return Object.assign({},state,{homeSkinCare:action.homeSkinCare});
        case types.FETCH_HOME_FASHION:  //获取 潮流 数据
            return Object.assign({},state,{homeFashion:action.homeFashion});
        case types.FETCH_HOME_BODY_HAIR_ORAL_CARE:  //获取 洗护 数据
            return Object.assign({},state,{bodyHairOralCare:action.bodyHairOralCare});
        case types.FETCH_HOME_MAKE_UP:  //获取 彩妆 数据
            return Object.assign({},state,{homeMakeUp:action.homeMakeUp});
        default:
            return state;
    }
}
export default qcsdata;
