import React from 'react'
import {connect} from 'react-redux'
import {addContact} from '../actions'

const AddContact = ({dispatch}) => {
    let name, email, address;

    return (
        <div>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    if (!name.value.trim()) {
                        return
                    }
                    dispatch(addContact({name: name.value, address: address.value, email: email.value}));
                    name.value = '';
                    address.name = '';
                    email.value = '';


                }}
            >
                <input ref={node => (name = node)}/>
                <input ref={node => (email = node)}/>
                <input ref={node => (address = node)}/>


                <button type="submit">ADD CONTACT</button>
            </form>
        </div>
    )
};

export default connect()(AddContact)
