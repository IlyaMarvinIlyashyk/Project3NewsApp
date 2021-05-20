import CategorySelector from './CategorySelector.js'
import {Fragment, useEffect, useState} from 'react'
import Axios from 'axios'

const Articles = ({handleLight, light}) => {
    
    // state for category

    const [category, setCategory] = useState('home')
    
    // state for articles 
    
    const [articles, setArticles] = useState([])
    
    useEffect(() => {

        // error handling for when the page re-loads
        // if the category is false, do not proceed 

        if (!category) {
            return
        }

        // GET request from NY Times API 

        Axios({
            method: 'GET',
            url: `https://api.nytimes.com/svc/topstories/v2/${category}.json?`,
            params: {
                'api-key': 'tcPL7kY0JWT8CNTiOo8hfOsJalRUzNNI',
            }
        })

        .then((jsonResponse) => {

        // Randomizing the results

        const randomizer = (array) => {
            const randomTwoArticles = [];
            for (let i = 0; i < array.length; i++) {
                const random = Math.floor(Math.random() * array.length);
                randomTwoArticles.push(array[random]);
            };
            return randomTwoArticles;
        };

        const randomArticleArray = randomizer(jsonResponse.data.results)

        // Assigning a uniquely generated key for the articles
        // This is done by injecting an ID key into the objects within the new array

        const arrayWithRandomIds = randomArticleArray.map((article, index)=>{
            return {...article, id: index}
        })

        // Cleaning up the array
                
        const sortedNewsData = arrayWithRandomIds.map((newsData)=>{

            // error handling for when the media is undefined/ loads too slowly 
            
            let media = {}

            if (newsData.multimedia && newsData.multimedia[0]) {
            media = newsData.multimedia[0]
            }

            let altText = media.caption
            if (altText === "") {
                altText = "No caption provided."
            }

            // new objects within the new array

            return {
                key: newsData.id,
                title: newsData.title,
                author:newsData.byline,
                imgSrc: media.url,
                imgCaption: altText,
                brief: newsData.abstract,
                link: newsData.url
            }
        })

        // setting Article with a value 

        setArticles(sortedNewsData) 

        // fetching new articles of the selected category on click

        setCategory("")      
        })
        
        // dependant on "category" change

    }, [category])

    // function to change category

    const handleCategoryChange = (category) => {
        setCategory(category)
    }
        
    return(
        <Fragment>
            
        <CategorySelector 
          changeCategory = {handleCategoryChange} 
          handleLight = {handleLight}
          />

        <ul className="articles">

            {/* mapping the articles on the page */}

            <h3>Top Stories</h3>
                {
                articles.map(({key, title, author, imgSrc, brief, link, imgCaption}) => {
                return (
                    <li key={key}>
                        {imgSrc && <img src={imgSrc} alt={imgCaption}/>}
                        <h2>{title}</h2>
                        <p>{author}</p>
                        <p>{brief}</p>
                        { light ? <a href={link}>Read Full Story</a> : <a href={link} className={'articlesLightChange'}>Read Full Story</a>}
                    </li> )
                    })
                }
        </ul>
        </Fragment>
        )
        
}

export default Articles