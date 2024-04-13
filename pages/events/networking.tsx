//This is the page for hosting quotes and images from networking nights 
import React from 'react'
import Navigation from '../components/Navigation'

const networking = () => {
  return (
    <>
    <Navigation name='Texas URJ'></Navigation>
    <h1>Networking Nights</h1>
    <h2 className='mb-4 p-4'>Every fall, TURJ hosts a Networking Event called Connect the Dots with URJ, wherein graduate students share their experiences with research and pursuing a PhD. Discussing their journey towards academia, students get to make connections with graduate students and gain insight along with advice on pursuing research as a career and how to get involved as an undergraduate.</h2>
    <div className="grid grid-cols-4 place-items-center gap-4">
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.redd.it/g33ecad6sd861.jpg"></img>
    <p className = "">Sample text/quote here.</p>
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.imgur.com/Dr5VADw.jpg"></img>
    <p className = "">Sample text/quote here.</p>
    </div>
    
    </>
  )
}

export default networking