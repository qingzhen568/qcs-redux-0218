import React,{Component} from 'react'

import './index.scss'

class Recommend extends Component{
    render(){
        return (
            <div id="recommendWrap">
                {/* 大牌精选 好货推荐 */}
                <img src="https://image.watsons.com.cn//upload/8c3676f5.jpg?x-oss-process=image/quality,q_80/format,webp" alt="大牌精选 好货推荐" />
                <div id="recommend">
                    <span className="recommend_title"> </span>
                {
                    this.props.recommendData.map((item,index)=><div key={index} className="recommendItem">
                        <img src={item.image_url} alt={item.topic_id} />
                    </div>)
                }
                </div>
                {/* 底部: HomefooterSix_CategaryNavs_170505_7 */}
                <div id="footerSix">
                {
                    this.props.footerSixNavs.map((item,index)=><div key={index} className="footerSixItem">
                        <img src={item.image_url} alt={item.topic_id} />
                    </div>)
                }
                </div>
            </div>
        )
    }
}
export default Recommend;