const Movie = (props) => {

    return (
        <article>
            <h3> {props.title}</h3>
            <p>Year:  {props.year}</p>

            <ul>Stars:
                
                <li>{props.stars[0]}</li>
                <li>{props.stars[1]}</li>
                <li>{props.stars[2]}</li>
            </ul>
        </article>)
};

export default Movie;
