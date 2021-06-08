import React, {Component, Fragment} from 'react';

class About extends Component {

    constructor(props){
        super(props);
        this.state = {}
    }
    

    render() {
      console.log('About:', this.props)// 路由组件是没有机会写组件标签的，传递的是什么都靠路由器传进去的，会收到路由器给传递的props信息
      return (
          <Fragment>
            <div>
              About
            </div>
          </Fragment>
      );
    }
}

export default About;
