import React from 'react'

function Button(props:{name: string})  {
    const {name} = props
    return (
        <button style={{ backgroundColor:'blue', color:'white', padding: '10px', borderRadius: '15px', border: 'none', margin:'2px'}}>
       {name}
        </button>
    )
}

export default Button;