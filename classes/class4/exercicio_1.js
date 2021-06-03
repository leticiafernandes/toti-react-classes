import React, { useState } from 'react';
import './App.css'

function App() {
  const [buttonText, setButtonText] = useState('Clique para mudar meu texto!')

  return (
    <div>
      <button onClick={() => setButtonText('Mudei!')}>{buttonText}</button>
    </div>
  );
}

export default App;