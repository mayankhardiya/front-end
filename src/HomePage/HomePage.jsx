import React from 'react';
import { Link } from 'react-router-dom';
import { Table, Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { userActions } from '../_actions';

class HomePage extends React.Component {

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


    componentDidMount() {
        this.props.getUsers();
    }

    handleDeleteUser(id) {
        return (e) => this.props.deleteUser(id);
    }

    create() {

       alert('Data Submitted');
       
       this.resetFormFields()   

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

    render() {
        const { user, users } = this.props;
        return (
            <div className="container">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand>NovaSoft</Navbar.Brand>
                    <Navbar.Toggle aria-contorls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">

                            <Nav.Link href="#list"><Link to="/list">List</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to="/create">Create</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to="/adminlist">AdminList</Link></Nav.Link>
                            <Nav.Link href="#list"><Link to="/search">Search</Link></Nav.Link>

                            {
                                localStorage.getItem('login') ?
                                    <Nav.Link href="#list"><Link to="/logout">Logout</Link></Nav.Link>
                                    :
                                    <Nav.Link href="#list"><Link to="/login">Login</Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                {/* {users.loading && <em>Loading users...</em>} */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 mt-5 mx-auto">
                            <h3 className="h3 mb-3 font-weight-normal">Add Data Here</h3>
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

                <p>
                    <Link to="/login">Logout</Link>
                </p>
            </div >
        );
    }
}

function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };