import { margin } from '@mui/system'
import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Button, Card, CardBody, CardText, Container } from 'reactstrap'
import { checkLogin, getCurrentUser } from '../auth'
import { Base_url, loadSingleProduct } from '../Service/product-service'
import { context1 } from './Context'
function Product({ product, addToCart }) {
    const productLink = Base_url;
    const navigate = useNavigate()
    let imagesStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        margin: '15px 0px 0px 0px'
    }

    const getProductHtml = () => {
        return (
            <div style={{
                'margin': '2px 2px 1px 19px'
            }}>

                <Card className='mt-2 border-0 shadow-sm' style={{ 'width': '100%' }}>

                    <div style={{ 'width': '100%', 'height': '250px', 'marginBottom': '0px' }}>
                        <img style={imagesStyle} src={Base_url + '/products/images/' + product.productId} alt="" />
                    </div>
                    <CardBody style={{ 'marginTop': '2px','padding': '0px 0px 0px 19px;' }}>
                        <h5>{product.productName.slice(0, 10)}</h5>
                    </CardBody>
                    {/* <CardText style={{ 'margin-left': '14px', 'margin-bottom': '1px' }} dangerouslySetInnerHTML={{ __html: product.productDesc.slice(0, 110) }}> */}

                    {/* </CardText> */}

                    <CardText style={{
                        'fontSize': '22px', 'margin-bottom': '1px', 'padding':'0px 0px 0px 9%'
                    }}  >

                        <span>

                            {product.category.title}
                        </span>
                    </CardText>
                    <CardText style={{ 'margin-bottom': '1px', 'padding':'0px 0px 0px 9%' }}><h5>Prize:₹{product.productPrize}</h5></CardText>
                    <Container className='text' style={{
                        'padding':'0px 0px 0px 9%'
                    }}>
                        <Button tag={Link} to={'/viewproduct/' + product.productId} size='sm' className='my-3' color='success' >View Product</Button>

                        {/* <Button to ={} size='sm' className='my-3' color='success' >View Product</Button> */}

                        <Button onClick={(event) => (checkLogin()) ? (addToCart(product)) : toast.error("Login Please then add to cart")} size='sm' className='ms-4' color={product.stock ? 'primary' : 'danger'} >{product.stock ? 'Add to Cart' : 'out of stock'}</Button>

                    </Container>
                </Card>
            </div>

        )

    }

    return (<>
        <br></br>
        {(product) && getProductHtml()}
    </>
    )
}

export default Product
