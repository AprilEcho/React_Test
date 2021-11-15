import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import axios from "axios";

class Search extends Component {
  search = () => {
    //获取用户的输入（连续解构+重命名）
    const {keyWordNode: {value: keyWord}} = this
    //发送请求之前更新状态
    // this.props.updateAppState({isFirst: false, isLoading: true})
    PubSub.publish('atguigu',{isFirst: false, isLoading: true})
    //发送网络请求
    axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
      response => {
        //请求成功后通知List更新状态
        // this.props.updateAppState({isLoading: false, users: response.data.items})
        PubSub.publish('atguigu',{isLoading: false, users: response.data.items})
      },
      error => {
        //请求失败后通知List更新状态
        // this.props.updateAppState({isLoading: false, err: error.message})
        PubSub.publish('atguigu',{isLoading: false, err: error.message})
      }
    )
  }

  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input ref={(currentNode) => this.keyWordNode = currentNode} type="text"
                 placeholder="enter the name you search"/>&nbsp;
          <button onClick={this.search}>Search</button>
        </div>
      </section>
    );
  }
}

export default Search;