const contacts = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            console.log(action);
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
            return state.map(todo =>
                todo.id === action.id ? {...todo, completed: !todo.completed} : todo
            );
        default:
            return state
    }
};

export default contacts
