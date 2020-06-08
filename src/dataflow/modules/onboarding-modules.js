// Action Creators
const CREATE_NEW_USER = 'osc/createuser/CREATE_NEW_USER';

// Initial State 
const initialState = {
  newAccount: {},
}

// Reducers
export default function createAccount (state = initialState, action) {
  switch (action.type) {
    case CREATE_NEW_USER:
      return Object.assign({}, state, {
        newAccount: {
          ...state.newAccount,
          ...action.info
        }
      })
      default:
        return state;
  }
}

// Action Types
export const addNewUser = info => ({
  type: CREATE_NEW_USER,
  info,
});