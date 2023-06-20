import blogFetch from "../Axios/Config"

import { useState, useEffect  } from "react"

import { Link } from "react-router-dom"

import "./Home.css"


const Home = () => {

  const [posts, setPosts] = useState([])

  const getPosts = async() =>{
    console.log("Testando")

    try {
      const response = await blogFetch.get("/posts")

        const data = response.data
        
        setPosts(data)
    }catch (error) {
      console.log(error)
    }

  }
  useEffect(() => {

    getPosts()
  }, []) 


  return (
   <div className="home">
    <h1>Últimos Posts</h1>
    {posts.length === 0 ? (<p>Carregando...</p>): (
      posts.map((post) => (
        <div className="post" key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <Link to={`/post/${post.id}`} className="btn">Leia Mais</Link>
        </div>
      ))
    )}
  </div>
  )
}

export default Home