import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

//引入页面组件
import Main from '../pages/main';
import Mask from '../pages/mask';
import Life from '../pages/life';
import Global from '../pages/global';
import Page404 from '../pages/Page404';

// 引入头部组件
import Header from '../components/commons/header'


const App = ()=>(
    <BrowserRouter>
        <div id="app">
            <Header />
            <div className="MarginTop">
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/mask" component={Mask} />
                    <Route path="/life" component={Life} />
                    <Route path="/global" component={Global} />
                    <Route path="/**" component={Page404} />
                </Switch>
            </div>
        </div>
    </BrowserRouter>
)
export default App;