import * as actions from './index'

describe('actions', () => {
    it('should create an action to add a contact', () => {
        const contact
            = {
            name: 'test name',
            email: 'test email',
            address: 'test address'
        };
        const expectedAction = {
            type: 'ADD_CONTACT',
            contact,
            id: 0
        };
        expect(actions.addContact(contact)).toEqual(expectedAction)
    });
    it('should create an action to update a contact', () => {
        const contact
            = {
            name: 'test name',
            email: 'test email',
            address: 'test address'
        };
        const expectedAction = {
            type: 'UPDATE_CONTACT',
            contact,
        };
        expect(actions.updateContact(contact)).toEqual(expectedAction)
    });
    it('should create an action to update a contact', () => {
        const id = 0;
        const expectedAction = {
            type: 'DELETE_CONTACT',
            id
        };
        expect(actions.deleteContact(id)).toEqual(expectedAction)
    });
});
