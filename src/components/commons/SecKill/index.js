import React,{Component} from 'react';

import './index.scss';

class SecKill extends Component {
    render(){
        return (
            <div id="Seckill">
                <div className="secKill_head">
                    <h4 className="">今日秒杀</h4>
                    <div className="countDown"></div>
                    <div className="more">更多好货&gt;</div>
                </div>
                <div className="secKill_main"> 
                    <ul  className="secKill_list">
                    {
                        this.props.SecKillData.map((item)=><li key={item.sku_id} className="secKill_item">
                            <img src={item.image_url} alt={item.item_short_name} />
                            <p className="secKill_item_name">{item.item_short_name}</p>
                            <p className="secKill_item_price">
                                <span>&yen;{item.promotion_price/100}</span>&nbsp;&nbsp;
                                <s>&yen;{item.market_price/100}</s>
                            </p>
                        </li>)
                    }
                    </ul>
                </div>
            </div>
        )
    }
}

export default SecKill;