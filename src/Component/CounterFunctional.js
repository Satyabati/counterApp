import React,{useState} from 'react';

function CounterFunctional(props) {
    const [count,setCount]= useState(props.count);
  return (
    <div>
    <h1>The count is {count}</h1>
    <button onClick={() => setCount(count+1)}>+1</button>
    <button onClick={() => setCount(count-1)}>-1</button>
    <button onClick={() => setCount(props.count)}>Reset</button>
    </div>
  )
}

export default CounterFunctional;
