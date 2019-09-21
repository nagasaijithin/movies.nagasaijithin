    
export default async function popularMovies(num){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${num}`);
    let rdata = respones.json();
    return rdata;
}
