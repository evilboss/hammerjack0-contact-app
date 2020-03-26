import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Accordion, Card, Button, Badge, Form} from "react-bootstrap";
import {deleteContact, updateContact} from '../actions'

const Contact = ({dispatch, onClick, completed, name, address, email, id}) => {
    let [open, setOpen] = useState(false);
    let [editName, setEditName] = useState(false);
    let [editEmail, setEditEmail] = useState(false);
    const updateContact = (event) => {
        console.log('event fire', event);
        if (event.key === 'Enter') {
            console.log('update contact');
        }

    };
    return (
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>

                    {editName ? <input/> : name}


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
                        <Card.Text>Email : {editEmail ?
                            <Form.Control type="text" placeholder={email} onKeypress={(e) => {
                                console.log('keypress fire',e);
                                updateContact(e);
                            }}/>
                            : <span onDoubleClick={() => {
                                setEditEmail(true);
                            }}>{email ? email : 'double click to add'}</span>}
                        </Card.Text>
                        <Card.Text>
                            Address: {address}
                        </Card.Text>
                        <Button onClick={() => {
                            dispatch(updateContact({
                                id,
                                name: 'test name',
                                address: 'test address',
                                email: 'test email'
                            }));
                            console.log('update');
                        }}>Update contact</Button>

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
