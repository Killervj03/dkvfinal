import React, { useState } from 'react'
import { Segment, Grid, Button, Checkbox, Comment, Container, Popup, Form } from 'semantic-ui-react'
import Navbar from '../Navbar';
import Footer from './Footer';

function App(props) {
  const [mailerState, setMailerState] = useState({
    name: "",
    email: "",
    message: "",
    number:"",
  });

  function handleStateChange(e) {
    setMailerState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  const submitEmail = async (e) => {
    e.preventDefault();
    console.log({ mailerState });
    await fetch("http://localhost:4000/send", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ mailerState }),
    })
      .then((res) => res.json())
      .then(async (res) => {
        const resData = await res;
        console.log(resData);
        if (resData.status === "success") {
          alert("Message Sent");
        } else if (resData.status === "fail") {
          alert("Message failed to send");
        }
      })
      .then(() => {
        setMailerState({
          email: "",
          name: "",
          message: "",
          number:"",
        });
      });
  };

  return (
    <div>
      <Navbar/>
      <Container>
        <Segment>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <h3>DKV-SANGAM KEELKATTALAI</h3>
                <h3>Contact details:</h3>
                <h3>Address info:</h3>
              </Grid.Column>
              <Grid.Column width={5}>


                <text align="left">
                  <Form type="flex" onSubmit={submitEmail}>
                    <Form.Field>
                      <label>First Name:</label>
                      <input
                        placeholder='First Name'
                        name="name"
                        value={mailerState.name}
                        onChange={handleStateChange} />
                    </Form.Field>
                    <Form.Input
                      label='Email'
                      placeholder="Email"
                      onChange={handleStateChange}
                      name="email"
                      value={mailerState.email}
                    />
                    <Form.Field>
                      <label>Phone no:</label>
                      <input 
                      placeholder='Phone number'
                      onChange={handleStateChange} 
                      name="number"
                      value={mailerState.number}/>
                    </Form.Field>
                  </Form>
                </text></Grid.Column>

              <Grid.Column width={5}>
                <Comment.Group>
                  <Comment.Content>
                    <Form type="flex" onSubmit={submitEmail}><label><h3>Member's query</h3></label>
                      <Form.TextArea
                        placeholder="Message"
                        onChange={handleStateChange}
                        name="message"
                        value={mailerState.message}
                      />
                      <Form.Field>
                        <h5>Please click the submit button before click the terms and conditions check box.</h5>
                        <Checkbox label='I agree to the Terms and Conditions' />
                       
                      </Form.Field>
                      <Button type='submit' color='blue'>Submit</Button>
                     
                    </Form>
                  </Comment.Content>
                </Comment.Group> </Grid.Column>
            </Grid.Row>
          </Grid>

        </Segment>
      </Container>


      <Footer/>
    </div>
  );

}
export default App

