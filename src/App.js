import './App.css';
import Header from './Header.js';
import Articles from './Articles.js'
import Trending from './Trending';
import {FaLightbulb} from 'react-icons/fa'


function App() {

  return (
    // <div className={light ? 'light' : 'dark'}>
    <div className="wrapper">
      <Header />  

      <section className="mainSectionContainer">
        <Articles/>
        <Trending/>
      </section>    
    </div>
    // </div>

  );
}

export default App;

// NEWS APP - 

// use the 'New York Times API' ("Latest Articles" section) to make a lite news app that displays "Recent Stories" by the following categories:
  // (selection will be made via the 'option value' dropdown)
  // arts, automobiles, books, business, fashion, food, health, home, movies, opinion, politics, realestate, science, sports, technology, theater, travel, and world.

// use state to hold article and setArticle with default state being "home"

// Once the component has been mounted call the local method (getArticle )to get a list of 4 random articles (out of 25) using math random 
  // add a "feeling lucky" button to randomize these articles further

// getArticle will call the API with a category selected or not (if not selected it will be on "home")
  // when successful -> update the state with new data

// Return the app
  // header 
  // "feeling lucky" button / option dropdown
  // 4 returned articles, layed out in a grid format 
  // footer

  // STRETCH GOAL 
    // Make another New York Times Api call but this time from "Most Popular and Shared" section
      // add an aside with a random "Most Trending Now" article
      // add either a randomizer button
      // OR
      // the request also accepts "most shared on facebook" "most emailed" and "most viewed"...which all could be buttons
