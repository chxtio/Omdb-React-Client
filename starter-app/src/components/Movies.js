import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {

    // let result = [];

    // for (let movie in props.movies) {
    //     // console.log("for loop:");
    //     // console.log(props.movies[movie]);
    //     async function fetchMyAPI() {
    //         // const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
    //         // const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json`; // tt0206512
    //         const apiUrl = `https://www.omdbapi.com/?i=${props.movies[movie].imdbID}&apikey=84f9df6&r=json`;
    //         // console.log(apiUrl);

    //         let response = await fetch(apiUrl); // call API using fetch
    //         response = await response.json(); // transform into json
    //         // console.log(response.Runtime);
    //         // console.log(response);
    //         result.push(response);

    //     }
    //     fetchMyAPI();
    // }

    // console.log("printing result of length: " + result.length);
    // console.log(result);


    return (
        <div>
            {props.movies.map(movie => {
                console.log("debugging Movies.js");
                // const apiUrl = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=84f9df6&r=json`;
                // // console.log(apiUrl);
                // console.log(movie.imdbID);


            //     async function fetchMyAPI() {
            //     // const searchParam = encodeURIComponent(query); // URI encode search using escape chars (%)
            //     // const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${searchParam}&type=movie&r=json`; // tt0206512
            //     const apiUrl = `https://www.omdbapi.com/?i=${movie.imdbID}&apikey=84f9df6&r=json`;
            //     console.log(apiUrl);

            //     let response = await fetch(apiUrl); // call API using fetch
            //     response = await response.json(); // transform into json
            //     // console.log(response.Runtime);

            // }
            // fetchMyAPI();

                return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                            Type: {movie.Type}
                        </Card.Text>
                        <Card.Text>
                            Director: {movie.Director}
                        </Card.Text>
                        <Card.Text>
                            Release Date: {movie.Released}
                        </Card.Text>
                        <Card.Text>
                            Runtime: {movie.Runtime}
                        </Card.Text>
                        <Card.Text>
                            Genre: {movie.Genre}
                        </Card.Text>

                    </Card.Body>
                </Card>)  
            })}
        </div>
        
    )
}

export default Movies;