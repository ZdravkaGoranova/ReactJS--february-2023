import { useEffect } from 'react'
import styles from './Movie.module.css'; 

const Movie = ({
    id,
    title,
    year,
    director,
    plot,
    posterUrl,
    onMovieDelete,
    onMoviSelect,
    selected
}) => {

    useEffect(() => {
        console.log(`Movie ${title} is mounted`);

        return () => {
            console.log(`Movie ${title} is unmount`)
        }
    }, [title]);


    useEffect(() => {
        console.log(`Movie ${title} is updated`)
    }, [selected,title]);

//   

    return (
        <article className={styles["movie-article"]}> 

            <h3>{title}, {year}</h3>
            {selected && <h4>Selected</h4>}

            <main>
                <img src={posterUrl} alt={title}></img>
                <p>{plot}</p>
            </main>
            <footer>
                <p>Director: {director}</p>
                <button onClick={() => onMovieDelete(id)}>Delete</button>
                <button onClick={() => onMoviSelect(id)}>Select</button>
            </footer>

        </article>
    )
}
export default Movie