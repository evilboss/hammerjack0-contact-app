import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({onClick, completed, name, address, email}) => (

    <li
        onClick={onClick}
        style={{
            textDecoration: completed ? 'line-through' : 'none'
        }}
    >
        <div>

            {name}

        </div>
        <div>
            {address}

        </div>
        {email}
    </li>
);

Contact.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
};


export default Contact
