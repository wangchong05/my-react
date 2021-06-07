import React, {useState} from 'react'

const HocTest = (props) => {
    const { name, value } = props
    return (
        <div>
            HocTest,,{name}
            <br />
            {value}
        </div>
    )
}

const enhanceComponent = WrapperComponent => ({...props}) => WrapperComponent(props)
// const enhanceComponent = (WrapperComponent) => {
//     return ({...props}) => {
//         return WrapperComponent(props)
//     }
// }

export default enhanceComponent(HocTest)