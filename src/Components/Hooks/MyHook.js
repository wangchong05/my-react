import React from 'react'
import CustomHook from './CustomHook';

function MyHook(){
    const [count, setCount] = CustomHook()
    return (
        <div>
            {count}
            <button onClick={() => setCount()}>1:点击</button>
        </div>
    )
}

export default MyHook