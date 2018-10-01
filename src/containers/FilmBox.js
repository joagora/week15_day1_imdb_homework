import React, {Component} from 'react';
import FilmList from '../components/FilmList.js';
class FilmBox extends Component {
  constructor(props) {
      super(props);
      this.state = {
        films: [
          {title: "Everything is Illuminated", director: "Safran Zoer"},
          {title: "Lord of the Rings", director: "Peter Jackson"}
        ]
      }
  }
  render() {
    return (
      <FilmList films={this.state.films} />
    )
  }
}

export default FilmBox;
