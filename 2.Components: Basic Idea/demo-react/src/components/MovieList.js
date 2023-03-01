import Movie from "./Movie.js"

import { createElement } from 'react'

const MovieList = ({
    movies,
    onMovieDelete,
    onMoviSelect
}) => {

    // let movieElements = [];
    // for (const movie of movies) {
    //     //movieElements.push(createElement(Movie, movie))
    //     movieElements.push(<li><Movie  {...movie} /></li>)
    // }

    //let movieElements = movies.map(movie => <li><Movie  {...movie} /></li>)


    return (
        <ul>
            {movies.map((movie, index) => (
                <li key={movie.id}>
                    <Movie  {...movie}
                        onMovieDelete={onMovieDelete}
                        onMoviSelect={onMoviSelect} />
                </li>
            ))}
        </ul>
    )

    //return movieElements;

    // return [
    //     <Movie {...movies[0]} />,
    //     <Movie {...movies[1]} />,
    //     <Movie {...movies[2]} />
    // ]


    //return null

    // return (
    //     <Movie {...firstMovie}
    //     // title={firstMovie.title}
    //     // year={firstMovie.year}
    //     // director={firstMovie.director}
    //     // plot={firstMovie.plot}
    //     // posterUrl={firstMovie.posterUrl}
    //     />
    // )
}
export default MovieList;