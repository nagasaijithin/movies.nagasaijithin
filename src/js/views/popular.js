const imgUrl = 'https://image.tmdb.org/t/p/w342/';
const moviesContainer = document.querySelector('.popular-movies__grid')
const mainloader = document.querySelector(".main-loader")

export function renderPopular(data){
    mainloader.style.display = "none";
    for(let i = 0; i < 5; i++){
        document.querySelector(`.popular-movies__grid .items-${i + 1}`).classList.add('movieid');
        document.querySelector(`.popular-movies__grid .items-${i + 1}`).setAttribute('data-movieid',`${data.results[i].id}`);
        document.querySelector(`.popular-movies__grid .items-${i + 1}`).innerHTML = `
        <img src="${imgUrl}${data.results[i].poster_path}" alt="">
        <h3>${data.results[i].title}</h3>
        `;
        
    }
}


export function renderPopularError(error){
    moviesContainer.innerHTML = `${error}`
}

export default imgUrl;
