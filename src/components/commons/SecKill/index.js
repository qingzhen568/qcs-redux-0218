import React,{Component} from 'react';

import './index.scss';

class SecKill extends Component {
    render(){
        return (
            <div id="SecKill">
                <div className="SecKill_title">
                    <div>
                        <span className="title">今日秒杀</span>
                        <div className="timeStamp">
                            {/* <span>{this.state.Hour}</span>:
                            <span>{this.state.Minute}</span>:
                            <span>{this.state.Second}</span> */}
                        </div>
                    </div>
                    <span>更多好货&gt;</span>
                </div>
                <div className="goodsWrap">
                    {
                        this.props.SecKillData.map((item,index)=><ul key={index} className="SecKillList">
                            <li className="SecKillItem">
                                <img src={item.image_url} alt={item.item_id} />
                                <p className="SecKill_itemName">{item.item_short_name}</p>
                                <p><span className="promotion_price">&yen;{item.promotion_price/100}</span><s className="market_price">&yen;{item.market_price/100}</s></p>
                            </li>
                        </ul>)
                    }
                </div>
            </div>
        )
    }
}

export default SecKill;