import React from 'react'
import './Projects.css'

function Projects() {
    console.log('hey')
    return (
        <div className='projectContainer'>
            <h2>Projects</h2>
            <div className='project'>
                <div className='projectBlurb'>
                    <h3>Weeaboo</h3>
                    <p>The capstone project of my coding bootcamp. An e-commerce website where users can browse through a selection of anime merch and purchase them using Stripe.</p>
                </div>
                <img id='projectIcon' src='https://cdn-icons-png.flaticon.com/128/6406/6406934.png'></img>
            </div>

            <div className='project'>
                <div className='projectBlurb'>
                    <h3>Fitness Tracker... TBD</h3>
                    <p>A fullstack web app that tracks fitness wooooooo-eeeeee!</p>
                </div>
                <img id='projectIcon' src='https://img.icons8.com/external-justicon-lineal-color-justicon/2x/external-dumbbell-fitness-gym-justicon-lineal-color-justicon-1.png'></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://earnest-horse-ab4333.netlify.app/register' target='_blank'><h3>Stranger's Things</h3></a>
                    <p>A Craiglist-Lite App built using React</p>
                </div>
                <img id='projectIcon' src='https://img.icons8.com/external-creatype-filed-outline-colourcreatype/344/external-market-e-commerce-creatype-filed-outline-colourcreatype.png'></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://lambent-chebakia-68ed4c.netlify.app/'><h3>Art Collector</h3></a>
                    <p>An App built to practice API calls and React. Browse the Harvard Art Museum from the comfort of your home!</p>
                </div>
                <img id='projectIcon' src='https://img.icons8.com/external-flaticons-flat-flat-icons/344/external-art-lifestyles-flaticons-flat-flat-icons-2.png'></img>
            </div>
            <div className='project'>
                <div className='projectBlurb'>
                    <a href='https://funny-donut-346f04.netlify.app/' target='_blank'><h3>Tic-Tac-Toe</h3></a>
                    <p>A Classic Game of X's and O's! Built with Vanilla JavaScript.</p>
                </div>
                <img id='projectIcon' src='https://img.icons8.com/external-flat-lima-studio/344/external-arcade-arcade-flat-lima-studio-12.png'></img>
            </div>
            <div>
                <a href='https://www.github.com/zcpower' target="_blank"><img src='https://img.icons8.com/ios-glyphs/344/github.png'></img></a>
                <a href='https://www.codewars.com/users/ZachPowerXC' target='_blank'><img src='https://iceicery.github.io/pinwei/static/media/codewar.9248b102.jpg'></img></a>
            </div>
        </div>
    )
}

export default Projects 