import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// 类式组件
class ClassDemo extends Component {

  state = { count: 0 }

  myRef = React.createRef()

  // componentDidMount() {
  //   this.timer = setInterval(()=> {
  //     this.setState(state => ({count: state.count+1}))
  //   }, 1000)
  // }
  // componentWillUnmount() {
  //   clearInterval(this.timer)
  // }

  add = ()=> {
    this.setState(state => ({count: state.count+1}), ()=> { console.log(this.state.count) })
    
  }

  unmount = ()=> {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  }

  show = ()=> {
    alert(this.myRef.current.value)
  }


  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h2>总和{this.state.count}</h2>
        <button onClick={this.add}>点击+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击展示当前值</button>
      </div>
    )
  }
}

export default ClassDemo