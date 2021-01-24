import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

function Profile() {



    return (
        <>
            <Header />

            <div className="row">
                <Nav />
                <div className="col-9">
                    <div className="container">
                        <div className="row shadow p-3 m-3 rounded list-border">
                            <div className="col">
                                <div className="row">
                                    <div className="col">
                                        <h3>User Profile</h3>
                                        <div className="row">
                                            <div className="col-3">
                                            Here's where to put photo upload info. Display current photo, with link to page to upload new photo.
                                            </div>
                                            <div className="col-9">
                                                <div>
                                                    <h5>Username: User's username here</h5>
                                                </div>
                                                <div>
                                                    <h5>First Name: User's first name</h5>
                                                </div>
                                                <div>
                                                    <h5>Last Name: User's last name</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>

    )



}
export default Profile