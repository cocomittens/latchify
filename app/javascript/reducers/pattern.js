import { RECEIVE_PHOTO } from "../actions/pattern";

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PHOTO:
      return Object.assign({}, { photo: action.photo });
    default:
      return state;
  }
};
