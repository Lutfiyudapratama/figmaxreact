

import { Avatar, Dropdown, Navbar } from "flowbite-react";

export function Header() {
  return (
    <Navbar fluid rounded>
    <Navbar.Brand href="https://flowbite-react.com">
      <img src="../assets/images" className="mr-3 h-6 sm:h-9" alt="" />
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
    </Navbar.Brand>
    <div className="flex md:order-2">
      <Dropdown
        arrowIcon={false}
        inline
        label={
          <Avatar alt="User settings" img="" rounded />
        }
      >
        <Dropdown.Header>
          <span className="block text-sm"></span>
          <span className="block truncate text-sm font-medium"></span>
        </Dropdown.Header>
        <Dropdown.Item x>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>Sign out</Dropdown.Item>
      </Dropdown>
      <Navbar.Toggle />
    </div>
    <Navbar.Collapse>
      <Navbar.Link href="/Aboutme" active>
        Hotels
      </Navbar.Link>
      <Navbar.Link href="#">Bus & travel</Navbar.Link>
      <Navbar.Link href="#">Pengiriman barang</Navbar.Link>
      <Navbar.Link href="#">Layanan restoran</Navbar.Link>
      <Navbar.Link href="#">Contact</Navbar.Link>
    </Navbar.Collapse>
  </Navbar>
  );
}

export default Header;