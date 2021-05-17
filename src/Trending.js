import { useEffect, useState } from "react"

const Trending = () => {

    const [trending, setTrending] = useState('home')
    const [period, setPeriod] = useState(1)

    useEffect (()=>{

        const url = new URL (`https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json`)

        url.search = new URLSearchParams ({
            'api-key': 'tcPL7kY0JWT8CNTiOo8hfOsJalRUzNNI',
        });
        
        fetch (url)
        .then((response)=> response.json())
        .then((jsonResponse)=>{
            const data = jsonResponse.results

            
            const randomTrending = data[Math.floor(Math.random()*data.length)]            
            setTrending(randomTrending)
        })
        
    }, [period])

    // ERROR handling for no image or image not loading fast enough
    
    let trendingMedia = {}

    if (trending.media && trending.media[0]) {
        trendingMedia = trending.media[0]["media-metadata"][2].url
    }

    // ERROR handling for no caption or caption not loading fast enough
    
    let trendingCaption = {}

    if (trending.media && trending.media[0]) {
        trendingCaption = trending.media[0].caption
    }
    else {trendingCaption = "No caption provided."}

    const handlePeriodChange = (value) => {
        setPeriod(value)
    }

    return(
        <section className="trending">
            <h4>Trending</h4>
            <div className="trendingButtons">
                <button onClick={()=>{handlePeriodChange(1)}}>Today</button>
                <button onClick={()=>{handlePeriodChange(7)}}>Week</button>
                <button onClick={()=>{handlePeriodChange(30)}}>Month</button>
            </div>
            <div className="trendingContainer">
                <h2>{trending.title}</h2>
                <p>{trending.byline}</p>
                {trendingMedia && <img src={trendingMedia} alt={trendingCaption
                }/> }
                <p>{trending.abstract}</p>
                <div className="anchorTrending">
                    <a href={trending.url}>Read Here</a>
                </div>
            </div>
        </section>
    )
}

export default Trending