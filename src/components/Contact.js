import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import {Accordion, Card, Button} from "react-bootstrap";
import {deleteContact} from '../actions'

const Contact = ({dispatch, onClick, completed, name, address, email, id}) => (
    <Accordion defaultActiveKey="0">
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    {name}
                </Accordion.Toggle>
                <i 
                onClick={() => {
                    dispatch(deleteContact(id));
                    console.log('delete');
                }}
                class="fas fa-trash" 
                title="Delete Contact" />
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Text>Email : {email}</Card.Text>
                    <Card.Text>
                        Address: {address}
                    </Card.Text>

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
