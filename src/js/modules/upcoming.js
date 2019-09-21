  
export default async function upComingMovies(){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.apikey}&language=en-US&page=1`);
    let rdata = respones.json();
    return rdata;
}