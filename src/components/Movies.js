import React, {useState, useEffect} from 'react';
import './Movies.css';
import { Card, Button, Modal } from 'react-bootstrap';

function Movies(props) {
    const [show, setShow] = useState(false);
    const [ID, setID] = useState(0);
    const [Title, setTitle] = useState("");
    const [poster, setPoster] = useState("");
    const [type, setType] = useState("");
    const [released, setReleased] = useState("");
    const [genre, setGenre] = useState("");
    const [runtime, setRuntime] = useState("");
    const [imdbRating, setRating] = useState(0);
    const [plot, setPlot] = useState("");
    const [director, setDirector] = useState("");

    const handleShow = (target) => {
        setID(target.id);
        console.log(target.id);

        setShow(true);
    }

    const handleClose = () => {setShow(false);}

    async function fetchMyAPI() {
        const apiUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${ID}&type=movie&r=json`;
        // console.log(apiUrl);
        let response = await fetch(apiUrl); // call API using fetch
        response = await response.json(); // transform into json
        console.log(response);

        setTitle(response.Title);
        console.log("Title: " + response.Title);
        console.log(Title);
        setPoster(response.Poster);
        // console.log(poster);
        setType(response.Type);
        setReleased(response.Released);
        setGenre(response.Genre);
        setRuntime(response.Runtime);
        setRating(response.imdbRating);
        setPlot(response.Plot);
        setDirector(response.Director);
    }

    useEffect(() => {
        if (show) {
            fetchMyAPI(); 
        }     
    }, [ID]);

    return (
        <div className = "moviesGrid">
            {props.movies.map(movie => {

                const id = movie.imdbID;

                return (
                    
                    <Card className="card"> 
                    <div className="movieContainer" onClick = {(e) => {
                        handleShow(e.currentTarget);
                        }} 
                        id={id} 
                    >

                        <Card.Img variant="top" src={movie.Poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : movie.Poster} className="movieImage" />
                        {/* </div> */}
                        <Card.Body className="cardBody">
                            <Card.Title><h2><b>{movie.Title}</b></h2></Card.Title>
                            <Card.Text style={{margin: 5}}><b>{movie.Year}</b></Card.Text>
                        </Card.Body>
                    </div>
                    </Card>

                )  
            })}

            <Modal show={show} centered>
                <Card className="modalMovieContainer" style={{ width: '50rem' }}>
                    <Card.Img variant="top" className="modalMovieImage" src={poster === 'N/A' ? 'https://placehold.it/198x264&text=Image+Not+Found' : poster}/> 
                    <Card.Body className="modalMovieBody" style={{width: '23rem'}}>
                        <Card.Title><h1><b>{Title}</b></h1></Card.Title>
                        <Card.Text className="movieType">
                            {type}
                        </Card.Text>
                        <Card.Text className="movieRelease">
                            Release Date: {released}
                        </Card.Text>
                        <Card.Text className="genreTags">
                            {genre && genre.split(', ').map(g => <span>{g}</span>)}
                        </Card.Text>
                        <Card.Text>
                            Runtime: {runtime}
                        </Card.Text>
                        <Card.Text>
                            <h4><b>Rating: {imdbRating} / 10 </b></h4>
                        </Card.Text>
                        <Card.Text>
                            {plot}
                        </Card.Text>
                        <Card.Text>
                            Director: {director}
                        </Card.Text>
                        <Button className="modalBtn" variant="primary" onClick = {handleClose}>Close</Button >
                    </Card.Body>
                </Card>
            </Modal>

            
        </div>
        
    )
}

export default Movies;