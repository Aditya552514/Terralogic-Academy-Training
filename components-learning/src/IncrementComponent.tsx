import React, {useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0); // initialize state with 0;

    const increment=()=>{
        
        setCount(count+1);
    };
    

     const decrement = () => {
        count > 0 && setCount(count - 1);
    };


    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>
                Like
            </button>
            <button onClick={decrement}>
                Dislike

            </button>
        </div>
    );
}

export default Counter;