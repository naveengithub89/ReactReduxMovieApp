import React, {Component} from 'react';
import Redirect from './redirect';

class MovieDisplay extends React.Component{

  constructor() {
    super();
    this.state = {
      doRedirect : false
    };
  }

  handleRedirectClick() {
    this.props.refreshFunc(false);
    this.setState({
      doRedirect : true
    })
  }
  render() {
    let movie = this.props.movie;
    return(
      <div className="col-md-3">
        <div className= "well text-center">
          <img src ={movie.Poster}></img>
          <h5>{movie.Title}</h5>
          <a class="btn btn-primary" href="#" onClick={this.handleRedirectClick.bind(this) }>Movie Details</a>
          <Redirect doRedirect={ this.state.doRedirect } imdbID = {movie.imdbID} />
        </div>
      </div>
    )
  }
}

export default MovieDisplay;
