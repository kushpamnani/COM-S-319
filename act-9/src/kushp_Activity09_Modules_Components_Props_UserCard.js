/**
 * Author: Kush Pamnani
 * ISU Netid: kushp@iastate.edu
 * Date: March 26th, 2024
 */


import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Container } from 'react-bootstrap';

export function UserCard({ picture, name, amount, married, points, address }) {
  // The console.log can be removed if not needed
  console.log(picture);
  return (
    <div>
      <Container className='p-4'>
        <Card style={{ width: "15rem" }}>
          <Card.Img variant="top" src={picture} alt="Card cap" />
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>Salary: ${amount}</Card.Text>
            <Card.Text>{married ? "Married" : "Single"}</Card.Text>
            <Card.Text>Address:</Card.Text>
            <ul>
              <li>Street: {address.street}</li>
              <li>City: {address.city}</li>
              <li>State: {address.state}</li>
            </ul>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

// Filename: netId_Activity09_Modules_Components_Props_UserCard.js
