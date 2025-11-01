// import { Console } from 'console';
import React, { useState, useEffect } from 'react'

const FunctionalLifeCycle : React.FC = () => {
    const [ count, setCount ] = useState<number>(0);

    // runs once when component mounts
    useEffect(()=> {
        console.log("Component Mounted");

        // runs when component unMounts
        return() => {
            console.log("Component Unmounted");
        };

    }, []);
    //Runs on every re -render (update)
    useEffect(() => {
        console.log("component updated: count changed to ", count);
    }, [count]);

    return(
        <div>
            <h2> Functional Life Cycle Demo</h2>
            <p>count: {count}</p>
            <button onClick ={() => setCount(count +1)} > Increment</button>
        </div>
    )


}


export default FunctionalLifeCycle