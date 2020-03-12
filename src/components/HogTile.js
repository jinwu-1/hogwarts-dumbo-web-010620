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

    getImage = (name) => {
        let newName = name.split(" ").join("_").toLowerCase();
        let hogImage = require(`../hog-imgs/${newName}.jpg`);
        return hogImage;
    }

    render() {
        let {name} = this.props.hogObject
        return (
            <div className="ui eight wide column pigTile" onClick={this.handleClick}>

                <div className="content">
                    <img src={this.getImage(name)} alt={name}/>
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