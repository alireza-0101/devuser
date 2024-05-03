import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { FiHome, FiPhoneCall } from 'react-icons/fi'
import { BiCodeAlt, BiNews } from 'react-icons/bi'
import { SiOpenproject } from 'react-icons/si'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <Navbar bg="transparent" variant="light" expand="md" className='fw-bold mt-3'>

            <Container>

                <Link to='/' className='navbar-brand'>
                    <img
                        src="/images/brand.png"
                        width="auto"
                        height="40"
                        className="d-inline-block align-top"
                        alt="website brand"
                    />
                </Link>

                <Navbar.Toggle
                    className='bg-light border-0 shadow-none fs-6 p-2 rounded-circle'
                    aria-controls="navbarScroll"
                />

                <Navbar.Collapse id="navbarScroll">

                    <Nav className="me-auto ms-3 pt-1 gap-3">
                        <Link to="/" className='nav-link d-flex d-md-none d-xl-flex gap-2 align-items-center'>
                            <FiHome className='pb-1 fs-5' />
                            صفحه اصلی
                        </Link>
                        <Link to="/blog" className='nav-link d-flex gap-2 align-items-center'>
                            <BiNews className='pb-1 fs-5' />
                            مقالات
                        </Link>
                        <Link to="/abilities" className='nav-link d-flex gap-2 align-items-center'>
                            <BiCodeAlt className='pb-1 fs-5' />
                            مهارت ها
                        </Link>
                        <Link to="/connect" className='nav-link d-flex gap-2 align-items-center'>
                            <FiPhoneCall className='pb-1 fs-5' />
                            ارتباط با من
                        </Link>
                    </Nav>

                    <Nav className="ms-auto">
                        <Link to="/projects" className='nav-link bg-theme d-flex align-items-center gap-2 fs-6 px-4 py-2 mt-3 mt-md-0 rounded-pill text-white'>
                            <SiOpenproject />
                            نمونه کار من
                        </Link>
                    </Nav>

                </Navbar.Collapse>

            </Container>

        </Navbar>
    )
}
