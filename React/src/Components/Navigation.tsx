import * as React from 'react';
import '../Styling/Navigation.css';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
 
export default class Navigation extends React.Component<{}, {}> {
    public constructor(props: {}) {
        super(props);
    }

    public render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>
                    <NavLink to='/' exact={true}>CompanyService</NavLink>
                </Navbar.Brand>

                {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">

                        <LinkContainer to='/' exact={true}>
                            <Nav.Link>
                                Home Page  
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/materials' exact={true}>
                            <Nav.Link>
                                Entrant
                            </Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/providers' exact={true}>
                            <Nav.Link>
                                Profile
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}