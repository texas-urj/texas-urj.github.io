'use client';
import {Dropdown, Navbar, Avatar} from 'flowbite-react';


interface meep {
name: string;
}
const Navigation = ({name}: meep) => {
return (
  <main>
    <Navbar
      fluid
      className="fixed top-0 w-full z-40 py-2"
    >
      <Navbar.Brand href="/austin-utexas/">
        <img
          alt="iGEM Logo"
          className="mr-3 h-10 sm:h-9"
          src="https://i.imgur.com/yhNfmMB.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">
          {name}
        </span>
      </Navbar.Brand>
      
      <Navbar.Collapse>

      <Navbar.Link href="/" className= "text-black text-xl md:hover:text-slate-300 font-semibold">
          Home
        </Navbar.Link>
        <Navbar.Link href="/apply" className= "text-black text-xl md:hover:text-slate-300 font-semibold">
          Apply
        </Navbar.Link>

      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<a className="text-xl font-semibold md:hover:text-slate-300"
          >The Pioneer</a>}
        >
          <Dropdown.Item href="/pioneer/home" className="font-bold">
          All Articles
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/spotify-playlists">
          Spotify Playlists
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/cramming-guide">
          Cramming Guide
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/sleep-deprivation">
          Sleep Deprivation
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/remembering-dreams">
          Forgetting Dreams
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/think-smaller">
          Think Smaller
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/perfect-pasta">
          Perfect Pasta
          </Dropdown.Item>
          <Dropdown.Item href="/pioneer/reading-dead">
          Is Reading Dead? 
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
        <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<a className="md:hover:text-slate-300 text-xl font-semibold">Volumes</a>}
        >
          <Dropdown.Item href="/volumes" className="font-bold">
            All Volumes
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1g28UfJ8crQtEtPdxmzd5of-axLDmODJO/view?usp=sharing">
            Volume 3
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1l9zOw-xZ4WTt7RnOI_S3Umq50iHF0PTp/view?usp=sharing">
            Volume 4
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1E9rm-MB0Z2eFi1uv_rice-4IybvBGhHd/view?usp=sharing">
            Volume 5
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1UKI1qM6dfkODm9sbgH8zRf6sxnDQ209W/view?usp=sharing">
            Volume 6
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/17bwsAHmMDmXLPr-cqJXi_aScSxicWJM3/view?usp=sharing">
            Volume 7
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1a3daj8uJakRb3vE3tU6xoRIh7ljMdnwn/view?usp=sharing">
            Volume 9
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1jap8dcnMQ5fgngov5HtgG0ZcweOwh3xI/view?usp=sharing">
            Volume 10
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1ed1CezSk_5W5qLiANcA7KEGKWo-rascD/view?usp=sharing">
            Volume 11
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1XOYVXAmOFNpbCrRZmEOvaZnadqTEDKWd/view?usp=sharing">
            Volume 12
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1p_1GLKQc5OHxJCEjumocW3QTIkMhkjEX/view?usp=sharing">
            Volume 13
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1PPhaFeySFBt88fX7WZe2Y3iPSp5p12Ss/view?usp=sharing">
            Volume 14
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1pvBx055gRJjPypwov4s1Xfonaxl_OgG8/view?usp=sharing">
            Volume 15
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1aKhMwLkIbZnnDfYeM5xcc4tdbhIlIPAp/view?usp=sharing">
            Volume 16
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1g01CDaa_he_yGJFXIJpy_zbbKXKtqF3B/view?usp=sharing">
            Volume 17
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1xpFrVKSIq6mq3GN1cizVaalRBxL92RXH/view?usp=sharing">
            Volume 18
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/1xFqmwkxzYwgC4O0prIo8dJzJUk7--eT4/view?usp=sharing">
            Volume 19
          </Dropdown.Item>
          <Dropdown.Item href="https://drive.google.com/file/d/11AmiM_Kyg3KX6uqhDEvrSI2ejmim5kpU/view?usp=sharing">
            Volume 20
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<a className="md:hover:text-slate-300 text-xl font-semibold">Events</a>}
        >
          <Dropdown.Item href="/events/home" className="font-bold">
            All Events
          </Dropdown.Item>
          <Dropdown.Item href="/events/socials">
            Socials
          </Dropdown.Item>
          <Dropdown.Item href="/events/meetings">
            General Meetings
          </Dropdown.Item>
          <Dropdown.Item href="/events/academic">
            Academic Events
          </Dropdown.Item></Dropdown></div>
      <Navbar.Link href="/submissions" className= "text-black text-xl md:hover:text-slate-300 font-semibold">
          Submissions
        </Navbar.Link>
        <Navbar.Link href="/staff" className= "text-black text-xl md:hover:text-slate-300 font-semibold">
          Staff
        </Navbar.Link>
        <Navbar.Link href="/contact" className= "text-black text-xl md:hover:text-slate-300 font-semibold">
          Contact
        </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    <div className='mb-10 py-10'>
    <div className="bg-transparent py-7 mb-10"></div></div>
  </main>
)
}

export default Navigation;