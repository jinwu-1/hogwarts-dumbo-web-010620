import React from "react";
import HogTile from "./HogTile"

class HogContainer extends React.Component {
  render() {
    let hogComponentArray = this.props.hogs.map(hog =>
      <HogTile 
        key={hog.name}
        hogObject={hog}
      />
    )

    return (
      <div className="ui grid container">
        {hogComponentArray}
      </div>
    );
  }
}

export default HogContainer;
