const API_KEY = "8e9c1076"

export async function getMovies(search) {
  const response = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
  )

  const data = await response.json()
  return data.Search || []
}