import { ADD_ENTITIES, REMOVE_ENTITIES } from 'actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_ENTITIES: return { ...action.payload.userFaculties };
    case REMOVE_ENTITIES: return {};
    default:
      return state;
  }
};
