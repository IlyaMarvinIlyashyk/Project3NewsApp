import { Fragment, useState } from "react"
import { RiMenuFill } from 'react-icons/ri'

const CategorySelector = ({ home, arts, books, business, fashion, food, health, movies, politics, science, sports, travel, world, lightSwitch, lightSwitchName}) => {

    const [open,  setOpen] = useState(false)

    const handleClick = () => {
        setOpen(!open)
    }

    const clickTopHandle = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            <div className="buttonContainer">
                
                <div className="bigScreen">
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
                    <button onClick={travel}>Travel</button>
                    <button onClick={world}>World</button>
                    <button onClick={clickTopHandle}>UP</button>
                </div>

                {/*  SMALL SCREENS (max-width: 800px) */}

                <div className="smallScreenNav">
               
                    <button className="smallScreenSelector" onClick={handleClick}><RiMenuFill /></button>
                    <h1>The News App</h1>

                </div>

                {open &&
                    <div className="smallScreen"> 
                        {/* <h4>Categories</h4> */}
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
                        <button onClick={travel}>Travel</button>
                        <button onClick={world}>World</button>
                    </div>
                }

            </div>
        </Fragment>
    )
}

export default CategorySelector