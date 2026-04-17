import React, {useEffect, useState} from 'react';
import MovieCard from "../components/MovieCard.jsx";

const ResultsPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
            }
        };

        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(res => setMovies(res.results))
            .catch(err => console.error(err));
    }, [])

    return (
        <>
            <h2>Results Page</h2>
            <div className="container">
                <div className="row">
                    {movies.map(movie => (
                        <div className="col-sm-4" key={movie.id}>
                            <MovieCard movie={movie}/>
                            {/*key = {movie.id} is React internal, movie = movie passes the data*/}
                        </div>
                    ))}
                </div>
            </div>
            {/*when this loads, we want to see all now playing movies*/}
            {/*need http request for movies*/}
            {/*build cards for imported component*/}
        </>
    )
}

export default ResultsPage;