import React, { useEffect, useState, Component } from 'react';
import Modal from 'react-modal'
import { Movie } from './types/Movie';
import { jsx } from '@emotion/core'
import { monitorEventLoopDelay } from 'perf_hooks';

interface IState { 
  movie: Movie
  movieList: any[]
  visible: boolean
  order: number
  
}
interface IProps {
}
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class App extends React.Component<IProps, IState>{
    constructor(Props: any) {
      super(Props);
      this.state = {
        movieList:[{title: " ", year: 1, rating: 0}],
        visible: false,
        order: 1,
        movie: { 
          title: "",
          year: 0,
          rating:0
        }
      };
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
      
    }

  componentDidMount() {
    this.getDataAPI();
  }

  async getDataAPI() {
    let list: any = []

    let res = await fetch("http://www.omdbapi.com/?i=tt1099212&apikey=9edb6465");
    let data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt0120338&apikey=9edb6465"); 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt0103639&apikey=9edb6465") 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt1375666&apikey=9edb6465") 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt6172126&apikey=9edb6465") 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt0096895&apikey=9edb6465") 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt0462590&apikey=9edb6465") 
    data = await res.json();
    list.push(data);

    res = await fetch("http://www.omdbapi.com/?i=tt0314331&apikey=9edb6465")
    data = await res.json();
    list.push(data);

    this.setState({movieList: list });
  }

  openModal() {
    this.setState({visible: true});
  }

  closeModal() {
    this.setState({visible: false});
  }
  changeIndex(number: number) { 
    this.setState({order: number})
  }
  

render() {
  return (
    <div className="App">
    <h1>Movies</h1>
    
    <div className="Movies">
      
      <table id="myTable"> 
      <tbody>
        <tr>  
          <th>Title</th>
          <th>Year</th>
          <th>Runtime</th>
          <th>Rating</th>
          <th>Genre</th>

        </tr>
          {this.state.movieList.map((each, index) => {
            return (
              <tr >
            <td 
              key={1} 
              onClick= {this.openModal} >
                {each.Title} 
            </td>
            <td
              key={2}
              onClick={this.openModal} >
                {each.Year} 
            </td>
            <td
              key={3}
              onClick={this.openModal} >
                {each.Runtime}
            </td>
            <td
              key={4}
              onClick={this.openModal} >
                {each.imdbRating}
            </td>
            <td
              key={5}
              onClick={this.openModal} >
                {each.Genre}
            </td>
            </tr>
            )
          })}
          <Modal
          isOpen={this.state.visible}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Info Modal"
          >
            <div> 
          <h1>Movie title</h1>
          <p>Information avout the movie here </p>
          </div>
       
         </Modal>
        </tbody>
      </table>
    </div>
    </div>
  );
  }
}

export default App;
