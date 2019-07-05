import React from 'react'
import {Navbar,Nav,NavDropdown,Form, FormControl,Button } from 'react-bootstrap'

const MyNavbar = () =>{
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">BITCAMP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">스케줄러</Nav.Link>
            <NavDropdown title="회원관리" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">회원가입</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">로그인</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">정보수정</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">회원탈퇴</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Navbar>
    )
}


export default MyNavbar