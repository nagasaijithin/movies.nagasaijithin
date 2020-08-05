export default async function recommendedMovies(movie_id) {
  let respones = await fetch(
    `${process.env.PROXY}https://api.themoviedb.org/3/movie/${
      movie_id == undefined ? 429617 : movie_id
    }/recommendations?api_key=${process.env.apikey}&language=en-US&page=1`
  );
  let rdata = respones.json();
  return rdata;
}
