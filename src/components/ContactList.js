import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'

const ContactList = ({contacts: contacts, toggleContact: toggleContact}) => (

    <ul>
        {console.log(contacts)}
        <h1>Contacts</h1>
        {contacts.map(contact => (
            <Contact key={contact.id} {...contact} onClick={() => toggleContact(contact.id)}/>
        ))}
    </ul>
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
