import React, {useState } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]); // captures array of objects returned from API fetch
    const [showMovies, setShowMovies] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json`; // Want json response
            console.log(apiUrl);
            let response = await fetch(apiUrl); // call API using fetch
            response = await response.json(); // transform into json
            console.log(response.Search);
            setMovies(response.Search);
        }
        fetchMyAPI();
        // See items w/ title and movie state
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            This is where movies will go
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput">Search Movie Name:</label>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    />
                <button className="search">Submit</button>
            </form>
                {showMovies ? <Movies movies={movies}></Movies> : <></>}
        </div>
    )
}

export default MovieInfo;