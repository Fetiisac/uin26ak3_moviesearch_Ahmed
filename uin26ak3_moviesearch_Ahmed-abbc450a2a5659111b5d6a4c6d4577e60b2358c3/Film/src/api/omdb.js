const API_KEY = "8e9c1076"
const BASE_URL = "https://www.omdbapi.com/"

export async function getMovies(searchText) {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(searchText)}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Klarte ikke å hente filmer.")
    }

    const data = await response.json()

    if (data.Response === "True") {
      return data.Search || []
    } else {
      return []
    }

  } catch (error) {
    console.error("Feil ved henting av filmer:", error)
    return []
  }
}

export async function getMovieById(imdbID) {
  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}`
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error("Klarte ikke å hente filmdetaljer.")
    }

    const data = await response.json()

    if (data.Response === "False") {
      throw new Error(data.Error || "Fant ikke filmen.")
    }

    return data

  } catch (error) {
    console.error("Feil ved henting av film:", error)
    return null
  }
}