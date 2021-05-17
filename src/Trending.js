import { useEffect, useState } from "react"

const Trending = () => {

    const [trending, setTrending] = useState('home')

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

    }, [])

    console.log(trending)

    const period = 1

    return(
        <section className="trending">
            <h4>Trending</h4>
            <div className="trendingContainer">
                <h2>{trending.title}</h2>
                <p>{trending.byline}</p>
                <img src={trending.media[0]["media-metadata"][2].url} alt={trending.media[0].caption} />
                <p>{trending.abstract}</p>
                <div className="anchorTrending">
                    <a href={trending.url}>Read on!</a>
                </div>
            </div>
        </section>
    )
}

export default Trending