import React, { Component } from 'react';
import {
    Form,
    Input,
    Button,
} from 'antd';
import { createContact } from './api';

import './NewContact.css';

class ContactForm extends Component {
    state = {
        createContactErr: null
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                createContact(values).then(() => {
                    this.props.hideModal(true);
                }).catch(err => {
                    this.setState({ createContactErr: err.message })
                })
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };
        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit} className="newcontact-form">
                <Form.Item>
                    {this.state.createContactErr}
                </Form.Item>
                <Form.Item label="Name">
                    {getFieldDecorator('name', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input contact name!!'
                            }
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label={
                        <span>
                            Email&nbsp;
                        </span>
                    }
                    
                >
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your contact email!',
                            }
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item
                    label={
                        <span>
                            City&nbsp;
                        </span>
                    }
                >
                    {getFieldDecorator('city', {
                        rules: [
                            { 
                                maxLen: 30, 
                                message: 'Please input your contact City!' 
                            }
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item
                    label={
                        <span>
                            Phone&nbsp;
                        </span>
                    }
                >
                    {getFieldDecorator('phone', {
                        rules: [
                            { 
                                maxLen: 10, 
                                message: 'Please input your contact phone!!' 
                            }
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                        Create Contact
                </Button>
                </Form.Item>
            </Form>
        )
    }
}

const NewContact = Form.create({ name: 'newContact' })(ContactForm);

export default NewContact;