import React, { Component } from 'react';
import { Modal, Button, Form, Alert } from 'react-bootstrap';
import { ProductConsumer } from '../../context';

class LoginModal extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {value => {
                        const { showLoginModal,ErrorMessage,showCreateNewUserModal,
                            CloseCreateNewUserModal,OpenCreateNewUserModal, showErrorAlert,
                            closeErrorAlert, openLoginModal, formData, closeLoginModal, 
                            changeHandle, loginHandle, NewUserHandle  } = value;


                        return (
                            <React.Fragment>

                            

                         
                            <Modal show={showLoginModal} onHide={closeLoginModal} centered  >
                                <Modal.Header closeButton>
                                    <Modal.Title>Sign In to My Store</Modal.Title>
                                </Modal.Header>

                                <Modal.Body>
                                    <Form onSubmit={loginHandle}>
                                        <Form.Group controlId="formBasicEmail">
                                            <Form.Label>Email address</Form.Label>
                                            <Form.Control onChange={changeHandle} name="email" type="email" placeholder="Enter email" />

                                        </Form.Group>

                                        <Form.Group controlId="formBasicPassword">
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control onChange={changeHandle} name="password" type="password" placeholder="Password" />
                                        </Form.Group>

                                        {showErrorAlert ? <Alert dismissible  onClose ={closeErrorAlert}  variant="danger">
                                            <Alert.Heading>Oh snap! you got an error!</Alert.Heading>
                                            <p>
                                               {ErrorMessage}
                                           </p>
                                        </Alert> : null}

                                        <Button style={{ float: "left" }} variant="secondary" onClick={OpenCreateNewUserModal}>
                                            Create New Account
                                          </Button>
                                        <Button style={{ float: "right" }} variant="primary" type="submit">
                                            Sign In
                                          </Button>
                                    </Form>
                                </Modal.Body>

                            </Modal>

                         
                            <Modal show={showCreateNewUserModal} onHide={CloseCreateNewUserModal} centered  >
                            <Modal.Header closeButton>
                                <Modal.Title>Register New Account</Modal.Title>
                            </Modal.Header>

                            <Modal.Body>
                                <Form onSubmit={NewUserHandle}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control onChange={changeHandle} name="user_name" type="text" placeholder="Name" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={changeHandle} name="user_email" type="email" placeholder="Enter email" />

                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control onChange={changeHandle} name="user_password" type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control onChange={changeHandle} name="user_password" type="password" placeholder="Password" />
                                    </Form.Group>

                                    {showErrorAlert ? <Alert dismissible  onClose ={closeErrorAlert}  variant="danger">
                                        <Alert.Heading>Oh snap! you got an error!</Alert.Heading>
                                        <p>
                                        {ErrorMessage}
                                       </p>
                                    </Alert> : null}

                                    
                                    <Button style={{ float: "right" }} variant="primary" type="submit">
                                        Create Account
                                      </Button>
                                </Form>
                            </Modal.Body>

                        </Modal>   
                        </React.Fragment> 

                           
                        )



                    }}
                </ProductConsumer>
            </React.Fragment>
        );
    }
}

export default LoginModal;