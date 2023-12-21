import React from 'react'
import Card from 'react-bootstrap/Card';


function Fullstack() {
  return <>
  <div className='adjust'>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\fulll1.png" />
      <Card.Body>
        <Card.Title>Full Stack Course</Card.Title>
      </Card.Body>
    </Card>
&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\full2.png" />
      <Card.Body>
        <Card.Title>Full Stack overview</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\full3.png" />
      <Card.Body>
        <Card.Title>Full Stack Training</Card.Title>
      </Card.Body>
    </Card>
   
    </div>
      </>
}

export default Fullstack