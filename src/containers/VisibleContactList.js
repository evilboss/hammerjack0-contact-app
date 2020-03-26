import { connect } from 'react-redux'
import { toggleContact } from '../actions'
import ContactList from '../components/ContactList'
import { VisibilityFilters } from '../actions'

const getVisibleContacts = (contacts, filter) => {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return contacts;
        case VisibilityFilters.SHOW_COMPLETED:
            return contacts.filter(t => t.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return contacts.filter(t => !t.completed);
        default:
            throw new Error('Unknown filter: ' + filter)
    }
};

const mapStateToProps = state => ({
    contacts: getVisibleContacts(state.contacts, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
    toggleContact: id => dispatch(toggleContact(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList)
