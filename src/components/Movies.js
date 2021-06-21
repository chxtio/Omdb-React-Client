import React from 'react';
import './Movies.css';
import { Card } from 'react-bootstrap';

function Movies(props) {

    return (
        <div>
            {props.movies.map(movie => {
                return (
                    
                    <Card style={{ width: '45rem' }}>
                    <div className="movieContainer">
                        <div className="movieImage" >
                        <Card.Img variant="top" src={movie.Poster} />
                        </div>
                        <div className="movieBody" style={{ width: '23rem' }}>
                        <Card.Body >
                            <Card.Title><h1><b>{movie.Title}</b></h1></Card.Title>
                            <div className="movieRelease">
                            <Card.Text>
                                {/* <b>Release Date: {movie.Released}</b> */}
                                Release Date: {movie.Released}
                            </Card.Text>
                            </div>
                            <div className="genreTags">
                                <Card.Text>
                                    {movie.Genre && movie.Genre.split(', ').map(g => <span>{g}</span>)}
                                </Card.Text>
                            </div>
                            
                            <Card.Text>
                                Runtime: {movie.Runtime}
                            </Card.Text>
                            <Card.Text>
                                <h4><b>Rating: {movie.imdbRating} / 10 </b></h4>
                            </Card.Text>
                            <Card.Text>
                                {movie.Plot}
                            </Card.Text>
                            <Card.Text>
                                Director: {movie.Director}
                            </Card.Text>
                            
                        </Card.Body>
                        </div>
                    </div>
                    </Card>
                   
                )  
            })}
        </div>
        
    )
}

export default Movies;