import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { useEffect } from 'react';
import { fetchUsers, deleteUser } from '../redux/actions';

interface AppProps {
  users: User[];
  fetchUsers: any;
  deleteUser: any;
}

function App(props: AppProps) {

  const handleDelete = (id: number): void => {
    props.deleteUser(id)
  };

  // useEffect(() => {
  //   props.fetchUsers();
  //  }, []);

    return (
        <div>
          <button onClick={props.fetchUsers}>FETCH USERS</button>
          { props.users.length > 0 ?
            props.users.map( (user: User) => {
              return (
                <div key={user.id}>
                  {user.id} {user.name}
                  <button onClick={() => handleDelete(user.id)}>X</button>
                </div>
              )
            }) 
            :
            <div>No existen usuarios</div>
          }
        </div>
    )
}

const mapStateToProps = (state: StoreState) => {
  return { users: state.users }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchUsers: () => dispatch<any>(fetchUsers()),
    deleteUser: (id: number) => dispatch<any>(deleteUser(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
