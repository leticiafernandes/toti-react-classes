import React, { useEffect, useState } from 'react'
import axios from 'axios'

function ListPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [posts])

  const getPosts = () => {
    fetch('http://localhost:3000/posts', {
      method: 'GET'
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      setPosts(data)
    })

    // axios.get('http://localhost:3000/posts')
    //   .then(function (response) {
    //     setPosts(response.data)
    //   })
    //   .catch(function (error) {
    //     console.log(error.toJSON());
    //   });
  }

  const deletePost = (id) => {
    fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
    })
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log('Deletado com sucesso', data);
    })
    .catch(function (error) {
      console.log(error);
    });
    // axios.delete(`http://localhost:3000/posts/${id}`)
    //   .then(function () {
    //     console.log('Post deletado com sucesso!');
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }

  return (
    <div>
      <ul>
        {posts.map((post) => {
          return <li key={post.id}>
            {post.title}
            <button onClick={() => deletePost(post.id)} >Deletar</button>
          </li>
        })}
      </ul>
    </div>
  )
}

export default ListPosts;