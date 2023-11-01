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
      className="bg-rose fixed top-0 w-full z-50 text-white py-4"
    >
      <Navbar.Brand href="/austin-utexas/">
        <img
          alt="TURJ Logo"
          className="mr-3 h-6 sm:h-9"
          src=""
        />
        <span className="self-center whitespace-nowrap text-2xl font-bold dark:text-white">
          {name}
        </span>
      </Navbar.Brand>    
      <Navbar.Collapse>
      <Navbar.Link href="/austin-utexas/" className="text-white md:hover:text-slate-300 font-semibold">
          Home
        </Navbar.Link>


      <div className="flex">
        <Dropdown
          arrowIcon={true}
          inline
          label={<p className="md:hover:text-slate-300">Editors</p>}
        >
          <Dropdown.Item href="/austin-utexas/description">
            Pioneer
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/engineeringSuccess">
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
          <Dropdown.Item href="/austin-utexas/experiments">
            Upcoming Events
          </Dropdown.Item>
          <Dropdown.Item href="/austin-utexas/parts">
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
  </main>
)
}


export default Navigation;

