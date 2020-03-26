const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                {
                    id: action.id,
                    name: action.contact.name,
                    address: action.contact.address,
                    email: action.contact.email,


                    completed: false
                }
            ];
        case 'TOGGLE_CONTACT':
            return state.map(contact =>
                contact.id === action.id ? {...contact, completed: !contact.completed} : contact
            );
        case 'DELETE_CONTACT':
            console.log('Delete Contact');
            return state.filter(contact => contact.id !== action.id);

        default:
            return state
    }
};

export default contacts
