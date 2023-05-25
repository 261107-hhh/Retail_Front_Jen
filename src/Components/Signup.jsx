import React, { useState } from 'react'
import { CardBody, Container, Row, Col, Card, Input, Label, option, Button } from 'reactstrap';
import { createUser } from '../Service/user-Service';
import { toast } from 'react-toastify'
import Base from './Base'
import { useNavigate } from 'react-router-dom';

function Signup() {
  /*const[name,setName]=useState('') at a time it can change one value only so we used 
  object */
  const navigate = useNavigate()

  const [user, SetUser] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
    address: '',
    phone: '',
    gender: ' '
  })

  const onFieldChange = (event, fieldName) => {
    //console.log(event); 
    // console.log(event.target.value)
    // setName(event.target.value) //set the value in name5
    SetUser({ ...user, [fieldName]: event.target.value })
  }
  // const emailFieldChange=(event)=>{
  //   SetUser({...user,email:event.target.value})

  // }
  const registerUser = (event => {
    event.preventDefault()
    console.log(event)
    if (user.name.trim() === '') {
      //alert("user name is Required");
      toast.error("User name is Required")

    }
    if (user.email.trim() === '') {
      //alert("user email is Required");
      toast.error("User Email is Required")
    }

    // if (user.phone.length < 10 || user.phone.length > 10) {
    // }
    const phn = user.phone
    if (!(phn.match('[0-9]{10}'))) {
      toast.error("Enter Correct Phone no")
      // alert('Please provide valid phone number');
    }
    //Submit the Form
    createUser(user).then((data) => {
      console.log(data);
      //alert("User Register");
      toast.success("User Registered successfully")
      navigate("/login")

    }).catch(error => {
      if (error.response.status === 400) {
        toast.error("vaildation Eroor")
        // alert("vaild Error");
        var message = ``
        for (let i in error.response.data) {
          //  print error in console console.log(error.response.data[i])
          message = message + `${i.toUpperCase()} ${error.response.data[i]} \n`
        }
        message = message + "";
        toast.error(message);
      } else {
        toast.error("Server Error")
        //alert("server Error");
      }
      console.log(error)
    })


  })
  // const path = 

  const myStyle = {
    backgroundImage: "url('Images/Background-Image-Signup-Page.jpg')",
    height: "auto"
    // backgroundColor: "red"
  }

  return (
    <Base>
      <div style={myStyle}>
        <Container >
          <Row >
            <Col md={{
              size: 8,
              offset: 2
            }}>
              <Card className='Shadow-sm mt-5' color='' >
                <CardBody>
                  {/* {JSON.stringify(user)}  */}
                  <h3 className='text-center '>SignUp</h3>
                  <form onSubmit={registerUser}>
                    <div className='my-3'>
                      <Label for="name">Name</Label>
                      <Input type="text" id="name" placeholder='Enter Your Name Here'
                        onChange={(event) => onFieldChange(event, 'name')}
                        value={user.name} required
                      />
                    </div>

                    <div className='my-3'>
                      <Label for="email">Email</Label>
                      <Input type="email" id="email" placeholder='Enter Your Email Here'
                        //onChange={emailFieldChange} 
                        onChange={(event) => onFieldChange(event, 'email')}
                        value={user.email} required
                      />
                    </div>

                    <div className='my-3'>
                      <Label for="password">Password</Label>
                      <Input type="password" id="password" placeholder='Enter Your Password Here'
                        onChange={(event) => onFieldChange(event, 'password')}
                        value={user.password} required
                      />
                    </div>



                    <div className='my-3'>
                      <Label for="address">Address</Label>
                      <Input id="address" type="textarea" placeholder='Enter Your Address'
                        onChange={(event) => onFieldChange(event, 'address')}
                        value={user.address} required
                      />
                    </div>

                    <div className='my-3'>
                      <Label for="about">Enter about yourself in short</Label>
                      <Input id="about" type="textarea" placeholder='Enter your about yourself in short Here'
                        onChange={(event) => onFieldChange(event, 'about')}
                      //value={user.about}
                      />
                    </div>

                    <div className='my-3'>
                      <Label for="gender">Select your Gender</Label>
                      <Input type="select" id="gender"
                        onChange={(event) => onFieldChange(event, 'gender')}
                        value={user.gender} required
                      >
                        <option>select</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>

                      </Input>
                    </div>

                    <div className='my-3'>
                      <Label for="phone">Enter your Mobile Number</Label>
                      {/* <Input type="number" id="phone" placeholder='Phone Number'
                        onChange={(event) => onFieldChange(event, 'phone')}
                        value={user.phone} 
                        pattern="[0-9]{10}"
                        required
                      /> */}
                      <Input type="telephone" id="phone" value={user.phone} placeholder="Phone Number"
                        onChange={(event) => onFieldChange(event, 'phone')}
                        pattern ="[0-9]{10}"
                        required

                      />
                    </div>

                    <div className='my-3 text-center'>
                      <Button block color='success'>signup</Button>
                    </div>

                    <div className='my-3 text-center'>
                      <Button block color='warning'>Reset</Button>
                    </div>


                  </form>


                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Base>
  )
}

export default Signup;