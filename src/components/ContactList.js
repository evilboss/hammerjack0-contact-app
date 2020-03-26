import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import {Card} from "react-bootstrap";

const ContactList = ({contacts: contacts, toggleContact: toggleContact}) => (

    <Card className="contacts">
        <Card.Body>
            <Card.Title>Contacts</Card.Title>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} onClick={() => toggleContact(contact.id)}/>
            ))}
        </Card.Body>
    </Card>


);

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            name: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleContact: PropTypes.func.isRequired
};

export default ContactList
