import React from 'react'
import { Movie } from './MoviesList'
interface MovieItem {
    data: Movie
}

const pStyle:any = {
  };

const MovieItem = (props: MovieItem) => {
    return (
        <div>
            <div>
                <img width="100%" src={props.data.Poster} />
                <div className='grid grid-cols-1 px-1'>
                    <h3 style={pStyle} className='pt-1 text-ellipsis overflow-hidden whitespace-nowrap'>{props.data.Title}</h3>
                </div>
            </div>
        </div>
    )
}

export default MovieItem