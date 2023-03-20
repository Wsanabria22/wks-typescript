import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';


const url = 'http://localhost:3001/api/user';

export const fetchUsers = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get<User[]>(url);
      dispatch<FetchUsersAction>({
      type: ActionTypes.fetchUsers,
      payload: response.data,
    }); 
    } catch (error) {
      console.log(error);
    };
  };
};

export const deleteUser = (id: number) => {
  return async (dispatch: Dispatch) => {
    try {
      console.log(`${url}/${id}`)
      await axios.delete(`${url}/${id}`)
      .then( async (resp) => {
        console.log('resp',resp)
        const response = await axios.get<User[]>(url);
        dispatch<DeleteUserAction>({
          type: ActionTypes.deleteUser,
          payload: response.data,
        });
      });
    } catch (error) {
      console.log(error);
    }
  }
};