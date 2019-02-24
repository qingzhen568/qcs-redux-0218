import React,{Component} from "react";

//引入将ui组件转为容器组件
import {connect} from 'react-redux';

//引入动作 fetchSwiperLists, fetchSecKillData
// import {fetchSwiperLists,fetchSecKillData,fourNavGif,luckyMoneyGif,fetchRecommendData,footerSixNavs,topSale2019Fn} from '../../actions';
import * as actions from '../../actions';

//引入轮播图组件
import MySwiper from '../../components/commons/swiper'
// 引入头部信息组件,如关于我们|闪电送,会员中心,免费试用,签到|红包|
import TopNav from "../../components/main/topNav";
//引入今日秒杀组件
import SecKill from '../../components/commons/SecKill';
//引入商品组列表组件
import GoodsList from '../../components/main/goodsList';

// 大牌精选 好货推荐 
import Recommend from '../../components/main/recommend';
//引入版权说明
import CopyRight from '../../components/commons/copyRight';

//引入进入首页弹出框组件
import ShowModal from '../../components/main/Modal';


import './index.scss';


class Main extends Component {
    constructor(){
        super();
        this.state={
            topSale2019_src:'https://image.watsons.com.cn//upload/09f9331d.jpg',
            homeMaskList_src:'https://image.watsons.com.cn//upload/054c3cd0.jpg',
            homeSkinCare_src:'https://image.watsons.com.cn//upload/ae8d83fd.jpg',
            bodyHairOralCare_src:'https://image.watsons.com.cn//upload/18da582e.jpg',
            homeFashion_src:'https://image.watsons.com.cn//upload/298bbb90.jpg',
            homeMakeUp_src:'https://image.watsons.com.cn//upload/6b6fbd4d.jpg'
        }
    }
    //发送动作
    componentDidMount(){
        const {dispatch} = this.props;
        // dispatch(fetchSwiperLists());
        // dispatch(fetchSecKillData());
        dispatch(actions.fetchSwiperLists());
        dispatch(actions.fetchSecKillData());
        dispatch(actions.fourNavGif());
        dispatch(actions.luckyMoneyGif());
        dispatch(actions.fetchRecommendData());
        dispatch(actions.footerSixNavs());
        dispatch(actions.topSale2019Fn());
        dispatch(actions.homeMaskListFn());
        dispatch(actions.homeSkinCareFn());
        dispatch(actions.bodyHairOralCareFn());
        dispatch(actions.homeFashionFn());
        dispatch(actions.homeMakeUpFn());
    }
    //渲染
    render(){
        const {swiperList,SecKillData,showModal,fourNavGif,luckyMoneyGif,recommendData,
            footerSixNavs,topSale2019,homeMaskList,homeSkinCare,bodyHairOralCare,homeFashion,homeMakeUp} = this.props;
        return (
            <div id="Main">
                {/* 轮播图 */}
                <MySwiper swiperList={swiperList} />
                {/* 头部信息,如关于我们|闪电送,会员中心,免费试用,签到|红包| */}
                <TopNav fourNavGif={fourNavGif} luckyMoneyGif={luckyMoneyGif} />
                {/* 今日秒杀 */}
                <SecKill SecKillData={SecKillData}/>
                {/* 商品组列表 */}
                <GoodsList goodsListData={topSale2019} home_imgSrc={this.state.topSale2019_src} img_alt="爱美热销" />
                <GoodsList goodsListData={homeMaskList} home_imgSrc={this.state.homeMaskList_src} img_alt="面膜" />
                <GoodsList goodsListData={homeSkinCare} home_imgSrc={this.state.homeSkinCare_src} img_alt="护肤" />
                <GoodsList goodsListData={bodyHairOralCare} home_imgSrc={this.state.bodyHairOralCare_src} img_alt="个护" />
                <GoodsList goodsListData={homeFashion} home_imgSrc={this.state.homeFashion_src} img_alt="潮流|居家" />
                <GoodsList goodsListData={homeMakeUp} home_imgSrc={this.state.homeMakeUp_src} img_alt="美妆"/>
                 {/* 大牌精选 好货推荐 */}
                <Recommend recommendData={recommendData} footerSixNavs={footerSixNavs} />
                {/* 版权说明 */}
                <CopyRight/>
                {/* 弹出框 */} 
                <ShowModal showModal={showModal}/>
            </div>
        )
    }
}

//映射
const mapStateToProps= (state)=>{
    const swiperList = state.qcsdata.swiperList || [];
    const SecKillData = state.qcsdata.SecKillData || [];
    const showModal = state.app.showModal || false;
    const fourNavGif = state.qcsdata.fourNavGif || [];
    const luckyMoneyGif = state.qcsdata.luckyMoneyGif || [];
    const recommendData = state.qcsdata.recommendData || [];
    const footerSixNavs = state.qcsdata.footerSixNavs || [];
    const topSale2019 = state.qcsdata.topSale2019 || [];
    const homeMaskList = state.qcsdata.homeMaskList || [];
    const homeSkinCare = state.qcsdata.homeSkinCare || [];
    const bodyHairOralCare = state.qcsdata.bodyHairOralCare || [];
    const homeFashion = state.qcsdata.homeFashion || [];
    const homeMakeUp = state.qcsdata.homeMakeUp || [];
    return {
        swiperList,SecKillData,showModal,fourNavGif,luckyMoneyGif,
        recommendData,footerSixNavs,topSale2019,homeMaskList,homeSkinCare,bodyHairOralCare,
        homeFashion,homeMakeUp};
}

export default connect(mapStateToProps)(Main);