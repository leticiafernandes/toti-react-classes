
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function User() {
  const [user, setUser] = useState({})

  //param 1 o que, param 2 quando executar
  useEffect(() => {
    getUserByUsername()
  }, [])

  const getUserByUsername = () => {
    axios.get('https://api.github.com/users/leticiafernandes')
      .then(function (response) {
        console.log(response.data);
        setUser(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  return (
    <div>
      <h1>{user.login}</h1>
      <img src={user.avatar_url} width="300" />
    </div>
  )
}