import React, { Component } from 'react';
import './styles.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../../assets';
// import { connect } from 'react-redux';

export default class Header extends Component {
    
    render() {        
        return (
            <Navbar expand="lg" className="wrapper-header">
                <Navbar.Brand href="#home">
                    <img src={images.textJanjian} alt='logo-janjian' className='logo-janjian-header' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto" style={{marginRight: "25px"}}>
                        <Nav.Link href="create" style={{color: "#FF880A"}}>Create New Janji</Nav.Link>
                        <Nav.Link href="explore">Explore</Nav.Link>
                        <NavDropdown title="Test Feature" id="basic-nav-dropdown">
                            <NavDropdown.Item href="swapi">Swapi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <div className='header-button'>
                        <Link to='/login'>Login</Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

// const mapStateToProps = (state) => ({
//     user: state.user
// })

// export default connect(mapStateToProps,null)(Header);