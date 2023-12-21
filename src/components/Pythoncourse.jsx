import React from 'react'
import Card from 'react-bootstrap/Card';


function Pythoncourse() {
  return <>
  <div className='adjust'>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\py1.png" />
      <Card.Body>
        <Card.Title>Python course</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\py2.png" />
      <Card.Body>
        <Card.Title>Python course Training</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\py3.png" />
      <Card.Body>
        <Card.Title>Python course Practise</Card.Title>
      </Card.Body>
    </Card>
    </div>
      </>
}

export default Pythoncourse