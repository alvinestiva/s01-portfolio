import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default function Footer() { 
    return (
        <Card>
          <Card.Header>Sample Header</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
    )
}