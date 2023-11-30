'use client';
import {Dropdown, Navbar, Avatar} from 'flowbite-react';
import '../app/globals.css';
import Link from 'next/link';

interface meep {
name: string;
}
const Navigation = ({name}: meep) => {
return (
  <>
    <Navbar
      fluid
      className="bg-rose fixed top-0 w-full z-50 text-white py-4"
    >
      <Navbar.Brand href="/">
        <img
          src="data:image/jpeg;base64,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"
          alt="TURJ Logo"
          className="mr-3 h-6 sm:h-9"
        />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          {name}
        </span>
      </Navbar.Brand>    
      <Navbar.Collapse>
      <Navbar.Link href="/texasurj/" className="text-white md:hover:text-slate-300 font-semibold">
          Home
        </Navbar.Link>


      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Editors</p>}
        >
          <Dropdown.Item href="/texasurj/description">
            Pioneer
          </Dropdown.Item>
          <Dropdown.Item href="/texasurj/engineeringSuccess">
            Submit a paper
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Events</p>}
        >
          <Dropdown.Item href="/texasurj/experiments">
            Upcoming Events
          </Dropdown.Item>
          <Dropdown.Item href="/texasurj/parts">
            Past Events
          </Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
        <Navbar.Link href="/Texas-URJ.GITHUB.IO/humanPractices" className="text-white md:hover:text-slate-300">
          Join us!
        </Navbar.Link>
        </Navbar.Collapse>
    </Navbar>
    <div className="bg-rose py-7"></div>
    <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
  </>
)
}


export default Navigation;

