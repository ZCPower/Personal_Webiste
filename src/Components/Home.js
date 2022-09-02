import React from 'react'
import '../Styles/HomeStyles/Home.css'
// import '../Styles/HomeStyles/Home2.css'
import '../Styles/HomeStyles/HomeRain.css'
import Rain from './Rain'
import Moon from './Moon'
import Scene from './Scene'
import Clouds from './Clouds'

function Home() {
    return (
        <div className='homeContainer' id='Home'>
            <h1>Zach Power</h1>
            <h2>Full-Stack Web Developer</h2>
            <Rain />
            {/* <Moon /> */}
            {/* <Scene />
            <Clouds /> */}
        </div >
    )
}

export default Home