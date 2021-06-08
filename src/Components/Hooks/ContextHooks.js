import React, { Component } from 'react'
import './hooks.css';

// 创建Context对象
const MyContext = React.createContext()
console.log(MyContext)
const { Provider, Consumer } = MyContext

class A extends Component {

    state = { username: 'AA' }

    render() {
        return (
            <div className="parent">
                <h1>A组件</h1>
                <h2>名称：{this.state.username}</h2>
                {/* <B username={this.state.username}/> */}
                <Provider value={this.state.username}>
                    <B/>
                </Provider>
            </div>
        )
    }
}

class B extends Component {

    render() {
        return (
            <div className="child">
                <h1>B组件</h1>
                <h2>B从A接收到的名称：{this.props.username}</h2>
                <C username={this.props.username}/>
            </div>
        )
    }
}

// // C组建是类式组件
// class C extends Component {

//     // 声明接收context
//     static contextType = MyContext

//     render() {

//         console.log(this.context)// 在组件实例对象身上的context里面接收
//         return (
//             <div className="grandson">
//                 <h1>C组件</h1>
//                 {/* <h2>C从B接收到的名称：{this.props.username}</h2> */}
//                 <h2>C从B接收到的名称：{this.context}</h2>
//             </div>
//         )
//     }
// }

// C组件是函数式组件
function C(){
    return (
        <div className="grandson">
            <h1>C组件</h1>
            <Consumer>
                {
                    value => {
                        return (
                            <h2>C从B接收到的名称：{value}</h2>
                        )
                    }
                }
            </Consumer>
        </div>
    )
}
  

export default A