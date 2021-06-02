import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const increase = () => setCount(count + 1)
  const decrease = () => {
    if (count <= 0) {
      console.error('Não é possível inserir um valor negativo')
      return
    }

    setCount(count-1)
  }

  return (
    <div>
      <button onClick={increase}>Increase</button>
      <p>Seu total é {count}</p>
      <button onClick={decrease}>Decrease</button>
    </div>
  );
}

export default App;