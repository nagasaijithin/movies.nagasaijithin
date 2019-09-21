export default async function handelbarnav(){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.apikey}&language=en-US`)
    let rdata = respones.json();
    return rdata;
}
