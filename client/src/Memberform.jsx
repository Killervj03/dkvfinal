import React, { useState, useEffect,previewImage } from 'react'
import { Container, Form, Segment, Grid } from 'semantic-ui-react'
import './App.css';
import Drop from './Dropdown'
import { useNavigate, useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Navbar';
import ImageUpload from './ImageUpload';
import Footer from './pages/Footer';




const intialState = {
  Name: "",
  Phone_Number: "",
  Alternate_Number: "",
  Address: "",
  Gender: "",
  Email_Id: "",
  Date_of_birth: "",
  Door_no: "",
  Street: "",
  Area: "",
  Land_Mark: "",
  City: "",
  Pin_code: "",
  Native_city: "",
  Native_place: "",
  Reg: "",
  Designation: "",
  Amount: "",
  joining: "",
  Plan: "",
  Uploadimage: "",
};
const Memberform = () => {
  const [state, setState] = useState(intialState);


  const {
    Name,
    Phone_Number,
    Alternate_Number,
    Address,
    Gender,
    Email_Id,
    Date_of_birth,
    Door_no,
    Street,
    Area,
    Land_Mark,
    City,
    Pin_code,
    Native_city,
    Native_place,
    Reg,
    Designation,
    Amount,
    joining,
    Plan,
    Uploadimage,
  } = state;
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }))

  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!Address) {
      toast.error("please fill all the fields");
    } else {
      if (!id) {
        axios.post("http://localhost:5000/api/post", {
          Name,
          Phone_Number,
          Alternate_Number,
          Address,
          Gender,
          Email_Id,
          Date_of_birth,
          Door_no,
          Street,
          Area,
          Land_Mark,
          City,
          Pin_code,
          Native_city,
          Native_place,
          Reg,
          Designation,
          Amount,
          joining,
          Plan,
          Uploadimage,
        })
          .then(() => {
            setState({
              Name: "", Phone_Number: "", Alternate_Number: "", Address: "", Gender: "",
              Email_Id: "",
              Date_of_birth: "",
              Door_no: "",
              Street: "",
              Area: "",
              Land_Mark: "",
              City: "",
              Pin_code: "",
              Native_city: "",
              Native_place: "",
              Reg: "",
              Designation: "",
              Amount: "",
              joining: "",
              Plan: "",
              Uploadimage: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Added Successfully");
      } else {
        axios
          .put(`http://localhost:5000/api/update/${id}`, {
            Name,
            Phone_Number,
            Alternate_Number,
            Address,
            Gender,
            Email_Id,
            Date_of_birth,
            Door_no,
            Street,
            Area,
            Land_Mark,
            City,
            Pin_code,
            Native_city,
            Native_place,
            Reg,
            Designation,
            Amount,
            joining,
            Plan,
            Uploadimage,
          })
          .then(() => {
            setState({
              Name: "",
              Phone_Number: "",
              Alternate_Number: "",
              Address: "",
              Gender: "",
              Email_Id: "",
              Date_of_birth: "",
              Door_no: "",
              Street: "",
              Area: "",
              Land_Mark: "",
              City: "",
              Pin_code: "",
              Native_city: "",
              Native_place: "",
              Reg: "",
              Designation: "",
              Amount: "",
              joining: "",
              Plan: "",
              Uploadimage: "",
            });
          })
          .catch((err) => toast.error(err.response.data));
        toast.success("Contact Added Successfully");
      }

      setTimeout(() => navigate("/Member"), 500);
    }
  };


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };



  const [data, setData] = useState();
  console.log(data)


  return (
    <div>
      <Container>

        <Segment>

          <h1> Member Form</h1>

          <Segment>
            <div class="second">
              <h1>
                <div >

                  <Form onSubmit={handleSubmit}>
                    <Grid>
                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label for id='Name'> <h4>Full Name :</h4></label>

                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Name"
                            id="Name"
                            type="text"
                            placeholder="First Name"
                            value={Name || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <label forhtml='Gender'> <h4>Gender:</h4></label>

                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Gender"
                            id="Gender"
                            type="text"
                            placeholder="Male/Female"
                            value={Gender || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor="Phone_Number"> <h4>Mobile Number :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Phone_Number"
                            id="Phone_Number"
                            type="number"
                            placeholder="Enter ur alternate Number"
                            value={Phone_Number || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>
                        <Grid.Column width={3}>
                          <label htmlFor="Alternate_Number"> <h4>Alternate Number :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}><Form.Input
                          name="Alternate_Number"
                          id="Alternate_Number"
                          type="number"
                          placeholder="Enter ur mobile Number"
                          value={Alternate_Number || ""}
                          onChange={handleInputChange} />

                        </Grid.Column>
                        <Grid.Column width={3} >
                          <label htmlFor="Email_Id"><h4> Email ID :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5} >
                          <Form.Input
                            name="Email_Id"
                            id="Email_Id"
                            type="text"
                            placeholder="Enter ur email address"
                            value={Email_Id || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>
                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor="Date_of_birth"> <h5> Data of Birth:</h5></label>

                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Group>
                            <Form.Input type="date" id="Date_of_birth" name="Date_of_birth"
                              placeholder="/Enter ur date of birth"
                              value={Date_of_birth || ""}
                              onChange={handleInputChange} />
                          </Form.Group>
                        </Grid.Column>
                      </Grid.Row>


                      <p> <Grid.Row>
                        <Grid.Column width={8}  >
                          <label htmlFor='Address'><h4>Native Address :</h4></label>
                        </Grid.Column></Grid.Row></p>
                      <Grid.Row>
                        <Grid.Column width={3}  >
                          <Form.Input
                            name="Address"
                            id="Address"
                            type="text"
                            placeholder="Enter ur Address"
                            value={Address || ""}
                            onChange={handleInputChange} />
                        </Grid.Column></Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='Door_no'> <h4>Door No :</h4></label>
                        </Grid.Column>

                        <Grid.Column width={5}>
                          <Form.Input
                            name="Door_no"
                            id="Door_no"
                            type="text"
                            placeholder="Enter ur door no"
                            value={Door_no || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>

                        <Grid.Column width={3}>
                          <label htmlFor='Street'> <h4>Street  :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Street"
                            id="Street"
                            type="text"
                            placeholder="Enter ur Street"
                            value={Street || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>

                      </Grid.Row>
                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='Area'> <h4>Area :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Area"
                            id="Area"
                            type="text"
                            placeholder="Enter ur area"
                            value={Area || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                        <Grid.Column width={3}>
                          <label htmlFor='Land_Mark'> <h4> Land Mark :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Land_Mark"
                            id="Land_Mark"
                            type="text"
                            placeholder="Enter ur Land Mark"
                            value={Land_Mark || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='City'> <h4>City:</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="City"
                            id="City"
                            type="text"
                            placeholder="Enter ur City Name"
                            value={City || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>



                        <Grid.Column width={3}>
                          <label htmlFor='Pin_code'> <h4>Pin Code :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Pin_code"
                            id="Pin_code"
                            type="number"
                            placeholder="Enter ur Pin_code"
                            value={Pin_code || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                      </Grid.Row>


                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='Native_place'> <h4>Native Place :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Native_place"
                            id="Native_place"
                            type="text"
                            placeholder="Enter ur Native place"
                            value={Native_place || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                        <Grid.Column width={3}>
                          <label htmlFor='Native_city'> <h4> Native City :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Native_city"
                            id="Native_city"
                            type="text"
                            placeholder="Enter ur native city"
                            value={Native_city || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>



                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='Reg'> <h4> Registration No:</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Reg"
                            id="Reg"
                            type="text"
                            placeholder="Enter ur registration"
                            value={Reg || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                        <Grid.Column width={3}>
                          <label htmlFor='Designation'> <h4>Designation :</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Designation"
                            id="Designation"
                            type="text"
                            placeholder="Enter ur Designation"
                            value={Designation || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>


                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label for id='Amount'> <h4>Enter the Subscription Amount:</h4></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Input
                            name="Amount"
                            id="Amount"
                            type="number"
                            placeholder="Enter ur subscription Amount"
                            icon="rupee"
                            iconPosition="left"
                            value={Amount || ""}
                            onChange={handleInputChange} />
                        </Grid.Column>




                        <Grid.Column width={3}>
                          <label for="joining"> <h5> Date of joining:</h5></label>
                        </Grid.Column>
                        <Grid.Column width={5}>
                          <Form.Group>
                            <Form.Input
                              name="joining"
                              id="joining"
                              type="date"
                              placeholder="Enter ur date of the joining"
                              value={joining || ""}
                              onChange={handleInputChange} />
                          </Form.Group>
                        </Grid.Column>
                      </Grid.Row>


                      <Grid.Row>
                        <Grid.Column width={3}>
                          <label htmlFor='Plan'> <h4>Plan:</h4></label>

                        </Grid.Column>

                        <Grid.Column width={5}>


                          <Form.Input
                            placeholder=" Enter your Annual Subscription/Life Time Subscription"
                            name="Plan"
                            type="text"
                            id="Plan"
                            value={Plan || ""}
                            onChange={handleInputChange}
                          />
                        </Grid.Column>


                        <Grid.Column width={6}>
                          <label htmlFor="Uploadimage"> <h4>Uploadimage :</h4></label>
                          
                          <input  id="image" type="file" 
                            accept='image/png ;base64,${binary_data}, image/jpeg;base64,${binary_data}`'
                            onChange={(e) => setData(e.target.files)} />
                             {previewImage && (
          <div>
            <img className="preview" src={previewImage} alt="" />
          </div>
        )}

                        </Grid.Column>


                      </Grid.Row>

                      <Grid.Row>
                        <Grid.Column>

                          < button className='button1' justifyContent="center" type="submit" value={id ? "Update" : "Submit"} Positive>Submit</button>

                          <Link to="/Member">
                            <button className='button2'  justifyContent="center" type='button' value="Go Back" >Go Back</button>
                          </Link >


                        </Grid.Column>
                      </Grid.Row>

                    </Grid>

                  </Form>
                </div>




              </h1>

            </div> </Segment>

        </Segment>

      </Container>
      <Footer />
    </div>
  );
}




export default Memberform;