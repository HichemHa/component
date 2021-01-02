import React from 'react';
import {Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
function Nav() {
    return (
        <div>
<Navbar>
  <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse className="justify-content-end">
    <Navbar.Text>
      Checkpoint React <a href="#login">Component</a>
    </Navbar.Text>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default Nav;
