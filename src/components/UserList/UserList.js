import React from 'react';

import DeleteUser from '../DeleteUser/DeleteUser';
import styles from './UserList.module.css';

const UserList = props => {
  return (

    <ul className={styles['user-list']}>
      {props.items.map(user => (
        <DeleteUser
          key={user.id}
          id={user.id}
          onDelete={props.onDeleteItem}
        >
          {user.name} ({user.age})
        </DeleteUser>
      ))}
    </ul>

  );
};

export default UserList;
