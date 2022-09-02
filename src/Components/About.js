import React from 'react'
import '../Styles/About.css'

function About() {
    return (
        <div className='aboutContainer' id='About'>
            <h2>About Me</h2>
            {/* <img src='https://i.ibb.co/nrmd3Vj/1601404009762.jpg' alt='a picture of me looking handsome'></img> */}

            <p className='aboutParagraph'>I am a recent graduate from the coding bootcamp, Fullstack Academy. I am looking for my first full-time position as a developer and am also looking for freelance work so I can continue to grow my skillset. During my 6-month bootcamp, I worked to  become an expert on the following technologies:</p>
            <div className='skillIconContainer'>
                <div className='skill'>
                    <h5>HTML</h5>
                    <img className='skillIcons' src='https://img.icons8.com/color/344/html-5--v1.png' alt='HTML5 Logo' />
                </div>
                <div className='skill'>
                    <h5>CSS</h5>
                    <img className='skillIcons' src='https://img.icons8.com/color/344/css3.png' alt='CSS3 Logo' />
                </div>
                <div className='skill'>
                    <h5>JavaScript</h5>
                    <img className='skillIcons' src='https://img.icons8.com/color/344/javascript--v2.png' alt='Javscript logo' />
                </div>
                <div className='skill'>
                    <h5>React</h5>
                    <img className='skillIcons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react logo' />
                </div>
                <div className='skill'>
                    <h5>Node.js</h5>
                    <img className='skillIcons' src='https://cdn-icons-png.flaticon.com/128/5968/5968322.png' alt='node logo' />
                </div><div className='skill'>
                    <h5>PostgreSQL</h5>
                    <img className='skillIcons' src='https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' alt='postgresql logo' unselectable="on" /></div>
                <div className='skill'>
                    <h5>Git</h5>
                    <img className='skillIcons' src='https://img.icons8.com/color/344/git.png' alt='git logo' unselectable="on" /></div>
            </div>

        </div>
    )
}

export default About