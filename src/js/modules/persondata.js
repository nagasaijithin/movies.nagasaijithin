export default async function persondata(person_id){
    let respones = await  fetch(`${process.env.PROXY}https://api.themoviedb.org/3/person/${person_id}?api_key=${process.env.apikey}&language=en-US`)
    let rdata = respones.json();
    return rdata;
}