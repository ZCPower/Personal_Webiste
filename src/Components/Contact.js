import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contactContainer'>
      <div>
        <h2>Contact</h2>
        <h4>Interested in my work? Feel free to shoot me a message!</h4>
      </div>
      <form className='contactForm'>
        <div>
          <input placeholder='Your Name'></input>
          <input placeholder='Your Email'></input>
        </div>
        <textarea placeholder='Your Message'></textarea>
        <button>Send</button>
      </form>
      <div className='contactInfo'>

        <a href='https://www.linkedin.com/in/zachary-power-1418181b8/' target='_blank'><img src='https://img.icons8.com/fluency/344/linkedin-circled.png'></img></a>
        <img src='https://img.icons8.com/color/344/gmail-new.png'></img>
        <a href='https://www.upwork.com/freelancers/~017372d05a990f2645'><img src='https://assets-global.website-files.com/5ec7d9f13fc8c0ec8a4c6b26/6092b794e0419d97d9b06e2b_Favicon%20256.png'></img></a>
      </div>
    </div>
  )
}

export default Contact