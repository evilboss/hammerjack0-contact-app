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
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <Card.Title>email : {email}</Card.Title>
                    <Card.Text>
                        Address: {address}
                    </Card.Text>

                </Card.Body>


            </Accordion.Collapse>
            <Card.Footer>
                <Button onClick={() => {
                    dispatch(deleteContact(id));
                    console.log('delete');
                }}>Delete contact</Button>
            </Card.Footer>
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
