import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchIMDBMovie } from '../actions';

class IMDBMovie extends React.Component {

  componentWillReceiveProps(nextProps) {

  }

  componentWillMount() {


  }

  componentDidUpdate() {

      let myDiv = document.querySelector('#searchText');
      debugger;
      $('#searchBar').hide();
      $('#searchText').hide();
  }

  componentDidMount() {
    let imdbID = this.props.match.params.id;
    this.props.fetchIMDBMovie(imdbID);
  }
  render() {
    if(this.props.movieByIMDB.length>0){
      let movie = this.props.movieByIMDB[0];
      const imdbURL = `http://imdb.com/title/${movie.imdbID}`;

      return (
        <div className="container">
          <div className = "well" id="movie">
            <div className="row">
              <div className="col-md-4">
                <img src={movie.Poster} className="thumbnail"></img>
              </div>
              <div className="col-md-8">
                <h2>{movie.Title}</h2>
                <ul className="list-group">
                  <li className="list-group-item"><strong>Genre : </strong>{movie.Genre}</li>
                  <li className="list-group-item"><strong>Released : </strong>{movie.Released}</li>
                  <li className="list-group-item"><strong>Rated : </strong>{movie.Rated}</li>
                  <li className="list-group-item"><strong>IMDB Rating : </strong>{movie.imdbRating}</li>
                  <li className="list-group-item"><strong>Director : </strong>{movie.Director}</li>
                  <li className="list-group-item"><strong>Writer : </strong>{movie.Writer}</li>
                  <li className="list-group-item"><strong>Actors : </strong>{movie.Actors}</li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="well">
                <h3>Plot</h3>
                {movie.Plot}
                <div className="row"><br></br></div>
                <div className="row">
                  <a href={imdbURL} target="_blank" className="btn btn-primary">View IMDB</a>
                    <div className="divider"></div>
                  <a href="/" className="btn btn-default">Go Back to Search</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else {
      return(
        <div className="container">No data found from IMDB.</div>
      )
    }

  }
}

function mapStateToProps({movieByIMDB}){
  return {movieByIMDB}
}

export default connect(mapStateToProps,{ fetchIMDBMovie : fetchIMDBMovie })(IMDBMovie);
