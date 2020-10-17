import React from 'react'
import '../../App.css'
// import Sidebar from './Sidebar'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

const { useState } = React;

function Header() {
    const [sidebar, setSidebarState] = useState(false)
    const visible = sidebar ? 'show' : 'hide'

    const toggleSidebar = (e) => {
        const toggle = sidebar ? false : true;
        setSidebarState(toggle);
    }

    return (
        <>
            <Navbar id="sidebar" className={visible} style={{ display: "inline-table" }} variant="light">
                <Nav style={{ width: '20em' }}>
                    <Col>
                        <Navbar.Brand style={{ textAlign: 'center' }}>
                            <img
                                src="/chrispic.png"
                                width="50%"
                                onClick={toggleSidebar}
                            />
                        </Navbar.Brand>
                        <Nav.Item style={{ textAlign: 'center', marginTop: '15%' }}>
                            <div>
                                <b>About</b>
                                <br />
                                <br />
                                <span>
                                    Full-Stack Software Engineer looking to implement and further my knowledge
                                    in Web Development with a specific focus on delivering complex infrastructure
                                    into a seamless experience for end-users.
                                </span>
                            </div>
                        </Nav.Item>
                    </Col>
                </Nav>
            </Navbar>

            <Navbar bg="secondary" variant="light" className="header">
                <Navbar.Brand>
                    <img
                    src="/sandwich.png"
                    width="4%"
                    alt="React Bootstrap logo"
                    onClick={toggleSidebar}
                    />
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;