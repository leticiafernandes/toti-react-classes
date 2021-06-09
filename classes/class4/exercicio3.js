import React, { useState } from 'react';

function MyFirstForm() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleAge = (e) => {
    if (e.target.value < 0) {
      console.error("Não é possível preencher idade negativa")
      return
    } 

    setAge(e.target.value)
  }

  const cleanForm = () => {
    setName('')
    setAge(0)
  }

  return (
    <form>
      <input 
        type="text" 
        placeholder="Preencha seu nome" 
        value={name} 
        onChange={(e) => handleName(e)} />

      <input 
        type="number" 
        value={age} 
        onChange={(e) => handleAge(e)} />

      <button onClick={() => cleanForm}>Limpar!</button>
    </form>
  );
}

export default MyFirstForm;