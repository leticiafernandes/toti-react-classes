import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UpdatePost(props) {
  const { id } = props

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:3000/posts/${id}`)
    .then(function (response) {
      const { data: { title, description } } = response 
      setTitle(title)
      setDescription(description)
    })
    .catch(function (error) {
      console.log(error.toJSON())
    })
  },[id])

  const update = (e) => {
    e.preventDefault()
    if (!title && !description) return console.error('Campos obrigatórios!')

    axios.put(`http://localhost:3000/posts/${id}`, {
      title: title,
      description: description
    })
    .then(function (response) {
      alert(JSON.stringify(response))
      console.log('Usuário criado com sucesso!')
    })
    .catch(function (error) {
      console.log(error)
    })
  }
  
  return (
    <div>
      <form onSubmit={(e) => update(e)}>
        <label>
          Título:
          <input
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)} />
        </label>

        <label>
          Descrição:
          <input 
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)} />
        </label>
        <button type="submit">Atualizar</button>
      </form>
    </div>
  )
  
}

export default UpdatePost