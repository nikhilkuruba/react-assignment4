import React from 'react';
import './Postview.css';
import Logo from './images/logo.png';
import Camera from './images/camera.png';
import heart from './images/heart.png';
import options from './images/more.png';
import tag from './images/tag.png';

import { useState } from 'react';
import { NavLink } from 'react-router-dom';


const Postview = () => {
  const [post, setPost] = useState([]);

  React.useEffect(() => {
    fetch("https://git.heroku.com/instaclonebackend237.git", {
      method: "GET"
    })
      .then((response) => response.json())
      .then((data) => {
        setPost(data.posts)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const date = new Date().toDateString();
  return (
    <div className="site-container">

      <header>
        <div className='title'>
          <img id='logo' src={Logo} height='40px' alt='logo' />
          <h1>Instaclone</h1>
        </div>
        <NavLink to={'/form'}><img id='camera' src={Camera} height='40px' alt='camera' /></NavLink>
      </header>

      <div className='content'>
        {post.map(item => {
          return (
            <div className='card'>
              <div className='info'>
                <h3 className='name'>{item.title}<span className='location'>{item.location}</span></h3>
                <img src={options} alt='options' />
              </div>
              
              <img className='user-img' src={item.PostImage} alt='user-posted-img' />
              
              <div className='post-info'>
                <div><div><img className='icons' src={heart} alt='heart' />
                  <img className='icons' src={tag} alt='tag' /></div>
                  <span>{Math.floor(Math.random() * 100)} likes</span></div>  
                <div><p className="date">{date}</p></div>
              </div>
              <div className='description'>{item.description}</div>
            </div>
          )
        })}

      </div>

    </div>
  );
}

export default Postview;
