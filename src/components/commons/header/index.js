import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Col,Row,Icon} from 'antd';
import './index.scss';

class Header extends Component {
    render(){
        return (
            <div id="header">
                <Row>
                    <Col span={4}><Icon type="user" /></Col>
                    <Col span={16}><input type="text" placeholder="搜你想搜" /></Col>
                    <Col span={4}><Icon type="shopping-cart" /></Col>
                </Row>
                <div className="navBar">
                    <NavLink to="/" exact activeClassName="active">首页</NavLink>
                    <NavLink to="/mask" activeClassName="active">面膜中心</NavLink>
                    <NavLink to="/life" activeClassName="active">居家生活</NavLink>
                    <NavLink to="/global" activeClassName="active">购全球</NavLink>
                </div>
            </div>
        )
    }
}

export default Header;