import { Link } from "react-router-dom"
import noImage from "../img/no-image.png"

export default function MovieCard({ movie }) {
  return (
    <article>
      <Link to={`/movie/${movie.imdbID}`}>
        <h2>{movie.Title}</h2>
      </Link>

      <p>{movie.Year}</p>

      <img
        src={movie.Poster && movie.Poster !== "N/A" ? movie.Poster : noImage}
        alt={movie.Title}
        onError={(event) => {
          event.currentTarget.onerror = null
          event.currentTarget.src = noImage
        }}
      />
    </article>
  )
}