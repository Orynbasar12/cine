import { ADD_ENTITIES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ENTITIES:
      return { ...state, ...action.payload.userSubscriptions };
    default:
      return state;
  }
};
