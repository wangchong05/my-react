import React from 'react'

const ChildCom = (props) => {
    const {count, color} = props
    return (
        <>
            <div style={{color: 'red'}}>第一个子组件</div>
            <div style={{color: color}}>count:{count}</div>
        </>
    )
}
export default ChildCom