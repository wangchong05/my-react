import React, {Component, Fragment} from 'react';// ES6的解构赋值写法
import './../App.css';
import TodoItem from './TodoItem';

// class TodoList extends React.Component {
class TodoList extends Component {// ES6的解构赋值后，这块就可以直接写Component

    constructor(props){
        super(props);
        this.state = {
            list: [
                'learn react',
                'learn English',
                'learn Vue'
            ],
            inputValue: '',
            isLogin: true
        }

        this.inputChange = this.inputChange.bind(this);
        // this.addBtnClick = this.addBtnClick.bind(this);
        this.deleteBtnClick = this.deleteBtnClick.bind(this);
    }

    addBtnClick = () => {// 写成addBtnClick()就要在click上绑定.bind(this)；写成箭头函数就不用在click上绑定.bind(this)；否则在constructor里初始化也可以
        if(!this.state.inputValue || this.state.list.indexOf(this.state.inputValue) !== -1) {
            return;
        }
        // this.state.list.push('learn Angular')
        // 如果不在click上绑定.bind(this)，就会报错，因为这个this已经指向的是button这个按钮了，而不是TodoList。但是这样写依然push不上去。
        this.setState({
            list: [...this.state.list, this.state.inputValue],
            // 三个点这样的写法是ES6的语法，代表展开运算符，等同于把list数组里的内容罗列到这里了
            inputValue: '',
            isLogin: !this.state.isLogin
        })
    }

    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    deleteBtnClick(index) {
        const list = [...this.state.list];// 如果操作state里面的数据，尽量不要直接改，复制一个副本出来
        list.splice(index, 1);
        // this.setState({
        //     list: list
        // })
        this.setState({list})// 在ES6里，如果键值相同，写一个就可以了
    }

    getTodoItems() {
        return (
            this.state.list.map((item, index) => {
                return (
                    // <li key={index} onClick={this.deleteBtnClick.bind(this, index)}>{item}</li>
                    //  不写key值会报错，Each child in a list should have a unique "key" prop.
    
                    <TodoItem
                     delete_fun={this.deleteBtnClick} 
                     key={index} 
                     content={item} 
                     index={index}/>
                     // 父组件以属性形式向子组件传参：TodoList作为父组件，向子组件TodoItem传递了content属性
                )
            })
        )
    }

    render() {
        let button = '';
        // if (this.state.isLogin) {
        //     button = <button>已登陆状态</button>
        // } else {
        //     button = <button>非登陆状态</button>
        // }
        button = (this.state.isLogin)?<button>已登陆状态</button>:<button>非登陆状态</button>
        return (
            // <React.Fragment>
            <Fragment>
            {/* ES6的解构赋值后，这块就可以直接写Fragment */}
            {/* 用React.Fragment标签来替换div标签，实际不会生成多余的一层标签了 */}
                <div>
                    <input value={this.state.inputValue} onChange={this.inputChange}/>
                    <button style={{background:'green'}} className='color-white' onClick={this.addBtnClick}>add</button>
                    {/* this指向的问题 */}
                    {/* 内联样式以对象的形式来写 */}
                    {/* class样式：在react中，class用来表示的是定义一个组件的，所以class样式应该用className */}
                </div>
                <ul>
                    { this.getTodoItems() }
                </ul>
                {button}
            </Fragment>
        );
    }
}

export default TodoList;
