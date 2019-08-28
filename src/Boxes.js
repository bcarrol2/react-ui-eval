import React from 'react';

export default class Boxes extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div>
                {console.log(this.props)}
            </div>
        )
    }
}