import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';
import MovieDisplay from './movieDisplay';


class MovieList extends React.Component {

  constructor() {
    super();
    this.state = {
      initVal: true,
      searchQuery : '',
      loaded : false,
      searched : false
    };
  }

  handleTextSubmit(e) {
    this.setState({
      searchQuery : e.target.value
    })
  }

  searchMovie() {
    var srchStr = this.state.searchQuery;
    if(srchStr.trim!='' && srchStr!=null) {
      this.props.fetchMovies(srchStr);
      this.setState({
        searched : true
      })
    }


  }

  componentWillMount() {
  }

  componentDidMount() {
    this.setState({
      loaded : true
    })
  }

  componentDidUpdate() {
    let myDiv = document.querySelector('.container');

  }

  componentWillReceiveProps(nextProps) {

  }

  refreshFunc(display) {
    let myDiv = document.querySelector('#searchBar');
    if(display === false) {
      $('#searchBar').hide();
      $('#searchText').hide();
    }
  }

  returnMovieSearchMarkUp() {
    if(this.props.movieBySearch.length > 0){
      var refreshFunc = this.refreshFunc;
      return(
        <div className = "container">
          <div id="movies" className="row">
            {this.props.movieBySearch.map((movie) => {
              return <MovieDisplay key = {movie.imdbID} movie = {movie} refreshFunc = {refreshFunc} />
            })}
          </div>
        </div>
       )
    }
    else {
      if(this.state.searched){
        return(
            <div className = "container">No movies found for the search query</div>
        )
      }
      else {
        return(
            <div className = "container" id="searchText">Search for a movie.</div>
        )
      }
    }
  }
  render() {

    if(!this.state.loaded) {
      return (<div>Loading..</div>)
    }
    else {
      return (
        <div>
            <div className="container">
              <div className="jumbotron" id="searchBar">
                <h3 className="text-center">Search for any movie</h3>
                <div className="row">
                  <div className="col-md-10">
                    <input type="text" onChange={this.handleTextSubmit.bind(this)} value={this.state.searchQuery} className="form-control" id="searchText"></input>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-default" onClick={ this.searchMovie.bind(this) }>Search</button>
                  </div>
                </div>
              </div>
            </div>

           {this.returnMovieSearchMarkUp()}
        </div>

      )

    }


  }
}

function mapStateToProps({movieBySearch}, ownProps) {
  return { movieBySearch };
}

export default connect(mapStateToProps,{fetchMovies : fetchMovies})(MovieList);
