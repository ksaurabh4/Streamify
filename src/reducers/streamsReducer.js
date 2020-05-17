import * as TYPES from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case TYPES.FETCH_STREAMS:
      return {
        ...state,
        ...action.payload.reduce((newState, stream) => {
          newState[stream.id] = stream;
          return newState;
        }, {}),
      };
    case TYPES.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case TYPES.DELETE_STREAM:
      const newState = { ...state };
      delete newState[action.payload];
      return newState;
    default:
      return state;
  }
};
