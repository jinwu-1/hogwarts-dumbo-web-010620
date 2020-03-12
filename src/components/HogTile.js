import React from 'react'
import HogDetail from './HogDetail'

class HogTile extends React.Component {

    state = {
        clicked: false
    }

    handleClick = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        let {name} = this.props.hogObject
        return (
            <div className="ui eight wide column pigTile" onClick={this.handleClick}>

                <div className="content">
                    <img src="../hog-imgs/mudblood.jpg" alt="asdf"/>
                    <h3> {name} </h3>
                </div>

                <div className="extra-content">
                    {this.state.clicked? <HogDetail hog={this.props.hogObject}/> : null}
                </div>

            </div>
        )
    }
}

export default HogTile