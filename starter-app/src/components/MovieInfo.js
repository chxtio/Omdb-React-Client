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
        // let currPage = 2;
        // setPage(page+1);
        e.preventDefault();
        
        console.log("Displaying page: ");
        console.log(page);

        async function fetchMyAPI() {
            const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
            const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${page}`; // tt0206512
            console.log(apiUrl);
            let response = await fetch(apiUrl); // call API using fetch
            response = await response.json(); // transform into json

            // console.log('initial search response: ');
            

            console.log("for loop: ");
            for (let i in response.Search) {
                // console.log(movie.Title);
                // console.log(response.Search[i].Title);
                const apiUrl2 = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&t=${response.Search[i].Title}&type=movie&r=json&page=${page}`;
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
        fetchMyAPI();
        
        // useEffect(() => {
        //     if(query !== "") {
        //         fetchMyAPI();
        //     }
        // }, [page]);
        
        // See items w/ title and movie state
        setShowMovies(true);
        setQuery("");
    }

    return(
        <div className="movieinfo">
            Find your favorite movies to watch
            <form onSubmit={handleSubmit}>
                <label htmlFor="queryInput"></label>
                <input
                    id="queryInput"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}
                    />
                <button className="search">Submit</button>
            </form>
                {showMovies ? <Movies movies={movies}></Movies> : <></>}
            
            <div>
                <p>Showing <b>{totalResults} results</b> over {numPages} pages | Page: <b>{page}</b></p>
                {/* <p><b>Page:</b> {page}</p> */}
            </div>
            <div className="navigationBtns">
                {
                    (page !== 1) &&
                    <button className="prevBtn" onClick= {() => setPage(page-1)}> &lt; Previous Page</button> 
                    // &&
                }
                {
                    (page < numPages) &&
                    <button className="nextBtn" onClick= {() => setPage(page+1)}> Next Page &gt;</button>
                }
            </div>
        </div>
    )
}

export default MovieInfo;