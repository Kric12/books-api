export function AppReducer(state, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {
        ...state,
        users: action.payload,
      }
    default:
      return state;
  }
}