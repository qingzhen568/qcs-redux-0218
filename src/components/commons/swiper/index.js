import React,{Component} from 'react';

//引入轮播插件
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';

import './index.scss'

class MySwiper extends Component {
    //引用swiper轮播插件遇到的bug:4.***版本不能自动轮播,安装 npm i -s swiper@3.4.2 版本
    //用3.4.2版本时,手动拖拽不能轮播,因为请求图片数据是异步处理的,需要设置observer:true,  observerParents:true,
    //第一幅图片一闪而过问题,使用延时器解决,
    //点击后无法自动轮播问题: 设置 autoplayDisableOnInteraction:false, 
    //一个页面有多个轮播图存在时的bug 
    //使用时,className="swiper-container",className="swiper-wrapper"这些是固定的不能更改名称

    componentDidMount(){
        setTimeout(function(){
            new Swiper('.swiper-container',{
                loop:true,
                autoplay:2000,  //可选选项,自动滑动
                observer:true,//异步处理时,需要添加
                observerParents:true,//异步处理时,需要添加
                autoplayDisableOnInteraction:false,  //解决点击后无法自动轮播问题
                pagination:'.swiper-pagination',
                prevButton:'.swiper-button-prev',
                nextButton:'.swiper-button-next'
            })
        },1000)
    }
    render(){
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper"> 
                    {
                        this.props.swiperList.map((item)=><div key={item.id} className="swiper-slide">
                            <img src={item.image_url} alt={item.image_url} />
                        </div>)
                    }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }
}
export default MySwiper;