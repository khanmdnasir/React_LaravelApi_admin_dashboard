import React from 'react';
import {  Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link,useHistory } from 'react-router-dom';

const Header = () => {
    let user=JSON.parse(localStorage.getItem('user-info'))
    const history=useHistory();
    function logout(){
      localStorage.clear();
      history.push('/login');
    }

    function profile(){

    }
    return (
        <div>
            <Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Ecomm-Dashboard</Navbar.Brand>
    <Nav className="me-auto navbar-wrapper">
      {
        localStorage.getItem('user-info')?
        <>
          <Link to="/list">Products</Link>
          <Link to="/add">Add Product</Link>
          
        </>
        :
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      }
      
      
    </Nav>
    {localStorage.getItem('user-info')?
    <Nav>
      <NavDropdown title={user && user.name}>
        <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
        <NavDropdown.Item onClick={profile}>profile</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    :null
}
  </Navbar>
        </div>
    );
};

export default Header;