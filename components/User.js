import React, {useContext} from 'react'
import { AppContext } from '../context'
// import AddUser from './AddUser';

function User({userData}) {
	// Above in the parameter, we de-structurize the prop "userData" which is given
	//  in userList.js file

    const { dispatchUser} = useContext(AppContext);
	const {name, age, bio, gender, religion, citizen} = userData;

	const handleRemoveUser = () => {
		dispatchUser('Remove_User', { userId: userData.id });
	};

	const handleEditUser = () =>{
		dispatchUser('Edit_User', { userId: userData.id , userReligion: religion,
		userName: name, userAge: age, userBio: bio, userGender:gender, userCitizen: citizen});
		// console.log("Edit user selected:");		
		// console.log("1) ", userData.id);
		// console.log("2) ", name);
		// console.log("3) ", age);
		// console.log("4) ", bio);
		// console.log("5) ", gender);
		// console.log("6) ", religion);

		


		// let id = prompt("Enter the specified id that you want to edit:");
		// let name = prompt("Enter the specified name that you want to edit:");
		// let age = prompt("Enter the specified age that you want to edit:");
		// let bio = prompt("Enter the specified bio that you want to edit:");

        // editUser(id, name, age, bio);

	//  <AddUser editName={userData.name} editAge={userData.age} editBio={userData.bio} />

	}
  return (
    <div style={{border:"2px solid white", backgroundColor:"grey", color:"black",
	textAlign:"center", width:"500px", height:"550px", marginLeft:"30%", marginBottom:"30px"}}>
		<h1>Id:  <span style={{color:'white', backgroundColor:"black"}}>       {userData.id}      </span> </h1>
		<h2>Name:    <span style={{color:'white', backgroundColor:"black"}}>   {userData.name}    </span> </h2>
		<h2>Age:     <span  style={{color:'white', backgroundColor:"black"}}>  {userData.age}     </span>  </h2>
		<h2>Bio:     <span  style={{color:'white', backgroundColor:"black"}}>  {userData.bio}     </span>  </h2>
		<h2>Gender:  <span  style={{color:'white', backgroundColor:"black"}}>  {userData.gender}  </span>  </h2>
		<h2>Religion:<span  style={{color:'white', backgroundColor:"black"}}>  {userData.religion} </span>  </h2>
		<h2>Citizen: <span  style={{color:'white', backgroundColor:"black"}}>  {userData.citizen} </span>  </h2>
		
		<button onClick={handleRemoveUser} style={{color:"white", backgroundColor:"red",
		 textAlign:"center", fontSize:"25px",cursor:"pointer", 
		 width:"250px", height:"50px", borderRadius:"15px", marginBottom:"15px"}}> Delete this User </button>
      
	  <br />
	  <button onClick={handleEditUser} style={{color:"white", backgroundColor:"forestgreen",
		 textAlign:"center", fontSize:"25px",cursor:"pointer", 
		 width:"250px", height:"50px", borderRadius:"15px"}}> Edit this User </button>
      
    </div>
  )
}

export default User
