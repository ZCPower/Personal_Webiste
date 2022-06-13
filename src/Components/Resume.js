import React from 'react'
import './Resume.css'

function Resume() {
    console.log('AHHHH')
    return (
        <main className='resumeBody'>
            <h2>Resume</h2>
            <section className='education'>
                <h3>Education</h3>
                <div className='educationEntry'>
                    <div className='sectionInfo'>
                        <h4>FullStack Academy</h4>
                        <p>Web Development. February 2022 to August 2022.</p>

                    </div>
                    <div className='sectionImg'>
                        <img src="https://cdn.remote.work/companies/Lfnwm86tz1iBArFO3J0Sip2HFMUluG2qyq5tpyxU.png" alt='the logo for fullstack academy'></img>
                    </div>
                </div>
                <div className='educationEntry'>
                    <div className='sectionInfo'>
                        <h4>University of Wyoming</h4>
                        <p>Bachelor's of Science - Kinesiology. Graduated May 2020.</p>
                    </div>
                    <div className='sectionImg'>
                        <img src="https://yt3.ggpht.com/ytc/AKedOLQMg42FG6HQ_h0TwhtTI99Ts3WsxZwwWy6lL7sr=s900-c-k-c0x00ffffff-no-rj" alt='the logo for the University of Wyoming'></img>
                    </div>
                </div>

            </section>
            <section className='workHistory'>
                <h3>Work History</h3>
                <div className='workEntry'>
                    <h4>Curative, Inc</h4>
                    <p>Testing Site Specialist.</p>
                </div>
                <div className='workEntry'>
                    <h4>Ivinson Memorial Hospital</h4>
                    <h4>Surgical Technologist</h4>
                </div>
                <div className='workEntry'>
                    <h4>University of Wyoming</h4>
                    <p>Athletic Training Intern & Wellness Center Assistant</p>
                </div>
            </section>
            <section className='volunteering'>
                <h3>Volunteering</h3>
            </section>
        </main>
    )
}
export default Resume