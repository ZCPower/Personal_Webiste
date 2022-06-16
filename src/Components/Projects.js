import React from 'react'
import './Projects.css'

function Projects() {
    console.log('hey')
    return (
        <div className='projectContainer'>
            <h2>Projects</h2>
            <div className='project'>
                <h3>Stranger's Things</h3>
                <p>Craiglist Like App</p>
                <p>Tic Tac Toe</p>
                <p>Fitness Tracker</p>
                <p>Grace Shopper</p>
            </div>
            <img src='https://img.icons8.com/ios-glyphs/344/github.png'></img>
        </div>
    )
}

export default Projects