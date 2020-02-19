import React, { Component } from 'react';
var axios = require('axios');

class HakuBox extends Component {
    state = {
        oppilaat: []
    };

    componentDidMount = () => {
        axios.get('http://localhost:4000/students')
            .then(res => {
                const oppilaat = res.data;
                this.setState({ oppilaat });
                console.log(oppilaat);
            })
    }

    render() {
        return (
            <div id="lista">
                <ul>
                    {this.state.oppilaat.map(oppilas => <li>id: {oppilas._id}, nimi: {oppilas.nimi}, ikä: {oppilas.ika}</li>)}
                </ul>
            </div>
        );
    }
}

export default HakuBox;