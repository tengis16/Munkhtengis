import React from 'react'
import {Link} from 'react-router-dom'

const HomeContainer = () => {
  return (
    <div className="app">
    <div className="dad">
      <div className="header">
        <div className="team">team.</div>
        <div className="tav">
          <div className="product">Product</div>
          <div className="services">Services</div>
          <div className="contact">Contact</div>
         <Link to='/login'> <div style={{ color: '#fff' }} className="login">Log in</div></Link>
          <div className="get">Get Acces</div>
        </div>
      </div>
      <div className="mid">
        <div className="tomug">Instant collaborations for remote teams</div>
        <div className="jijigug">All in one for your remote team chats, collaboration and track projects</div>

      </div>
      <div className="bot">
          <input className='input' type="text" placeholder='Email' />
          <button className='button'>Get early acces</button>
      </div>
    </div>
    {/* <div className="tsagaan">
      <div className="heseghoyr">
        <div className="ugnuud">
          <div className="teamwork">Your Hub for teamwork</div>
          <div className="give">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
        </div>
      </div>
    </div> */}
  </div>
  )
}

export default HomeContainer