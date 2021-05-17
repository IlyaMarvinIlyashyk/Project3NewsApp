import './App.css';
import { useEffect, useState } from 'react';
import Header from './Header.js';
import Article from './Article.js'
import CategorySelector from './CategorySelector';
import Trending from './Trending';

function App() {

  
  const [articles, setArticles ] = useState([])
  const [category, setCategory] = useState('home')
  
  // console.log("App is rendering", category, articles)

  // const chooseTwoArticles = (array) => {
  //   const randomTwoArticles = [];
  //   for (let i = 0; i < 4; i++) {
  //     const random = Math.floor(Math.random() * array.length);
  //     randomTwoArticles.push(array[random]);
  //     };
  //     return randomTwoArticles;
  //   };

  useEffect(() => {
    
    const url = new URL(`https://api.nytimes.com/svc/topstories/v2/${category}.json?`)
    
    url.search = new URLSearchParams({
      'api-key': 'tcPL7kY0JWT8CNTiOo8hfOsJalRUzNNI',
    });
    
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((jsonResponse) => {
      
      const data = jsonResponse.results
      
      const sortedNewsData = data.map((newsData)=>{
        
        // console.log(newsData)

        let media = {}

        if (newsData.multimedia && newsData.multimedia[0]) {
          media = newsData.multimedia[0]
        }

        return {
          key:newsData.title,
          title: newsData.title,
          section: newsData.section,
          author:newsData.byline,
          imgSrc: media.url,
          imgCaption: media.caption,
          brief: newsData.abstract,
          link: newsData.url
        }
      })

      setArticles(sortedNewsData)       
    })
    
  }, [category])

  // console.log("I am the main article", articles)
    
  
  const handleCategoryChange = (category) => {
    setCategory(category)
  }
  
  return (
    <div className="wrapper">
      <Header />    

      <section className="mainSectionContainer">
        
        <CategorySelector 
          home={() => { handleCategoryChange('home') }}
          arts={() => { handleCategoryChange('arts') }}
          books={() => { handleCategoryChange('books') }}
          business={() => { handleCategoryChange('business') }}
          fashion={() => { handleCategoryChange('fashion') }}
          food={() => { handleCategoryChange('food') }}
          health={() => { handleCategoryChange('health') }}
          movies={() => { handleCategoryChange('movies') }}
          politics={() => { handleCategoryChange('politics') }}
          science={() => { handleCategoryChange('science') }}
          sports={() => { handleCategoryChange('sports') }}
          theater={() => { handleCategoryChange('theater') }}
          travel={() => { handleCategoryChange('travel') }}
          world={() => { handleCategoryChange('world') }}/>
        
        <ul className="articles">
        <h3>Top Stories</h3>
          {
            articles.map((article)=>{
              return <Article key={article.key} title={article.title} section={article.section} author={article.author} imgSrc={article.imgSrc} imgCaption={article.imgCaption} brief={article.brief} link={article.link} />
            })
          }
        </ul>
        <Trending category={category} />
      </section>    
    </div>

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
