import React from "react"
import { Container, Row, Col } from "reactstrap"
import Base from "./Base"
import TextTransition, { presets } from "react-text-transition";


function About() {

    const TEXTS = [
        "Forest",
        "Building",
        "Tree",
        "Color"
    ];

    const myStyle = {
        backgroundImage: "url('Images/Store.jpg')",
        height: "93vh",
        // backgroundColor: "red"
    }


    return (
        <Base>
            <div style={myStyle}>

                <Container className="mt-5">
                    <Row >
                        <Col>
                            <h1 className="text-center mt-5" style={{ fontWeight: '1000' }}>Welcome to My Store </h1>

                            <h2>What is an About Us Page?</h2>
                            <p style={{ color: "#5E5379", fontSize: '18px' }}>
                                An About Us page is an opportunity to introduce your company on your own terms.
                                It’s where potential customers will go to find out why you’re passionate about your products –
                                and why they should be, too.

                                A well-crafted About Us page is the key to building trust and loyalty with your customers.
                                Best In Class Experience With Buses Having Extra Comfort & Safety. ₹500 Off* Coupon RED500. Book Bus Tickets Online for 70,000+ Routes Across India With India's No.1 Bus Booking Site.
                                Reschedulable Tickets. Top Rated App 4.5/5. Live Bus Tracking.

                                It’s tough to imagine daily life without e-commerce. We order food, clothes, and furniture; we register for classes and other online services; we download books, music, and movies; and so much more. E-commerce has taken root and is here to stay.

                                The term “e-commerce” simply means the sale of goods or services on the internet. In its most basic form, e-commerce involves electronically transferring funds and data between 2 or more parties. This form of business has evolved quite a bit since its beginnings in the electronic data interchange of the 1960s and the inception of online shopping in the 1990s.

                                In recent years, e-commerce has enjoyed a massive boost from the rise of smartphones, which allow
                                consumers to shop from nearly anywhere. In fact, business experts predicted that mobile e-commerce alone would surpass $284 billion in 2020.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Base >
    )


}

export default About
