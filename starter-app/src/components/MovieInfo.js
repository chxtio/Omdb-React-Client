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
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json`; // tt0206512
            console.log(apiUrl);
            let response = await fetch(apiUrl); // call API using fetch
            response = await response.json(); // transform into json

            console.log('initial search response: ');
            console.log(response);

            console.log("for loop: ");
            for (let i in response.Search) {
                // console.log(movie.Title);
                console.log(response.Search[i].Title);
                const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${response.Search[i].Title}&type=movie&r=json`;
                // console.log(apiUrl2);

                let response2 = await fetch(apiUrl2); // call API using fetch
                response2 = await response2.json(); // transform into json
                console.log(response2);

                // Update the array with additional details for each movie
                response.Search[i] = response2;
            }

            console.log('Updated search response: ');
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