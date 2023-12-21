import React from 'react'
import Card from 'react-bootstrap/Card';


function Add1() {
  return <>
  <div className='adjust'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\codingimg.png" />
      <Card.Body>
        <Card.Title>Full Stack Development</Card.Title>
      </Card.Body>
    </Card>
   
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\py1.png" />
      <Card.Body>
        <Card.Title>Python course</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="src\assets\cyber4.png" />
      <Card.Body>
        <Card.Title>Cyber Security</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\assets\Datascience1.png" />
      <Card.Body>
        <Card.Title>Data Science</Card.Title>
      </Card.Body>
    </Card>
   
    &nbsp;

   
    </div>
  </>
}

export default Add1