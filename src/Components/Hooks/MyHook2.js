import React from 'react'
import CustomHook from './CustomHook';

function MyHook2(){
    const [count, setCount] = CustomHook()
    return (
        <div>
            {count}
            <button onClick={() => setCount()}>2:点击</button>
        </div>
    )
}

export default MyHook2