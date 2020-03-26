import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Accordion, Card, Button} from "react-bootstrap";
import {deleteContact, updateContact} from '../actions'

const Contact = ({dispatch, onClick, completed, name, address, email, id}) => (
    <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
                {name}
                <span className="action"
                onClick={() => {
                    dispatch(deleteContact(id));
                    console.log('delete');
                }}>
                    <i class="fas fa-trash" title="Delete Contact" />
                </span>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text>Email : {email}</Card.Text>
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

);

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.bool.isRequired,

};


export default connect()(Contact);
