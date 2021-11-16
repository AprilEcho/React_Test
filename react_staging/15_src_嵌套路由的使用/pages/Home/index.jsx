import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'
import MyNavLink from '../../components/MyNavLink'
import News from "./News";
import Message from "./Message";

class Home extends Component {
  render() {
    return (
      <div>
        <h3>我是Home的内容</h3>
        {/*嵌套路由*/}
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>

          </ul>
          {/*Switch只显示匹配到的第一个路由*/}
          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            {/*重定向*/}
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>


    );
  }
}

export default Home;