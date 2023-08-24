import React from 'react'
import fea from '../../aswets/777.jpeg'
const BlogDetailsCard = () => {
  return (
    <div>
      <div className="author-box blog-user mb-50">
        <div className="author-profile-info">
        <div className="author-profile-pic">
        <img src={fea} alt=""/>
        </div><div className="author-profile-content">
        <h5>Sonar Z. Moyna</h5>
        <p className="mb-20">Aenean sollicitudin, lorem quis biber idum auctor anisi elit consequat happ quam vel enim augue.</p>
        <ul className="social-media mb-0">
        <li><a rel="noreferrer" target="_blank" href="https://www.facebook.com/">
        <i className="fab fa-facebook-f">
        </i></a></li><li>
        <a rel="noreferrer" target="_blank" href="https://www.instagram.com/">
        <i className="fab fa-instagram">
        </i></a></li><li>
        <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/">
        <i className="fab fa-linkedin-in">
        </i></a></li><li>
        <a rel="noreferrer" target="_blank" href="https://twitter.com/">
        <i className="fab fa-twitter"></i>
        </a></li></ul>
        </div>
        </div>
        </div>
    </div>
  )
}

export default BlogDetailsCard
