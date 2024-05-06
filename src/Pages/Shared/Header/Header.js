import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext/UserContext';

const Header = () => {
    const {logOut, user} = useContext(AuthContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link className='text-decoration-none text-white fs-3 text' to='/'><b>PET<span className='red'>POW</span></b></Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/services" className='nav-link text-warning'>SERVICES</Link>
                        <Link to="/blog" className='nav-link text-warning'>BLOG</Link>
                        {
                            user?.uid ?
                            <Link to={`/myreviews`} className='nav-link text-warning'>MY REVIEWS</Link>
                            :
                            <></>

                        }
                    </Nav>
                    <Nav>
                        {
                            user?.uid ?
                                <>
                                    <Link className='nav-link mt-2'>
                                        <Button onClick={logOut} variant='primary'>LogOut</Button>
                                    </Link>
                                    {
                                                                            user?.email == 'admin@gmail.com' && 
                                                                            <Link to="/addservice" className='nav-link mt-2'>
                                                                                <Button variant='primary'>Add Service</Button>
                                                                            </Link>
                                    }
                                </>
                                :
                                <>
                                    <Link className='nav-link' to='/login'>
                                        <button type="button" className="btn btn-warning text-dark btn-lg px-4 me-md-2 fw-bold">Login</button>
                                    </Link>
                                    <Link className='nav-link' to='/register'>
                                        <Button className="btn btn-dark text-white btn-lg px-4 me-md-2 fw-bold border none">REGISTER</Button>
                                    </Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;