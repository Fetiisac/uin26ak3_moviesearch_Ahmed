import { useEffect, useState } from "react"
import { getMovies } from "../api/omdb"
import Search from "../components/Search"
import MovieList from "../components/MovieList"

export default function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    async function fetchMovies() {
      try {
        setError("")

        let text = "james bond"
        if (search.length >= 3) {
          text = search
        }

        const results = await getMovies(text)
        setMovies(results)
      } catch (err) {
        setError("Noe gikk galt ved henting av filmer.")
        setMovies([])
      }
    }

    fetchMovies()
  }, [search])

  return (
    <main>
      <h1>Movie Search</h1>
      <Search search={search} setSearch={setSearch} />
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </main>
  )
}