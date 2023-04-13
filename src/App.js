import React, { useState } from 'react';
import './App.css';
import UserInput from './components/UserInput/UserInput'
import UserList from './components/UserList/UserList'

const App = () => {
  const [userList, setUserList] = useState([
    { name: 'Max', age:20, id: 'g1' },
    { name: 'Mike', age: 25, id: 'g2' }
  ]);
  


  const addUserHandler = (enteredText) => {
    setUserList(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({ name: enteredText.name, age:enteredText.age, id: Math.random().toString() });
      return updatedUsers;
    });
  };

  const deleteItemHandler = userId => {
    setUserList(prevUsers => {
      const updatedUsers = prevUsers.filter(user => user.id !== userId);
      return updatedUsers;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No users found. Maybe add one?</p>
  );

  if (userList.length > 0) {
    content = (
      <UserList items={userList} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section className="user-form">
        <UserInput onAddUser={addUserHandler} />
      </section>

      
      <section className="users">
        {content}
        {/* {userList.length > 0 && (
          <CourseGoalList
            items={userList}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
