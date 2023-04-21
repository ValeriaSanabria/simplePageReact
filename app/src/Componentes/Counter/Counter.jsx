import React, {useState, useEffect} from 'react';
import './Counter.css';

function Counter () {
  const [count, setCount] = useState(0);

  useEffect(()=>{
    document.title = `Contador: ${count}`
  },[count])

  const increment = () => {
    setCount(count +1)
  }

  return (
    <div className='counter'>
      <h2>Contador: {count}</h2>
      <button onClick={increment}>Incrementar</button>
    </div>
  )
}

export default Counter