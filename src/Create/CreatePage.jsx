import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NavBarManu from "./NavBarManu"
import NavbarOne from "./NavbarOne"
import axios from 'axios';

class CreatePage extends Component {
    constructor() {
        super();
        this.state = {
            name: null,
            family: null,
            address: null,
            mobile: null,
            aadhar: null,
            nameError: "",
            datasuccess: ""
        }
    }

    valid() {
        if (this.state.name == null || this.state.name == "") {
            this.setState(
                { nameError: "Please Enter Name" }
            )
        } else if (this.state.address == null || this.state.address == "") {
            this.setState(
                { nameError: "Please Enter Address" }
            )
        } else if (this.state.family == null || this.state.family == "") {
            this.setState(
                { nameError: "Please Family Member No" }
            )
        } else if (this.state.mobile == null || this.state.mobile == "") {
            this.setState(
                { nameError: "Please Enter Mobile No" }
            )
        } else if (this.state.aadhar == null || this.state.aadhar == "") {
            this.setState(
                { nameError: "Please Enter Aadhar No " }
            )
        } else {
            return true
        }
    }

    create() {

        var createone = localStorage.getItem('login')

        if (this.valid()) {
            const user = {
                name: this.state.name,
                family: this.state.family,
                address: this.state.address,
                mobile: this.state.mobile,
                aadhar: this.state.aadhar,
                createtwo: createone,
            };
            axios.post('http://localhost:4001/users/createuser', {
                name: user.name,
                family: user.family,
                address: user.address,
                mobile: user.mobile,
                aadhar: user.aadhar,
                create: user.createtwo,
                status: '0'
            }).then((data) => {

                this.setState(
                    { datasuccess: "Admin Succesfully Added" }
                )

                this.resetFormFields()

            })

        } else {

        }

    }

    resetFormFields() {
        this.setState(
            {
                name: '',
                family: '',
                address: '',
                mobile: '',
                aadhar: ''
            });
    }

    keyPress = (event) => {
        this.setState(
            { datasuccess: "" }
        )
    }

    render() {
        return (
            <div className="container">
                <NavbarOne />
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <h2 className="h3 mb-3 font-weight-normal">Add Data Here</h2>
                        <p style={{ color: "red", fontSize: "14px" }}>{this.state.nameError}</p>
                        <p style={{ color: "green", fontSize: "14px" }}>{this.state.datasuccess}</p>
                        <input type="text" value={this.state.name} className="form-control" onKeyDown={this.keyPress} onChange={(event) => { this.setState({ name: event.target.value }) }}
                            placeholder="Enter Full Name" /> <br />
                        <input type="text" value={this.state.address} className="form-control" onChange={(event) => { this.setState({ address: event.target.value }) }}
                            placeholder="Enter Address" /> <br />
                        <input type="text" value={this.state.family} className="form-control" onChange={(event) => { this.setState({ family: event.target.value }) }}
                            placeholder="Enter Family Members Number" /> <br />
                        <input type="text" value={this.state.mobile} className="form-control" onChange={(event) => { this.setState({ mobile: event.target.value }) }}
                            placeholder="Enter Mobile" /> <br />
                        <input type="text" value={this.state.aadhar} className="form-control" onChange={(event) => { this.setState({ aadhar: event.target.value }) }}
                            placeholder="Enter Addhar Number" /> <br />
                        <button type="button" className="btn btn-success" onClick={() => { this.create() }}>Add Data</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePage;