import '../App.css';
import React from 'react';
import { Grid, Image, Segment, Container, Card, Icon, Button, Item } from 'semantic-ui-react'
import  { useEffect, useState } from "react"
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import PrintThisComponent from './down';

let Uploadimage
const Idcard=()=>{
  const [user,setUser]=useState({});
  const{id}=useParams();

  useEffect(()=>{
      axios.get(`http://localhost:5000/api/get/${id}`)
      .then((resp)=> setUser({...resp.data[0] }));
     },[id]);
      
     const [data, setData] = useState();
     console.log(data)

  return (
  <div >
    <Container>

        <Segment>
        <Segment>
          <center>
            <h3>DKV-SANGAM  KEELKATTALAI</h3>
          </center>

          <Grid columns={3} divided>
            <Grid.Row stretched>
              <Grid.Column>

                <Segment>

                  <Image src='/logo192.jpg' alt= "profilepic " size='medium' circular />
                  <label htmlFor="Uploadimage"> <h4>Uploadimage :</h4></label>
                          <input id="Uploadimage" type="file"
                            accept='image/png , image/jpeg,'
                            onChange={(e) => setData(e.target.files)} />
                  </Segment>
              </Grid.Column>
              <Grid.Column>
                <br></br> <h4>Name :</h4>
                <span>{user.Name} </span>
                <h4>Member ID :</h4>
                <span>{user.id}</span>
                <h4>Mobile No :</h4>
                <span>{user.Phone_Number}</span>
                <h4>Subcription : </h4>
                <span>{user.Plan}</span>
                <h4>Address  :</h4>
                <span>{user.Address}</span>
                <br></br>


              </Grid.Column>
            </Grid.Row>
          </Grid>
          
          
        </Segment>
        
        
        <PrintThisComponent/>

      </Segment>
      <div>
        <Link to="/Memberform">
        <button className='button2'> Go Back</button>
        </Link>
        </div>
    </Container>


  </div>
)
}   
    
export default Idcard





