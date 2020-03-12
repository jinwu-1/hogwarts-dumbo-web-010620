import React from 'react'

class HogDetail extends React.Component {

    render() {
        let {specialty, weight} = this.props.hog
        return (
            <div>
                <p> specialty: {specialty} </p>
                <p> weight: {weight} </p>
                <p> highest medal: {this.props.hog["highest medal achieved"]} </p>
            </div>
        )
    }

}

export default HogDetail