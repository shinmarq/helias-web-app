import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput } from "mdbreact";

const Contact = () => {
    return (
    <section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
        </h2>
        <MDBRow>
        <MDBCol lg="7">
            <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
            >
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.252528229228!2d121.0453989148381!3d14.412600989922405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d11287f11cbd%3A0x2f3b236ddd98c7d6!2sHelia&#39;s%20Kitchenette!5e0!3m2!1sen!2sph!4v1617365012947!5m2!1sen!2sph" 
                width="100%" 
                height="100%" 
                style="border:0;"
                style={{ border: 0 }}
            />
            </div>
            <br />
            <MDBRow className="text-center">
            <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="phone" />
                </MDBBtn>
                <p>+639151322968</p>
                <p className="mb-md-0">Monday - Sunday</p>
            </MDBCol>
            <MDBCol md="4">
                <MDBBtn tag="a" floating color="blue" className="accent-1">
                <MDBIcon icon="envelope" />
                </MDBBtn>
                <p className="mb-md-0">heliaskitchenette@gmail.com</p>
            </MDBCol>
            </MDBRow>
        </MDBCol>
        </MDBRow>
    </section>
    );
}

export default Contact