import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

let defaultStyle = {color: '#fff', 'font-size': '8px'};

class Categorie extends Component {
  render(){
    return(
      <div style={{width:'25%', display: 'inline-block'}}>
        <img/>
        <h2 style={{...defaultStyle, 'font-size': '15px'}}>Text</h2>
      </div>
    );
  }
}

class Playlist extends Component {
  render(){
    return(
      <div style={{width:'33%', display: 'inline-block'}}>
        <img/>
        <h2 style={{...defaultStyle, 'font-size': '15px'}}>Titel</h2>
        <p style={{...defaultStyle}}>Beschrijving</p>
      </div>
    );
  }
}

class NewPodcast extends Component {
  render(){
    return(
      <div style={{width: '100%', height: '50px'}}>
          <img style={{display: 'inline-block'}}/>
          <h2 style={{...defaultStyle, 'font-size': '15px', display: 'inline-block'}}>Podcast titel</h2>
          <div style={{display: 'inline-block'}}>
            <p style={{...defaultStyle}}>Beschrijving van de podcast.</p>
            <p style={{...defaultStyle}}>Datum van release</p>
          </div>
          <img style={{display: 'inline-block'}}/>
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
        <h1>Podcast</h1>
        <h3 style={defaultStyle}>Categories</h3>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <Categorie/>
        <h3 style={defaultStyle}>You're playlists</h3>
        <Playlist/>
        <Playlist/>
        <Playlist/>
        <h3 style={defaultStyle}>New podcasts</h3>
        <NewPodcast/>
        <NewPodcast/>
        <NewPodcast/>      
    </div>
  );
}

export default App;
