export default async function movieVideo(movie_id){
    let resones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=${process.env.apikey}&language=en-US`)
    let rdata = resones.json();
    return rdata;

}