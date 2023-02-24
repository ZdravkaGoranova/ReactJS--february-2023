import Movie from "./Movie.js";

const MovieList = (props) => {

    return (

        <div >
            <h1>Movie List </h1>

            <Movie
                title={props.movies[0].title}
                year={props.movies[0].year}
                stars={props.movies[0].stars}
            />
            <Movie
                title={props.movies[1].title}
                year={props.movies[1].year}
                stars={props.movies[1].stars}
            />
            <Movie
                title={props.movies[2].title}
                year={props.movies[2].year}
                stars={props.movies[2].stars}

            />
        </div>
    );
}


export default MovieList;