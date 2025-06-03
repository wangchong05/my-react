import React from 'react'


const PageOne = () => {

    return (
        <div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
            <div style={{
                width: '100%',
                height: '30px',
                border: '10px solid gray',
                boxSizing: 'border-box',
                marginTop: '100px',
                color: 'white'
            }}>PageOne Content</div>
        </div>
    )
}

export default PageOne

// import {React, Component} from 'react';

// class PageOne extends Component {
//     constructor(props) {
//         super(props);
//         this.handleClick = this.handleClick.bind(this);
//         this.handleClickImage = this.handleClickImage.bind(this);
//         this.state = {
//             active: false,
//         };
//     }

//     componentDidMount() {
//         document.body.addEventListener('click', e => {
//             this.setState({
//                 active: false,
//             });
//         });
//     }

//     componentWillUnmount() {
//         document.body.removeEventListener('click');
//     }

//     handleClick() {
//         this.setState({
//             active: !this.state.active,
//         });
//     }

//     handleClickImage(e) {
//         e.stopPropagation();
//     }

//     render() {
//         return (
//             <div className="image-wrapper">
//                 <button className="image" onClick={this.handleClick}>图片</button>
//                 <div
//                     className="code"
//                     style={{ display: this.state.active ? 'block' : 'none' }}
//                     onClick={this.handleClickImage}
//                 >
//                     <img src="https://seopic.699pic.com/photo/50079/4481.jpg_wh1200.jpg" alt="image" />
//                 </div>
//             </div>
//         );
//     }
// }
// export default PageOne


// import React, { Component } from 'react';

// class Example extends Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//     this.handleClickImage = this.handleClickImage.bind(this);
//     this.wrapperRef = React.createRef(); // 创建一个ref来引用wrapper
//     this.state = {
//       active: false,
//     };
//   }

//   handleClick() {
//     this.setState({
//       active: !this.state.active,
//     });
//   }

//   handleClickImage(e) {
//     e.stopPropagation();
//   }

//   // 使用ref来只在wrapper上添加点击事件
//   componentDidMount() {
//     this.wrapperRef.current.addEventListener('click', () => {
//       if (!e.target.closest('.code img')) { // 检查点击事件是否来自图片
//         this.setState({
//           active: false,
//         });
//       }
//     });
//   }

//   componentWillUnmount() {
//     this.wrapperRef.current.removeEventListener('click');
//   }

//   render() {
//     return (
//       <div className="image-wrapper" ref={this.wrapperRef}>
//         <button onClick={this.handleClick}>显示/隐藏图片</button>
//         <div
//           className="code"
//           style={{ display: this.state.active ? 'block' : 'none' }}
//           onClick={this.handleClickImage}
//         >
//           < img src="image.jpg" alt="示例图片" />
//         </div>
//       </div>
//     );
//   }
// }

// export default Example;