import React, { Component } from 'react';
var axios = require('axios');

class ParentBox extends Component {
    state = {
        oppilaat: []
    };

    componentDidMount = () => {
            axios.get('http//localhost:4000/students')
            .then(res => {
                const oppilaat = res.data;
                this.setState({oppilaat});
                console.log(oppilaat);
            })
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ParentBox;