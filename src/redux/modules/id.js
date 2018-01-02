import { createAction, handleActions } from 'redux-actions';
import { pender } from 'redux-pender';

import * as api from 'lib/api';


const GET_ID = 'id/GET_ID';


export const getId = createAction(GET_ID, api.getId);


const initialState = {
    data: []
};

export default handleActions({
    ...pender({
        type: GET_ID,
        onSuccess: (state, action) => {
            return {
                data: action.payload.data
            }
        }
    })
}, initialState);