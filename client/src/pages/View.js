import  React,{ useEffect, useState } from "react"
import {useParams,Link} from "react-router-dom";
import axios from "axios";
import Idcard from "./IDcard";
import Footer from "./Footer";

const View=()=>{
    const [user,setUser]=useState({});
    const{id}=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`)
        .then((resp)=> setUser({...resp.data[0] }));
       },[id]);
    return(
        <div style={{marginTop:"150px"}}>
         <div className="card">
            <div className="card-header">
                <p><h4>User Contact Detail</h4></p>
                </div>
                <div className="container">
                    <strong>ID:</strong>
                    <span>{id}</span>
                    <br/>
                    <br/>
                    <strong>Name:</strong>
                    <span>{user.Name}</span>
                    <br/>
                    <br/>
                    <strong>Mobile Number:</strong>
                    <span>{user.Phone_Number}</span>
                    <br/>
                    <br/>
                    <strong>Alternate Number:</strong>
                    <span>{user.Alternate_Number}</span>
                    <br/>
                    <br/>
                    <strong>Address:</strong>
                    <span>{user.Address}</span>
                    <br/>
                    <br/>
                    <strong>Gender:</strong>
                    <span>{user.Gender}</span>
                    <br/>
                    <br/>
                    <strong>Email Id:</strong>
                    <span>{user.Email_Id}</span>
                    <br/>
                    <br/>
                    <strong>Date of birth:</strong>
                    <span>{user.Date_of_birth}</span>
                    <br/>
                    <br/>
                    <strong>Door no:</strong>
                    <span>{user.Door_no}</span>
                    <br/>
                    <br/>
                    <strong> Street:</strong>
                    <span>{user.Street}</span>
                    <br/>
                    <br/>
                    <strong>Area:</strong>
                    <span>{user.Area}</span>
                    <br/>
                    <br/>
                    <strong>Land Mark:</strong>
                    <span>{user.Land_Mark}</span>
                    <br/>
                    <br/>
                    <strong> City:</strong>
                    <span>{user.City}</span>
                    <br/>
                    <br/>
                    <strong>Pin code:</strong>
                    <span>{user.Pin_code}</span>
                    <br/>
                    <br/>
                    <strong>Native city:</strong>
                    <span>{user.Native_city}</span>
                    <br/>
                    <br/>
                    <strong> Native place:</strong>
                    <span>{user.Native_place}</span>
                    <br/>
                    <br/>
                    <strong>Reg:</strong>
                    <span>{user.Reg}</span>
                    <br/>
                    <br/>
                    <strong>Designation:</strong>
                    <span>{user.Designation}</span>
                    <br/>
                    <br/>
                    <strong> Amount:</strong>
                    <span>{user.Amount}</span>
                    <br/>
                    <br/>
                    <strong>joining:</strong>
                    <span>{user.joining}</span>
                    <br/>
                    <br/>
                    <strong>Plan:</strong>
                    <span>{user.Plan}</span>
                    <br/>
                    <br/>
                    <strong>Uploadimage:</strong>
                    <span>{user.Uploadimage}</span>
                    <br/>
                    <br/>
                    
                    <Link to="/Member">
                    <div >Go Back</div>
                    </Link>
                </div>
            </div> 
            <Footer/>  
        </div>
    );
    };

    
    export default View;
