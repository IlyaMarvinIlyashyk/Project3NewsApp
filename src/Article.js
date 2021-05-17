const Article = ( {title, section, author, imgSrc, imgCaption, brief, link} ) => {

    let altText = imgCaption
    if (altText === "") {
        altText = "No caption provided."
    }
    
    return(
        <li>
                {/* only show the img if imgSrc source exist and not empty  */}
                {/* {imgSrc ? <img src={imgSrc} alt={altText} /> : ""} */}
                {imgSrc && <img src={imgSrc} alt={altText} />} 
                <h2>{title}</h2>
                <span>{author}</span>
            {/* <div className="articleTextContainer"> */}
                {/* <span>{section}</span> */}
                <p>{brief}</p>
                <a href={link}>Read Full Story</a>
            {/* </div> */}
        </li>
    )
}

export default Article