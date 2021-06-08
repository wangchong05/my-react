import React, {Component, Fragment} from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import About from './About/index';
import Home from './Home/index';
import MyNavLink from './MyNavLink'

class RouterTest extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {}
    // }

    state = {
      routeArr: [
        {
          id: '01',
          path: '/about',
          name: 'About'
        }, {
          id: '02',
          path: '/home',
          name: 'Home'
        }
      ]
    }

    // push模式
    pushClick = (id, name)=> {
      this.props.history.push(`/about/${id}/${name}`)// push跳转，传params参数
      this.props.history.push(`/about/?id=${id}&name=${name}`)// push跳转，传search参数
      this.props.history.push(`/about`, {id: id, name: name})// push跳转，传state参数
    }

    // replace模式
    replaceClick = (id, name)=> {
      this.props.history.replace(`/about/${id}/${name}`)// replace跳转，传params参数
      this.props.history.replace(`/about/?id=${id}&name=${name}`)// replace跳转，传search参数
      this.props.history.replace(`/about`, {id: id, name: name})// replace跳转，传state参数
    }

    // 前进
    forward = ()=> {
      this.props.history.goForward()
    }

    // 后退
    back = ()=> {
      this.props.history.goBack()
    }

    render() {
      const { routeArr } = this.state
      return (
          <Fragment>
            <div>
              RouterTest
              <br/>
              {/* <div style={{width: '200px', backgroundColor: 'white'}}> */}
                {/* 编写路由链接，在React中靠路由链接实现切换组件 */}
                {/* <NavLink to='/about'>About</NavLink><br/>
                <NavLink to='/home' activeStyle={{fontWeight: 'bold',color: 'red'}}>Home</NavLink><br/>
                <NavLink to='/'>////////////////////</NavLink> */}
                {/* <MyNavLink to='/about' children={'About'}/> */}
                {/* <MyNavLink to='/home' children={'Home'}/> */}
                {/* <MyNavLink to='/' children={'reset'}/> */}
              {/* </div> */}
              {
                routeArr.map((e, index) => {
                  return <div key={index}>
                    <MyNavLink to={e.path} children={e.name}/>
                    <br/>
                    <div>{/* js触发跳转 */}
                      <button onClick={() => this.pushClick(e.id, e.name)}>push跳转路由</button><br/>
                      <button onClick={() => this.replaceClick(e.id, e.name)}>replace跳转路由</button><br/>
                    </div>
                  </div>
                })
              }
              <br/>
              <div>
                {/* 注册路由 */}
                <Switch>{/* 用Switch包起来，路由找到即停，不会再往下找 */}
                  <Route path="/about" component={About}/>
                  <Route exact={false} path="/home" component={Home}/>
                  <Redirect to="/about"/>{/* Redirect用于路由重定向 */}
                </Switch>
              </div>
              <button onClick={this.forward}>前进</button><br/>
              <button onClick={this.back}>后退</button><br/>
            </div>
          </Fragment>
      );
    }
}

export default withRouter(RouterTest);
