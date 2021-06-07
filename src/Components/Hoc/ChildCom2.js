import React from 'react'

const ChildCom2 = (props) => {
    const {color, render} = props
    return (
        <>
            { render && 
                <div>{
                        render()// 把传进来的第一个子组件渲染了
                    }
                </div>
            }
            <div style={{color: color}}>第二个子组件</div>{/* color是父组件传进来的 */}
        </>
    )
}
export default ChildCom2