// import React from 'react'

// const SearchCompo = ({par}) => {
//     console.log("This is compo: "+{par});
//     console.log("This is compo: "+par);
//     console.log("This is compo: "+JSON.stringify(par));
//     return (
//         <div>
//             <h1>
//                 New Component
//             </h1>
//             <div className='resultList'>
//                 {/* {par.map((res, id) => { */}

//                         <>
//                             {/* <a key={id} href={proLink + `${res.productId}`}> */}
//                             <div>
//                                 {/* {res.productName} */}
//                                 hello
//                             </div>
//                             {/* </a> */}
//                         </>

//                 {/* })} */}
//             </div >
//         </div>
//     )
// }

// export default SearchCompo


import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { Base_url } from '../Service/product-service'
import { Button, Card, CardBody, CardText, Col, Container, Row } from 'reactstrap';
import { addItemToCart } from '../Service/cartService';
import { toast } from 'react-toastify';
import Base from './Base';

const SearchCompo = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const data = location.state.par;
    useEffect(() => {
        if (location.state.par) {
            console.log("hirdsvsdvdv " + location.state.par)
        }
    })
    // console.log(data)
    const res = data.map((pro, id) => <li>{pro}</li>)
    // console.log(res);
    // console.log(res[0].props);
    // console.log(res[0].props.children);


    // console.log(data)
    // console.log(data[0]);
    // let imagesStyle = {
    //     width: '100%',
    //     height: '100px',
    //     objectFit: 'contain',
    //     margin: '15px 0px 0px 0px'
    // }
    // const result = data.map((val, key) => {

    //     return (
    //         <>
    //             <div>
    //             <img style={imagesStyle} src={Base_url + '/products/images/' + val.productId} alt="product" />

    //             {/* <img src='"e43cbef3-c21c-4c39-97c4-adcfb7b23b7a.png'></img> */}
    //                 {val.productName}
    //             </div>
    //         </>
    //     )
    // })

    const myStyle = {
        // backgroundImage: "url('https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=996&t=st=1679485879~exp=1679486479~hmac=c784bbbc4eb07724200ba010aba07d15e6caf19fa7cb3c9c25431651e3d0b302')",
        // backgroundColor: "#EFEEDB",
        // height: '100vh',
        marginTop: '6rem',
        fontSize: '16px',
        // backgroundSize: 'cover',
        // backgroundRepeat: 'no-repeat',
    };

    const btnSet = {
        height: '5rem',
        padding: '16px'
    }
    const goStore = () => {
        navigate("/store/all")
    }
    let imagesStyle = {
        width: '100%',
        height: '300px',
        objectFit: 'contain',
        margin: '15px 0'
    }


    const result = data.map((val, key) => {
        const CardButton = () => {
            console.log(val.productQuantity)
            addItemToCart(val.productId, 1).then(data => {
                toast.success("Item Add to cart");
            }).catch(error => {
                console.log(error)
            })
        }
        return (
            <>
                <div>
                    <Row>
                        <Col>
                            <Container>

                                {val && (<Card style={myStyle}>
                                    {/* { console.log(product)} */}
                                    <CardBody >
                                        <h1>{val.productName}</h1>
                                        <img style={imagesStyle} src={Base_url + '/products/images/' + val.productId} alt="" />
                                        <CardText><h3>₹{val.productPrize}</h3></CardText>
                                        <CardText dangerouslySetInnerHTML={{ __html: val.productDesc }} ></CardText>
                                        <CardText></CardText>
                                    </CardBody>
                                    <div className="text-center" style={btnSet}>
                                        <Button size="lg" color="primary" onClick={goStore} >Back</Button>
                                        <Button size="lg" style={{ marginLeft: '30px' }} color="success" onClick={CardButton} >Add To Card</Button>
                                    </div>
                                </Card>)}

                            </Container>
                        </Col>
                    </Row>
                </div>
            </>
        )
    })
    // console.log(res[0].props);
    // console.log(res[0].props.children);

    // console.log("This is compo: "+{par});
    // console.log("This is compo: "+par);
    // console.log("This is compo: "+JSON.stringify(par));
    return (
        <div
         style={{
            'marginTop': '63px',
            'marginBottom': '-15px',
            // 'backgroundSize': 'cover',
            'height': '110vh',
            'objectFit': 'contain',
            // 'backgroundImage': "url('')",
            'backgroundImage': "url('Images/About.jpg')",
        }}
        >
            <Base>
            </Base>
            {/* <Container style={{
                'marginTop': '-2rem'
            }} > */}
                <ul style={{
                    'backgroundImage': "url('Images/About.jpg')",
                }}>{result}</ul>
            {/* </Container> */}
        </div>
    )
}

export default SearchCompo
