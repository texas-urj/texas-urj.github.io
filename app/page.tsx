'use client';
import './globals.css';
import Navigation from '../components/navbar';
import {Button, Dropdown, Navbar, Avatar} from 'flowbite-react';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Navigation name="TURJ"/>
      <h1>Texas Undergraduate <br></br> Research Journal</h1>
      <p>The Texas Undergraduate Research Journal is a work of multi-disciplinary research produced and edited by University of Texas at Austin undergraduate students. The Journal is published every spring semester, circulated across campus, and housed in the Library of Congress. Moreover, the URJ organizes various events throughout the academic year to promote student engagement with research on campus.</p>
      <div className='p-7'></div>
      <p className='flex justify-center'><iframe title="vimeo-player" src="https://player.vimeo.com/video/105934179?h=b7b4eaea0b" width="640" height="360"  allowFullScreen></iframe></p>
   </>
  )
}
