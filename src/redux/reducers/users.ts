import { ActionTypes, Action } from '../actions/types'

export const userReducer = (state: User[]=[], action: Action): User[] => {
  switch (action.type) {
    case ActionTypes.fetchUsers:
      return action.payload;
    case ActionTypes.deleteUser:
      return action.payload;
    default:
      return state;
  };
};


