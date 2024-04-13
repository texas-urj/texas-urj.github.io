//this is the page for quotes and images from pen to publication events
import React from 'react'
import Navigation from '../components/Navigation'

const pageTemplate = () => {
  return (
    <>
    <Navigation name='Texas URJ'></Navigation>
    <h1>Title</h1>
    <h2 className='mb-4 p-4'>Description</h2>
    <div className="grid grid-cols-4 place-items-center gap-4">
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.redd.it/g33ecad6sd861.jpg"></img>
    <p className = "">Sample text/quote here.</p>
    <img className='mx-4 my-10 border-solid border-2 border-wolfgray w-1/4 h-auto' src="https://i.imgur.com/Dr5VADw.jpg"></img>
    <p className = "">Sample text/quote here.</p>
    </div>
    
    </>
  )
}

export default pageTemplate