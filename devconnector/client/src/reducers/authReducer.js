import { AssertionError } from "assert";

const initialState = {
  isAuthinticated: false,
  user: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
