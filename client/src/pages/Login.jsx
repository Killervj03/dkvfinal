
import React, { useState } from "react";
import "./styless.css";
import Navbar from "../Navbar";

function Logins() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "admin",
      password: "admin"
    },
    {
      username: "subi",
      password: "subi123"
    }
  ];
   const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      
      }else{
        setIsSubmitted(true);
      }
      
    }else{
      //username not found
      setErrorMessages({name:"uname", message:errors.uname});
    }

    };
    //Generate JSX code for error message
    const renderErrorMessage=(name)=>
    name === errorMessages.name && (
      <div className="error"> {errorMessages.message} </div>
    );
    //JSX code for login form
    
    const renderform = (
      
      <>
        <table>
          <tbody>
            <td width={5}>
            <img src="/MCCG3.jpg" alt='gallerynew' width={500} />

            </td>
            <td width={5}></td>
            <td width={5}>
            <div className="form">
            <div className="title">Sign In </div>
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label> Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password</label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div classname="button-container">
              <input type="submit"/>

            </div>
          </form>
        </div>
            </td>
          </tbody>
        </table>
        
        
        </> 
    );
    
    return( /* <div className="title">Sign In </div> 
      <div className ="app">
        <div className= "login-form"> */<div>

<Navbar/>
          {isSubmitted ?  <div>User is successfully logged in</div>: renderform}
        </div>
      
    );
    }
  
  
export default Logins;
