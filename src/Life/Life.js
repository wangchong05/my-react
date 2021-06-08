import React from 'react';
import ReactDOM from 'react-dom';

class Life extends React.Component {
    state = {opacity:1}

    death = ()=>{
        ReactDOM.unmountComponentAtNode(document.getElementById('test'))
    }

    // componentWillMount(){
    //     console.log('componentWillMount')
    // }

    componentDidMount(){
        this.timer = setInterval(() => {
            let {opacity} = this.state
            opacity -= 0.1
            if(opacity <= 0) opacity  = 1
            this.setState({opacity})
        }, 200);
    }

    // render调用时机：初始化渲染、状态更新之后
    // action = ()=>{
    // }

    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() {
        // console.log('render')
        return (
            <div>
                <h2 style={{opacity:this.state.opacity}}>REACT</h2>
                <button onClick={this.death}>不活了</button>
                <button onClick={this.action}>开始变化</button>
            </div>
        )
    }
}

export default Life;