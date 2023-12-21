import React from 'react'
import Card from 'react-bootstrap/Card';


function Datascience() {
  return <>
  <div className='adjust'>  
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\assets\Datascience1.png" />
      <Card.Body>
        <Card.Title>Data Science</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\assets\Datascience.png" />
      <Card.Body>
        <Card.Title>Data Science companies</Card.Title>
      </Card.Body>
    </Card>
    &nbsp;
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="\src\assets\datascience2.png" />
      <Card.Body>
        <Card.Title>Data Science career</Card.Title>
      </Card.Body>
    </Card>
    
    </div>
      </>
}

export default Datascience