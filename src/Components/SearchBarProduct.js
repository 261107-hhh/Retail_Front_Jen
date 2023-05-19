// // import React, { useEffect } from 'react'
// // // import { login } from '../auth'
// // import { addItemToCart as addCart } from '../Service/cartService'
// // import { toast } from 'react-toastify'
// // import Product from './Product'
// // import { Row, Col, ListGroup, ListGroupItem, Card, Alert } from "reactstrap"


// // import { loadProductByCategory, loadProducts, searchProduct } from '../Service/product-service'
// // import { loadCategories } from '../Service/category-service'
// // import { useState } from 'react'
// // import { Link, useParams } from 'react-router-dom'
// // import InfiniteScroll from 'react-infinite-scroll-component'


// // export default function SearchBarProduct({val}) {

// //     const { categoryId } = useParams(1)
// //     const [categories, setCategories] = useState(null)
// //     const [productDetails, setProductDetails] = useState(null)
// //     const [pageNumber, setPageNumber] = useState({ count: 0 })
// //     const [flag, setFlag] = useState(true)


// //     useEffect(() => {
// //         if (flag === true) {
// //             console.log("intial Time")
// //             // getCategories();
// //             setFlag(false)
// //         } else {
// //             console.log("not intial Time")
// //             setProductDetails(null)
// //             setPageNumber({ count: 0 })
// //         }
// //         //console.log(categoryId)
// //     }, [categoryId])

// //     setTimeout(
// //     useEffect(() => {
// //         // console.log(val+" hi there")
// //         // console.log("page Number:"+pageNumber.count)
// //         // getProduct(pageNumber.count)
// //         searchProduct(val)
// //     }, []),30000)

// //     const getProduct = (pageNumber) => {
// //         let ob = null;
// //         // if (categoryId === 'all') {
// //         // //   ob = loadProducts(pageNumber)
// //         // } else {
// //         //   ob = loadProductByCategory(categoryId, pageNumber)
// //         ob = searchProduct(val)
// //         // }
// //         ob.then(data => {
// //             console.log(data)
// //             if (productDetails) {
// //                 setProductDetails({
// //                     content: [...productDetails.content, ...data.content],
// //                     lastPage: data.lastPage,
// //                     pageNumber: data.pageNumber,
// //                     pageSize: data.pageSize,
// //                     totalElement: data.totalElement,
// //                     totalPage: data.totalPage
// //                 })
// //             } else {
// //                 setProductDetails(data)
// //             }


// //         }).catch(error => {
// //             console.log(error)
// //         })
// //         // console.log(productDetails)
// //         //console.log(productDetails.content.length)
// //     }

// //     // const getCategories = () => {
// //     //     loadCategories().then(data => {
// //     //         setCategories(data)
// //     //     }).catch(error => {
// //     //         console.log(error)
// //     //     })
// //     // }
// //     // const loadMoreComponent = () => {
// //     //     console.log("loding More")
// //     //     setPageNumber({ count: pageNumber.count + 1 })
// //     // }
// //     //add item to cart
// //     // const addItemToCart = (product) => {
// //     //     console.log(product);
// //     //     addCart(product.productId, 1).then(data => {
// //     //         console.log(data)
// //     //         toast.success("Item add to Cart")
// //     //     }).catch(error => { console.log(error) })
// //     // }

// //     const getInfiniteScrollWithContent = () => {
// //         return (<InfiniteScroll
// //             dataLength={productDetails.content.length}
// //             next={loadMoreComponent}
// //             hasMore={!productDetails.lastPage}
// //             loader={<h4>Loading...</h4>}
// //         >

// //             <Row>

// //                 {
// //                     (productDetails) &&
// //                     productDetails.content.map((item, index) => (
// //                         <Col md="6" lg="4" >
// //                             <Product key={index} addToCart={addItemToCart} product={item} />
// //                         </Col>
// //                     ))
// //                 }

// //             </Row>
// //         </InfiniteScroll>)


// //     }

// //     // console.log(productDetails)
// //     return (
// //         <div>
// //             <h1>Hi there</h1>
// //             {productDetails && getInfiniteScrollWithContent()}


// //         </div>
// //     )
// // }




// import React, { useEffect } from 'react'
// // import { login } from '../auth'
// import { addItemToCart as addCart } from '../Service/cartService'
// import { toast } from 'react-toastify'
// import Product from './Product'
// import { Row, Col, ListGroup, ListGroupItem, Card, Alert, Container, CardBody, CardText, Button } from "reactstrap"

// import Base from './Base'
// import { loadProductByCategory, loadProducts, searchProduct } from '../Service/product-service'
// import { loadCategories } from '../Service/category-service'
// import { useState } from 'react'
// import { Link, useParams } from 'react-router-dom'
// import InfiniteScroll from 'react-infinite-scroll-component'
// import Banner from './Banner'


// const SearchBarProduct = (data) => {

//     console.log(JSON.stringify(data.data + " Hello data"))
//     // console.log(JSON.stringify( data+" Hello data"))
//     const myStyle = {
//         backgroundImage: "url('https://img.freepik.com/free-photo/box-market-electronic-ordering-shop-basket_1421-567.jpg?w=996&t=st=1679485879~exp=1679486479~hmac=c784bbbc4eb07724200ba010aba07d15e6caf19fa7cb3c9c25431651e3d0b302')",
//         backgroundColor: "#EFEEDB",
//         height: '100vh',
//         marginTop: '0px',
//         fontSize: '10px',
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//     };

//     const [categories, setCategories] = useState(null)
//     const [productDetails, setProductDetails] = useState(null)
//     const [pageNumber, setPageNumber] = useState({ count: 0 })

//     const getCategories = () => {
//         loadCategories().then(data => {
//             setCategories(data)
//         }).catch(error => {
//             console.log(error)
//         })
//     }

//     useEffect(() => {
//         getCategories()
//     }, [])

//     // useEffect(() => {
//     //     getProduct(pageNumber.count)
//     // }, [])

//     const loadMoreComponent = () => {
//         console.log("loding More")
//         setPageNumber({ count: pageNumber.count + 1 })
//     }

//     const getProduct = (pageNumber) => {
//         let ob = null;
//         // if (categoryId === 'all') {
//         //     ob = loadProducts(pageNumber)
//         // } else {
//         //     ob = loadProductByCategory(categoryId, pageNumber)
//         // }
//         ob = searchProduct()
//         ob.then(data => {
//             console.log(data)
//             if (productDetails) {
//                 setProductDetails({
//                     content: [...productDetails.content, ...data.content],
//                     lastPage: data.lastPage,
//                     pageNumber: data.pageNumber,
//                     pageSize: data.pageSize,
//                     totalElement: data.totalElement,
//                     totalPage: data.totalPage
//                 })
//             } else {
//                 setProductDetails(data)
//             }


//         }).catch(error => {
//             console.log(error)
//         })
//         // console.log(productDetails)
//         //console.log(productDetails.content.length)
//     }

//     const getInfiniteScrollWithContent = (data) => {
//         return (
//             // <InfiniteScroll
//             // dataLength={data.content.length}
//             // next={loadMoreComponent}
//             // hasMore={!data.lastPage}
//             // loader={<h4>Loading...</h4>}
//             // >

//             <Row>

//                 {
//                     (data) &&
//                     data.content.map((item, index) => (
//                         <Col md="6" lg="4" >
//                             <Product key={index} product={item} />
//                         </Col>
//                     ))
//                 }

//             </Row>
//             // </InfiniteScroll>
//         )


//     }

//     return (
//         <>
//             <input type="text" placeholder="Search Product"
//                 onChange={(e) => {
//                     setProductName(e.target.value)
//                     if (e.target.value.length >= 3)
//                         searchProducts(e)
//                 }}
//                 value={productName}
//                 style={{
//                     "border": ".5px solid grey",
//                     "height": "2.5rem",
//                     "width": "16rem"
//                 }}
//             />
//         </>
//     )
// }
// export default SearchBarProduct;
// //     return (
// //         <>
// //             {/* <h1>Hi htere is data</h1> */}
// //             <Base>
// //                 <Banner></Banner>
// //                 <div >

// //                     <Row style={myStyle}>
// //                         <Col md="3">
// //                             <Card>
// //                                 <Alert color="primary">
// //                                     <h2 className='text-center'>Category</h2>
// //                                 </Alert>
// //                             </Card>


// //                             <ListGroup style={{ 'position': 'stick', 'width': '100%' }}>
// //                                 <ListGroupItem action tag={Link} to={'/store/all'}>
// //                                     <h4 className='text-center'><b><Alert color='warning'>All</Alert></b></h4>
// //                                 </ListGroupItem>
// //                                 {
// //                                     (categories) && categories.map(cat => (
// //                                         <>
// //                                             <ListGroupItem action tag={Link} to={'/store/' + cat.categoryId} key={cat.categoryId}>
// //                                                 <h5 className='text-center'>
// //                                                     <b>
// //                                                         <Alert color="warning">
// //                                                             {cat.title}

// //                                                         </Alert>
// //                                                     </b>
// //                                                 </h5>
// //                                             </ListGroupItem>
// //                                         </>
// //                                     ))
// //                                 }
// //                             </ListGroup>
// //                         </Col>
// //                         <Col md="8" style={{ 'marginLeft': '22px' }}>
// //                             <Container style={{ display: 'flex' }} >
// //                                 <Card className='m-3'>
// //                                     <img style={{
// //                                         width: '100%',
// //                                         height: '150px',
// //                                         margin: '2px 0',
// //                                         objectFit: 'contain'
// //                                     }}
// //                                         src="url('Images/About.jpg')" alt='Loading...' />
// //                                     <CardBody>
// //                                         <h5>product Name</h5>
// //                                         <span>1</span>
// //                                         <CardText><b>CategoryName: 1</b></CardText>
// //                                         <CardText><span>price 200</span></CardText>
// //                                         <Container style={{ display: 'flex', textAlign: 'center' }}>
// //                                             <Button>
// //                                                 view
// //                                             </Button>
// //                                             <Button>
// //                                                 Buy
// //                                             </Button>
// //                                         </Container>
// //                                     </CardBody>
// //                                 </Card>
// //                             </Container>
// //                         </Col>
// //                     </Row >

// //                     {/* <Row style={myStyle}>
// //                         <Col md="3">
// //                             <Card>
// //                                 <Alert color="primary">
// //                                     <h2 className='text-center'>Category</h2>
// //                                 </Alert>
// //                             </Card>


// //                             <ListGroup style={{ 'position': 'stick', 'width': '100%' }}>
// //                                 <ListGroupItem action tag={Link} to={'/store/all'}>
// //                                     <h4 className='text-center'><b><Alert color='warning'>All</Alert></b></h4>
// //                                 </ListGroupItem> */}
// //                     {/* {console.log("These are the category: " + categories)} */}
// //                     {/* {
// //                                     (categories) && categories.map(cat => (
// //                                         <> */}
// //                     {/* {console.log("This is category")} */}
// //                     {/* <ListGroupItem action tag={Link} to={'/store/' + cat.categoryId} key={cat.categoryId}>
// //                                                 <h5 className='text-center'>
// //                                                     <b>
// //                                                         <Alert color="warning">
// //                                                             {cat.title}

// //                                                         </Alert>
// //                                                     </b>
// //                                                 </h5>
// //                                             </ListGroupItem>
// //                                         </>
// //                                     ))
// //                                 }
// //                             </ListGroup> */}
// //                     {/* </Col> */}

// //                     {/* <Col md="8" style={{ 'marginLeft': '22px' }}>
// //                             <h2>Product</h2>
// //                             {data && getInfiniteScrollWithContent()}

// //                         </Col> */}
// //                     {/* </Row > */}

// //                 </div >
// //             </Base >
// //         </>
// //     )

// // }
// // export default SearchBarProduct









// import React, { useState } from 'react'
// import "./searchBar.css"
// function SearchBarProduct({ search, par }) {
//     const [productName, setproductName] = useState('');
//     const handelChange = (e) => {
//         setproductName(e.target.value);
//         // console.log("Hi hsadnfkasdvka"+ e);
//         // if (e.target.value.length >= 2)
//         // search(productName)
//         search(e);
//     }
//     // const onSearch = () => {
//     // }
//     console.log(JSON.stringify(par)+" hi this has product data")

//     return (
//         <div className='inputClass'>
//             <input type="text" placeholder="Search Product"
//                 value={productName}
//                 onChange={handelChange}
//                 // onChange={(e) => {
//                 //     setProductName(e.target.value)
//                 //     if (e.target.value.length >= 3)
//                 //         searchProducts(e)
//                 // }}
//                 style={{
//                     "border": ".5px solid grey",
//                     "height": "2.5rem",
//                     "width": "20rem"
//                 }}
//             />
//             <ul>
//                 {/* <li>h1</li> */}
//             </ul>

//         </div>
//     )
// }

// export default SearchBarProduct;




// import { useHistory } from "react-router-dom";



import React, { useState } from 'react'
import "./searchBar.css"
import { Navigate, useNavigate } from 'react-router-dom';
import { loadSingleProduct, searchProduct } from '../Service/product-service';
// import SearchProducts from './SearchProducts';
import { Button } from 'reactstrap';
import SearchCompo from './SearchCompo';

const SearchBarProduct = ({ search, par }) => {
    const [productName, setproductName] = useState('');
    const navigate = useNavigate();
    const [ed, setEd] = useState(true);
    const handelChange = (e) => {
        setEd(true)
        setproductName(e.target.value);
        search(e.target.value);
        console.log(par + " parrrrrrrrr")
    }
    // const history = useHistory();

    const handelNew = (e) => {
        if (e.key === "Enter") {
            console.log(" data got on click: " + productName);
            // search(productName);

            // history.push({
            //     pathname:"/searchProducts",
            //     state: {par: par}
            // })
            // <SearchCompo par = {par}/>
            // navigate("/searchCompo", par = {par})
            // navigate("/searchCompo")
            setEd(false)
            search(e.target.value);
            // setproductName(e.target.value);
            console.log("navigating:::");
            navigate("/searchCompo", { state: { par: par } })
            console.log("navigated:::");

            // navigate("/searchProducts")
        }
        // navigate("/searchProducts")
        //    search(productName);
    }
    const proLink = "http://localhost:3000/viewproduct/";
    return (
        <>

            <div className='inputClass'>
                <input type="text" placeholder="Search Product"
                    value={productName}
                    onChange={handelChange}
                    // onSubmit={handelNew}
                    // onClick={handelNew}
                    // onKeyUp={e => {
                    //     if (e.key === 'Enter') {
                    //         handelNew()
                    //     }
                    // }}
                    onKeyUp={handelNew}
                />
            </div>
            {ed &&
                <div className='resultList'>
                    {
                        par.map((res, id) => {
                            return (
                                <>
                                    <a key={id} href={proLink + `${res.productId}`}>
                                        <div>
                                            {res.productName}
                                        </div>
                                    </a>
                                </>
                            )
                        })
                    }
                </div >
            }
        </>
    )
}

export default SearchBarProduct;
