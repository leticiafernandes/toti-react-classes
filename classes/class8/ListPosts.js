import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListPosts() {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState('')
  const [searchContext, setSearchContext] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    getPosts()
  }, [posts.length])

  const getPosts = () => {
    axios.get('http://localhost:3000/posts')
      .then(function (response) {
        setPosts(response.data)
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }

  const searchPost = (e) => {
    e.preventDefault()

    if (!searchText || !searchContext) return console.log('Você deve preencher todos os campos da busca')

    axios.get(`http://localhost:3000/posts?${searchContext}=${searchText}`)
      .then(function (response) {
        if (!response.data.length) return console.warn('Nenhum resultado encontrado!')

        setSearchResult(response.data)
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }

  return (
    <div>
      <form onSubmit={(e) => searchPost(e)}>
        <p>Pelo que você deseja buscar?</p>
        <label htmlFor="username">
          Usuário
          <input
            type="radio"
            id="username"
            name="context"
            value="username"
            required
            onChange={(e) => setSearchContext(e.target.value)} />
        </label>

        <label htmlFor="other">
          Texto
          <input
            type="radio"
            id="text"
            name="context"
            value="text"
            required
            onChange={(e) => setSearchContext(e.target.value)} />
        </label>

        <input
          type="text"
          name="search"
          placeholder="Digite sua busca"
          required
          onChange={(e) => setSearchText(e.target.value)} />

        <button type="submit">Buscar</button>
      </form>
      <div>
        {searchResult.map((res) => {
          return <span key={res.id}>@{res.username} - {res.text}</span>
        })}
      </div>

      <h1>O que você está pensando?</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>@{post.username} - {post.text}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default ListPosts