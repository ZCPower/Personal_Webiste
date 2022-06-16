import React from 'react'
import './Projects.css'

function Projects() {
    console.log('hey')
    return (
        <div className='projectContainer'>
            <h2>Projects</h2>
            <div className='project'>
                <div className='projectBlurb'>
                    <h3>Grace Shopper... TBD</h3>
                    <p>An Ecommerce Page built from the ground up. A fullstack app.</p>
                </div>
                <img></img>
            </div>

            <div className='project'>
                <div className='projectBlurb'>
                    <h3>Fitness Tracker... TBD</h3>
                    <p>A fullstack web app that tracks fitness wooooooo-eeeeee!</p>
                </div>
                <img></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://earnest-horse-ab4333.netlify.app/register' target='_blank'><h3>Stranger's Things</h3></a>
                    <p>A Craiglist-Lite App built using React</p>
                </div>
                <img></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://lambent-chebakia-68ed4c.netlify.app/'><h3>Art Collector</h3></a>
                    <p>An App built to practice API calls and React. Browse the Harvard Art Museum from the comfort of your home!</p>
                </div>
                <img></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://funny-donut-346f04.netlify.app/' target='_blank'><h3>Tic-Tac-Toe</h3></a>
                    <p>A Classic Game of X's and O's</p>
                </div>
                <img src='https://screenshot-proxy.netlify.app/f_avif,w_336/…0c806f3de/screenshot_2022-04-09-17-42-16-0000.png'></img>
            </div>
            <div>
                <a href='https://www.github.com/zcpower' target="_blank"><img src='https://img.icons8.com/ios-glyphs/344/github.png'></img></a>
                <a href='https://www.codewars.com/users/ZachPowerXC' target='_blank'><img src='https://iceicery.github.io/pinwei/static/media/codewar.9248b102.jpg'></img></a>
            </div>
        </div>
    )
}

export default Projects