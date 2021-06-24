import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {

    return (
        <div className = "moviesGrid">
            {props.movies.map(movie => {
                return (
                    
                    <Card style={{ width: '19.8rem' }}> 
                    {/* <Card style={{ width: '45rem' }}> */}
                    <div className="movieContainer">
                        {/* <div className="movieImage" > */}
                        <Card.Img variant="top" src={movie.Poster} className="movieImage" />
                        {/* </div> */}
                        <Card.Body className="movieBody">
                            <Card.Title><h2><b>{movie.Title}</b></h2></Card.Title>
                            <Card.Text><h2>{movie.Year}</h2></Card.Text>
                        </Card.Body>
                    </div>
                    </Card>
                   
                )  
            })}
        </div>
        
    )
}

export default Movies;