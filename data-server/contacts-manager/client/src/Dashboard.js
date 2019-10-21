import React, { Component } from 'react';
import { Row, Col, List } from 'antd';

import { currentUser, fetchContacts } from './api';

class Dashboard extends Component {

    state = {
        contacts: [],
        fetchConstactsErr: null
    }

    componentDidMount() {
        if (!currentUser()) {
            this.props.history.push("/login")
            return;
        }

        fetchContacts().then((contacts) => {
            console.log(contacts);
            this.setState({contacts});
        }).catch(err => {
            this.setState({fetchConstactsErr: err.message})
            console.log(err);
        })
    }

    render() {
        return (
            <div>
                <Row type='flex' justify='center'>
                    <Col xs={12}>
                    <List
                        header={
                            <div>
                                <h3> Contacts </h3>
                                {this.state.fetchConstactsErr}
                            </div>   
                        }
                        bordered
                        dataSource={this.state.contacts}
                        renderItem={item => (
                            <List.Item>
                                {item.name}
                            </List.Item>
                        )}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;