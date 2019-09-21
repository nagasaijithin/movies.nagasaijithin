export default async function singleMovie(movie_id){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.apikey}&append_to_response=credits`)
    let rdata = respones.json();
    return rdata;
}