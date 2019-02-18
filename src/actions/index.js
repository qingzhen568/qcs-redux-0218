//引入fetch
import 'whatwg-fetch';

//引入定义的常量
import {FETCH_SWIPER_SUCCESS,FETCH_SECKILL_SUCCSESS} from '../constants';

//获取swiper轮播图数据
export function fetchSwiperLists(){
    return (dispatch)=>{
        return fetch('/tms/aladdin/get?code=Mask_center_banner_index_1')
        .then(resp=>{return resp.json()})
        .then(data=>{
            console.log(data);
            //将数据添加到store中
            dispatch({type:FETCH_SWIPER_SUCCESS,swiperList: data.data.datas})
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
            console.log(data);
            //将数据添加到store中
            dispatch({type:FETCH_SECKILL_SUCCSESS,SecKillData: data.data.specials_item_v_o_s})
        })
        .catch(error=>{console.log(error.messaage)})
    }
}