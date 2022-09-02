import React from 'react'
import './Home.css'

function Home() {
    return (
        <div className='homeContainer' id='Home'>
            <h1>Zach Power</h1>
            <h2>Full-Stack Web Developer</h2>
            <span className='initial' id="initial">Z</span>
            <div className='starContainer'>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>
                <span className='star'></span>

            </div>


            <div className='skillIconContainer'>
                <img className='skillIcons' src='https://img.icons8.com/color/344/html-5--v1.png' alt='HTML5 Logo' />
                <img className='skillIcons' src='https://img.icons8.com/color/344/css3.png' alt='CSS3 Logo' />
                <img className='skillIcons' src='https://img.icons8.com/color/344/javascript--v2.png' alt='Javscript logo' />
                <img className='skillIcons' src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' alt='react logo' />
                <img className='skillIcons' src='https://cdn.iconscout.com/icon/free/png-64/nodejs-1-226034.png' alt='node logo' />
                {/* <img className='skillIcons' src='https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg' /> */}
                <img className='skillIcons' src='https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg' alt='postgresql logo' unselectable="on" />
            </div>


        </div>
    )
}

export default Home