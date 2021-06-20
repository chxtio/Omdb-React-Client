import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {
    
    return (
        <div>
            {props.movies.map(movie => {
                console.log("debugging Movies.js");

                return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                            Release Date: {movie.Released}
                        </Card.Text>
                        <Card.Text>
                            Runtime: {movie.Runtime}
                        </Card.Text>
                        <Card.Text>
                            Rating: {movie.imdbRating} / 10
                        </Card.Text>
                        <Card.Text>
                            Plot: {movie.Plot}
                        </Card.Text>
                        <Card.Text>
                            Director: {movie.Director}
                        </Card.Text>
                        <Card.Text>
                            Genre: {movie.Genre}
                        </Card.Text>
                        <Card.Text>
                            Type: {movie.Type}
                        </Card.Text>

                    </Card.Body>
                </Card>)  
            })}
        </div>
        
    )
}

export default Movies;