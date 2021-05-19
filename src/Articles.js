import CategorySelector from './CategorySelector.js'
import {Fragment, useEffect, useState} from 'react'

const Articles = () => {
        
    const [category, setCategory] = useState('home')
    const [articles, setArticles] = useState([])
    
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
                
        const sortedNewsData = jsonResponse.results.map((newsData)=>{
            
            let media = {}

            if (newsData.multimedia && newsData.multimedia[0]) {
            media = newsData.multimedia[0]
            }

            let altText = media.caption
            if (altText === "") {
                altText = "No caption provided."
            }

            return {
                key:newsData.title,
                title: newsData.title,
                author:newsData.byline,
                imgSrc: media.url,
                imgCaption: altText,
                brief: newsData.abstract,
                link: newsData.url
            }
        })

        setArticles(sortedNewsData)       
        })
        
    }, [category])

    // const [light, setLight] = useState(true)

    const handleCategoryChange = (category) => {
        setCategory(category)
    }
        
    return(
        <Fragment>
            
        <CategorySelector 
          changeCategory = {handleCategoryChange} 
          category = {category} 
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
          world={() => { handleCategoryChange('world') }}
        //   lightSwitch={()=> {setLight(!light)}}
        //   lightSwitchName={light 
        //   ? <FaLightbulb className='light' /> 
        //   : <FaLightbulb className='dark' />}
          />

        <ul className="articles">

            <h3>Top Stories</h3>
                {
                articles.map(({key, title, author, imgSrc, brief, link, imgCaption}) => {
                return (
                    <li key={key}>
                        {imgSrc && <img src={imgSrc} alt={imgCaption}/>}
                        <h2>{title}</h2>
                        <span>{author}</span>
                        <p>{brief}</p>
                        <a href={link}>Read Full Story</a>
                    </li> )
                    })
                }
        </ul>
        </Fragment>
        )
        
}

export default Articles