//引入fetch
import 'whatwg-fetch';

//引入定义的常量
// import {FETCH_SWIPER_SUCCESS,FETCH_SECKILL_SUCCSESS,CHANGE_MODAL_STATE} from '../constants';
import * as types from '../constants';

//获取swiper轮播图数据
export function fetchSwiperLists(){
    return (dispatch)=>{
        return fetch('/tms/aladdin/get?code=Mask_center_banner_index_1')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_SWIPER_SUCCESS,swiperList: data.data.datas})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

//获取头部信息,如闪电送,会员中心,免费试用,签到 数据
export function fourNavGif(){
    return (dispatch)=>{
        return fetch('/aladdin/get_batch_data?codes=["new_header","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=b2beebb0-0e2b-11e9-9cde-fb9ddcb01ef6')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_DELIVERY_MEMBER_FREE_SIGNIN,fourNavGif: data.data.new_Home_4navs_180105_1.datas})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

//获取头部信息 红包 数据
export function luckyMoneyGif(){
    return (dispatch)=>{
        return fetch('/aladdin/get_batch_data?codes=["new_header","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=b2beebb0-0e2b-11e9-9cde-fb9ddcb01ef6')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_LUCKYMONEY,luckyMoneyGif: data.data.new_Home_coupon_180105_4.datas})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

//获取今日秒杀数据
export function fetchSecKillData(){
    return (dispatch)=>{
        return fetch('/activity/specials/info?count=8&code=Home_flashSale__Top_Img&device_id=dc062990-3002-11e9-abbb-b17c1ba0ea79')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_SECKILL_SUCCSESS,SecKillData: data.data.specials_item_v_o_s})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

//修改首页弹出层的动作 ,这是同步操作,无需重复写dispatch
export const changeModalState=(isShow)=>{
    return dispatch =>dispatch({
        type:types.CHANGE_MODAL_STATE,
        showModal:isShow
    })
}

//获取 商品组列表 数据-------------------------------------------------
export function topSale2019Fn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=24&group_id=13996&device_id=0d2465c0-33e4-11e9-ac25-bb3c1c6b4529')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_TOPSALE_2019,topSale2019: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

export function homeMaskListFn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=9&group_id=13998&device_id=40822b00-343e-11e9-8923-31e940924ab7')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_HOME_MASK_LIST,homeMaskList: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

export function homeSkinCareFn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=24&group_id=13960&device_id=40822b00-343e-11e9-8923-31e940924ab7')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_HOME_SKIN_CARE,homeSkinCare: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

export function bodyHairOralCareFn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=24&group_id=13959&device_id=40822b00-343e-11e9-8923-31e940924ab7')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_HOME_BODY_HAIR_ORAL_CARE,bodyHairOralCare: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

export function homeFashionFn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=24&group_id=13756&device_id=40822b00-343e-11e9-8923-31e940924ab7')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_HOME_FASHION,homeFashion: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

export function homeMakeUpFn(){
    return (dispatch)=>{
        return fetch('/item/ws/group_list?current_page=1&page_size=24&group_id=13753&device_id=40822b00-343e-11e9-8923-31e940924ab7')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_HOME_MAKE_UP,homeMakeUp: data.data.item_list})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

// ----------------------------------------------------------------------------------

//获取 大牌精选 好货推荐 数据
export function fetchRecommendData(){
    return (dispatch)=>{
        return fetch('/aladdin/get_batch_data?codes=["new_header","new_Home_topBig_forcase_180105_1","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=aaafc600-0e8b-11e9-8d8c-f108b9b519de')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_RECOMMEND,recommendData: data.data.Home_TopicCase_170505_7.datas})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

//获取底部 6块导航 数据
export function footerSixNavs(){
    return (dispatch)=>{
        return fetch('/aladdin/get_batch_data?codes=["new_header","new_Home_topBig_forcase_180105_1","new_Home_4navs_180105_1","new_Home_coupon_180105_4","Home_pingo_170505_5","Home_AboveTopic_activity_170505_7","Home_TopicCase_170505_7","Home_CategaryNavs_170505_7"]&version=&app_channel=wap&plat=wap&access_token=&device_id=aaafc600-0e8b-11e9-8d8c-f108b9b519de')
        .then(resp=>{return resp.json()})
        .then(data=>{
            //将数据添加到store中
            dispatch({type:types.FETCH_FOOTER_6NAV,footerSixNavs: data.data.Home_CategaryNavs_170505_7.datas})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}

