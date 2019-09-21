   
export default async function genermovies(gener,num){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/discover/movie?api_key=${process.env.apikey}&language=en-US&page=${num}&with_genres=${gener}`);
    let rdata = respones.json();
    return rdata;
}
