import React, {useState, useEffect } from 'react';
import './MovieInfo.css';
import Movies from './Movies';

function MovieInfo() { 
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]); // captures array of objects returned from API fetch
    const [showMovies, setShowMovies] = useState(false);
    const [totalResults, setTotalResults] = useState(0);
    const [page, setPage] = useState(1);
    const [numPages, setNumPages] = useState(0);


    function handleSubmit(e) {
        e.preventDefault();

        setPage(1);        
        // console.log("Displaying page: ");
        // console.log(page);

        // See items w/ title and movie state
        fetchMyAPI();
        setShowMovies(true);
        // setQuery("");
    }

    async function fetchMyAPI() {
        const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
        const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${page}`; // tt0206512
        console.log(apiUrl);
        let response = await fetch(apiUrl); // call API using fetch
        response = await response.json(); // transform into json

        console.log("for loop: ");
        for (let i in response.Search) {
            // console.log(response.Search[i].imdbID);
            const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${response.Search[i].imdbID}&type=movie&r=json&page=${page}`;
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

        setTotalResults(response.totalResults);
        console.log('Total results: ' + response.totalResults);
        console.log('Total results (state): ' + totalResults);
        setNumPages(Math.ceil(response.totalResults / 10));
        // setTotalResults(response.totalResults, console.log('Total results: ' + totalResults));
    }

    useEffect(() => {
        if (query !== "") {
            fetchMyAPI();
        }
        
    }, [page]);

    return(
        <div className="movieinfo">
            {/* Find your favorite movies to watch */}
            <div>
            Data provided for free by the <a href="http://www.omdbapi.com/">OMDb</a> API.
            </div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput"></label>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    />
                <button className="search">Search</button>
            </form>
                {showMovies ? <Movies movies={movies}></Movies> : <></>}
            
            <div>
                {
                    (numPages !== 0) &&
                    <p>Showing <b>{totalResults} results</b> over {numPages} pages | Page: <b>{page}</b></p>
                }
            </div>
            <div className="navigationBtns">
                {
                    (page !== 1 && numPages !== 0) &&
                    <button className="prevBtn" onClick= {() => setPage(page-1)}>  &lt; Previous Page</button> /* &lt; */
                    // &&
                }
                {
                    (page < numPages) &&
                    <button className="nextBtn" onClick= {() => setPage(page+1)}> Next Page &gt; </button> /*<i class="material-icons">arrow_forward_ios</i> */
                }
            </div>
        </div>
    )
}

export default MovieInfo;