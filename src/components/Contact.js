import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Accordion, Card, Button, Badge, Form} from "react-bootstrap";
import {deleteContact, updateContact} from '../actions'

const Contact = ({dispatch, onClick, completed, name, address, email, id}) => {
    let nameRef, emailRef, addressRef;

    let [open, setOpen] = useState(false);
    let [editName, setEditName] = useState(false);
    let [editEmail, setEditEmail] = useState(false);
    let [editAddress, setEditAddress] = useState(false);

    const generateContact = () => {
        setEditName(false);
        setEditEmail(false);
        setEditAddress(false);
        dispatch(updateContact({
            id,
            name: (nameRef) ? nameRef.value : name,
            address: (addressRef) ? addressRef.value : address,
            email: (emailRef) ? emailRef.value : email
        }));

    };
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>

                    <Badge variant="primary">Contact Name: </Badge> {editName ?
                    <Form.Control type="text" placeholder={name} onKeyPress={(event) => {
                        if (event.key === 'Enter') {
                            generateContact();

                        }
                        //
                    }}
                                  ref={node => (nameRef = node)}

                    />
                    : <span>{name} <i class="fas fa-pen" onClick={() => {
                        setEditName(true);
                    }} title="Add name"/></span>}


                    <span className="action"
                          onClick={() => {
                              dispatch(deleteContact(id));
                              console.log('delete');
                          }}>
                        <i className="fas fa-trash" title="Delete Contact"/>

                    </span>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => {
                        console.log('click');
                        setOpen(!open)
                    }}>
                        <Badge variant="secondary"> <i className={`fas fa-chevron-${open ? 'up' : 'down'}`}/></Badge>

                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Text><Badge variant="primary">Email</Badge> : {editEmail ?
                            <Form.Control type="text" placeholder={email} onKeyPress={(event) => {
                                console.log('keypress', event.key);
                                if (event.key === 'Enter') {
                                    generateContact();

                                }
                                //
                            }}
                                          ref={node => (emailRef = node)}
                            />
                            : <span>{email} <i class="fas fa-pen" onClick={() => {
                                setEditEmail(true);
                            }} title="Add email"/></span>}

                        </Card.Text>
                        <Card.Text><Badge variant="primary">Address</Badge> : {editAddress ?
                            <Form.Control type="text" placeholder={address} onKeyPress={(event) => {
                                console.log('keypress', event.key);
                                if (event.key === 'Enter') {
                                    generateContact();

                                }
                            }}
                                          ref={node => (addressRef = node)}

                            />
                            : <span>{address} <i class="fas fa-pen" onClick={() => {
                                setEditAddress(true);
                            }} title="edit Address"/></span>}

                        </Card.Text>

                    </Card.Body>


                </Accordion.Collapse>
            </Card>
        </Accordion>
    )
};

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.bool.isRequired,

};


export default connect()(Contact);
