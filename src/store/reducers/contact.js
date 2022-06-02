import { SEND_CONTACT_EMAIL } from '../actions/contact';

const initialState = {};

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state = initialState, action) => {
    switch (action.type) {
        case SEND_CONTACT_EMAIL:
            return initialState;
        
        default:
            return initialState;
    }
};