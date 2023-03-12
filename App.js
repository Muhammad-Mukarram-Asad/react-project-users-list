import "./App.css";
import { AppContext } from "./context";
import { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import { useReducer } from "react";

// import LoginUseReducer from "./components/PerfectExample";

function reducer(state, action) {
  if (action.type === "edit_user_id") {
    return {
      ...state,
      id: action.newId,
      // age: state.age,
      // bio: state.bio,
      // name: state.name,
    };
  } else if (action.type === "edit_user_name") {
    return {
      ...state,
      name: action.newName,
      // id: state.id,
      // age: state.age,
      // bio: state.bio,
    };
  } else if (action.type === "edit_user_age") {
    return {
      ...state,
      age: action.newAge,
    };
  } else if (action.type === "edit_user_bio") {
    return {
      ...state,
      bio: action.newBio,
      // age: state.age,
      // id: state.id,
      // ages: state.ages
    };
  } else if (action.type === "edit_user_gender") {
    return {
      // bio: state.bio,
      // age: state.age,
      // id: state.id,
      // name: state.name,
      ...state,
      gender: action.newGender,
    };
  } else if (action.type === "incremented_age") {
    return {
      names: state.names,
      ages: state.ages + 1,
      bio: state.bio,
      age: state.age,
      id: state.id,
      name: state.name,
    };
  } else if (action.type === "decremented_age") {
    return {
      names: state.names,
      ages: state.ages - 1,
      bio: state.bio,
      age: state.age,
      id: state.id,
      name: state.name,
    };
  } else if (action.type === "age") {
    return {
      names: state.names,
      ages: state.ages + 3,
      bio: state.bio,
      age: state.age,
      id: state.id,
      name: state.name,
    };
  }

  //   else if(action.type === 'changed_name')
  //   {
  //     return {
  //       name: action.nextName,
  //       age: state.age
  //     }
  //   }
  else if (action.type === "changed_heading") {
    return {
      names: state.names,
      ages: action.ages,
      heading: action.newHeading,
    };
  } else {
    alert("Chl beta chutti kr");
  }
}

function App() {
  // Below is the code of useReducer Hook:

  // const [heading, setHeading] = useState("");
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [age, setAge] = useState("");
  // const [bio, setBio] = useState("");
  // const [gender, setGender] = useState("");

  const [religion, setReligion] = useState("");
  const [citizen, setCitizen] = useState("");
  const [editIndex, setEditIndex] = useState("");
  const [editMode, setEditMode] = useState(false);

  const initial_states = {
    id: "",
    name: "",
    age: "",
    bio: "",
    gender: "",
  };

  // useReducer Hook Below:
  const [state, dispatch] = useReducer(reducer, initial_states);
  const { id, name, age, bio, gender } = state;

  function handleEditUserId(e) {
    dispatch({
      type: "edit_user_id",
      newId: e.target.value,
    });
  }

  function handleEditUserName(e) {
    dispatch({
      type: "edit_user_name",
      newName: e.target.value,
    });
  }

  function handleEditUserAge(e) {
    dispatch({
      type: "edit_user_age",
      newAge: e.target.value,
    });
  }

  function handleEditUserBio(e) {
    dispatch({
      type: "edit_user_bio",
      newBio: e.target.value,
    });
  }

  function handleEditUserGender(e) {
    dispatch({
      type: "edit_user_gender",
      newGender: e.target.value,
    });
  }

  // function handleHeading(e) {
  //   dispatch({
  //     type: 'changed_heading',
  //     newHeading: e.target.value
  //   });
  // }

  // function handleInputChange(e) {
  //   dispatch({
  //     type: 'changed_name',
  //     nextName: e.target.value
  //   });
  // }

  /*
  
  *_________________________*__________________________*_______________________________*

  */

  const [users, setUsers] = useState([]);
  // In my opinion, below is the redux reducer type method:

  // Reducer Function Below:
  const dispatchUser = (actionType, data) => {
    switch (actionType) {

      case "Add_User":
        setUsers([...users, data.newUser]);
        console.log("Users Array after adding --> ", users);
        return;

      case "Remove_User":
        setUsers(users.filter((user) => user.id !== data.userId));
        console.log("Users Array in deleting mode --> ", users);
        return;

      case "Edit_User":
        console.log("Edit user Id --> ", data.userId);
        console.log("Edit user Name --> ", data.userName);
        console.log("Edit user Age --> ", data.userAge);
        console.log("Edit user Bio --> ", data.userBio);
        console.log("Edit user Gender --> ", data.userGender);
        console.log("Edit user Religion-> ", data.userReligion);
        console.log("Edit user Citizen --> ", data.userCitizen);

        setReligion(data.userReligion);
        setCitizen(data.userCitizen);

        let temp_users = [...users];
        let index = temp_users.findIndex((user) => user.id === data.userId);
        console.log("Targeted index is = ", index);
        setEditIndex(index);
        setEditMode(true);
        return;

      default:
        return;
    }
  };

  // const editUser = (id, name, age, bio) => {
  //   let temp_users = [...users];
  //   console.log(temp_users);
  //   console.log("props id --> ", id);
  //   let index = temp_users.findIndex((user) => user.id === id);
  //   console.log("index --> ", index);
  //   temp_users[index].name = name;
  //   temp_users[index].age = age;
  //   temp_users[index].bio = bio;
  //   setUsers(temp_users);
  // };

  // const editTask = (text) => {
  //   const newTask = [...tasks];
  //   const index = newTask.findIndex((task) => task.id === PopUp.item.id);
  //   newTask[index].topic = text.topic;
  //   newTask[index].content = text.content;
  //   setTasks(newTask);
  //   localStorage.setItem("tasks", JSON.stringify(newTask));
  // };

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

  const updateUser = () => {
    setEditMode(false);
    setReligion("");
    setCitizen("");
    const temp_users = [...users];
    temp_users[editIndex].religion = religion;
    temp_users[editIndex].citizen = citizen;
    setUsers(temp_users);
  };

  const resetStates = () => {
    setReligion("");
    setCitizen("");
  };

  return (
    <div className="App">
      {/* <LoginUseReducer /> */}
      <AppContext.Provider
        value={{
          citizen,
          religion,
          id,
          name,
          age,
          bio,
          gender,
          users,
          dispatchUser,
          handleEditUserId,
          handleEditUserAge,
          handleEditUserBio,
          handleEditUserName,
          handleEditUserGender,
        }}
      >
        {/* Below are the children of AppContext Method:
          means the children can now easily use the above values...
        */}

        {/* <AddUser /> */}

        <input
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
          placeholder="Enter your religion"
          value={religion}
          onChange={(e) => setReligion(e.target.value)}
        />
        <input
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
          placeholder="Enter your citizenship"
          value={citizen}
          onChange={(e) => setCitizen(e.target.value)}
        />
        <UserList />
        {editMode ? (
          <button
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
            onClick={updateUser}
          >
            update User
          </button>
        ) : (
          <button
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
            onClick={AddUser}
          >
            Add User
          </button>
        )}

        <button onClick={resetStates}>Reset States</button>
      </AppContext.Provider>

      {/* 
      
      *_________________________*__________________________*___________________________*
      
      */}

      <div>
        {/* <p
          style={{ color: "white", backgroundColor: "black", fontSize: "25px" }}
        > */}
          {/* Hello! Your name is {state.names} and you are {state.ages} years old.<br /> */}
          {/* Your professional title is {state.heading}. <br /> */}

          {/* Your Office Card details are as follows: <br />
          Id is = {state.id} <br />
          name is = {state.name} <br />
          age is = {state.age} <br />
          bio is = {state.bio} <br /> */}
        {/* </p> */}
        {/* <button
          onClick={() => {
            dispatch({ type: "incremented_age" });
          }}
          >
          Increment Age
        </button>

        <button
          onClick={() => {
            dispatch({ type: "decremented_age" });
          }}
        >
          {" "}
          Decrement Age{" "}
        </button>

        <button
          onClick={() => {
            dispatch({ type: "age" });
          }}
        >
          {" "}
          Increment Age To Three Times{" "}
        </button>  */}
      </div>
    </div>
  );
}

export default App;
