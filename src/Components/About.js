import React from 'react'
import './About.css'

function About() {
    return (
        <div className='aboutContainer'>
            <img src='https://i.ibb.co/nrmd3Vj/1601404009762.jpg' alt='a picture of me looking handsome'></img>
            <h2>About Me!</h2>
            <p className='aboutParagraph'>Hello! I am Zach Power. I graduated with my Bachelor's in Kinesiology and Health Promotion in May 2020. After graduation, I worked a few healthcare jobs and had plans of eventually pursuing a Doctorate in Physical Therapy. I eventually lost the passion to continue to work in healthcare and decided to look elsewhere. I've always had a love for computers and the internet, but never pursued a degree in Computer Science due to the high level of math required. </p>
            <p className='aboutParagraph'>One day, I stumbled upon a Youtube video talking about self-taught programmers and how to learn to code. I fell down that rabbit hole and began to teach myself HTML, CSS, and JavaScript. After a while, I decided I needed a more structured learning environment so I enrolled in a coding bootcamp through Fullstack Academy. </p>
            <h4>Technologies: HTML, CSS, JavaScript, React, Node, Express</h4>
            <h3>Hobbies!</h3>
        </div>
    )
}

export default About