export enum ActionTypes {
    fetchUsers,
    deleteUser,
}

export type Action = FetchUsersAction | DeleteUserAction;
