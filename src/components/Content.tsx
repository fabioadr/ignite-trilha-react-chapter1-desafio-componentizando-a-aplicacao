import { useEffect, useState } from 'react'

import { api } from '../services/api'

import { MovieCard } from './MovieCard'

export interface MovieProps {
  imdbID: string
  Title: string
  Poster: string
  Ratings: Array<{
    Source: string
    Value: string
  }>
  Runtime: string
}

interface ContentProps {
  genreId: number
  genreTitle: string
}

export function Content(props: ContentProps) {
  const [movies, setMovies] = useState<MovieProps[]>([])

  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${props.genreId}`)
      .then(response => {
        setMovies(response.data)
      })
  }, [props.genreId])

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {props.genreTitle}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
