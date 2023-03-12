import React, { useContext } from "react";
import { AppContext } from "../context";
import User from "./User";

function UserList() {
  // de-structurize the users list from app.js file which provide as a value to
  // AppContext.

  const {
    users,
    dispatchUser,
    religion,
    citizen,
    id,
    name,
    age,
    bio,
    gender,
    handleEditUserGender,
    handleEditUserId,
    handleEditUserAge,
    handleEditUserBio,
    handleEditUserName,
  } = useContext(AppContext);


   const AddUser = () => {
    // here below is the destructurize way of key:value pairs
    let userDummyData = {
      id,
      name,
      age,
      bio,
      gender,
      religion,
      citizen
    };

    dispatchUser("Add_User", { newUser: userDummyData });
  };
 

  return (
    <div>
      <form>
        <input
          id="target"
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            textIndent: "10px",
            margin: "10px 20%",
          }}
          type="number"
          value={id}
          onChange={(e) => handleEditUserId(e)}
          placeholder="Enter Your Professional Id:"
        />{" "}
        <br />
        <input
          id="target"
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            textIndent: "10px",
            margin: "10px 20%",
          }}
          type="text"
          value={name}
          onChange={(e) => handleEditUserName(e)}
          placeholder="Enter Your Professional name:"
        />{" "}
        <br />
        <input
          id="target"
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            textIndent: "10px",
            margin: "10px 20%",
          }}
          type="number"
          value={age}
          onChange={(e) => handleEditUserAge(e)}
          placeholder="Enter Your Professional age:"
        />{" "}
        <br />
        <input
          id="target"
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            textIndent: "10px",
            margin: "10px 20%",
          }}
          type="text"
          value={bio}
          onChange={(e) => handleEditUserBio(e)}
          placeholder="Enter Your Professional bio:"
        />{" "}
        <br />
        <input
          id="target"
          style={{
            fontSize: "22px",
            width: "300px",
            height: "40px",
            border: "2px solid black",
            borderRadius: "10px",
            textIndent: "10px",
            margin: "10px 20%",
          }}
          type="text"
          value={gender}
          onChange={(e) => handleEditUserGender(e)}
          placeholder="Enter Your gender:"
        />{" "}
        {/* <button
          style={{
            color: "white",
            backgroundColor: "grey",
            textAlign: "center",
            fontSize: "25px",
            cursor: "pointer",
            width: "300px",
            height: "70px",
            borderRadius: "15px",
            marginLeft: "1%",
          }}
          type="reset"
          onClick={AddUser}
        >
          Add User
        </button> */}
      </form>

      <h3>Available Users List Below:</h3>
      {users.map((inner_user) => (
        <User key={inner_user.id} userData={inner_user} />
      ))}
    </div>
  );
}

export default UserList;
