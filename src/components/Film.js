import React, {Component} from 'react';

class Film extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.director}</p>
      </div>

    )
  }
}

export default Film;
