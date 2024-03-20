import React from 'react'
import paw from '../../assets/paw.png'
import './blog.css'

function Blog() {
  return (
    <section className="about-us">
    <div className="about">
      <img src={paw} className="pic"/>
      <div className="text">
        <h2 className='gradient__text'>About Us</h2>
        <h5>Discover Our Story: <span> Passion, Dedication, and Compassion</span></h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!</p>
        <div class="data">
        <a href="#" className="more">Read more</a>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default Blog