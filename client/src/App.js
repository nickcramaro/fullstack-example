import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    newMovie: '',
    updateTitle: '',
    movies: []
  }

  componentDidMount() {
    this.getMovies();
  }

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({
      newMovie: event.target.value
    });
  }

  getMovies = () => {
    axios.get('/movie')
      .then(res => {
        this.setState({
          movies: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  createMovie = (event) => {
    event.preventDefault();
    axios.post('/movie', {name: this.state.newMovie})
      .then(res => {
        this.getMovies();
      })
      .catch(err => {
        console.log(err);
      });
  }

  deleteMovie = (id) => {
    axios.delete('/movie/' + id)
      .then(res => {
        this.getMovies();
      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    let moviesJSX = this.state.movies.map((m, i) => {
      return (
        <div key={i}>
          <h1>{m.name}</h1>
          <button onClick={() => this.deleteMovie(m.id)}>Delete</button>
        </div>
      );
    });

    return (
      <div>
        <form onSubmit={this.createMovie}>
          <input type="text" value={this.state.newMovie} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {moviesJSX} 
      </div>
    );
  }
}

export default App;
