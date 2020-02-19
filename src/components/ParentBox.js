import React, { Component } from 'react';
import StudentHaku from './StudentHaku';
import StudentLista from './StudentLista';
class ParentBox extends Component {
    render() {
        return (
            <div>
                <StudentHaku />
                <StudentLista />
            </div>
        );
    }
}

export default ParentBox;