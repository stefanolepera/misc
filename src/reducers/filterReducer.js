import { FILTER_MUSIC, FILTER_SPORT } from '../actions/types.js';
  
const initialState = {
    currentFilter: ""
};
  
export const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_MUSIC:
            return {
                ...state,
                currentFilter: action.payload
                };
        case FILTER_SPORT:
            return {
                ...state,
                currentFilter: action.payload
            };
        default:
            return state;
    };
}