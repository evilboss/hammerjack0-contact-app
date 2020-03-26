import React from 'react'
import PropTypes from 'prop-types'
import Contact from './Contact'
import {Badge, Card, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

const ContactList = ({contacts: contacts, toggleContact: toggleContact}) => (

    <Card className="contacts">
        <Card.Body>
            <Card.Title> <Badge variant="success">Contacts: </Badge> </Card.Title>
            {contacts.map(contact => (
                <Contact key={contact.id} {...contact} onClick={() => toggleContact(contact.id)}/>
            ))}


            {(contacts.length === 0) ? <div className="">
                <h1 className="display-3">You don't have contacts yet!</h1>
                <p className="lead">This app lets you store contacts</p>
                <hr className="my-4"/>
                <p>You can save name,address and email</p>
                <p className="lead">
                    <Link className="btn btn-primary btn-lg" role="button" style={{color: 'white'}} to="/">Let's add contacts
                        now</Link>
                </p>


            </div> : ''}
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
