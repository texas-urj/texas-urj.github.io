'use client';

import Link from 'next/link';
import { Avatar, Dropdown, Navbar, Flowbite} from 'flowbite-react';
import type { CustomFlowbiteTheme } from 'flowbite-react';

const customTheme: CustomFlowbiteTheme['navbar'] = {
    root: {
      base: 'py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
    },
  };

export default function Navigation() {
  return (
    <Navbar theme={customTheme} fluid rounded className="!bg-umber hover:bg-black">
      <Navbar.Brand href="https://texas-urj.org/">
        <img src="https://i.imgur.com/HnkxI9n.png" className="h-10 sm:h-9" alt="Flowbite React Logo" />
        <span className="!bg-umber self-center whitespace-nowrap text-2xl font-bold text-umber p-2"></span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/" >Home</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/apply">Apply</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/pioneer/home">Pioneer</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/volumes">Volumes</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/submissions">Submissions</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/staff">Staff</Navbar.Link>
        <Navbar.Link className="text-xl text-umber font-semibold" href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
