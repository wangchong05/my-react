import React from 'react'
import ReactDOM from 'react-dom'

// 函数式组件
function FunDemo(){

  const [count, setCount] = React.useState(0)
  console.log('render-Demo',count)
  console.log(count, setCount);
  // a是状态，b是一个内置的函数，可以用来更新a

  React.useEffect(()=>{
    console.log('@@@@', count)
  }, [])// 这个[]数组有检测的意思，如果不写空数组，底层默认是检测所有状态的改变，每次改变都会调用这里面的函数；如果写了，则认为全都不监测
  // }, [count])
  // 如果数组里写了count，就是监测count。这个useEffect里面的函数会在两个时刻输出：组件挂载、count更新

  React.useEffect(()=>{
    // let timer = setInterval(()=> {
    //   setCount(count=> count+1)
    // }, 1000)
    return ()=>{// useEffect里面return出来的的函数就相当于了componentWillUnmount
      // clearInterval(timer)
    }
  }, [])

  const myRef = React.useRef()

  function add(){
    // setCount(count+1)// 第一种写法
    // setCount((count=>{return count+1}))// 第二种写法
    setCount(count=> count+1)// 第二种写法的简写
  }

  // function unmount(){
  //   ReactDOM.unmountComponentAtNode(document.getElementById('root'))
  // }

  function show(){
    alert(myRef.current.value)
  }
  
  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>总和{count}</h2>
      {/* <button onClick={add}>点击+1</button> */}
      <button onClick={add}>点击+1</button>
      {/* <button onClick={unmount}>卸载组件</button> */}
      <button onClick={show}>点击展示当前值</button>
    </div>
  )
}

export default FunDemo