const MovieCard = ({movie}) => {

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : `http://images.marinespecies.org/thumbs/141038_cirrhilabrus-wakanda---the-vibranium-fairy-wrasse.jpg?w=700`;

    console.log("Image URL:", posterUrl);
    return (
        <div className="card" style={{width: '18rem'}}>
            <img
                src={posterUrl}
                className="card-img-top"
                alt={movie.title}
                style={{ height: '400px', objectFit: 'cover' }}
            />
            <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className={"card-subtitle mb-2 text-muted"}>{movie.release_date}</p>
                <p className="card-text">{movie.overview}</p>
            </div>
        </div>
    )
}

export default MovieCard;