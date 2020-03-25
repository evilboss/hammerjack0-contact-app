let nextTodoId = 0;
export const addContact = contact => ({
    type: 'ADD_CONTACT',
    id: nextTodoId++,
    contact
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});

export const toggleContact = id => ({
    type: 'TOGGLE_CONTACT',
    id
});

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
