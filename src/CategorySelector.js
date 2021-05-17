const CategorySelector = ({ home, arts, books, business, fashion, food, health, movies, politics, science, sports, theater, travel, world, top}) => {
    return (
        <div className="buttonContainer">
            <h4>Categories</h4>
            <button onClick={home}>All</button>
            <button onClick={arts}>Arts</button>
            <button onClick={books}>Books</button>
            <button onClick={business}>Business</button>
            <button onClick={fashion}>Fashion</button>
            <button onClick={food}>Food</button>
            <button onClick={health}>Health</button>
            <button onClick={movies}>Movies</button>
            <button onClick={politics}>Politics</button>
            <button onClick={science}>Science</button>
            <button onClick={sports}>Sports</button>
            <button onClick={theater}>Theater</button>
            <button onClick={travel}>Travel</button>
            <button onClick={world}>World</button>
            <a href="#top">UP</a>
        </div>
    )
}

export default CategorySelector