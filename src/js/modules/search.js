export default async function search(value,num){
    let respones = await fetch(`${process.env.PROXY}https://api.themoviedb.org/3/search/movie?api_key=${process.env.apikey}&language=en-US&page=${num}&query=${value}`);
    let rdata = respones.json();
    return rdata;
}