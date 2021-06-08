import React, {useState} from 'react'
import ChildCom from './ChildCom'
import ChildCom2 from './ChildCom2'

const FatherCom = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState('white')
    const addFun = () => {
        setCount(count + 1)
        setColor('gray')
    }
    const minusFun = () => {
        setCount(count - 1)
        setColor('gold')
    }

    const [num, setNum] = useState(1)
    const multFun = () => {
        setNum(num * 3)
    }

    const mergeCom = (obj, content) => (
        <ChildCom2
        color={obj.color}
        render={() => content}
        />
    )

    return (
        <>
            <div style={{backgroundColor: '#464c58', marginBottom: '20px'}}>
                <ChildCom count={count * 2} color={color}/>
                <button onClick={addFun}>+1</button>
                <button onClick={minusFun}>-1</button>
            </div>
            <div style={{backgroundColor: '#464c58', marginBottom: '20px'}}>
                <ChildCom count={num} color={'pink'}/>
                <button onClick={multFun}>*3</button>
            </div>
            <div style={{backgroundColor: '#464c58', marginBottom: '20px'}}>
                {
                    mergeCom({color: 'green'}, <ChildCom count={count} color={color}/>)
                }
            </div>
            <div style={{backgroundColor: '#464c58', marginBottom: '20px'}}>
                <ChildCom2 />
            </div>
        </>
    )
}
export default FatherCom