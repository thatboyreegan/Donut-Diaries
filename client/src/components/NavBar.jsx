import React from 'react';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'react-router-dom'


const CommonNavBar = () => {
  return (
    <Navbar bg='dark' className='mb-4' style={{height: '3.7rem'}}>
      <Container>
        <h2>Donut dairies</h2>
        <Nav>
          <Stack direction='horizontal' gap={4}>
            <h1>login</h1>
            <h1>register</h1>
          </Stack>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default CommonNavBar;
