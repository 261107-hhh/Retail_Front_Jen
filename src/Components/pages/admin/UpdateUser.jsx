import React, { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Container, Input, Label, Row } from "reactstrap";
import Base from "../../Base";
import { toast } from "react-toastify";
import { getUser, updateUser } from "../../../Service/user-Service";
import { useNavigate, useParams } from "react-router-dom";

function UpdateUser() {

  const myStyle = {
    backgroundImage: "url('Images/Background-Image-Signup-Page.jpg')",
    height: "auto"
    // backgroundColor: "red"
  }

  const { userId } = useParams();

  const [user, SetUser] = useState({
    name: '',
    password: '',
    address: '',
    phone: '',
    gender: '',
    active: '',
  })

  const navigate =  useNavigate()
  useEffect(() => {
    setTimeout(() => {
      getUser(userId).then(res => {
        console.log(res);
        console.log(res.active+" this is activity")
        res.password = '123'
        if(res.active === false) res.active = true;
        else if(res.active === true) res.active = false;
        SetUser(res)
        // console.log(res.active+" this is activity")
      }).catch(error => {
        // if(error.message === "Network Error"){
        toast.error("Network Error " + error);
        // navigate("/store/all")
      })
      // getCart().then(data => {
      //   value.setCart(data)
      //   setCart(data)

      // }).catch(error => {
      //   if(error.message === "Network Error"){
      //     toast.error("Network Error")
      //     navigate("/store/all")
      //   }
      //   if (error.response.data.message = "Cart Not found") {
      //     toast.error("Your Cart is Empty")
      //     navigate("/store/all")
      //   }
      //   // console.log(error.response.data.massage+"hello")
      //   // console.log(error+" erroe")
      // })

    }, 1000)
  }, [])



  const onFieldChange = (event, fieldName) => {
    //console.log(event); 
    // console.log(event.target.value)
    // setName(event.target.value) //set the value in name5
    console.log({ [fieldName]: event.target.value })
    SetUser({ ...user, [fieldName]: event.target.value })
  }


  const registerUser = (event => {
    event.preventDefault()
    console.log(event)

    if (user.name.trim() === '') {
      //alert("user name is Required");
      toast.error("User name is Required")

    }
    // if (user.email.trim() === '') {
    //   //alert("user email is Required");
    //   toast.error("User Email is Required")
    // }

    // if (user.phone.length < 10 || user.phone.length > 10) {
    // }
    const phn = user.phone
    if (!(phn.match('[0-9]{10}'))) {
      toast.error("Enter Correct Phone no")
      // alert('Please provide valid phone number');
    }
    //Submit the Form

    updateUser(userId, user).then((data) => {
      console.log(data);
        toast.success("User Updated successfully")
        navigate("/admin-dashboard/adminuser")
    }).catch(error => {
      console.log(error);
      toast.error("vaildation Error")
      navigate("/admin-dashboard/adminuser")

    })

    // createUser(user).then((data) => {
    //   console.log(data);
    //   //alert("User Register");
    //   toast.success("User Registered successfully")
    //   navigate("/login")

    // }).catch(error => {
    //   if (error.response.status === 400) {
    //     toast.error("vaildation Eroor")
    //     // alert("vaild Error");
    //     var message = ``
    //     for (let i in error.response.data) {
    //       //  print error in console console.log(error.response.data[i])
    //       message = message + `${i.toUpperCase()} ${error.response.data[i]} \n`
    //     }
    //     message = message + "";
    //     toast.error(message);
    //   } else {
    //     toast.error("Server Error")
    //     //alert("server Error");
    //   }
    //   console.log(error)
    // })


  })

  return (<>

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
                  <h3 className='text-center '>Update User</h3>
                  <form onSubmit={registerUser}>
                    <div className='my-3'>
                      <Label for="name">Name</Label>
                      <Input type="text" id="name" placeholder='Enter Your Name Here'
                        onChange={(event) => onFieldChange(event, 'name')}
                        value={user.name} required
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
                      <Label for={'active'}>Active</Label>
                      <Input id={'active'} className={"ms-5"} type={'checkbox'} onChange={event => onFieldChange(event, 'active')}
                       />
                    </div>


                    <div className='my-3'>
                      <Label for="phone">Enter your Mobile Number</Label>
                      <Input type="telephone" id="phone" value={user.phone} placeholder="Phone Number"
                        onChange={(event) => onFieldChange(event, 'phone')}
                        pattern="[0-9]{10}"
                        required

                      />
                    </div>

                    <div className='my-3 text-center'>
                      <Button block color='success'>Submit</Button>
                    </div>

                    {/* <div className='my-3 text-center'>
                      <Button block color='warning'>Reset</Button>
                    </div> */}


                  </form>

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Base >

  </>
  )
}
export default UpdateUser