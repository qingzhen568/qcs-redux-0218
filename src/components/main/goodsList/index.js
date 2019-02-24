import React,{Component} from 'react';
import {Icon} from 'antd';
import {withRouter} from 'react-router-dom';
//引入样式
import './index.scss';

class GoodsList extends Component{
    render(){
        return (
            <div id="GoodsList">
                {/* 今日秒杀下面的商品组 */}
                <img src={this.props.home_imgSrc} alt={this.props.img_alt}/>
                <ul className="List">{
                    this.props.goodsListData.map((item,index)=>{return index< 9? <li key={item.over_image_url} className="Item">
                        <img src={item.over_image_url} alt={item.brand_name}/>
                        <p className="ItemName">{item.item_short_name}</p>
                        <div className="ItemFooter">
                            <div className="ItemPrice">
                                <span className="min_app_price">&yen;{item.min_app_price/100}</span><s className="min_market_price">&yen;{item.min_market_price/100}</s> 
                            </div>
                            <span><Icon className="shoppingCart" type="shopping-cart"/></span>
                        </div>
               </li>:''})
               }</ul>
            </div>
        )
    }
}
export default withRouter(GoodsList);