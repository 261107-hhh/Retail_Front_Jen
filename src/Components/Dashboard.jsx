// import { Button, CardBody, CardText, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, CardFooter, CardTitle, Container } from 'reactstrap';
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import { checkLogin, checkLogin1, getCurrentUser, logout } from '../auth'
// import Base from './Base';
// import { getOrder } from '../Service/order-service';
// import { Base_url } from '../Service/product-service';
// import { toast } from 'react-toastify'
// import { margin } from '@mui/system'
// import { createOrder as paymentOrder, successPayment, successPaymentDone } from '../Service/payment.service'

// function Dashboard() {
//   const navigate = useNavigate();

//   const [user, setUser] = useState(null)
//   const [order, SetOrder] = useState(null)
//   const [modal, setModal] = useState(false);

//   const [selectItem, setSelectItem] = useState(null);

//   const toggle = () => setModal(!modal);
//   const closeModol = () => {
//     setModal(false)
//   }
//   const openModal = (order) => {
//     setModal(true)
//     setSelectItem(order)
//     //console.log(selectItem.item[0].product.productName)
//   }
//   let imagesStyle = {
//     width: '100%',
//     height: '300px',
//     objectFit: 'contain',
//     margin: '15px 0',
//   }


//   useEffect(() => {
//     console.log(getCurrentUser())
//     setUser(getCurrentUser())
//   }, [])

//   useEffect(() => {
//     getOrder().then(data => {
//       SetOrder(data)
//       console.log(data)

//     }).catch(error => {
//         if(error.message === "Network Error"){
//           toast.error("Network Error")
//           navigate("/store/all")
//         }
//       })
//   }, [])

//   const initializeRazorpay = () => {
//     return new Promise((res) => {
//       const script = document.createElement("script");
//       script.src = 'https://checkout.razorpay.com/v1/checkout.js';

//       script.onload = () => {
//         res(true);
//       }

//       script.onerror = () => {
//         res(false);
//       }
//       document.body.appendChild(script);
//     })
//   }

//   async function initiatePayment(data) {

//     const res = await initializeRazorpay();

//     if (res) {
//       // console.log("Razorpayintialized")
//       console.log(data.orderAmout)
//       console.log(typeof (data.orderAmout))
//       paymentOrder(data.orderAmout).then(res => {
//         console.log(res);
//         toast.success("order created")

//         // open payment form
//         if (res.message == 'CREATED') {
//           console.log("method run");
//           var options = {
//             "key": "rzp_test_SJbSE1ULGg8Kqg", // Enter the Key ID generated from the Dashboard
//             "amount": res.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
//             "currency": "INR",
//             "name": "HN Shopping Store",
//             "description": "This is payment module",
//             "image": "https://drive.google.com/file/d/15gWfGXJIEV4pNcD1dOLh8rdPgIbDY_fn/view?usp=share_link",
//             "order_id": res.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//             "prefill": {
//               "name": "Himanshu Nainwal",
//               "email": "himanshunainwal@gmail.com",
//               "contact": "7251939694"
//             },
//             "notes": {
//               "address": ""
//             },
//             "theme": {
//               "color": "#3399cc"
//             }
//           };

//           options.handler = (response) => {

//             response['user_order_id'] = data.orderId
//             console.log(response)

//             successPayment(response).then(r => {
//               console.log(r)
//               if (r.caputer) {
//                 toast.success("Payment done ....");
//                 navigate("/store/all");
//               }

//             }).catch(error => {
//               console.log(error)
//               toast.error("error in capturing")
//             })
//           }
//           const rzp = new window.Razorpay(options);
//           rzp.open();

//         }

//       }).catch(error => {
//         console.log(error)
//         toast.error("error in create order")
//       })
//     } else {
//       toast.error("Error in intitializing razorpay")
//       navigate("/store/all");
//     }

//   }


//   const formatDate = (time) => {

//     return new Date(time).toDateString();
//   }
//   const logoutUser = () => {
//     logout(() => {
//       navigate("/")
//     });
//   }
//   const modelHtml = () => {
//     return (
//       <Modal isOpen={modal} toggle={closeModol} size='lg'>
//         <ModalHeader toggle={closeModol}><h1>Product of Order{selectItem && +selectItem.orderId}</h1></ModalHeader>
//         <ModalBody>
//           {
//             selectItem && (selectItem.item.map((item, index) => (
//               <Card className='mt-3 boder-0 shadow-sm' color='light' >
//                 <CardBody className='mt-3'>
//                   <Row key={index}>
//                     <Col md={8}>
//                       <CardText>
//                         <h5>{item.product.productName}</h5>
//                       </CardText>

//                       <CardText dangerouslySetInnerHTML={{ __html: item.product.productDesc }}>

//                       </CardText>

//                       <CardText>
//                         <h5>Quantity:<b>{item.quantity}</b></h5>
//                       </CardText>

//                       <CardText>
//                         <h5>Prize:<b>{item.totalProductPrize}</b></h5>
//                       </CardText>

//                     </Col>
//                     <Col md={4}><img style={imagesStyle} src={Base_url + '/products/images/' + item.product.productId} alt="" /></Col>

//                   </Row>
//                 </CardBody>
//               </Card>
//             ))
//             )}

//         </ModalBody>
//         <ModalFooter>

//           <Button color="primary" size='sm' onClick={toggle}>
//             Cancel
//           </Button>
//         </ModalFooter>
//       </Modal>
//     )
//   }

//   // const myStyle = {
//   //   backgroundImage: "url('Images/cemra.png')",
//   //   height: '90vh',
//   //   // backgroundColor: 'rebeccapurple'
//   // }
//   const myStyle = {
//     backgroundImage: "url('Images/Store.jpg')",
//     height: "100vh",
//     // 'marginBottom': '-325px'
//     // backgroundColor: "red"
//   }

//   const htmlOrder = () => {
//     return (

//       <>

//         {/* <div style={myStyle}>

//         </div> */}
//         <Row>
//           <div
//             // style={{
//             //   width: '100%',
//             //   height: '',
//             //   backgroundImage: "url('Images/cemra.png')"
//             // }}
//             style={{
//               'height': '100vh',
//               // 'marginTop': "-41px",
//               // 'marginBottom': '-15px',
//               'marginBottom': '0px',
//               // 'backgroundImage': "url('https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=996&t=st=1679485879~exp=1679486479~hmac=c784bbbc4eb07724200ba010aba07d15e6caf19fa7cb3c9c25431651e3d0b302')",
//             }}
//           >
//               <>

//                 <Card style={{
//                   display: 'table',
//                   width: 'auto',
//                   marginTop: '52px',
//                   marginLeft: '37%',
//                   color: 'red'
//                   //  width: 390, marginTop: 50, marginLeft: '35%', color: 'red' 
//                 }}><h1>Your Order Details</h1></Card>
//                 <Col md={{ size: 8, offset: 2 }} style={{ marginTop: 12 }}>
//                   {order.map(order => (
//                     <Card key={order.orderId} style={{ marginTop: 10 }} className={order.paymentStatus == 'PAID' ? 'border-success mt-2' : 'border-danger mt-2'}>
//                       <CardBody className='text-center' >
//                         <Row>
//                           <Col md={5}>
//                             <CardText>
//                               <h5>ORDER NUMBER  :{" " + order.orderId}</h5>
//                             </CardText>
//                           </Col>

//                           <Col md={5}>
//                             <CardText style={{ marginLeft: 75 }}>
//                               <b> Create At:{formatDate(order.orderCreated)}</b>
//                             </CardText>
//                           </Col>

//                           <Col md={5}>
//                             <CardText>
//                               <h7> ADDRESS :{order.billingAddress}  </h7>
//                             </CardText>
//                           </Col>
//                           <Col md={5} style={{ marginLeft: 80 }}>
//                             <CardText >
//                               <h7>Payment Status : <b className={order.paymentStatus == 'PAID' ? 'text-success' : 'text-danger'}>{order.paymentStatus}</b> </h7>
//                             </CardText>
//                           </Col>
//                           <Col md={5}>
//                             <CardText md={5}>
//                               <h7>Order Status :    {order.orderStatus}</h7>
//                             </CardText>
//                           </Col>
//                           <Col md={5} style={{ marginLeft: 80 }}>
//                             <CardText>
//                               <h7>order Delivered:{order.orderDelivered ? formatDate(order.orderDelivered) : 'Order Not Deliver'}</h7>
//                             </CardText>
//                           </Col>

//                           <Col md={5}>
//                             <CardText >
//                               <h7>Bill Amount</h7>  :<b style={{ color: 'black' }}>{"₹" + order.orderAmout}</b>
//                             </CardText>
//                           </Col>
//                         </Row>
//                         <Container>
//                           {/* {console.log(order.paymentStatus+" this is payment statys")} */}
//                           {order.paymentStatus == "NOT PAID" ? <Button onClick={() => initiatePayment(order)} color='success' size='sm'>Pay Now</Button> : ""}
//                           <Button size='sm' onClick={() => openModal(order)} color='primary' className='ms-3'>View Product</Button>
//                         </Container>
//                       </CardBody>

//                     </Card>
//                   ))}
//                 </Col>
//               </>
//           </div>
//         </Row >
//       </>
//     )
//   }
//   return (
//     <>

//       <div
//         style={myStyle}
//       >
//         <Base>
//         </Base>
//         <>
//           {user && (
//             <div>

//             </div>
//           )}
//           {order && htmlOrder()}
//         </>
//         {/* <> */}

//           {/* {user && (
//             <div>

//             </div>
//           )}
//           {order ? htmlOrder() : <h1>No product present</h1>} */}
//           {/* {(user && order) ? htmlOrder() : <h6 style={{
//             'marginTop': '2rem',  
//             'display': 'inline-flex',
//             'position': 'fixed',
//             'fontSize': '24px',
//           }}>Not Available</h6>} */}
//           {/* {user ? htmlOrder(): <h1>No user</h1>} */}
//         {/* </> */}
//         {modelHtml()}
//       </div >
//     </>
//   )
// }

// export default Dashboard




import { Button, CardBody, CardText, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, CardFooter, CardTitle, Container } from 'reactstrap';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { checkLogin, checkLogin1, getCurrentUser, logout } from '../auth'
import Base from './Base';
import { getOrder } from '../Service/order-service';
import { Base_url } from '../Service/product-service';
import { toast } from 'react-toastify'
import { margin } from '@mui/system'
import { createOrder as paymentOrder, successPayment, successPaymentDone } from '../Service/payment.service'

function Dashboard() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null)
  const [order, SetOrder] = useState(null)
  const [modal, setModal] = useState(false);

  const [selectItem, setSelectItem] = useState(null);

  const toggle = () => setModal(!modal);
  const closeModol = () => {
    setModal(false)
  }
  const openModal = (order) => {
    setModal(true)
    setSelectItem(order)
    //console.log(selectItem.item[0].product.productName)
  }
  let imagesStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'contain',
    margin: '15px 0',
  }


  useEffect(() => {
    console.log(getCurrentUser())
    setUser(getCurrentUser())
  }, [])

  useEffect(() => {
    getOrder().then(data => {
      SetOrder(data)
      console.log(data)

    }).catch(error => {
      if (error.message === "Network Error") {
        toast.error("Network Error")
        navigate("/store/all")
      }
    })
  }, [])

  // const initializeRazorpay = () => {
  //   return new Promise((res) => {
  //     const script = document.createElement("script");
  //     script.src = 'https://checkout.razorpay.com/v1/checkout.js';

  //     script.onload = () => {
  //       res(true);
  //     }

  //     script.onerror = () => {
  //       res(false);
  //     }
  //     document.body.appendChild(script);
  //   })
  // }

  // async function initiatePayment(data) {

  //   const res = await initializeRazorpay();

  //   if (res) {
  //     // console.log("Razorpayintialized")
  //     console.log(data.orderAmout)
  //     console.log(typeof (data.orderAmout))
  //     paymentOrder(data.orderAmout).then(res => {
  //       console.log(res);
  //       toast.success("order created")

  //       // open payment form
  //       if (res.message == 'CREATED') {
  //         console.log("method run");
  //         var options = {
  //           "key": "rzp_test_SJbSE1ULGg8Kqg", // Enter the Key ID generated from the Dashboard
  //           "amount": res.price, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
  //           "currency": "INR",
  //           "name": "HN Shopping Store",
  //           "description": "This is payment module",
  //           "image": "https://drive.google.com/file/d/15gWfGXJIEV4pNcD1dOLh8rdPgIbDY_fn/view?usp=share_link",
  //           "order_id": res.orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
  //           "prefill": {
  //             "name": "Himanshu Nainwal",
  //             "email": "himanshunainwal@gmail.com",
  //             "contact": "7251939694"
  //           },
  //           "notes": {
  //             "address": ""
  //           },
  //           "theme": {
  //             "color": "#3399cc"
  //           }
  //         };

  //         options.handler = (response) => {

  //           response['user_order_id'] = data.orderId
  //           console.log(response)

  //           successPayment(response).then(r => {
  //             console.log(r)
  //             if (r.caputer) {
  //               toast.success("Payment done ....");
  //               navigate("/store/all");
  //             }

  //           }).catch(error => {
  //             console.log(error)
  //             toast.error("error in capturing")
  //           })
  //         }
  //         const rzp = new window.Razorpay(options);
  //         rzp.open();

  //       }

  //     }).catch(error => {
  //       console.log(error)
  //       toast.error("error in create order")
  //     })
  //   } else {
  //     toast.error("Error in intitializing razorpay")
  //     navigate("/store/all");
  //   }

  // }

  const markOrderAsPaid = (orderId) => {
    successPaymentDone(orderId).then(r => {
      if (r.caputer) {
        toast.success("Paid")
        navigate("/store/all")
      }
    }).catch(err => {
      console.log(err + " Error in payment");
      toast.error("Payment Unsuccessfull")
    })
  }


  const formatDate = (time) => {

    return new Date(time).toDateString();
  }
  const logoutUser = () => {
    logout(() => {
      navigate("/")
    });
  }
  const modelHtml = () => {
    return (
      <Modal isOpen={modal} toggle={closeModol} size='lg'>
        <ModalHeader toggle={closeModol}><h1>Product of Order{selectItem && +selectItem.orderId}</h1></ModalHeader>
        <ModalBody>
          {
            selectItem && (selectItem.item.map((item, index) => (
              <Card className='mt-3 boder-0 shadow-sm' color='light' >
                <CardBody className='mt-3'>
                  <Row key={index}>
                    <Col md={8}>
                      <CardText>
                        <h5>{item.product.productName}</h5>
                      </CardText>

                      <CardText dangerouslySetInnerHTML={{ __html: item.product.productDesc }}>

                      </CardText>

                      <CardText>
                        <h5>Quantity:<b>{item.quantity}</b></h5>
                      </CardText>

                      <CardText>
                        <h5>Prize:<b>{item.totalProductPrize}</b></h5>
                      </CardText>

                    </Col>
                    <Col md={4}><img style={imagesStyle} src={Base_url + '/products/images/' + item.product.productId} alt="" /></Col>

                  </Row>
                </CardBody>
              </Card>
            ))
            )}

        </ModalBody>
        <ModalFooter>

          <Button color="primary" size='sm' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    )
  }

  // const myStyle = {
  //   backgroundImage: "url('Images/cemra.png')",
  //   height: '90vh',
  //   // backgroundColor: 'rebeccapurple'
  // }
  const myStyle = {
    backgroundImage: "url('Images/Store.jpg')",
    height: "auto",
    // 'marginBottom': '-325px'
    // backgroundColor: "red"
  }


  const htmlOrder = () => {
    return (

      <>

        {/* <div style={myStyle}>

        </div> */}
        <Row>
          <div
            // style={{
            //   width: '100%',
            //   height: '',
            //   backgroundImage: "url('Images/cemra.png')"
            // }}
            style={{
              'height': "auto",
              'minHeight': '40rem',
              'maxHeight': 'webkitFillAvailable',
              'backgroundSize': 'cover',
              'backgroundRepeat': 'no-repeat',
              // 'marginBottom': '-15px',
              'marginBottom': '20px',
              // 'height': '100vh',
              // // 'marginTop': "-41px",
              // // 'marginBottom': '-15px',
              // 'marginBottom': '0px',
              // // 'backgroundImage': "url('https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=996&t=st=1679485879~exp=1679486479~hmac=c784bbbc4eb07724200ba010aba07d15e6caf19fa7cb3c9c25431651e3d0b302')",
            }}
          >
            <>

              <Card style={{
                display: 'table',
                width: 'auto',
                marginTop: '52px',
                marginLeft: '37%',
                color: 'red'
                //  width: 390, marginTop: 50, marginLeft: '35%', color: 'red' 
              }}><h1>Your Order Details</h1></Card>
              <Col md={{ size: 8, offset: 2 }} style={{ marginTop: 12 }}>
                {order.map(order => (
                  <Card key={order.orderId} style={{ marginTop: 10 }} className={order.paymentStatus == 'PAID' ? 'border-success mt-2' : 'border-danger mt-2'}>
                    <CardBody className='text-center' >
                      <Row>
                        <Col md={5}>
                          <CardText>
                            <h5>ORDER NUMBER  :{" " + order.orderId}</h5>
                          </CardText>
                        </Col>

                        <Col md={5}>
                          <CardText style={{ marginLeft: 75 }}>
                            <b> Create At:{formatDate(order.orderCreated)}</b>
                          </CardText>
                        </Col>

                        <Col md={5}>
                          <CardText>
                            <h7> ADDRESS :{order.billingAddress}  </h7>
                          </CardText>
                        </Col>
                        <Col md={5} style={{ marginLeft: 80 }}>
                          <CardText >
                            <h7>Payment Status : <b className={order.paymentStatus == 'PAID' ? 'text-success' : 'text-danger'}>{order.paymentStatus}</b> </h7>
                          </CardText>
                        </Col>
                        <Col md={5}>
                          <CardText md={5}>
                            <h7>Order Status :    {order.orderStatus}</h7>
                          </CardText>
                        </Col>
                        <Col md={5} style={{ marginLeft: 80 }}>
                          <CardText>
                            <h7>order Delivered:{order.orderDelivered ? formatDate(order.orderDelivered) : ' Order Not Delivered'}</h7>
                          </CardText>
                        </Col>

                        <Col md={5}>
                          <CardText >
                            <h7>Bill Amount</h7>  :<b style={{ color: 'black' }}>{"₹" + order.orderAmout}</b>
                          </CardText>
                        </Col>
                      </Row>
                      <Container>
                        {/* {console.log(order.paymentStatus+" this is payment statys")} */}
                        {/* {(console.log(order.orderId+" order Id"))} */}
                        {order.paymentStatus == "NOT PAID" ? <Button onClick={() => markOrderAsPaid(order.orderId)} color='success' size='sm'>Pay Now</Button> : ""}
                        <Button size='sm' onClick={() => openModal(order)} color='primary' className='ms-3'>View Product</Button>
                      </Container>
                    </CardBody>

                  </Card>
                ))
                }
              </Col>
            </>
          </div>
        </Row >
      </>
    )
  }
  return (
    <>

      <div
        style={myStyle}
      >
        <Base>
        </Base>
        <>
          {user && (
            <div>

            </div>
          )}
          {order && htmlOrder()}
        </>
        {/* <> */}

        {/* {user && (
            <div>

            </div>
          )}
          {order ? htmlOrder() : <h1>No product present</h1>} */}
        {/* {(user && order) ? htmlOrder() : <h6 style={{
            'marginTop': '2rem',  
            'display': 'inline-flex',
            'position': 'fixed',
            'fontSize': '24px',
          }}>Not Available</h6>} */}
        {/* {user ? htmlOrder(): <h1>No user</h1>} */}
        {/* </> */}
        {modelHtml()}
      </div >
    </>
  )
}

export default Dashboard