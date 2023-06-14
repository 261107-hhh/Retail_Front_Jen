import React from "react"
import Base from "./Base"
import { Row, Col, Card, CardBody, CardText, Button, Container } from 'reactstrap'
import { useNavigate, useParams } from "react-router-dom"
import { loadSingleProduct } from '../Service/product-service'
import { useEffect } from "react"
import { useState } from "react"
import { Base_url } from '../Service/product-service'
import { Link } from 'react-router-dom'
import { addItemToCart } from '../Service/cartService'
import { toast } from "react-toastify"
import { checkLogin } from "../auth"


function Viewproduct({ addToCart }) {
    const navigate = useNavigate()
    const goStore = () => {
        navigate("/store/all")
    }
    let imagesStyle = {
        width: '100%',
        height: '300px',
        objectFit: 'contain',
        margin: '15px 0'
    }
    const { productId } = useParams()

    const [product, setProduct] = useState(null)
    const CardButton = (product) => {
        // console.log(product.productQuantity)
        // console.log(product.productName);
        addItemToCart(productId, 1).then(data => {
            toast.success("Item Add to cart");
        }).catch(error => {
            toast.error("Item can not be Added to cart");
            console.log(error) 
        })
    }
    useEffect(() => {
        setTimeout(() => {
            loadSingleProduct(productId).then(data => {
                setProduct(data);
            }).catch(error => {
                console.log(error)
            })
        });
    }, [])


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
    const productHtml = () => {
        // if(!product){
        //     return <div>Loading...</div>
        // }
        return (
            <>
                <div>
                    <Row>
                        <Col>
                            {product && (<Card style={myStyle}>
                                {/* { console.log(product)} */}
                                <CardBody >
                                    <h1>{product.productName}</h1>
                                    <img style={imagesStyle} src={Base_url + '/products/images/' + product.productId} alt="" />
                                    <CardText><h3>₹{product.productPrize}</h3></CardText>
                                    <CardText dangerouslySetInnerHTML={{ __html: product.productDesc }} ></CardText>
                                    <CardText></CardText>
                                </CardBody>
                                <div className="text-center" style={btnSet}>
                                    <Button size="lg" color="primary" onClick={goStore} >Back</Button>
                                    {/* <Button size="lg" style={{ marginLeft: '30px' }} color="success" onClick={CardButton} >Add To Cart</Button> */}
                                    <Button size="lg" style={{ marginLeft: '30px' }} color="success" onClick={(event) => (checkLogin()) ? (CardButton(product)) : toast.error("Login Please then add to cart")} className='ms-4' >{product.stock ? 'Add to Cart' : 'out of stock'}</Button>

                                    {/* <Button onClick={(event) => (checkLogin()) ? (addToCart(product)) : toast.error("Login Please then add to cart")} size='sm' className='ms-4' color={product.stock ? 'primary' : 'danger'} >{product.stock ? 'Add to Cart' : 'out of stock'}</Button> */}

                                </div>
                            </Card>)}

                        </Col>
                    </Row>
                </div>
            </>
        )
    }



    return (
        <>
            <div style={{
                backgroundImage: "url('https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=996&t=st=1679485879~exp=1679486479~hmac=c784bbbc4eb07724200ba010aba07d15e6caf19fa7cb3c9c25431651e3d0b302')",
                height: '102vh',
                marginTop: "-4rem",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <Base>
                    <div >

                        <Container>
                            {/* {
                                product && (product.stock ? productHtml() :
                                    <h1 className="text-center text-danger my-5">Product is Out Of stock</h1>
                                )

                            } */}
                            {
                                product ? (
                                    product.stock ? (productHtml()
                                    ) : <h1 className="text-center text-danger" style={{
                                        "position": "absolute",
                                        "marginTop": "7rem",
                            }}>Product is Out Of stock</h1>
                        ): <h1 className="text-center text-danger my-5">Loading...!</h1>
                            }
                    </Container>
            </div>
        </Base >
            </div >
        </>
    )
}
export default Viewproduct