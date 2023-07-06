import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
const MOVIE_API= 'https://api.themoviedb.org/3/discover/movie?api_key=5d60236c5eac19fc42baeebf2282184b'

export default function Home(){
    const[movies,setMovies] = useState([]);

   useEffect(()=>{
    axios.get(MOVIE_API).then((resp)=>{
        setMovies(resp.data.results)
    })
   },[]);
    return(
        <div style={{padding:30, display:'flex', flexWrap:'wrap'}}>
            {movies.map(movie=> {
            return (
            <div>
                <Card style={{width:'25rem', padding:25,height:250,overflow:'hidden',margin:10}}>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.overview}</Card.Text>
                </Card>
            </div>
            )
            })}
        </div>
    );
}