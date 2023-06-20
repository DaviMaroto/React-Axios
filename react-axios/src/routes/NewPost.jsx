import blogFetch from "../Axios/Config"
import { useState } from "react"

import { useNavigate } from "react-router-dom"

import "./NewPost.css"

const NewPost = () => {

  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();

    const post = { title, body, userId: 1 };

    await blogFetch.post("/posts", {
      body: post,
    });

    navigate("/");
  };


  return <div className="new-post">
      <h2>Inserir novo Post:</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Titulo:</label>
          <input 
          type="text" 
          name="title" 
          id="title" 
           placeholder="Digite o titulo do post"
           onChange={(e) => setTitle(e.target.value)} 
            />
        </div>
        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite seu conteúdo"
          onChange={(e) => setBody(e.target.value)} 
          > </textarea>
        </div>
        <input type="submit" value="Criar post" className="btn" />
      </form>
  </div>
    
}

export default NewPost