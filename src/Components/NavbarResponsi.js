import React, { useState } from 'react';
import Icon from '@mui/icons-material/DensityMedium';
import './Navbar.css';

function DropdownMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const menuStyle = {
    position: 'absolute',
    width: '130px',
    top: '40px', 
    left: '35px',
    display: menuOpen ? 'block' : 'none',
    listStyle: 'none',
    color: 'white',
    margin: 5,
    backgroundColor: 'rgb(38, 37, 37)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start'
  };

  const lista = {
    paddingBottom: 15,
    textDecoration: 'none',
    color: 'white'
  }

  
  

  return (
    <div className="dropdown-menu" style={{position: 'absolute',   position:'fixed'}}>
      <div className="menu-toggle" onClick={toggleMenu} >
        <Icon style={{ fontSize: 35, margin:10, color: 'white' }} />
      </div>
      {menuOpen && (
        <ul className="menu-list" style={menuStyle}>
        <a href='#home'> <li style={lista}>Home</li></a> 
        <a href='#AboutMe'> <li style={lista}>About</li></a> 
        <a href='#Portfolio'> <li style={lista}>Portfolio</li></a>  
        <a href='#Footer'> <li style={lista}>Contact</li></a> 
        </ul>
      )}
    </div>
  );
}

function NavbarResponsi() {
  return (
    <div>
      <section>
        <article className="svg">
          <DropdownMenu />
        </article>
      </section>
    </div>
  );
}

export default NavbarResponsi;