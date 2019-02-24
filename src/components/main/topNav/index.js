import React,{Component} from 'react';

import './index.scss';

class TopNav extends Component {
    render(){
        return (
            <div id="TopNav">
                <div className="aboutUs">
                    <img src="https://image.watsons.com.cn//upload/8e50f2e3.png?x-oss-process=image/indexcrop,y_800,i_0/quality,q_80/format,webp" alt="营业信息" />
                </div>
                <div className="fourNavGif">{
                    this.props.fourNavGif.map((item)=><div key={item.image_url} className="fourGifWrap">
                        <img src={item.image_url} alt={item.gmt_modified}/>
                    </div>)
                }</div>
                <div className="luckyMoneyGif">{
                    this.props.luckyMoneyGif.map((item)=><div key={item.image_url} className="luckyMoneyGifWrap">
                        <img src={item.image_url} alt={item.gmt_modified}/>
                    </div>)
                }</div>
            </div>
        )
    }
}

export default TopNav;