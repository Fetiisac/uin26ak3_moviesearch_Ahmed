export default function Search({ search, setSearch }) {
  return (
    <section>
      <label htmlFor="search">Search movie</label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search for a movie"
      />
    </section>
  )
}