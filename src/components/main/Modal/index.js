import React,{Component} from 'react';
//引入将ui组件转为容器组件
import {connect} from 'react-redux';

//引入antd里的弹出框组件
import {Modal} from 'antd';

//引入动作
import {changeModalState} from '../../../actions';

import './index.scss';

class ShowModal extends Component {
    render(){
        return (
            <div>
                <Modal
                    visible={this.props.showModal}
                    onCancel={()=>this.props.dispatch(changeModalState(false))}
                    footer={null}
                >
                    <img src="https://image.watsons.com.cn//upload/7e3cf56d.png" alt="新人红包"/>
                </Modal>
            </div>
        )
    }
}

export default connect()(ShowModal);