import React, { useState } from 'react'

function MyFirstInput() {
  const [name, setName] = useState('')

  const handleName = (event) => {
    setName(event.target.value)
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(event) => handleName(event)} />
      </form>
      <h4>Estou digitando:</h4>
      <p>{name}</p>
    </div>
  )
}

export default MyFirstInput