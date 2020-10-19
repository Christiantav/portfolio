import React from 'react'
import '../../App.css'
// import Sidebar from './Sidebar'
import Button from 'react-bootstrap/Button'
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
            <Navbar id="sidebar" className={`${visible} header`} style={{ display: "inline-table" }} variant="light">
                <Nav style={{ width: '20em' }}>
                    <Col>
                        <Navbar.Brand style={{ textAlign: 'center' }}>
                            <img
                                src="/chrispic.png"
                                width="50%"
                                onClick={toggleSidebar}
                            />
                        </Navbar.Brand>
                        <Nav.Item>
                            <div className="font">
                                <b>About</b>
                                <br />
                                <br />
                                <span>
                                    Full-Stack Software Engineer looking to implement and further my knowledge
                                    in Web Development with a focus on delivering complex infrastructure
                                    into a seamless experience for end-users.
                                </span>
                            </div>
                        </Nav.Item>
                    </Col>
                </Nav>
            </Navbar>

            <Navbar variant="light" className="header" style={{ padding: `${sidebar ? '0' : ''}` }}>
                <Navbar.Brand>
                    { sidebar ? (
                        <Button style={{ backgroundColor: 'hsl(0, 0%, 98%)', borderColor: 'hsl(0, 0%, 98%)', padding: '0', marginLeft: '1em' }} onClick={toggleSidebar}>
                            <div style={{ color: 'black', fontFamily: 'Montserrat', fontWeight: '500', fontSize: '2em' }}>x</div>
                        </Button>
                    ) : (
                        <img
                        src="/sandwich.png"
                        id="sandwich"
                        style= {{ opacity: `${sidebar ? '0' : ''}` }}
                        alt="React Bootstrap logo"
                        onClick={toggleSidebar}
                        />
                    )}
                </Navbar.Brand>
            </Navbar>
        </>
    );
}

export default Header;