import React from "react";
// import Loading from './Loading;'
const Users = ({ loading, users }) => {
  return loading ? (
    <div id="main">
      <img
        src="https://media1.tenor.com/images/3ed562cfd8a17565745a1901bcfa98ee/tenor.gif?itemid=20671223"
        alt="Loaading.."
        className="loader"
      />
    </div>
  ) : (
    <div id="main">
      {users.map((user) => (
        <div className="project column3">
          {console.log(user)}
          <div className="profile">
            <img src={user.avatar} alt={user.avatar} className="avatar"></img>
            <h1 className="name">
              {user.first_name} {user.last_name}
            </h1>
            <p className="email">Email: {user.email}</p>
            <p>User ID: {user.id}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
