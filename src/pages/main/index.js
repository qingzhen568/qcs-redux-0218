import React,{Component} from "react";

//引入将ui组件转为容器组件
import {connect} from 'react-redux';

//引入动作 fetchSwiperLists, fetchSecKillData
import {fetchSwiperLists,fetchSecKillData} from '../../actions';

//引入轮播图组件
import MySwiper from '../../components/commons/swiper'
//引入今日秒杀组件
import SecKill from '../../components/commons/SecKill'

import './index.scss';

class Main extends Component {
    //发送动作
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchSwiperLists());
        dispatch(fetchSecKillData());
    }
    //渲染
    render(){
        const {swiperList,SecKillData} = this.props;
        return (
            <div id="Main">
                <MySwiper swiperList={swiperList} />
                <SecKill SecKillData={SecKillData}/>
            </div>
        )
    }
}

//映射
const mapStateToProps= (state)=>{
    const swiperList = state.qcsdata.swiperList || [];
    const SecKillData = state.qcsdata.SecKillData || [];
    return {swiperList,SecKillData};
}

export default connect(mapStateToProps)(Main);