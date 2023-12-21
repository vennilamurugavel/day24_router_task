import React from 'react'
import Card from 'react-bootstrap/Card';


function cybercourse() {
  return <>
  <div className='adjust'>
        
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\cyber4.png" />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
      </Card.Body>
    </Card>
&nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\cybersecurity2.png" />
      <Card.Body>
        <Card.Title>Cyber Security Training course</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\cyber5.png" />
      <Card.Body>
        <Card.Title>Cyber Security certification</Card.Title>
      </Card.Body>
    </Card>
    </div>
      </>
}

export default cybercourse