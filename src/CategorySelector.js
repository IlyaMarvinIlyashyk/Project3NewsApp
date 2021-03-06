import { Fragment, useState } from "react"
import { RiMenuFill } from 'react-icons/ri'
import { FaArrowAltCircleUp, FaLightbulb } from 'react-icons/fa'

const CategorySelector = ({ changeCategory, handleLight}) => {

    // state for hamburger nav

    const [open,  setOpen] = useState(false)

    // hamburger nav open/close

    const handleNavClick = () => {
        setOpen(!open)
    }

    // scroll to top button

    const clickTopHandle = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    // categories in a clean array (thank you Brent 🙏)

    const categories = [
        {category: 'home', label: 'All'},
        {category: 'arts', label: 'Arts'},
        {category: 'books', label: 'Books'},
        {category: 'business', label: 'Business'},
        {category: 'fashion', label: 'Fashion'},
        {category: 'food', label: 'Food'},
        {category: 'health', label: 'Health'},
        {category: 'movies', label: 'Movies'},
        {category: 'politics', label: 'Politics'},
        {category: 'science', label: 'Science'},
        {category: 'sport', label: 'Sport'},
        {category: 'travel', label: 'Travel'},
        {category: 'world', label: 'World'},
    ]

    return (
        <Fragment>
            <div className="buttonContainer">

                {/* any screen size bigger than 800px */}
                
                <div className="bigScreen">
                    <h4>Categories</h4>
                    {
                        categories.map(({category, label})=>{
                            return <button key={`button-${category}`} onClick={() => { changeCategory(category) }}>{label}</button>
                        })
                    }
                    <button onClick={clickTopHandle}><FaArrowAltCircleUp /></button>
                    <button onClick={handleLight}><FaLightbulb/></button>
                </div>

                {/*  for screen sizes under 800px */}

                <div className="smallScreenNav">

                    {/* navbar open/close */}

                    <button className="smallScreenSelector" onClick={handleNavClick}><RiMenuFill /></button>
                    <h1>The News App</h1>

                </div>

                {/* if open.... */}

                {open &&
                    <div className="smallScreen"> 
                        {
                        categories.map(({ category, label }) => 
                        {                            
                            if (category === 'home') {
                                return "";
                            }

                            else
                            {
                                return <button key={`button-${category}`} onClick={() => { changeCategory(category) }}>{label}</button>}
                        })
                        }
                        <button onClick={() => { changeCategory('home') }}>All</button>
                        <button onClick={clickTopHandle}><FaArrowAltCircleUp /></button>
                        <button onClick={handleLight}><FaLightbulb /></button>
                    </div>
                }

            </div>
        </Fragment>
    )
}

export default CategorySelector