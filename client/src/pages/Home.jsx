import React, { Component, useState } from 'react';
import "../styles.css"
import "./styless.css";
import { Button, Container, Segment, Form, Checkbox, Table, Popup } from 'semantic-ui-react';
import Member from './Member';
import Navbar from '../Navbar';
import Footer from './Footer';

export default function Home() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name,updateName]=useState("");
  const [password,updatePassword]=useState("")
  const nameUpdation=(event)=>{
    updateName(event.target.value)
  }
  const passwordUpdation=(event)=>{
    updatePassword(event.target.value)
  }


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
      } else {
        setIsSubmitted(true);
      }
    } else {
      //username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  //Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error"> {errorMessages.message} </div>
    );

  //JSX code for login form
  const renderform = (
    <Container>
      <Segment>
        <Table>
          <Table.Body>
            <Table.Row>
              <Table.Cell width={10}>
                <img src="/MCCG3.jpg" alt='gallerynew' width={500} />
              </Table.Cell>
              <Table.Cell>
                <h1>Login</h1>
                <Form widths='7' onSubmit={handleSubmit}>
                  <Form.Field>
                    <label>Name</label>
                    <input type="text" value={name} name="uname" required placeholder='Name' onChange={nameUpdation} />
                    {renderErrorMessage("uname")}
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <input type="password" value={password} name="pass" required placeholder='Password' onChange={passwordUpdation}/>
                    {renderErrorMessage("pass")}
                  </Form.Field>
                  <Form.Field>
                    <input className='button1' type="submit" value="Login" />
                  </Form.Field>
                </Form>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
     
    </Container>
  );
  return (
    <div>
    <Navbar/>
    <div className="app">
       
      <div className="login-form">
        {isSubmitted ? <Member /> : renderform}
        
      </div>

      </div>
      <Footer/> 
    </div>
   
  );
}
