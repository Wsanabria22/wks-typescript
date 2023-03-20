interface stateI  {
    counter: number;
  }
  
interface actionI {
    type: string;
  }

interface User {
  id: number;
  name: string;
  lastName: string;
}

interface FetchUsersAction {
  type: ActionTypes.fetchUsers;
  payload: User[];
}

interface DeleteUserAction {
  type: ActionTypes.deleteUser;
  payload: User[];
}

interface StoreState {
  users: User[];
}
