import React, {useState, useEffect } from 'react';
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
        
        fetchMyAPI(); // See items w/ title and movie state
        setShowMovies(true);
        // setQuery("");
    }

    async function fetchMyAPI() {
        const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
        const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json&page=${page}`; // tt0206512
        console.log(apiUrl);
        let response = await fetch(apiUrl); // call API using fetch
        response = await response.json(); // transform into json

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
            
            <br/>
            <div className="api-info">
                Data provided for free by the <a href="http://www.omdbapi.com/">OMDb</a> API.
            </div>
            <br/>
            <form onSubmit={handleSubmit} >
                <label htmlFor="queryInput"></label>
                <input
                    id="queryInput"
                    placeholder="Enter movie title"
                    value={query}
                    type="text"
                    onChange={e => setQuery(e.target.value)}/>
                <button className="search">Search</button>
            </form>

            <div className="navigationBtns">
                {
                    (page !== 1 && numPages !== 0) &&
                    <button id="topLeftBtn" className="prevBtn" onClick= {() => setPage(page-1)}>  &lt; Prev</button> /* &lt; */
                }
                                {
                    (numPages !== 0) &&
                    <p>Showing <b>{totalResults} results</b> over {numPages} pages | Page: <b>{page}</b></p>
                }
                {
                    (page < numPages) &&
                    <button id="topRightBtn" className="nextBtn" onClick= {() => setPage(page+1)}> Next &gt; </button> /*<i class="material-icons">arrow_forward_ios</i> */
                }
            </div>


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
                    <button className="prevBtn" onClick= {() => setPage(page-1)}>  &lt; Prev</button> /* &lt; */
                }
                {
                    (page < numPages) &&
                    <button className="nextBtn" onClick= {() => setPage(page+1)}> Next &gt; </button> /*<i class="material-icons">arrow_forward_ios</i> */
                }
            </div>
        </div>
    )
}

export default MovieInfo;