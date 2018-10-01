import React, {Component} from 'react';
import Film from './Film.js';
class FilmList extends Component {
  render() {
    const filmNodes = this.props.films.map((film, index) => {
      return (
        <Film title={film.title} director={film.director} />
      )
    })
    return(
      <React.Fragment>
        {filmNodes}
      </React.Fragment>
    )
  }
}

export default FilmList;
