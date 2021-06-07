import React from 'react';

class TodoItem extends React.Component {
    // 子组件如果想和父组件通信，子组件要调用父组件传过来的方法

    constructor(props) {
        super(props);
        this.getIndexFun = this.getIndexFun.bind(this);
    }

    getIndexFun() {
        const { delete_fun, index } = this.props;
        // ES6的解构赋值写法
        delete_fun(index);
    }

    render() {
        const { content } = this.props;
        return (
            <div onClick={this.getIndexFun}>{content}</div>
            // 通过props属性的形式接收到父组件传递过来的内容了
        )
    }
}

export default TodoItem;