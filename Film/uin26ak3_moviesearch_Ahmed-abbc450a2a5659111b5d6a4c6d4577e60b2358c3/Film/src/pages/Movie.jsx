import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getMovieById } from "../api/omdb"

export default function Movie() {
  const { imdbID } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true)
        setError("")

        const result = await getMovieById(imdbID)

        if (!result) {
          throw new Error("Fant ikke filmen.")
        }

        setMovie(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchMovie()
  }, [imdbID])

  if (loading) {
    return (
      <main>
        <p>Laster film...</p>
      </main>
    )
  }

  if (error) {
    return (
      <main>
        <p>{error}</p>
      </main>
    )
  }

  if (!movie) {
    return (
      <main>
        <p>Ingen film funnet.</p>
      </main>
    )
  }

  return (
    <main>
      <h1>{movie.Title}</h1>
      <p><strong>År:</strong> {movie.Year}</p>
      <p><strong>Sjanger:</strong> {movie.Genre}</p>
      <p><strong>Regissør:</strong> {movie.Director}</p>
      <p><strong>Skuespillere:</strong> {movie.Actors}</p>
      <p><strong>Plot:</strong> {movie.Plot}</p>
      <img src={movie.Poster} alt={movie.Title} />
    </main>
  )
}