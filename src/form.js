import { useState } from "react";
import './form.css';


export default function Form() {
  const [post, setPost] = useState({title: "", location:"", description: "", PostImage: ""});
  function handleChange(e) {
    setPost({ ...post, [e.target.name]: e.target.value });
  }
  async function Submit(e) {
    e.preventDefault();
    try{
        const res = await fetch("https://git.heroku.com/instaclonebackend237.git", {
            method: "POST",
            body: JSON.stringify(post),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
          });
          const data = await res.json();
          alert("new post posted")
          window.location.href='/'
          console.log(data);
    }catch{
        alert('unable to post');
    }}

  return (
    <div className="page">
      <form onSubmit={Submit} className = 'form'>
        <div className="one-form">
          <label>Title:<br/></label>
          <input 
            type="text"
            name="title"
            placeholder="title"
            onChange={handleChange}
          />
        </div>
        <div className="one-form">
          <label>Location:<br/></label>
          <input
            type="text"
            name="location"
            placeholder="location"
            onChange={handleChange}
          />
        </div>
        <div className="one-form">
          <label>description:<br/></label>
          <input
            type="text"
            name="description"
            placeholder="description"
            onChange={handleChange}
          />
        </div>
        <div className="one-form">
          <label>ImageURL:<br/></label>
          <input
            type="text"
            name="PostImage"
            placeholder="Enter URL"
            onChange={handleChange}
          />
        </div>
        <input className="btn" type="submit" value="Post" />
      </form>
    </div>
  );
}