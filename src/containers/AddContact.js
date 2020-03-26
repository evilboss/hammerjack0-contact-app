import React from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions'
import {Button, Card, Col, Form} from "react-bootstrap";

const AddContact = ({dispatch}) => {
    let name, email, address;

    return (
        <div>
            <Card>
                <Card.Body>

                    <Form onSubmit={
                        e => {
                            e.preventDefault();
                            if (!name.value.trim()) {
                                return
                            }
                            dispatch(addContact({name: name.value, address: address.value, email: email.value}));
                            name.value = '';
                            address.name = '';
                            email.value = '';


                        }
                    }>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter Name"
                                              ref={node => (name = node)}
                                />
                            </Form.Group>


                        </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control ref={node => (email = node)} type="email" placeholder="Enter email"/>
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control ref={node => (address = node)} placeholder="Enter Address"/>
                        </Form.Group>
                        <Form.Row>
                            <Button variant="primary" type="submit">
                                ADD CONTACT
                            </Button>
                        </Form.Row>


                    </Form>


                </Card.Body>
            </Card>
        </div>
    )
};

export default connect()(AddContact)
