import { useState } from 'react'

function CustomHook(){
    const [count, setCount] = useState(1)
    const mySetCount = () => {
        setCount(count*2)
    }
    return [count, mySetCount]
}

export default CustomHook