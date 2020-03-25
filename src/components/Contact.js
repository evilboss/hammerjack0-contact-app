import React from 'react'
import PropTypes from 'prop-types'
import {Accordion, Card, Button} from "react-bootstrap";

const Contact = ({onClick, completed, name, address, email}) => (
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
        </Card>
    </Accordion>

);

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};


export default Contact
