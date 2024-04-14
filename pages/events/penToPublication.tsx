//this is the page for quotes and images from pen to publication events
import React from 'react'
import Navigation from '../components/Navigation'

const penToPublication = () => {
  return (
    <>
    <Navigation name='Texas URJ'></Navigation>
    <h1>Pen to Publication</h1>
    <h2 className='mb-4 p-4'>The Texas Undergraduate Research Journal organized a panel discussion focused on undergraduate and early graduate publications. Graduate students shared their insights and experiences with joining research groups on campus and getting involved with higher education research. </h2>
    <div className="grid grid-cols-4 place-items-center gap-4">
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.imgur.com/lpL6ikW.jpg"></img>
    <p className = "">Pictured: Panelists Jamie Palmer, Andrea Nam, Hyo-Mi (Mia) Pak, and Kate Davis.</p>
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.imgur.com/Q3GsWaI.png"></img>
    </div>
    
    </>
  )
}

export default penToPublication