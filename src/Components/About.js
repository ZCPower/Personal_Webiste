import React from 'react'
import './About.css'

function About() {
    return (
        <div className='aboutContainer' id='About'>
            <img src='https://i.ibb.co/nrmd3Vj/1601404009762.jpg' alt='a picture of me looking handsome'></img>
            <h2>About Me!</h2>
            <p className='aboutParagraph'>Hello! I am Zach Power. I graduated from the University of Wyoming with my Bachelor's in Kinesiology and Health Promotion in May 2020. After graduation, I worked a few healthcare jobs and had plans of eventually pursuing a Doctorate in Physical Therapy. I eventually lost the passion to continue to work in healthcare and decided to look elsewhere. I've always had a love for computers and the internet, but never pursued a degree in Computer Science due to the high level of math required. </p>
            <p className='aboutParagraph'>One day, I stumbled upon a Youtube video from a self-taught software engineer talking about how he learned to code. I fell down that rabbit hole and began to teach myself HTML, CSS, and JavaScript. After a while, I decided I needed a more structured learning environment so I enrolled in a coding bootcamp through Fullstack Academy. I fell in love with coding and enjoyed building all of the projects for the class. In the bootcamp, we learned how to build a full-stack application using JavaScript, React, Express, and Node! </p>
            <p className='aboutParagraph'>I'm currently on the hunt for my first role as a developer! I would prefer to work on front-end, but do have the skills to build a back-end if needed. I am eager to continue learning and am excited to find my new home!</p>
            {/* <h4>Technologies: HTML, CSS, JavaScript, React, Node, Express</h4> */}
            {/* <h3 className='hobbies'>Hobbies!</h3> */}
        </div>
    )
}

export default About