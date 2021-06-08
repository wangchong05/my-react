import React, { useState, useCallback, useEffect } from 'react';

function UseCallbackDemo() {
    const [count, setCount] = useState(0);
 
    // const callback = useCallback(() => {
    //     return count;
    // }, [count])


    const add = () => {
        setCount(count=> count+1)
        console.log(count)
    }

    return <div>
        <br />
        <span>UseCallback:</span>
        <br />
        <span>父：{count}</span>
        {/* <Child callback={callback}/> */}
        <Child value={count}/>
        <div>
            <button onClick={add}>点击+1</button>
        </div>
    </div>;
}
 
// function Child({ callback }) {
function Child({ value }) {
    // const [count, setCount] = useState(() => callback());
    const [count, setCount] = useState(value);

    useEffect(() => {
        console.log('Child渲染')
    //     setCount(callback);
    // }, [callback]);
        setCount(value);
    }, [value]);

    return <div>
        <span>
            子：{count}
        </span>
    </div>
}


export default UseCallbackDemo