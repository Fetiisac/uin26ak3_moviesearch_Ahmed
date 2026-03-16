import { useEffect, useState } from "react"
import { getMovies } from "../api/omdb"
import Search from "../components/Search"
import MovieList from "../components/MovieList"

export default function Home() {
  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState("")

useEffect(() => {
  async function fetchMovies() {
    let text = "james bond"

    if (search.length >= 3) {
      text = search
    }

    const results = await getMovies(text)
    setMovies(results)
  }

  fetchMovies()
}, [search])

  return (
    <main>
      <h1>Movie Search</h1>
      <Search search={search} setSearch={setSearch} />
      <MovieList movies={movies} />
    </main>
  )
}