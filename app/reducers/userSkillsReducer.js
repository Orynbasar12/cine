import { ADD_ENTITIES } from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ENTITIES:
      return { ...action.payload.userSkills };
    default:
      return state;
  }
};
