import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { generateToken } from '../Service/user-Service'
import { CardBody, Container, Card, Col, Row, CardTitle, Input, Label, Button, Form } from 'reactstrap'
import { login } from '../auth'
import { useNavigate } from 'react-router-dom'
import Base from './Base'
function Login() {
  //use navigate hook for redailing login to user dashboard
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  })

  const setValue = (event, fieldName) => {
    setLoginData({ ...loginData, [fieldName]: event.target.value })
  }

  const loginFormSubmit = ((event) => {
    event.preventDefault();
    if (loginData.username.trim() === '') {
      toast.error("Username should not be blanl");
    }

    if (loginData.password.trim() === '') {
      toast.error("password field should not be blank");
    }

    //send the request to server to generated token
    else{
      generateToken(loginData)
      .then((data) => {
        toast.success("Login Success");
        login(data, () => {
          navigate("/store/all")
        })
      }).catch(error => {
        if (error.response.status == 400 || error.response.status == 404) {
          toast.error(error.response.data.message)
          console.log(error)
        }
        else {
          console.log(error)
          toast.error("login Error");
        }
      })
    }
  })

  const myStyle = {
    backgroundImage: "url('Images/About.jpg')",
    height: '95vh'

    // height: "200vh"
    // backgroundColor: "red"
  }

  return (
    <Base>
      <div style={myStyle}>
        <div>

          <Container>
            <Row>
              <Col md={
                {
                  size: 6,
                  offset: 3

                }
              }>
                <Card className='shadow-sm mt-5'>
                  <CardBody>
                    {/* {JSON.stringify(loginData)} */}
                    <h3 className='text-center'>Login</h3>
                    <Form onSubmit={loginFormSubmit}>
                      <div className='my-3'>
                        <Label for="username">Username</Label>
                        <Input className='boder-0' id="username" type="text" placeholder='Enter Your User Name here!'
                          onChange={(event) => setValue(event, 'username')}
                          value={loginData.username}

                        ></Input>

                      </div>

                      <div className='mb-3'>
                        <Label for="password">Password</Label>
                        <Input className='boder-0' type='password' id="password" placeholder='Enter Your password!'
                          onChange={(event) => setValue(event, 'password')}
                          value={loginData.password}
                        ></Input>

                      </div>

                      <div>
                        <Button active size="sm" color='success' block>
                          Submit
                        </Button>
                      </div>
                    </Form>
                  </CardBody>

                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </Base>

  )
}

export default Login