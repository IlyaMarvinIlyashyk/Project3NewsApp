const Article = ( {title, section, author, imgSrc, imgCaption, brief, link} ) => {

    let altText = imgCaption
    if (altText === "") {
        altText = "No caption provided."
    }
    
    return(
        <li>
                <img src={imgSrc} alt={altText} />
                <h2>{title}</h2>
                <span>{author}</span>
            {/* <div className="articleTextContainer"> */}
                {/* <span>{section}</span> */}
                <p>{brief}</p>
                <a href={link}>Read Here</a>
            {/* </div> */}
        </li>
    )
}

export default Article