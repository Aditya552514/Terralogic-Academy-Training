import React from 'react'

const ArrayTraversal = () => {
    const items : undefined | any[] = ["Bunny", "Johny", "Sunny"];
  return (
    <div>
        <ul>
            {items?.map(val => (
                <li>{val}</li>
            ))}
        </ul>
    </div>
  )
};

export default ArrayTraversal;