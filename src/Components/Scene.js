import React from 'react'
import '../Styles/HomeStyles/Scene.css'
function Scene() {
    return (
        <div className='scene'>
            <div className='ground'>
                <div className='grass'></div>
                <div className='dirt'></div>
            </div>
            {/* <div className='blob'>
                <div id='littleBlob1'></div>
                <div id='littleBlob2'></div>
            </div> */}
            <div className='house'>
                <div className='roof'></div>
            </div>
            <img id='tent' src='https://cdn-icons-png.flaticon.com/512/5594/5594182.png'></img>
        </div>
    )
}

export default Scene