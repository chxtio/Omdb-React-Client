import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {
    // iterate thru items and create a card for each
    return (
        <div>
            {props.movies.map(movie => {
                return (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.Poster} />
                    <Card.Body>
                        <Card.Title>{movie.Title}</Card.Title>
                        <Card.Text>
                            {movie.Year}
                        </Card.Text>
                    </Card.Body>
                </Card>)  
            })}
        </div>
        
    )
}

export default Movies;