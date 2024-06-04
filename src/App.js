import React from 'react';
import Header from './Header';
import User from './User';
import {userInfo} from './UserInfo';
import './App.css';

const App = () => {
  
  const descMessage = "This is a sample application for that displays the user information in the userInfo.js file";
  const users = []; //Creaing an empty array to store the userInfo objects

  //*Storing the userInfo objects in the users array
  for(const user in userInfo) {
    users.push(
    <User 
    key={user} 
    fullname={userInfo[user].fullname}
    imageUrl={userInfo[user].profilePic}
    jobTitle={userInfo[user].jobTitle}
    salary={userInfo[user].salary}
    />
  )
  }
  
  return (
    <div>
      {/* Header Component */}
      <Header  
      desc={descMessage} 
      />
      {/* UserInfo Component */}
      {users}
    </div>
  );
};

export default App;
