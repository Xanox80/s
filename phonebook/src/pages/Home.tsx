// Home.tsx
import React from "react";
import { Col, Container, Row, Image, Carousel } from "react-bootstrap";
import AddContactForm from "../components/AddContactForm";
import ContactList from "../components/ContactList";
import withAuth from "../context/withAuth";
import "./HomeStyle.css";

const Home: React.FC = () => {
    return (
        <Container className="home-container">
            <h1 className="title">Phonebook</h1>
            <Row className="justify-content-center mb-4">
                <Col md="auto">
                    <Image
                        src="https://st.depositphotos.com/1779253/5140/v/450/depositphotos_51404593-stock-illustration-male-avatar-profile-picture-use.jpg"
                        rounded
                        className="profile-image"
                    />
                </Col>
            </Row>
            <AddContactForm />
            <ContactList />
            <Row className="mt-5">
                <Col md={{ span: 8, offset: 2 }}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-image"
                                src="https://ms.detector.media/doc/images/news/29843/i75_ArticleImage_29843.webp"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Old Telephone</h3>
                                <p>An old telephone with a rotary dial.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-image"
                                src="https://today.ua/wp-content/uploads/2024/03/spam-zvonok-768x384.jpg"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Spam Calls</h3>
                                <p>A vintage telephone with spam calls.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 carousel-image"
                                src="https://gdb.voanews.com/01000000-0aff-0242-602f-08db1a89968c_cx2_cy1_cw97_w1080_h608_s.jpg"
                            />
                            <Carousel.Caption className="carousel-caption">
                                <h3>Telegraph</h3>
                                <p>An old telegraph machine.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </Container>
    );
};

export default withAuth(Home);
