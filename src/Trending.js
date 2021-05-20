import Axios from "axios"
import { useEffect, useState } from "react"

const Trending = ({light}) => {

    // state for trending

    const [trending, setTrending] = useState("")

    // state for trending period

    const [period, setPeriod] = useState(1)

    useEffect (()=>{     

        // making another call to the NY Times API, this time to the "most popular, most viewed"
        
        Axios({
            method: 'GET',
            url: `https://api.nytimes.com/svc/mostpopular/v2/viewed/${period}.json`,
            params: {
                'api-key': 'tcPL7kY0JWT8CNTiOo8hfOsJalRUzNNI',
            }
        })
        .then((jsonResponse) => {
            const data = jsonResponse.data.results
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

    // period and label in a new array
    
    const trendingPeriod = [
            {period: 1, label: "Today"},
            {period: 7, label: "Week"},
            {period: 30, label: "Month"},
        ]

    // handling change in period
        
    const handlePeriodChange = (value) => {
            setPeriod(value)
        }

    return(
        <section className="trending">
            <h4>Trending</h4>
            <div className="trendingButtons">
                {
                trendingPeriod.map(({period, label})=>{
                    return <button key={`button-${label}`}onClick={() => { handlePeriodChange(period) }}>{label}</button>
                })
                }
            </div>
            
            <div className="trendingContainer">
                <h2>{trending.title}</h2>
                <p>{trending.byline}</p>
                {trendingMedia && <img src={trendingMedia} alt={trendingCaption
                }/> }
                <p>{trending.abstract}</p>
                < div className="anchorTrending" >
                    {light ? <a href={trending.url} > Read Here</a > : <a href={trending.url} className="trendingLightChange">Read Here</a>}
                </div >
            </div>
            
        </section>
    )
}

export default Trending
